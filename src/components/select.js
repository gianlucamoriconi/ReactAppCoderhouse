const Select = ({options = [], onSelect}) => {

    const handleSelect = (e) => {
        onSelect(e.target.value);
    }

    return(
        <select onChange={handleSelect}>
            {
                options.map((opt) => {
                    return <option key={opt.id} value={opt.id}>{opt.text}</option>
                })
            }
        </select>
    )
}

export default Select