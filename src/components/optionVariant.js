import { useState } from "react";

const OptionVariant = ({valueId, valueText}) => {

    const [selected, setSelected] = useState(false);


    const handleSelected = () => {
        if (selected === true){
            setSelected(false);
        } else{
            setSelected(true);
        }
    }


    return (
        <>
        <option onClick={handleSelected} className={selected ? "variant-option p-2 me-3 mb-3 selected" : "variant-option p-2 me-3 mb-3" } href={"#"+valueId} key={valueId}>{valueText}</option>
        </>
    )

}

export default OptionVariant;