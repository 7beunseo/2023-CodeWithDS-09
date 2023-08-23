import { styled } from 'styled-components'
import { marginAuto } from '../../styles/common'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'

function SignUp() {
	return (
		<S.Wrapper>
			<S.Title>회원가입</S.Title>
			<S.Form>
				<S.Container>
					<label>아이디</label>
					<Input />
				</S.Container>
				<S.Container>
					<label>비밀번호</label>
					<Input />
				</S.Container>
				<S.Container>
					<label>비밀번호 확인</label>
					<Input />
				</S.Container>
				<S.Container>
					<label>닉네임</label>
					<Input />
				</S.Container>
				<Button>회원가입</Button>
			</S.Form>
		</S.Wrapper>
	)
}
export default SignUp

const Wrapper = styled.div`
	${marginAuto}
	text-align: center;
`

const Title = styled.h2`
	padding: 32px;
`

const Form = styled.form`
	width: 60%;
	padding: 20px 0;
	${marginAuto}
`

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	align-content: center;
	flex-wrap: wrap;
	margin-bottom: 40px;
`

const S = {
	Wrapper,
	Title,
	Form,
	Container,
}
