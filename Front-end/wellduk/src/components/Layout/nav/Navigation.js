import styled from 'styled-components'
import { IoBarbell } from 'react-icons/io5'
import { BsFillPeopleFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

function Navigation() {
	const navigate = useNavigate()
	if (window.location.pathname === '/chatbot') return null
	if (window.location.pathname === '/main') return null
	return (
		<NavBox>
			<NavBar>
				<NavContainer onClick={() => navigate('/raon')}>
					<IoBarbell size="40" />
					<Text>라온센터</Text>
				</NavContainer>
				<NavChatbot onClick={() => navigate('/chatbot')}></NavChatbot>
				<NavContainer onClick={() => navigate('/community')}>
					<BsFillPeopleFill size="40" />
					<Text>커뮤니티</Text>
				</NavContainer>
			</NavBar>
			<NavBlock></NavBlock>
		</NavBox>
	)
}

const NavBox = styled.div`
	position: fixed;
	bottom: 0;
	width: 100%;
`

const NavBlock = styled.div`
	position: fixed;
	z-index: -1;
	bottom: 0;
	width: 100%;
	height: 100px;
	background-color: #fffaf2;
	border-top: 2px solid ${({ theme }) => theme.COLOR.sub[100]};
`

const NavChatbot = styled.div`
	width: 110px;
	height: 110px;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.COLOR.main};
`

const NavBar = styled.div`
	display: flex;
	justify-content: space-evenly;
	padding: 20px;
`

const NavContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: end;
	flex-direction: column;
`

const Text = styled.span``

export default Navigation
