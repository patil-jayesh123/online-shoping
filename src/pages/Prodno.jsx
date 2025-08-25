

const Prodsno = ({ index, name, desc, img, price }) => {
    return (
        <>
            <div className="col-12 col-lg-3 col-md-6 col-sm-6">
                <div className="card product-card pt-4">
                    <img src={img} className="mx-auto card-img-top" alt="..." style={{ width: "300px", height: "250px", objectFit: "contain" }}/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{desc}</p>
                        <p className="card-text">₹{price}</p>
                        <button className="btn btn-outline-success">Add To Card</button>
                        <button className="btn btn-outline-primary mx-4">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Prodsno