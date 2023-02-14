import React from 'react'
import "../assets/css/product.css"
export default function Product(props) {
  return (
    <>
        <div className="product">
            {
                props.data.map((data,index)=>
                {
                    return(
                        <div className='product__item' key={index}>
                            <h3 className='product__title'>{data.label}</h3>
                            <div className="product__desc">
                                <span className='product__img'>
                                    <img src={require(`../assets/img/img${index+1}.png`)} alt="" />
                                </span>
                                <p>{data.content}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}
