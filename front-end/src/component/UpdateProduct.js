import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";

const UpdateProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [company, setCompany] = useState("");
    const [category, setCategory] = useState("");

    const navigate=useNavigate();

    const params = useParams();
    useEffect(() => {
        getProductsDetail();
        // console.log(params)
    }, [])

    const getProductsDetail = async () => {
        console.log(params)
        let result = await fetch(`http://localhost:5000/product/${params.id}`,{
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))} `
               } 
        })
        result = await result.json();
        //console.log(result)
        setName(result.name)
        setPrice(result.price)
        setCompany(result.company)
        setCategory(result.category)
    }

    const UpdateProduct = async () => {
        console.log(name, price, company, category);
        let result = await fetch(`http://localhost:5000/product/${params.id}`, {
            method: 'put',
            body: JSON.stringify({ name, price, company, category }),
            headers: {
                'Content-type': "application/json",
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))} `
            }
        });
        result = await result.json();
        console.log(result)
        navigate("/")
    }



    return (
        <div className="updateProduct">
            <h1>Update Product</h1>
            <div className="updateProduct-from">
                <input type="text" placeholder="Enter Product Name" className="inputBox"
                    value={name} onChange={(e) => { setName(e.target.value) }} />


                <input type="text" placeholder="Enter Product Price" className="inputBox"
                    value={price} onChange={(e) => { setPrice(e.target.value) }} />


                <input type="text" placeholder="Enter Product Company" className="inputBox"
                    value={company} onChange={(e) => { setCompany(e.target.value) }} />


                <input type="text" placeholder="Enter Product Category" className="inputBox"
                    value={category} onChange={(e) => { setCategory(e.target.value) }} />


                <button className="appButton" type="button" onClick={UpdateProduct}>UpdateProduct</button>
            </div>
        </div>
    )
}
export default UpdateProduct;