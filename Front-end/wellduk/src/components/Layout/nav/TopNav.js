import { Outlet, useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import { flexAlignCenter } from '../../../styles/common'

const NAV_TYPE = {
	raon: [
		{
			title: '현재 사용 인원',
			path: '/raon',
		},
		{
			title: '기구 소개',
			path: '/raon/machine',
		},
		{
			title: '라온센터 정보',
			path: '/raon/info',
		},
	],
	community: [
		{
			title: '양도해요',
			path: '/community',
		},
		{
			title: '같이해요',
			path: '/community/together',
		},
		{
			title: '소통해요',
			path: '/community/communication',
		},
	],
}

function TopNav({ type }) {
	const navigate = useNavigate()

	return (
		<>
			<S.Wrapper>
				{NAV_TYPE[type].map(nav => (
					<S.Title
						key={nav.title}
						type={type}
						onClick={() => navigate(`${nav.path}`)}
						state={window.location.pathname === nav.path}
					>
						{nav.title}
					</S.Title>
				))}
			</S.Wrapper>
			<Outlet />
		</>
	)
}
export default TopNav

const Wrapper = styled.div`
	${flexAlignCenter};
	justify-content: space-around;
	border-bottom: 1px solid ${({ theme }) => theme.COLOR.main};
`

const Title = styled.div`
	text-align: center;
	cursor: pointer;
	width: calc(33.34%);
	border-bottom: ${({ state }) =>
		state ? '2px solid #FEA82F' : '2px solid transparent'};
	padding: 15px 0;
`

const S = { Wrapper, Title }
