import React from 'react';
import { SearchIcon } from '../../assets';
import c from "./Style.module.css";
import { PRODUCTS__DATA } from "../../mocks"
import ProductCard from './Card';

const ShopNow = () => {
  return (
    <div className={c.shopnow__page__container}>
      <p><span className={c.breadcrumb}>Products</span> / Shop now</p>

      <h1 className={c.checkout__title} >Checkout</h1>

      <div className={c.input__container}>
        <input type="text" className={c.input} placeholder='Search products' />
        <button className={c.input__search__btn}>
          <SearchIcon />
        </button>
      </div>
      <h3>All products({PRODUCTS__DATA.length})</h3>
      <div className={c.products__container}>
        {
          PRODUCTS__DATA?.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))
        }
      </div>
      <div className={c.pagination}>
        &#x2190; &#x2192;
      </div>
    </div>
  )
}

export default ShopNow