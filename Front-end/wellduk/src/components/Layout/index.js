import { Outlet } from 'react-router-dom'
import Header from './header/Header'
import Footer from './footer/Footer'
import Navigation from './nav/Navigation'

function Layout() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
			<Navigation />
		</>
	)
}

export default Layout
