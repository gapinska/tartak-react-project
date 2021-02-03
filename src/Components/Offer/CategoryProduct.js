import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import Fade from 'react-reveal/Fade'

const useStyles = makeStyles({
	root: {
		minWidth: 275
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)'
	},
	title: {
		fontSize: 14
	},
	pos: {
		marginBottom: 12
	}
})

export default function SimpleCard(props) {
	const classes = useStyles()

	return (
		<Fade bottom cascade>
			<Card className={`card-item ${classes.root}`}>
				<CardContent>
					<Typography variant="h5" component="h2" className="product-name">
						{props.name}
					</Typography>
					<Typography className={`product-feature ${classes.pos}`} color="textSecondary">
						{props.feature}
					</Typography>
				</CardContent>
			</Card>
		</Fade>
	)
}

// const CategoryProduct = (props) => {
// 	return (
// 		<div className="category-product">
// 			<div classNmae="product-name">{props.name}</div>
// 			<div className="product-feature">{props.feature}</div>
// 		</div>
// 	)
// }

// export default CategoryProduct
