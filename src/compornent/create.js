import React, { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Formik } from 'formik';


export default function Create() {

    const [form, setForm] = useState({});
    const [product, setProDuct] = useState([]);
    const [value, setValue] = useState([]);



    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name] : e.target.value
        })   
    }
    function handleSubmit() {
        axios.post(`http://localhost:3001/products`,value)
        .then(res => {
            console.log(res)
            setProDuct(res.data);
        })
        .catch(err => {
            throw err;
        });
        alert("Create successfully!!!");
      }

    return(
        <>

  
    <form>
    <div>
      <label>Id</label>
      <input name="id" onChange={handleChange} />
    </div>
    <div>
      <label>Name</label>
      <input name="name"  onChange={handleChange} />
    </div>
    <div>
      <label>Price</label>
      <input
        type="number"
        name="price"
        onChange={handleChange}
      />
    </div>

    <div>
    <label>Stock</label>
    <input
      type="number"
      name="stock"
      onChange={handleChange}
    />
  </div>

  <div>
  <label>Description</label>
  <input
    name="description"
    onChange={handleChange}
  />
</div>
    <button type="button" onClick={handleSubmit}>
      Submit
    </button>
  </form>


        
        </>
    )
}