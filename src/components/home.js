import ItemListContainer from './itemListContainer';
import BannerImage from './bannerImage';

const Home = () => {
    return (
        <>
        <BannerImage/>
        <ItemListContainer greeting="La tienda de Alf!"/>
        </>        
    )
}

export default Home;