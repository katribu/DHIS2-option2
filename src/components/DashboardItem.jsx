import { useState,useEffect } from "react"
import { getMainDashboardNames, getDashboardDetailsById } from "../utils/fetch"
import { FaStar, FaSortDown, FaGlobe, FaListAlt, FaChartBar } from "react-icons/fa";

export default function DashboardItem({filter}){


    const [mainDashboardInfo, setMainDashboardInfo] = useState([])
    const [dashboardsDetails, setDashboardsDetails] = useState([])
    const [favoriteCategories, setFavoriteCategories] = useState([]);
    const [expandedCategory, setExpandedCategory] = useState(null);
  

    async function mainDashboard(){
        const dashboardObject = await getMainDashboardNames()
        const mainDashboardArray = await dashboardObject.dashboards
        setMainDashboardInfo(mainDashboardArray)
    }

    async function dashboardDetails(){
        const dashboardIds = mainDashboardInfo?.map(item => item.id)
        const detailsArray = []
        for(let i=0; i<dashboardIds.length;i++){
            const details = await getDashboardDetailsById(dashboardIds[i])
            detailsArray.push({
                displayName: details.displayName,
                id: details.id,
                dashboardItems: details.dashboardItems
            })
        }
        setDashboardsDetails(detailsArray)
    }

    const handleClick = (categoryId) => {
        if(expandedCategory === categoryId){
            setExpandedCategory(null)
        }else {
            setExpandedCategory(categoryId)
        }
  
    }


  const handleFavoriteCategory = (categoryId) => {
    if (favoriteCategories.includes(categoryId)) {
      // If the category is already a favorite, remove it
      setFavoriteCategories(favoriteCategories.filter((id) => id !== categoryId));
    } else {
      // Add the category to the favorites
      setFavoriteCategories([...favoriteCategories, categoryId]);
    }

  };


    useEffect(() => {
        mainDashboard()
        dashboardDetails()
    })
    

const renderDashboardDetails = dashboardsDetails?.map(category => {
    const items = category.dashboardItems?.map((item,i) => {
        if (!filter || item.type.toLowerCase().includes(filter.toLowerCase())){

            if(item.type === "VISUALIZATION"){
             return (
                 <p key={i}><FaChartBar/> {item.visualization.name.split(": ")[1]}</p>
             )
            }else if(item.type === "TEXT"){
             return (
                 <p key={i}><FaListAlt/> {item.text}</p>
             )
            }else if(item.type === "MAP"){
             return (
                 <p key={i}><FaGlobe/> {item.map.name.split(": ")[1]}</p>
             )
            }
        }
    })

   
    return (
        <div key={category.id}>
            <div>
                <h3>{category.displayName}</h3>  
                <div onClick={() => handleFavoriteCategory(category.id)}>
                    <FaStar style={{color: favoriteCategories.includes(category.id)? "yellow" : ""}} /> 
                </div>
                <div onClick={() => handleClick(category.id)}><FaSortDown/> </div>
            </div>

            {expandedCategory === category.id &&
                <div>
                {items}
                </div>
            }
        </div>
    )
})

// ************* FINAL RETURN ******************** //
    return (
        <div>
         {renderDashboardDetails}
        </div>
    )
}