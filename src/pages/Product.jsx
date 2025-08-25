
import ProductsNo from "./ProductsNo";


let myProducts = [
    { id: 0, name: "iphone", img: "./src/assets/iphone.jpg", price: "1,30,000" },
    { id: 0, name: "facewash", img: "./src/assets/facewash.webp", price: "500" },
    { id: 0, name: "headphone", img: "./src/assets/headphone.webp", price: "1000" },
    { id: 0, name: "washing", img: "./src/assets/washing.webp", price: "10,000" },
    { id: 0, name: "Sandal", img: "./src/assets/sandal.jpg", price: "300" },
    { id: 0, name: "watch", img: "./src/assets/watch.jpg", price: "700" },
    { id: 0, name: "T-shirt", img: "./src/assets/t-shirt.avif", price: "600" },
    { id: 0, name: "Nike shoes", img: "./src/assets/nike.avif", price: "10,000" },
    { id: 0, name: "Moisturizer", img: "./src/assets/moisturizer.avif", price: "500" },
    { id: 0, name: "Cycle", img: "./src/assets/cycle.jpg ", price: "8000" },
    { id: 0, name: "child dress", img: "./src/assets/clothing.jpg ", price: "2000" },
    { id: 0, name: "Kurti", img: "./src/assets/g1.webp ", price: "900" },
    
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