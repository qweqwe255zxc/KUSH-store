import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CategoriesContext = createContext(null);

export const CategoriesProvider = ({ children }) => {
    const [categories, setCategories] = useState([
        // { id: 1, value: 'All' },
        // { id: 2, value: 'New Drop' },
        // { id: 3, value: 'Tops' },
        // { id: 4, value: 'Bottoms' },
        // { id: 5, value: 'Shoes' },
    ]);

    const fetchCategories = async () => {
        try {
            const endpoint = 'http://localhost:3000/categories'
            const res = await fetch(endpoint)

            if (!res.ok) {
                throw new Error('failed to fetch categories')
            }
            const data = await res.json()
            console.log(data);
            setCategories(data)
        } catch (e) {
            console.error('error', e);
            setCategories([{ id: 0, value: "All" }]);
        }
    }
    useEffect(() => {
        fetchCategories()
    }, []);

    return (
        <CategoriesContext.Provider value={{ categories, setCategories }}>
            {children}
        </CategoriesContext.Provider>
    );
}
