import React from 'react'
import Button from '@material-ui/core/Button'

const ProductItem = (props) => {
	return (
		<div className="product-container" category={props.category} onClick={props.onClick}>
			<Button variant="contained" className="item-btn">
				{props.name}
			</Button>
		</div>
	)
}

export default ProductItem
