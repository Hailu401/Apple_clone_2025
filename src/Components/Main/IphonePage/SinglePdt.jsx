import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SinglePdt() {
  const [product, setProduct] = useState([]);
  const { productId } = useParams();
  // console.log(productId);
  useEffect(() => {
    // fetch(`http://localhost:3005/get-products/${productId}`)
    fetch(`./data.json/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => console.error(err));
  }, []);
  console.log(product);
  return (
    <>
      <div className="container mt-5 pt-4">
        {product?.map((singleItem) => {
          return (
            <>
              <div className="text-center ">
                <h1 className="font-weight-bold">{singleItem.product_name}</h1>
                <h2>{singleItem.product_brief_description}</h2>
              </div>
              <div className="d-flex row my-5">
                <div className="col-6">
                  <p>{singleItem.product_description}</p>
                  <p>Starting Price: {singleItem.starting_price}</p>
                  <p>{singleItem.price_range}</p>
                </div>
                <div className="col-6">
                  <img src={singleItem.product_img} alt="image" />
                </div>
              </div>
            </>
          );
        })}

       
      </div>
    </>
  );
}

export default SinglePdt;
