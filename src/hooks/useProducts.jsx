import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext.jsx";

export const useProducts = () => {
    const ctx = useContext(ProductsContext);
    if (!ctx) throw new Error("useProducts must be used within a ProductsProvider");
    return ctx;
};
