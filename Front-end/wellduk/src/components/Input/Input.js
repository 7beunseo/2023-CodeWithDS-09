import { styled } from 'styled-components'

function Input({ ...rest }) {
	return <S.InputStyle {...rest} />
}
export default Input

const InputStyle = styled.input`
	border: 1px solid ${({ theme }) => theme.COLOR.main};
	border-radius: 5px;
	width: 100%;
	height: 40px;
	padding: 10px;
`

const S = { InputStyle }
