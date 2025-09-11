

const ProductsNo = ({id, images, title, price }) => {
    return (
        <>
          <div className="col-md-3 mb-4" key={id}>
            <div className="card h-100 shadow-sm">
              <img
                src={images}
                className="card-img-top p-3"
                alt={title}
                style={{ height: "200px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                {/* <p className="card-text text-muted">{val.description}</p> */}
                <p className="fw-bold">${price}</p>
                </div>
                <div className="card-footer">
                <button className="btn btn-primary w-100">Add to Cart</button>
                </div>
            </div>
          </div>

        </>
    );
}

export default ProductsNo;