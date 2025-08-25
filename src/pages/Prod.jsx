
import Prodno from "./Prodno";


let myProducts = [
    
    { id: 0, name: "washing", img: "./assets/washing.webp", price: "10,000" },
    { id: 0, name: "Sandal", img: "./assets/sandal.jpg", price: "300" },
    { id: 0, name: "watch", img: "./assets/watch.jpg", price: "700" },
    { id: 0, name: "T-shirt", img: "./assets/t-shirt.avif", price: "600" },
    { id: 0, name: "Nike shoes", img: "./assets/nike.avif", price: "10,000" },
    { id: 0, name: "Cycle", img: "./assets/cycle.jpg ", price: "8000" },
    { id: 0, name: "child dress", img: "./assets/clothing.jpg ", price: "2000" },
    { id: 0, name: "Kurti", img: "./assets/g1.webp ", price: "900" },
    
    ];

const Prod = () => {
    return (
        <>
            <div className="container-fluid text-center py-5 bg-warning" id="product-container">
                <div className="container-fluid d-flex flex-column mb-3 pt-2">
                    <hr/>
                    {/* <h1 className="text-start mb-0" style={{color:"black"}}>Products</h1> */}
                    {/* <div className="mt-1 product-underline" style={{width:"160px", height:"6px", backgroundColor:"#37353e"}}></div> */}
                </div>
                <div className="row g-4">
                    {
                        myProducts.map((value, index, array) => {
                            return (
                                <Prodno index={index} name={value.name} img={value.img} price={value.price} />
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Prod;