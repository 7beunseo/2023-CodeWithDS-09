import styled from 'styled-components'

function MachineIntroduction() {
	return (
		<Box1>
			<Box2>
				<MachineContainer>
					<Title>1. 러닝머신</Title>
					<ContentBox>
						<img
							src="/img/running-machine.png"
							style={{
								width: '140px',
								height: '140px',
								borderRadius: '20px',
							}}
						/>
						<Content>
							러닝머신은 실내에서 운동을 할 수 있는 기구로, 걷거나
							달리는 동작을 모방하여 유산소 운동을 할 수 있도록
							도와주는 장비입니다. 주로 유산소 운동과 심폐 지구력
							향상을 목적으로 사용되며, 체중 감량, 심혈관 건강
							개선, 근력 강화 등에도 도움을 줍니다.
						</Content>
					</ContentBox>
				</MachineContainer>
				<VideoContainer>
					<iframe
						width="354"
						height="198"
						src="https://www.youtube.com/embed/O1AfIjuDzFk"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe>
				</VideoContainer>
			</Box2>
			<Box2>
				<MachineContainer>
					<Title>2. 사이클</Title>
					<ContentBox>
						<img
							src="/img/cycle.jpeg"
							style={{
								width: '140px',
								height: '140px',
								borderRadius: '20px',
							}}
						/>
						<Content>
							사이클은 유산소 운동기구 중 하나로, 자전거를 타고
							주행하는 동작을 모방하여 유산소 및 심폐 지구력
							운동을 할 수 있는 기구입니다. 사이클 운동은 하체
							근육을 주로 사용하며, 전신 근육과 심폐 기능을
							향상시키는 데 도움을 줍니다.
						</Content>
					</ContentBox>
				</MachineContainer>
				<VideoContainer>
					<iframe
						width="354"
						height="198"
						src="https://www.youtube.com/embed/sqC5a78NfQw"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe>
				</VideoContainer>
			</Box2>
		</Box1>
	)
}

const Box1 = styled.div`
	margin: 20px 18px 150px 18px;
`

const Box2 = styled.div`
	margin-bottom: 40px;
`

const MachineContainer = styled.div``

const Title = styled.h1`
	font-size: x-large;
`

const ContentBox = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 10px;
`

const Content = styled.span`
	font-size: 14px;
	padding: 10px;
`

const VideoContainer = styled.div``

export default MachineIntroduction
