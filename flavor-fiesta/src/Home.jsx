import { useEffect, useState } from 'react';
import RecipeCardContainer from '../src/component/RecipeCard/RecipeCardContainer'
import CategoriesSection from '../src/component/Categories/CategoriesSection';
import ProductCardContainer from './component/ProductCardContainer/ProductCardContainer';
import bannerHome from '../src/component/Categories/bannerhome.jpg';
import './Home.css';
import API_BASE_URL from "./config";

const Home = () => {
  { const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch(`${API_BASE_URL}/productos/`)
        .then(response => response.json())
        .then(data => setProducts(data.data))
        .catch(error => console.error('Error fetching products:', error));
    }, []);

  return (
    <div className="home">
      <div>
      <img src={bannerHome} alt="BannerHome" className="banner-home" />
      <h2 className="categories-title">Categorías</h2>
      <CategoriesSection />
      </div>

      <div className='recipes'>
        <h2 className="categories-title">Mezcla y disfruta</h2>
        <RecipeCardContainer/>
      </div>

      <h2 className="section-title">Mas Vendidos</h2>
      <ProductCardContainer products={products} />
    </div>
  );}
};

export default Home;
