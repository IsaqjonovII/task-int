import React from 'react';
import c from "./Style.module.css";

const TagBtn = ({ children }) => {
    return (
        <div className={c.tag__btn}>
            from {children}
        </div>
    )
}

export default TagBtn
