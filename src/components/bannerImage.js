
const BannerImage = () => {
    const image = "https://www.apple.com/la/iphone/home/images/overview/hero/iphone_14_hero__ceub5xriecgi_large_2x.jpg";
    return (
        <>
        <div id="banner-image" className="w-100 d-flex justify-content-center mb-5">
            <img className="banner-image-img" src={image} alt="iphone-14-banner"/>
        </div>
        </>        
    )
}

export default BannerImage;