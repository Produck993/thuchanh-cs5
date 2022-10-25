import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
export default function Update() {
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
    
  function handleChange(event) {
    setProduct({
      ...product,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit() {
    axios
      .put(`http://localhost:3001/products/${productID}`, product)
      .then(res => { alert(
          `${isCreate ? "Create" : "Edit"} Product ${JSON.stringify(
            res.data
          )} successfully!!!`
        ); 
      })
      .catch(err => {
        throw err;
      });
      
  }
  return(

    <>
 
    <h1>Update Product</h1>
    <form>
      <div>
        <label>Id</label>
        <input name="id" value={product.id || ""} onChange={handleChange} placeholder={product.id}/>
      </div>
      <div>
        <label>Name</label>
        <input name="name" value={product.name || ""} onChange={handleChange} placeholder={product.name}/>
      </div>
      <div>
      <label>Price</label>
      <input name="price" value={product.price || ""} onChange={handleChange} placeholder={product.price}/>
    </div>
    <div>
    <label>Stock</label>
    <input name="stock" value={product.stock || ""} onChange={handleChange} placeholder={product.stock}/>
  </div>
  <div>
  <label>Description</label>
  <input name="description" value={product.description || ""} onChange={handleChange} placeholder={product.description} />
</div>
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  
    </>
  )
}