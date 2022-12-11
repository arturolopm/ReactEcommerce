import axios from "axios";
import { useEffect, useState } from "react";

import DetailsProductHome from "@/components/home/cartProductHome/DetailsProductHome";

import GalleryProductsHome from "@/components/home/productsHome/GalleryProductsHome";

import imgProduct1 from "@/assets/images/image-product-1.jpg";
import imgProduct2 from "@/assets/images/image-product-2.jpg";
import imgProduct3 from "@/assets/images/image-product-3.jpg";
import imgProduct4 from "@/assets/images/image-product-4.jpg";

import imgProductSmall1 from "@/assets/images/image-product-1-thumbnail.jpg";
import imgProductSmall2 from "@/assets/images/image-product-2-thumbnail.jpg";
import imgProductSmall3 from "@/assets/images/image-product-3-thumbnail.jpg";
import imgProductSmall4 from "@/assets/images/image-product-4-thumbnail.jpg";

const ARRAY_IMGS = [imgProduct1, imgProduct2, imgProduct3, imgProduct4];
const ARRAY_IMG_SMALL = [
  imgProductSmall1,
  imgProductSmall2,
  imgProductSmall3,
  imgProductSmall4,
];

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <section className=" mx-auto min-h-screen max-w-7xl bg-white px-4 md:text-base">
      {products.map((product) => (
        <div key={product._id}>
          <div className=" mx-auto mb-2 flex max-h-[25%] flex-row items-center gap-1 rounded-xl md:container ">
            <GalleryProductsHome
              _id={product._id}
              ARRAY_IMGS={product.imagesMain}
              ARRAY_IMG_SMALL={product.imagesSmall}
            />
            <DetailsProductHome objectProduct={product} />
          </div>
          <span className="container mx-auto mb-2 block h-[1px] w-full bg-gray-300"></span>
        </div>
      ))}
    </section>
  );
};

export default Home;
