import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DetailsProduct from "@/components/product/details/DetailsProduct";

import GalleryProducts from "@/components/product/gallery/GalleryProducts";

const IndexProducts = () => {
  let { _id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${_id}`);
      setProduct(data);
    };
    fetchProduct();
  }, []);
  console.log("product: ", product, "id: ", _id);

  return (
    <main className="mx-auto grid grid-cols-1 items-center gap-8 md:container md:min-h-[calc(100vh-88px-3px)] md:grid-cols-2">
      <GalleryProducts
        ARRAY_IMGS={product.imagesMain}
        ARRAY_IMG_SMALL={product.imagesSmall}
      />
      <DetailsProduct objectProduct={product} />
    </main>
  );
};

export default IndexProducts;
