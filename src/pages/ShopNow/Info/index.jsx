import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { CartIcon } from '../../../assets';
import { PRODUCTS__DATA } from "../../../mocks";
import TagBtn from "../../../components/TagButton"
import c from "./Style.module.css";

const ProductInfo = () => {
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(0);

  useEffect(() => {
    const filteredProduct = PRODUCTS__DATA?.filter(p => p.id === +id);
    setProduct(filteredProduct)
  }, [id]);

  const calculatedPrice = ((product[0]?.price * 5) / 100) + product[0]?.price;
  const pay_in_installment = Math.round(calculatedPrice / product[0]?.dividedpayment);


  return (
    <div className={c.product__info__container}>
      {
        product?.map(({ id, image, title, price, label }) => (
          <div key={id}>
            <p >Products / Shop now / <span className={c.breadcrumb}>{title}</span></p>
            <h1 className={c.product__title}>{title}</h1>

            <div className={c.product__info}>
              <div className={c.image__container}>
                <div className={c.labels__container}>
                  {
                    label?.map((label, index) => (
                      <div className={c.label} key={index}>{label}</div>
                    ))
                  }
                </div>
                <img src={image} alt={title} />
              </div>

              <div className={c.product__details__container}>
                <div className={c.divider}>
                  <p>Price</p>
                  <h3>${price}</h3>
                </div>
                <div className={`${c.divider} ${c.flex}`}>
                  <div>
                    <p>Total price (with markup)</p>
                    <h3>${calculatedPrice}</h3>
                  </div>
                  <div className={c.flex}>
                    <TagBtn>${Math.ceil(calculatedPrice / pay_in_installment)}</TagBtn> <span>x{pay_in_installment}</span>
                  </div>
                </div>
                <div className={c.plan__container}>
                  {
                    ["3 months", "6 months", "12 months", "24 months"]?.map((btn, inx) => (
                      <button 
                      key={inx} onClick={() => setSelectedPlan(inx)} className={selectedPlan === inx ? c.btn__active : ""} >{btn}</button>
                    ))
                  }
                </div>
              </div>

            </div>

          </div>
        ))
      }
      <div className={c.cart__icon__container}>
        <CartIcon />
      </div>
    </div>
  )
}

export default ProductInfo