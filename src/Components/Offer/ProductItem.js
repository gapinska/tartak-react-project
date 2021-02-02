import React from 'react'
import Button from '@material-ui/core/Button'

const ProductItem = ({ className, category, onClick, name }) => {
	return (
		<div className={className} category={category} onClick={onClick}>
			<Button variant="contained" className="item-btn">
				{name}
			</Button>
		</div>
	)
}

export default ProductItem
