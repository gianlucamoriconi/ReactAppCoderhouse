import Select from "./Select";

const Variants = ({property1, value1, property2, value2, setOption1, setOption2}) => {


    //Si el producto tiene solo 1 propiedad
    if ((property1 !== null) && (property2 === null) ){
        return (
            <>
            <div className="variants mb-5">
                <div id="values-1" className="options-propery-1 mb-3">
                    <h3 className="property-title mb-4 fs-6">{property1}</h3>
                    <div className="d-flex flex-wrap">
                        <Select property="propiedad-1" options={value1} onSelect={setOption1}/>
                    </div>
                </div>
            </div>
            </>
        )
    }

    //Si el producto tiene 2 propiedades
    if ((property1 !== null) && (property2 !== null) ){
        return (
            <>
            <div className="variants mb-5">
                <div id="values-1" className="options-propery-1 mb-5">
                    <h3 className="property-title mb-4 fs-6">{property1}</h3>
                    <div className="d-flex flex-wrap">
                        <Select property="propiedad-1" options={value1} onSelect={setOption1}/>
                    </div>
                </div>
                <div id="values-2" className="options-propery-1 mb-3">
                    <h3 className="property-title mb-4 fs-6">{property2}</h3>
                    <div className="d-flex flex-wrap">
                        <Select property="propiedad-2" options={value2} onSelect={setOption2}/>
                    </div>
                </div>
            </div>
            </>
        )
    }

}

export default Variants;