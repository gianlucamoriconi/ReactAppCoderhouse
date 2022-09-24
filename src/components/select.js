const Select = ({options = [], onSelect, property}) => {

    const handleSelect = (e) => {
        onSelect(e.target.value);
    }

    return(
        <select id={property} onChange={handleSelect}>
            <option key="sinDefinir" value="needSelect">Selecciona una opción</option>
            {
                options.map((opt) => {
                    return <option key={opt.id} value={opt.id}>{opt.text}</option>
                })
            }
        </select>
    )
}

export default Select