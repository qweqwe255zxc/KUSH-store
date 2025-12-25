import { useState, useEffect } from 'react';
import './catalog.css'
import NewDropHero from './components/NewDropHero.jsx';
import Categories from './components/Categories.jsx';
import JoinKushHero from './components/JoinKushHero.jsx';
// import { useProducts } from '../../hooks/useProducts';
import { useNavigate, useParams } from 'react-router-dom';

import { toSlug } from '../../utils/toSlug.js';
import Promo from '../../components/layout/Promo.jsx';
import { useCategories } from '../../features/categories/useCategories.jsx';
import ProductGrid from '../../features/product/compontents/ProductGrid.jsx';


const Catalog = () => {
    const [selectedCategory, setSelectedCategory] = useState({ id: 1, value: 'All' });
    const { categories } = useCategories();

    const category = useParams().category;
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        const slug =
            category.value === 'All'
                ? ''
                : toSlug(category.value);
        navigate(`/catalog/${slug}`);
        setSelectedCategory(category);
    }

    useEffect(() => {
        const updateSelectedCategory = () => {
            if (!category) {
                setSelectedCategory(categories[0]);
            } else {
                const foundCategory = categories.find(cat => toSlug(cat.value) === category.toLowerCase());
                setSelectedCategory(foundCategory);
            }
        };

        const timeoutId = setTimeout(updateSelectedCategory, 0);

        return () => clearTimeout(timeoutId);
    }, [categories, category]);

    return (
        <>
            <Promo />
            <NewDropHero  />
            <Categories selectedCategory={selectedCategory} setSelectedCategory={handleCategoryClick} />
            <ProductGrid key={selectedCategory} selectedCategory={selectedCategory} />
            <JoinKushHero />
        </>
    );
};

export default Catalog;