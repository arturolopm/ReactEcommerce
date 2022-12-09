import SlideProductsHome from "@/components/home/productsHome/SlideProductsHome";
import { Link } from "react-router-dom";
import { useState } from "react";

const GalleryProductsHome = ({ ARRAY_IMGS, ARRAY_IMG_SMALL, id }) => {
  return (
    <>
      <SlideProductsHome
        ARRAY_IMGS={ARRAY_IMGS}
        ARRAY_IMG_SMALL={ARRAY_IMG_SMALL}
        id={id}
        className="mx-auto flex max-h-[25%] min-w-[150px] max-w-[40%]  content-center md:gap-4"
      />
    </>
  );
};

export default GalleryProductsHome;
