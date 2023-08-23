import styled from 'styled-components'

function Information() {
	return (
		<Container>
			<Title>라온 센터 이용 정보</Title>
			<Text>위치:</Text>
			<SubText>덕성 하나 누리관 라온센터 2층</SubText>
			<br />
			<Text>피트니스센터의 시설 및 기구:</Text>
			<SubText>
				웨이트머신, 프리웨이트, 유산소기구
				<br />
				(트레드밀, 사이클, 스텝퍼 등),
				<br /> 스트레칭 Zone, 기타 보조 운동기구
			</SubText>
			<br />
			<Text>이용 대상:</Text>
			<SubText>
				덕성여자대학교 학생
				<br />
				대학원생 및 교직원(조교포함)
			</SubText>
			<br />
			<Text>이용 시간:</Text>
			<SubText>
				주중 4일 09:00-20:00
				<br />
				토·일요일 및 법정공휴일 휴무
				<br />
				방학기간(월~금) 09:00-18:00
			</SubText>
			<br />
			<Text>이용 방법:</Text>
			<SubText>학생증 또는 교직원증을 맡기고 탈의실 락커를 이용</SubText>
			<br />
			<Text>준비물:</Text>
			<SubText>학생증, 실내용 운동화, 운동복, 수건, 세면도구 등</SubText>
			<br />
			<Text>주의사항:</Text>
			<SubText>
				반드시 실내 전용 운동화와 운동복을 착용합니다.
				<br />
				충분한 준비 운동 후 운동을 시작합니다.
				<br />
				사용한 운동 기구는 제자리에 놓아둡니다.
				<br />
				사물함 락커는 운동 중에만 이용 가능 합니다.
			</SubText>
		</Container>
	)
}

const Container = styled.div`
	margin: 20px 18px 150px 18px;
`

const Title = styled.span`
	display: block;
	color: ${({ theme }) => theme.COLOR.main};
	font-size: x-large;
	font-weight: 800;
	margin-bottom: 15px;
`

const Text = styled.span`
	display: block;
	font-size: large;
	font-weight: 900;
	margin-bottom: 7px;
`

const SubText = styled.span`
	display: block;
	font-size: medium;
`

export default Information
