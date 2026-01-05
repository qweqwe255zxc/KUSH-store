import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import ScrollToTop from "../../components/common/ScrollToTop.jsx";
import { useProducts } from "../../features/product/useProducts.jsx";
import ImageGalary from './components/ImageGalary';
import GalleryThumbnails from "./components/GalleryThumbnails.jsx";
import ProductInfo from "./components/ProductInfo.jsx";



const ProductPage = () => {


    const params = useParams()

    const { products } = useProducts()

    const curProduct = products.find(prod => prod.id === Number(params.id))

    // const [selectedSize, setSelectedSize] = useState(curProduct?.sizes?.[0] || '');
    // const [sizesIsOpen, setSizesIsOpen] = useState(false)
    // const [descriptionIsOpen, setDescriptionIsOpen] = useState(false)
    // const [guideIsOpen, setGuideIsOpen] = useState(false)
    // console.log(selectedSize);

    const isScrollingRef = useRef(false)
    const galaryRef = useRef(null)

    const currIndexRef = useRef(0)
    const [currentIndex, setCurrentIndex] = useState(0);
    const accumDeltaRef = useRef(0)

    useEffect(() => {
        currIndexRef.current = currentIndex
    }, [currentIndex]);

    return (
        <>
            <ScrollToTop />
            {
                curProduct ? (
                    <div className="grid grid-cols-8 max-h-screen">
                        <GalleryThumbnails refs={{ currIndexRef, galaryRef }} curProduct={curProduct} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
                        <ImageGalary
                            refs={{
                                galaryRef,
                                isScrollingRef,
                                accumDeltaRef,
                                currIndexRef
                            }}
                            setCurrentIndex={setCurrentIndex}
                            curProduct={curProduct}
                        />
                        <ProductInfo curProduct={curProduct} />
                    </div >
                ) : (
                    <p>Loading product...</p>
                )
            }
        </ >
    );
};

export default ProductPage;
