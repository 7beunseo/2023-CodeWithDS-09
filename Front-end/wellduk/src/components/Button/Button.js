import { styled } from 'styled-components'

function Button({ ...rest }) {
	return <S.ButtonStyle {...rest} />
}
export default Button

const ButtonStyle = styled.button`
	background-color: ${({ theme }) => theme.COLOR.main};
	border-radius: 5px;
	width: 100%;
	height: 40px;
	margin-top: 30px;
`

const S = { ButtonStyle }
