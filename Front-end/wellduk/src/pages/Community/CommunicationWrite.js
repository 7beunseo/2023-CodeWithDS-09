import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { flexCenter } from '../../styles/common'

function CommunicationWrite() {
	const navigate = useNavigate()
	return (
		<>
			<Box>
				<TitleInput
					type="text"
					placeholder="제목을 입력하세요"
					maxLength={'15'}
				></TitleInput>
				<ArticleBox
					type="text"
					placeholder="내용을 입력하세요"
				></ArticleBox>
				<AreaBox>
					<AreaInput
						type="text"
						placeholder="위치를 입력하세요"
						maxLength={'15'}
					></AreaInput>
					<AreaSearchBtn>검색</AreaSearchBtn>
				</AreaBox>
				<OpenChatBox>
					<OpenChatInput
						type="text"
						placeholder="오픈채팅 주소를 입력하세요"
					></OpenChatInput>
					<WriteBtn>
						<BsFillSendFill color="white" size={'20'} />
					</WriteBtn>
				</OpenChatBox>
			</Box>
		</>
	)
}

const Box = styled.div`
	margin: 30px 18px 150px 18px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const TitleInput = styled.input`
	width: 330px;
	height: 50px;
	background-color: ${({ theme }) => theme.COLOR.sub[300]};
	border-radius: 15px;
	display: flex;
	justify-content: center;
	align-items: center;

	box-shadow: 5px 5px 5px 5px ${({ theme }) => theme.COLOR.common.gray[100]};
	font-size: large;
	border: none;
	padding: 0px 15px;
	font-size: medium;
`
const ArticleBox = styled.textarea`
	width: 330px;
	height: 310px;
	background-color: white;
	border-radius: 15px;
	box-shadow: 5px 5px 5px 5px ${({ theme }) => theme.COLOR.common.gray[100]};
	padding: 7px 0px;
	display: flex;
	flex-direction: column;
	align-items: center;
	border: none;
	padding: 15px 15px;
	font-size: medium;
	margin: 20px 0px;
`

const AreaBox = styled.div`
	display: flex;
	margin-bottom: 20px;
`

const AreaInput = styled.input`
	width: 235px;
	height: 50px;
	background-color: ${({ theme }) => theme.COLOR.sub[300]};
	border-radius: 15px;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 5px 5px 5px 5px ${({ theme }) => theme.COLOR.common.gray[100]};
	font-size: large;
	border: none;
	padding: 0px 15px;
	font-size: medium;
`

const AreaSearchBtn = styled.button`
	${flexCenter};
	width: 85px;
	height: 50px;
	font-size: medium;
	background-color: ${({ theme }) => theme.COLOR.main};
	margin-left: 10px;
	border-radius: 15px;
	box-shadow: 5px 5px 5px 5px ${({ theme }) => theme.COLOR.common.gray[100]};
`

const OpenChatBox = styled.div`
	display: flex;
`

const OpenChatInput = styled.input`
	width: 235px;
	height: 30px;
	background-color: ${({ theme }) => theme.COLOR.common.gray[100]};
	border-radius: 15px;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 5px 5px 5px 5px ${({ theme }) => theme.COLOR.common.gray[100]};
	font-size: large;
	border: none;
	padding: 0px 15px;
	font-size: small;
`

const WriteBtn = styled.button`
	${flexCenter};
	width: 85px;
	height: 35px;
	background-color: ${({ theme }) => theme.COLOR.sub[200]};
	margin-left: 10px;
	border-radius: 15px;
	box-shadow: 5px 5px 5px 5px ${({ theme }) => theme.COLOR.common.gray[100]};
`

export default CommunicationWrite
