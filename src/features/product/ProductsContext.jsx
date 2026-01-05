import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ProductsContext = createContext(null);

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([
        // { id: 1, brand: 'Alexander Digenova', model: 'Leather Bomber', imgs: ['/product1.png', '/product3.png'], category: 3, newDrop: true, price: 182960, sizes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
        // { id: 2, brand: 'Mowalola', model: 'Belt', imgs: ['/product2.png'], category: 4, newDrop: true, price: 24438, sizes: [1, 2, 3] },
        // { id: 3, brand: 'Alexander Digenova', model: 'M65 Field Coat', imgs: ['/product3.png'], category: 3, newDrop: true, price: 115594, sizes: [1, 2, 3] },
        // { id: 4, brand: 'Mowalola', model: 'Belt', imgs: ['/product2.png'], category: 4, newDrop: false, price: 24438, sizes: [1, 2, 3] },
        // { id: 5, brand: 'Alexander Digenova', model: 'Leather Bomber', imgs: ['/product1.png'], category: 3, newDrop: false, price: 182960, sizes: [1, 2, 3] },
        // { id: 6, brand: 'Alexander Digenova', model: 'Lakota Raw Leather Jacket', imgs: ['/product4_1.png', '/product4_4.png', '/product4_5.png', '/product4_6.png', '/product4_2.png', '/product4_3.png', '/product4_7.png'], description: "Drum Dyed Washed Lambskin Leather. Featuring A Mock Neck And Removable Fleece Hood. All Hems Are Finished On The Raw Edges Of The Leather. Oversized Fit. M8 Zippers.", materials: 'Made In Los Angeles, 100% Leather, 100% Cupro', category: 3, newDrop: true, price: 200815, sizes: [1, 2, 3] },
        // { id: 7, brand: 'Alexander Digenova', model: 'M65 Field Coat', imgs: ['/product3.png'], category: 3, newDrop: false, price: 115594, sizes: [1, 2, 3] },
        // { id: 8, brand: 'Mowalola', model: 'Belt', imgs: ['/product2.png'], category: 4, newDrop: false, price: 24438, sizes: [1, 2, 3] },
    ]);

    const fetchProducts = async () => {
        try {
            const endpoint = 'http://localhost:3000/products'
            const res = await fetch(endpoint)

            if (!res.ok) {
                throw new Error('failed to fetch products')
            }
            const data = await res.json()
            console.log(data);
            setProducts(data)
        } catch (e) {
            console.error('error', e);
        }
    }
    useEffect(() => {
        fetchProducts()
    }, []);
    return (
        <ProductsContext.Provider value={{ products, setProducts }}>
            {children}
        </ProductsContext.Provider>
    );
};