import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

export default function Detail() {

    const { productID } = useParams();
    const isCreate = !productID;
    const [product, setProduct] = useState({});
    useEffect(() => {
        if (productID) {
          axios
            .get(`http://localhost:3001/products/${productID}`)
            .then(res => {
              setProduct(res.data);
            })
            .catch(err => {
              throw err;
            });
        }
      }, [productID]);
      return (
        <div>
        <h1>User details</h1>
        <form>
          <div>
            <label>Id</label>
            <h1 value={product.id || ""} >{product.id || ""} </h1>
          </div>
          <div>
            <label>Name</label>
            <h1 value={product.name || ""} >{product.name || ""} </h1>

          </div>
          <div>
            <label>Price</label>
            <h1 value={product.price || ""} >{product.price || ""} </h1>

          </div>
          <div>
          <label>Stock</label>
          <h1 value={product.stock || ""} >{product.stock || ""} </h1>
        
          </div>
          <div>
          <label>description</label>
            <h1 value={product.description || ""} >{product.description || ""} </h1>

          </div>
        </form>
        <Link to='/'>Back to List</Link>
      </div>
      )
}