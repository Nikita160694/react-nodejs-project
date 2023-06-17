import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [company, setCompany] = useState("");
    const [category, setCategory] = useState("");
    const [error, setError] = useState(false);

    const navigate=useNavigate();

    const AddProduct = async () => {
        console.log(!name);
        if (!name || !price || !company || !category) {
            setError(true);
            return false;
        }
        console.log(name, price, company, category);
        const userID = JSON.parse(localStorage.getItem('user')).id;
        let result = await fetch('http://localhost:5000/add-product', {
            method: 'post',
            body: JSON.stringify({ name, price, company, category }),
            headers: {
                'Content-Type': "application/json",
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))} `
            },

        });
        result = await result.json();
        console.log(result);
        navigate("/")
    }

    return (
        <div className="addProduct">
            <h1>Add Product</h1>
            <div className="addProduct-from">
                <input type="text" placeholder="Enter Product Name" className="inputBox"
                    value={name} onChange={(e) => { setName(e.target.value) }}/>

                {error && !name && <span className="invalid-input">Enter valid Name</span>}

                <input type="text" placeholder="Enter Product Price" className="inputBox"
                    value={price} onChange={(e) => { setPrice(e.target.value) }}/>

                {error && !price && <span className="invalid-input">Enter valid Price</span>}

                <input type="text" placeholder="Enter Product Company" className="inputBox"
                    value={company} onChange={(e) => { setCompany(e.target.value) }}/>

                {error && !company && <span className="invalid-input">Enter valid Company</span>}

                <input type="text" placeholder="Enter Product Category" className="inputBox"
                    value={category} onChange={(e) => { setCategory(e.target.value) }}/>
                    
                {error && !category && <span className="invalid-input">Enter valid Category</span>}

                <button className="appButton" type="button" onClick={AddProduct}>AddProduct</button>
            </div>
        </div>
    )
}
export default AddProduct;