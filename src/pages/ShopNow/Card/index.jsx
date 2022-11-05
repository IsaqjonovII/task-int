import React from 'react';
import { Link } from "react-router-dom";
import TagBtn from '../../../components/TagButton';
import c from "./Style.module.css";

const ProductCard = ({ id, image, title, price, dividedpayment, label }) => {
    const pay_in_installment = Math.round(price / dividedpayment);
    return (
        <div className={c.card__container}>
            <Link to={"/shopnow/" + id}>
                <div className={c.image__container}>
                    <div className={c.labels__container}>
                        {
                            label?.map((label, index) => (
                                <div className={c.label} key={index}>{label}</div>
                            ))
                        }
                    </div>
                    <img src={image} alt="" />
                </div>
                <p className={c.product__title}>{title}</p>
                <h3>${price}</h3>
                <div className={c.btn__container}>
                    <TagBtn>${dividedpayment}</TagBtn>
                    <span className={c.price__divided}>x{pay_in_installment}</span>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard
