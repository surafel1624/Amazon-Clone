import React, {useEffect, useState} from 'react'
import Layout from '../../components/Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { productUrl } from '../../API/endPoints';
import ProductCard from '../../components/Products/ProductCard';
import Loader from '../../components/Loader/Loader';

function ProductDetail() {
  const {productId} = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState({});
  useEffect(() => {
    setIsLoading(true);
    axios.get(`${productUrl}/products/${productId}`)
    .then((res)=>{
      setProduct(res.data);
      setIsLoading(false);
    }).catch((err)=>{
      console.log(log);
      setIsLoading(false);
    })
  }, [])
  
  return (
    <Layout>
      {isLoading? (<Loader/>): (
        <ProductCard product={product} />
      )}
    </Layout>
  )
}

export default ProductDetail