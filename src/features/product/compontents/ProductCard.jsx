import { Link } from "react-router-dom";
import { toSlug } from "../../../utils/toSlug";
import { formatPrice } from "../../../utils/formatPrice";

// import { useCategories } from "../hooks/useCategories";


const ProductCard = ({ product, ref, selectedCategory }) => {

    // const { categories } = useCategories();
    // console.log("categories:", categories);

    // const curCategory = categories.find(cat => cat.id === product.category)

    return (
        <Link to={`/catalog/${toSlug(selectedCategory.value)}/item/${product.id}/${toSlug(product.brand)}/${toSlug(product.model)}`} ref={(el) => {
            if (ref && ref.current && el && !ref.current.includes(el)) {
                ref.current.push(el)
            }
        }} className=' relative overflow-hidden w-full h-full pb-4.5 flex flex-col justify-center items-center aspect-48/50 last:border-r last:border-b first:border-l border-[#E4E4E4]'>
            <img src={product.imgs[0]} className='w-[75%] ' alt="" />
            <div className="absolute bottom-0 left-0 m-[clamp(0.125rem,0.4dvw,0.375rem)]">
                <p className='font-[270] text-gray-500 text-[clamp(.5rem,.8dvw,.75rem)] leading-none'>{product.brand}</p>
                <p className='font-[330] text-[clamp(.625rem,1dvw,.875rem)] leading-none'>{product.model}</p>
            </div>
            <span className='absolute bottom-0 right-0 font-[330] m-[clamp(0.125rem,0.4dvw,0.375rem)] text-[clamp(0.625rem,1vw,.875rem)] leading-none'><span className='currency font-[270]'>₽</span> {formatPrice(product.price)}</span>
        </Link>
    );
};

export default ProductCard;

