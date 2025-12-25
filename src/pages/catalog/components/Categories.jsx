import React, { useEffect, useRef, } from 'react';
import { arrObserver } from '../../../utils/utils.js';
import { useCategories } from '../../../hooks/useCategories.jsx';

const Categories = ({ selectedCategory, setSelectedCategory }) => {

    const { categories } = useCategories()
    const filtersContainerRef = useRef(null)
    const filtersRef = useRef([])

    useEffect(() => {
        arrObserver(filtersContainerRef.current, filtersRef.current, .2, 0, 75, true)
    }, []);

    return (
        <div id='filters' className='flex justify-between mx-7.5 my-[clamp(1.5rem,5dvw,5rem)] scroll-mt-[clamp(1.5rem,5dvw,5rem)]' ref={filtersContainerRef}>
            {categories.map((category, i) => {
                return (
                    <span key={i} ref={(el) => {
                        if (filtersRef && filtersRef.current && el && !filtersRef.current.includes(el)) {
                            filtersRef.current.push(el)
                        }
                    }} className={`filters__item  ${selectedCategory === category ? 'font-bold' : ''}`}
                        onClick={() => { setSelectedCategory(category) }} >{category.value}</span>
                )
            })}
            <span ref={(el) => {
                if (filtersRef && filtersRef.current && el && !filtersRef.current.includes(el)) {
                    filtersRef.current.push(el)
                }
            }} className='filters__item'>All Filters</span>
        </div>
    )
}

export default Categories;