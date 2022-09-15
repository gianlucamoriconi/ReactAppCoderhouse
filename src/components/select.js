const Select = ({options, onSelect}) => {

    const handleSelect = (e) => {
        console.log(e.target.value);
    }

    return(
        <select onChange={handleSelect}>
            {
                options.map((opt) => {
                    console.log(opt);
                    return <option key={opt.id} value={opt.id}>{opt.text}</option>
                })
            }
        </select>
    )
}

export default Select