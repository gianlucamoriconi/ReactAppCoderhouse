const ImagesInDetail = ({images, featuredImage}) => {

    if (images.length > 1){
        return (
            <>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {images.map((image, i) => {
                        return <div key={i} className={i === 0 ? "carousel-item active" : "carousel-item" }data-bs-interval="10000"><img className="w-100" src={image} alt={"product"}></img></div>
                    })}
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            </>
        )
    }

    else if (images.length <= 1){
        return (
            <>
             <div><img className="w-100" src={featuredImage} alt={"product"}></img></div>
            </>
        ) 
    }
}
export default ImagesInDetail;