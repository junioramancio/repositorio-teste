const Filter = ({filter, setFilter,setSorted}) => {
    return (
        <div className="filter">
            <h2>Filtrar</h2>
            <div className="filter-options">
                <div>
                    <p>Status</p>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value='All'>Todas</option>
                        <option value='Completed'>Completas</option>
                        <option value='Incompleted'>Incompletas</option>
                    </select>
                </div>
                <div>
                    <p>Ordem Alfabetica</p>
                    <button onClick={() => setSorted("Asc")}>Ascedente</button>
                    <button onClick={() => setSorted("Desc")}>Descedente</button>
                </div>
            </div>
        </div>
    )
}

export default Filter