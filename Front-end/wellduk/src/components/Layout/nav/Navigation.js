import styled from 'styled-components'
import { IoBarbell } from 'react-icons/io5'
import { BsFillPeopleFill } from 'react-icons/bs'

function Navigation() {
	return (
		<NavBox>
			<NavBar>
				<NavContainer>
					<IoBarbell size="40" />
					<Text>라온센터</Text>
				</NavContainer>
				<NavContainer>
					<BsFillPeopleFill size="40" />
					<Text>커뮤니티</Text>
				</NavContainer>
			</NavBar>
		</NavBox>
	)
}

const NavBox = styled.div`
	position: fixed;
	bottom: 0;
	width: 100%;
`

const NavBar = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 20px;
`

const NavContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
`

const Text = styled.span``

export default Navigation
