import React, {useEffect, useState} from 'react'
import Layout from '../../components/Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { productUrl } from '../../API/endPoints';
import ProductCard from '../../components/Products/ProductCard';

function ProductDetail() {
  const {productId} = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios.get(`${productUrl}/products/${productId}`)
    .then((res)=>{
      setProduct(res.data);
    }).catch((err)=>{
      console.log(log);
    })
  }, [])
  
  return (
    <Layout>
      <ProductCard product={product} />
    </Layout>
  )
}

export default ProductDetail