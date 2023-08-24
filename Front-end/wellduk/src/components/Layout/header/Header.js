import { BsPerson } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

function Header() {
	const navigate = useNavigate()

	return (
		<Container>
			<Logo onClick={() => navigate('/')}>Wellduk</Logo>
			<BsPerson size="40" onClick={() => navigate('/login')} />
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
