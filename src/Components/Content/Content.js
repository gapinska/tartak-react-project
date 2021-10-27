import React, { Component } from 'react'
import './Content.scss'
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom'
import Logo from '../../img/logo.png'
import Burger from '../../img/burger-4.png'
import MenuClose from '../../img/menu-close.png'
import Home from '../Home/Home'
import AboutUs from '../AboutUs/AboutUs'
import Offer from '../Offer/Offer'
import Warranty from "../Warranty/Warranty";
import Contact from '../Contact/Contact'
import ScrollToTop from '../ScrollToTop'

class Content extends Component {
	state = {
		toogleMenu: true
	}

	handleToogleMenu = () => {
		this.setState({
			toogleMenu: !this.state.toogleMenu
		})
	}

	render() {
		const menuStatus = this.state.toogleMenu,
			manuStatusClass = menuStatus ? 'nav' : 'nav  active'

		return (
			<div>
				<Router>
					<div className="main-content">
						<div className="menu-wrapper">
							<div className="menu">
								<nav className={manuStatusClass}>
									<div className="logo">
										<img src={Logo} alt="" />
									</div>
									<div className="text-logo">TARTAK LORKI</div>
									<div className="burger-nav-wrapper" onClick={this.handleToogleMenu}>
										<div className="burger-nav">
											<img className="menu-open" src={Burger} alt="" />
											<img className="menu-close" src={MenuClose} alt="" />
										</div>
									</div>
								</nav>
								<div className="navbar-contact">
									<span className="brand-name">TARTAK LORKI</span>
									<span className="contact">519 591 509</span>
								</div>
							</div>
						</div>
						<div className={menuStatus ? 'info-container-wrapper' : 'info-container-wrapper active'}>
							<ul className={menuStatus ? 'info-container' : 'info-container active'}>
								<li className="list-item">
									<NavLink to="/" exact>
										Home
									</NavLink>
								</li>
								<li className="list-item">
									<NavLink to="/o-nas">O nas</NavLink>
								</li>
								<li className="list-item">
									<NavLink to="/produkty">Produkty</NavLink>
								</li>
								<li className="list-item">
									<NavLink to="/gwarancja">Gwarancja</NavLink>
								</li>
								<li className="list-item">
									<NavLink to="/kontakt">Kontakt</NavLink>
								</li>
							</ul>
						</div>
						<div>
							<ScrollToTop>
								<Switch>
									<Route path="/" exact component={Home} />
									<Route path="/o-nas" component={AboutUs} />
									<Route path="/produkty" component={Offer} />
									<Route path="/gwarancja" component={Warranty} />
									<Route path="/kontakt" component={Contact} />
								</Switch>
							</ScrollToTop>
						</div>
					</div>
					<div className="footer">
						<div className="menu">
							<ul className="info-container-1">
								<li className="list-item">
									<NavLink to="/">Home</NavLink>
								</li>
								<li className="list-item">
									<NavLink to="/o-nas">O nas</NavLink>
								</li>
								<li className="list-item">
									<NavLink to="/produkty">Produkty</NavLink>
								</li>
								<li className="list-item">
									<NavLink to="/gwarancja">Gwarancja</NavLink>
								</li>
								<li className="list-item">
									<NavLink to="/kontakt">Kontakt</NavLink>
								</li>
							</ul>
						</div>
						<header className="brand-name">TARTAK LORKI</header>
					</div>
				</Router>
			</div>
		)
	}
}

export default Content
