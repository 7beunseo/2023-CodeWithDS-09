import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

function Assignment() {
	const navigate = useNavigate()
	return (
		<>
			<Box>
				<WriteBtn onClick={() => navigate('/community/write')}>
					글 작성하기
				</WriteBtn>
				<ListBox>
					<Article>
						<span>글 내용</span>
					</Article>
				</ListBox>
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

const WriteBtn = styled.button`
	width: 280px;
	height: 60px;
	background-color: ${({ theme }) => theme.COLOR.main};
	border-radius: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 20px;
	box-shadow: 5px 5px 5px 5px ${({ theme }) => theme.COLOR.common.gray[100]};
	font-size: large;
`
const ListBox = styled.div`
	width: 330px;
	height: 430px;
	background-color: white;
	border-radius: 15px;
	box-shadow: 5px 5px 5px 5px ${({ theme }) => theme.COLOR.common.gray[100]};
	padding: 7px 0px;
	display: flex;
	flex-direction: column;
	align-items: center;
`

const Article = styled.div`
	width: 315px;
	height: 50px;
	background-color: ${({ theme }) => theme.COLOR.sub[300]};
	border-radius: 10px;
	display: flex;
	align-items: center;
	padding: 0 15px;
`

export default Assignment
