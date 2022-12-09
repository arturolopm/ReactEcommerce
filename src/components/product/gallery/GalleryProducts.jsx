import SlideProduct from "@/components/product/gallery/SlideProduct";
import { useState } from "react";

const GalleryProducts = ({ ARRAY_IMGS, ARRAY_IMG_SMALL }) => {

    const [isOpenModal, setIsOpenModal] = useState(false)

    const handleOpenModal = () => {
        window.innerWidth > 767 && setIsOpenModal(true)
    }

    const handleCloseModal = () => {
        setIsOpenModal(false)
    }
    return (
        <>
            <SlideProduct 
                ARRAY_IMGS={ARRAY_IMGS}
                ARRAY_IMG_SMALL={ARRAY_IMG_SMALL}
                className="grid place-items-center mx-auto content-center md:grid-cols-4 md:gap-4 max-w-[500px]"
                handleOpenModal={handleOpenModal}
            />
            {isOpenModal && (
                <>
                <SlideProduct 
                    ARRAY_IMGS={ARRAY_IMGS}
                    ARRAY_IMG_SMALL={ARRAY_IMG_SMALL}
                    isOpenModal={isOpenModal}
                    className=" z-30 hidden md:grid md:absolute md:-translate-y-1/2 md:-translate-x-1/2 md:top-1/2 md:left-1/2  md:grid-cols-4 md:gap-4 max-w-[500px]"
                    handleCloseModal={handleCloseModal}
                />
                <span className=" z-10  fixed top-0 left-0 w-full h-full bg-black/60 backdrop-blur-sm" onClick={handleCloseModal}></span>
                </>
            )}
        </>
        
    )
}

export default GalleryProducts