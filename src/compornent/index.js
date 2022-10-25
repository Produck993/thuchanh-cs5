import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Index() {
    const [product, setProDuct] = useState([]);

    const componentDidmount = () => {
        axios
            .get('http://localhost:3001/products')
            .then(res => {
                setProDuct(res.data);
            })
            .catch(err => {
                throw err;
            });
    }
    useEffect(() => {
        componentDidmount()
    }, [])
  

    const handleDelete = (item) => {
        const itemDelete = item.id
        if(itemDelete) {
         axios.delete(`http://localhost:3001/products/${itemDelete}`)
         .then(res=> {alert(res.data.message); setProDuct(...product)}
         )
         .catch(err=> {throw err})
        }
    }


    return (
        <>

        <button> <Link to="/create"> Create</Link></button>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>

                            <td><Link to={`/detail/${item.id}`}>
                            {item.name}</Link></td>
                            <td>{item.price}</td>
                            <td>{item.stock}</td>
                            <td>{item.description}</td>
                            <td>
                                <button><Link to={`/update/${item.id}`}>Update</Link></button>
                                <button onClick={()=> handleDelete(item)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}