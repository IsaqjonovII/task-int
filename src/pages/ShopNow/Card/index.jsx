import React from 'react';
import TagBtn from '../../../components/TagButton';
import c from "./Style.module.css";

const ProductCard = ({ image, title, price, dividedpayment, label }) => {
    const pay_in_installment = price / dividedpayment;
    return (
        <div className={c.card__container}>
            <div className={c.image__container}>
                {
                    label?.map((label, index) => (
                        <div className={c.label} key={index}>{label}</div>
                    ))
                }
                <img src={image} alt="" />
            </div>
            <p>{title}</p>
            <h3>${price}</h3>
            <TagBtn>${dividedpayment}</TagBtn><span>x{pay_in_installment}</span>
        </div>
    )
}

export default ProductCard
