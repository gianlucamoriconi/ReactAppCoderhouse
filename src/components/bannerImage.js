
const BannerImage = () => {
    const image = "https://dolcefilipa.com/alfbannerwide.jpeg";
    return (
        <>
        <div id="banner-image" className="w-100 d-flex">
            <img className="banner-image-img w-100" src={image}/>
        </div>
        </>        
    )
}

export default BannerImage;