import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CategoriesContext = createContext(null);

export const CategoriesProvider = ({ children }) => {
    const [categories, setCategories] = useState([
        { id: 1, value: 'All' },
        { id: 2, value: 'New Drop' },
        { id: 3, value: 'Tops' },
        { id: 4, value: 'Bottoms' },
        { id: 5, value: 'Shoes' },
    ]);

    return (
        <CategoriesContext.Provider value={{ categories, setCategories }}>
            {children}
        </CategoriesContext.Provider>
    );
}
