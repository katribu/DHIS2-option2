export default function Header({onFilter}){

    function handleFilter(e){
        onFilter(e.target.value)
    }
    return (
        <header>
            <h1> DHSI2 Dashboard</h1>
            <div>
                <input 
                    type="text"
                    placeholder="Filter Items"
                    onInput={handleFilter}
                />
            </div>
        </header>

    )

}