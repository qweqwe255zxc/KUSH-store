import { useContext } from "react";
import { CategoriesContext } from "../context/CategoriesContext";


export const useCategories = () => {
    const ctx = useContext(CategoriesContext);
    if (!ctx) throw new Error("UseCategories must be used within CategoriesProvider");
    return ctx;
}