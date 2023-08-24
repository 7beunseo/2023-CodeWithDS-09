import styled, { css } from 'styled-components'
import { IoBarbell } from 'react-icons/io5'
import { BsFillPeopleFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

function Navigation() {
	const navigate = useNavigate()
	const isRaonPage = window.location.pathname.includes('/raon')
	const isCommunityPage = window.location.pathname.includes('/community')

	if (window.location.pathname === '/chatbot') return null
	if (window.location.pathname === '/') return null

	return (
		<NavBox>
			<NavBar>
				<NavContainerRaon
					onClick={() => navigate('/raon')}
					isActive={isRaonPage}
				>
					<IoBarbell size="40" />
					<Text>라온센터</Text>
				</NavContainerRaon>

				<img
					src="/img/logo.png"
					onClick={() => navigate('/chatbot')}
					style={{ width: '110px', height: '110px' }}
				/>

				<NavContainerCommunity
					onClick={() => navigate('/community')}
					isActive={isCommunityPage}
				>
					<BsFillPeopleFill size="40" />
					<Text>커뮤니티</Text>
				</NavContainerCommunity>
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

const NavBar = styled.div`
	display: flex;
	justify-content: space-evenly;
	padding: 20px;
`

const NavContainer = css`
	display: flex;
	align-items: center;
	justify-content: end;
	flex-direction: column;
	color: black;
`

const NavContainerRaon = styled.div`
	${NavContainer};
	${({ isActive }) => isActive && `color: #FEA82F;`}
`

const NavContainerCommunity = styled.div`
	${NavContainer};
	${({ isActive }) => isActive && `color: #FEA82F;`}
`

const Text = styled.span``

export default Navigation
