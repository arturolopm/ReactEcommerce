import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import DetailsProductHome from "@/components/home/cartProductHome/DetailsProductHome";

import GalleryProductsHome from "@/components/home/productsHome/GalleryProductsHome";

const SearchView = () => {
  const keywordFromParams = useParams();
  const [keyword, setKeyword] = useState(keywordFromParams.keyword);

  useEffect(() => {
    setKeyword(keywordFromParams.keyword);
  }, []);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      console.log(keyword);
      const { data } = await axios.get(`/api/products?keyword=${keyword}`);

      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <section className=" mx-auto min-h-screen max-w-7xl bg-white px-4 md:text-base">
      <h1>Results based on: {keyword}</h1>
      {products.length == 0 && (
        <h1 className=" font-bold">
          Your request did not find any match please try again with another word
        </h1>
      )}
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

export default SearchView;
