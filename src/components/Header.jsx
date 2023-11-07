export default function Header({onFilter}){

    function handleFilter(e){
        onFilter(e.target.value)
    }
    
    return (
        <header>
            <h1> DHSI2 Dashboard</h1>
            <div>
            <p> Choose Type: </p>
                <select
                onChange={handleFilter}
                placeholder="Choose Type">
                <option value="">All</option>
                <option value="visualization">Visualization</option>
                <option value="text">Text</option>
                <option value="map">Map</option>
                </select>
            </div>
        </header>

    )

}