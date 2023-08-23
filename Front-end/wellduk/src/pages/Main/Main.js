import { BsFillChatLeftDotsFill, BsFillPeopleFill } from 'react-icons/bs'
import { IoBarbell } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

function Main() {
	const navigate = useNavigate()
	return (
		<>
			<Banner>banner</Banner>
			<MainContainer>
				<SubContainer onClick={() => navigate('/chatbot')}>
					<Chatbot>
						<BsFillChatLeftDotsFill size="70" color="white" />
						<Text>챗봇</Text>
					</Chatbot>
				</SubContainer>
				<SubContainer>
					<Laon onClick={() => navigate('/raon')}>
						<IoBarbell size="70" color="#FEA82F" />
						<Text>라온센터</Text>
					</Laon>
					<Community onClick={() => navigate('/community')}>
						<BsFillPeopleFill size="70" color="white" />
						<Text>커뮤니티</Text>
					</Community>
				</SubContainer>
			</MainContainer>
		</>
	)
}

const Banner = styled.div`
	background-color: gray;
	padding: 100px;
	display: flex;
	justify-content: center;
	margin-bottom: 40px;
`

const MainContainer = styled.div`
	margin: 20px;
	display: flex;
`

const SubContainer = styled.div`
	margin-right: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

const Chatbot = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.COLOR.main};
	width: 150px;
	height: 280px;
`

const Laon = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.COLOR.sub[300]};
	width: 180px;
	height: 130px;
`

const Community = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.COLOR.sub[100]};
	width: 180px;
	height: 130px;
`

const Text = styled.h1`
	font-size: large;
	font-weight: 400;
`

export default Main
