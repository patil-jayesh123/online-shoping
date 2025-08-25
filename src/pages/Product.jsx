
import ProductsNo from "./ProductsNo";


let myProducts = [
    { id: 0, name: "iphone", img: "/public/iphone.jpg", price: "1,30,000" },
    { id: 0, name: "facewash", img: "/public/facewash.webp", price: "500" },
    { id: 0, name: "headphone", img: "/public/headphone.webp", price: "1000" },
    { id: 0, name: "washing", img: "/public/washing.webp", price: "10,000" },
    { id: 0, name: "Sandal", img: "/public/sandal.jpg", price: "300" },
    { id: 0, name: "watch", img: "/public/watch.jpg", price: "700" },
    { id: 0, name: "T-shirt", img: "/public/t-shirt.avif", price: "600" },
    { id: 0, name: "Nike shoes", img: "/public/nike.avif", price: "10,000" },
    { id: 0, name: "Moisturizer", img: "/public/moisturizer.avif", price: "500" },
    { id: 0, name: "Cycle", img: "/public/cycle.jpg ", price: "8000" },
    { id: 0, name: "child dress", img: "/public/clothing.jpg ", price: "2000" },
    { id: 0, name: "Kurti", img: "/public/g1.webp ", price: "900" },
    
    ];

const Product = () => {
    return (
        <>
            <div className="container-fluid text-center py-5 bg-warning" id="product-container">
                <div className="container-fluid d-flex flex-column mb-3 pt-2">
                    <h1 className="text-start mb-0" style={{color:"black"}}>Products</h1>
                    <div className="mt-1 product-underline" style={{width:"160px", height:"6px", backgroundColor:"#37353e"}}></div>
                </div>
                <div className="row g-4">
                    {
                        myProducts.map((value, index, array) => {
                            return (
                                <ProductsNo index={index} name={value.name} img={value.img} price={value.price} />
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Product;