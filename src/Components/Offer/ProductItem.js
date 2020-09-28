import React from "react"

const ProductItem = (props) => {
  return (
    <div
      className="product-container"
      category={props.category}
      onClick={props.onClick}
    >
      <img
        src={process.env.PUBLIC_URL + "/products/" + props.productImg}
        alt=""
      />
      <header>{props.name}</header>
    </div>
  )
}

export default ProductItem
