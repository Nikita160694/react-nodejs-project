import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/products',{
           headers:{
            authorization:`bearer ${JSON.parse(localStorage.getItem('token'))} `
           } 
        });
        result = await result.json();
        setProducts(result);
    }
    // console.log("products",products);

    const deleteProduct = async (id) => {
        // console.log(id)
        let result = await fetch(`http://localhost:5000/product/${id}`, {
            method: "Delete",
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))} `
               } 
        })
        result = result.json();
        if (result) {
            // alert("record is delete")
            getProducts();
        }
    }

    const searchHendal = async (e) => {
        //console.log(e.target.value)
        let key = e.target.value;
        if (key) {
            let result = await fetch(`http://localhost:5000/search/${key}`,{
                headers:{
                    authorization:`bearer ${JSON.parse(localStorage.getItem('token'))} `
                   } 
            });
            result = await result.json();
            if (result) {
                setProducts(result)
            }
        } else {
            getProducts();
        }
    }

    return (
        <div className="productList-table">
            <h1>ProductList</h1>
            <input className="search-input" type="type" placeholder="search product"
                onChange={searchHendal}
            />
            <ul className="productList-ul ul-header">
                <li>S.No</li>
                <li>Name</li>
                <li>Price</li>
                <li>Company</li>
                <li>Category</li>
                <li>Opration</li>
            </ul>

            {
                products.length > 0 ? products.map((item, index) =>
                    <ul className="productList-ul " key={item._id}>
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>{item.price}</li>
                        <li>{item.company}</li>
                        <li>{item.category}</li>
                        <li><button className="actionBtn" onClick={() => deleteProduct(item._id)}>Delete</button>
                            <button className="actionBtn"><Link to={'/update/' + item._id}>Update</Link></button>

                        </li>
                    </ul>
                )
                    : <h1>No result Found</h1>
            }


        </div>
    )
}
export default ProductList;