const Search  = ({search,setSearch}) => {
    return (
        <div className="search">
             <input 
                   type = "text"
                   placeholder="Digite para peqsuisar"
                   onChange={(e) =>setSearch(e.target.value)}
                   value = {search}


                />
        </div>
    )

}


export default Search