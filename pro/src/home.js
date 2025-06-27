import Banner from './banner';
import Product from './product';
import Header from './header';
function Home({ heartIconCount , onHeartClick, onAddToCart, cartIconCount, handleHeartClick, addToCart}){
    return(
        <>
        <Header heartIconCount={heartIconCount} 
                    onHeartClick={handleHeartClick} 
                    cartIconCount={cartIconCount} 
                    onAddToCart={addToCart}/>
         <Banner />
      <Product onHeartClick={onHeartClick} onAddToCart={onAddToCart}/>
        </>
    );
}
export default Home;