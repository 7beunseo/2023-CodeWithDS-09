import { BsPerson } from 'react-icons/bs'
import styled from 'styled-components'

function Header() {
	return (
		<Container>
			<Logo>Wellduk</Logo>
			<BsPerson size="40" />
		</Container>
	)
}

const Logo = styled.span`
	font-size: x-large;
	font-weight: 900;
`

const Container = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	background-color: ${({ theme }) => theme.COLOR.background};
`

export default Header
