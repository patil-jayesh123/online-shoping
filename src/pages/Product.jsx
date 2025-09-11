
import { useEffect, useState } from "react";
import ProductsNo from "./ProductsNo";

const Product = () => {
  //2 statedefine
  const [state, setstate] = useState([]);

// let myProducts = [
//     { id: 0, name: "iphone", img: "./assets/iphone.jpg", price: "1,30,000" },
//     { id: 0, name: "facewash", img: "./assets/facewash.webp", price: "500" },
//     { id: 0, name: "headphone", img: "./assets/headphone.webp", price: "1000" },
//     { id: 0, name: "washing", img: "./assets/washing.webp", price: "10,000" },
//     { id: 0, name: "Sandal", img: "./assets/sandal.jpg", price: "300" },
//     { id: 0, name: "watch", img: "./assets/watch.jpg", price: "700" },
//     { id: 0, name: "T-shirt", img: "./assets/t-shirt.avif", price: "600" },
//     { id: 0, name: "Nike shoes", img: "./assets/nike.avif", price: "10,000" },
//     { id: 0, name: "Moisturizer", img: "./assets/moisturizer.avif", price: "500" },
//     { id: 0, name: "Cycle", img: "./assets/cycle.jpg ", price: "8000" },
//     { id: 0, name: "child dress", img: "./assets/clothing.jpg ", price: "2000" },
//     { id: 0, name: "Kurti", img: "./assets/g1.webp ", price: "900" },
    
//     ];

//useeffect use for API calling

useEffect(()=>{
    fetch("https://api.escuelajs.co/api/v1/products")
    .then((result)=>{
        result.json().then((res)=>{
            setstate(res);
        })
    }).catch((err)=>console.log(err));
},[])


    return (
        <>
            <div className="container-fluid text-center py-5 bg-warning" id="product-container">
                <div className="container-fluid d-flex flex-column mb-3 pt-2">
                    <h1 className="text-start mb-0" style={{color:"black"}}>Products</h1>
                    <div className="mt-1 product-underline" style={{width:"160px", height:"6px", backgroundColor:"#37353e"}}></div>
                </div>
                <div className="row g-4">
                    {
                        state.map((val) => {
                            return (
                                <ProductsNo id={val.id}  images={val.images} title={val.title} price={val.price} />
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Product