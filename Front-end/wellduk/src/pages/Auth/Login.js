import { styled } from 'styled-components'
import { marginAuto } from '../../styles/common'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'

function Login() {
	const navigate = useNavigate()
	return (
		<S.Wrapper>
			<S.Title>로그인</S.Title>
			<S.Form>
				<S.Container>
					<label>아이디</label>
					<Input />
				</S.Container>
				<S.Container>
					<label>비밀번호</label>
					<Input />
				</S.Container>
				<div onClick={() => navigate('/signup')}>회원가입</div>
				<Button>로그인</Button>
			</S.Form>
		</S.Wrapper>
	)
}
export default Login

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
