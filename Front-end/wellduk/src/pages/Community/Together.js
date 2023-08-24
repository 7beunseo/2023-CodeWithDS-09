import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { BsPerson } from 'react-icons/bs'

function PartyCard({ partyName }) {
	const navigate = useNavigate()
	return (
		<PartyBox>
			<PartyName>{partyName}</PartyName>
			<JoinBox>
				<BsPerson size="30" color="#FEA82F" />
				<span>1/5</span>
				<JoinButton onClick={() => alert('참여 완료')}>
					참여 신청
				</JoinButton>
			</JoinBox>
		</PartyBox>
	)
}

function Together() {
	return (
		<div>
			<Box>
				<PartyCard partyName="파티 이름 1" />
				<PartyCard partyName="파티 이름 2" />
				<PartyCard partyName="파티 이름 3" />
			</Box>
		</div>
	)
}
const Box = styled.div`
	margin: 30px 18px 150px 18px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const PartyBox = styled.div`
	width: 340px;
	height: 130px;
	background-color: white;
	border-radius: 15px;
	box-shadow: 5px 5px 5px 5px ${({ theme }) => theme.COLOR.common.gray[100]};
	padding: 7px 0px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-bottom: 25px;
`

const JoinBox = styled.div`
	display: flex;
	align-items: center;
	width: 340px;
	justify-content: flex-end;
`

const JoinButton = styled.button`
	width: 100px;
	height: 45px;
	border-radius: 20px;
	margin: 4px 10px;
	background-color: ${({ theme }) => theme.COLOR.main};
`

const PartyName = styled.h2`
	margin: 10px 20px;
`

export default Together
