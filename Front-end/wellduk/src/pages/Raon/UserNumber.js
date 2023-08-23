import { styled } from 'styled-components'
import { BsPeople } from 'react-icons/bs'
import { flexAlignCenter, flexCenter, marginAuto } from '../../styles/common'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import StopWatch from './Components/StopWatch'
// import { useRecoilState } from 'recoil'
// import { checkInState } from '../../atoms/CheckInState'
import { useState } from 'react'

function UserNumber() {
	// const [checkIn, setCheckIn] = useRecoilState(checkInState)
	const [checkIn, setCheckIn] = useState('체크인')
	const [exerciseRecordVisible, setExerciseRecordVisible] = useState(false)

	const handleCheckIn = () => {
		if (checkIn === '체크인') {
			setCheckIn('체크아웃')
		} else {
			setExerciseRecordVisible(true)
		}
	}

	const handleReset = () => {
		setExerciseRecordVisible(false)
		setCheckIn('체크인')
	}

	return (
		<S.Wrapper>
			{!exerciseRecordVisible ? (
				<>
					<S.User>
						<BsPeople size={90} color="#FCECDD" />
						<S.Content>14/200</S.Content>
					</S.User>

					<S.CheckIn onClick={handleCheckIn}>
						{checkIn}
						{checkIn === '체크아웃' && <StopWatch />}
					</S.CheckIn>
				</>
			) : (
				<>
					<S.TodayTitle>운동 기록</S.TodayTitle>
					<S.TodayContent>
						<S.Exercise>
							<S.TimeText>시작</S.TimeText>
							<S.Time>16:00</S.Time>
						</S.Exercise>
						<S.Exercise>
							<S.TimeText>종료</S.TimeText>
							<S.Time>17:45</S.Time>
						</S.Exercise>
						<S.Record>1h 45m</S.Record>
					</S.TodayContent>
					<S.ResetButton onClick={handleReset}>reset</S.ResetButton>
				</>
			)}
		</S.Wrapper>
	)
}
export default UserNumber

const Wrapper = styled.div`
	width: 80%;
	${marginAuto}
	${flexAlignCenter}
	flex-direction: column;
`

const User = styled.div`
	background-color: ${({ theme }) => theme.COLOR.main};
	width: 100%;
	margin: 50px auto;
	height: 200px;
	border-radius: 10px;
	${flexCenter}
	flex-direction: column;
`

const Content = styled.div`
	margin: 10px 0;
`

const CheckIn = styled.button`
	background-color: ${({ theme }) => theme.COLOR.sub[200]};
	width: 100%;
	height: 200px;
	border-radius: 10px;
	${flexCenter}
	flex-direction: column;
`

const TodayTitle = styled.div`
	background-color: ${({ theme }) => theme.COLOR.main};
	width: 100%;
	margin: 50px auto;
	height: 60px;
	border-radius: 30px;
	${flexCenter}
	flex-direction: column;
`
const TodayContent = styled.div`
	width: 80%;
	${marginAuto}
`
const Time = styled.div`
	background-color: ${({ theme }) => theme.COLOR.sub[300]};
	width: 60%;
	margin: 20px 0;
	height: 70px;
	border-radius: 10px;
	${flexCenter}
	flex-direction: column;
`
const TimeText = styled.div`
	background-color: ${({ theme }) => theme.COLOR.sub[100]};
	width: 35%;
	margin: 20px 0;
	height: 70px;
	border-radius: 10px;
	${flexCenter}
	flex-direction: column;
`
const Record = styled.div`
	background-color: ${({ theme }) => theme.COLOR.sub[200]};
	width: 100%;
	margin: 50px auto;
	height: 100px;
	border-radius: 10px;
	${flexCenter}
	flex-direction: column;
`

const Exercise = styled.div`
	display: flex;
	justify-content: space-between;
`

const StyledInput = styled(Input)`
	height: 130px;
	border: 1px solid ${({ theme }) => theme.COLOR.sub[200]};
`

const StyledButton = styled(Button)`
	background-color: ${({ theme }) => theme.COLOR.sub[200]};
`

const ResetButton = styled(Button)`
	background-color: ${({ theme }) => theme.COLOR.sub[100]};
	width: 30%;
	${flexCenter}
	margin: 0
`

const S = {
	Wrapper,
	User,
	Content,
	CheckIn,
	Exercise,
	TodayTitle,
	TodayContent,
	StyledInput,
	StyledButton,
	Record,
	Time,
	TimeText,
	ResetButton,
}
