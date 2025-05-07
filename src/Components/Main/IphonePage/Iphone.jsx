import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Iphone.module.css";

function Iphone() {
  const [Iphone, setIphone] = useState([]);

  useEffect(() => {
    // fetch(`http://localhost:3005/get-products`)
     fetch(`/data.json`)
       .then((res) => res.json())
       .then((data) => {
         setIphone(data);
       })
       .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <section className={style.section}>
        <h1>Iphones</h1>
        <h2>The best for the Brightest</h2>
        <div className={style.container}>
          {Iphone?.map((SinglePdt, i) => {
            return (
              <div key={SinglePdt.ID} className={style.row}>
                <div
                  className={`${style.image_wrapper} order-${
                    i % 2 === 0 ? "1" : "2"
                  }`}
                >
                  <img src={SinglePdt.product_img} />{" "}
                </div>
              
                <div
                  className={`${style.rightSide} order-${
                    i % 2 === 0 ? "2" : "1"
                  }`}
                >
                  <div className={style.product_title}>
                    {SinglePdt.product_name}
                  </div>
                  <div className={style.description_wrapper}>
                    {SinglePdt.product_brief_description}
                  </div>
                  <div className={style.price_wrapper}>
                    <p>`Starting Price: {SinglePdt.starting_price}`</p>
                    <p>{SinglePdt.price_range}</p>
                  </div>
                  <div className={style.links_wrapper}>
                    <ul>
                      <li>
                        <Link to={`/iphone/${SinglePdt.ID}`}>Learn more</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Iphone;
