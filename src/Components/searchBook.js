

function SearchBook({ searchValue, onSearchValue }) {
    return(
        <main>
            <div style={{marginTop: "1em", marginLeft: "5%"}}>
                <input 
                    style={{width: "20em", borderRadius: "5em 5em", padding: "0.5em 1em"}} 
                    placeholder="Найти книгу..."
                    value={searchValue}
                    onChange={onSearchValue}
                />
            </div>
        </main>
    )
}

export default SearchBook