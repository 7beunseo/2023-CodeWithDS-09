import { createBrowserRouter } from 'react-router-dom'
import Login from '../pages/Auth/Login'
import SignUp from '../pages/Auth/SignUp'
import Main from '../pages/Main/Main'
import UserNumber from '../pages/Raon/UserNumber'
import MachineIntroduction from '../pages/Raon/MachineIntroduction'
import Information from '../pages/Raon/Information'
import Chatbot from '../pages/Chatbot/Chatbot'
import Assignment from '../pages/Community/Assignment'
import Together from '../pages/Community/Together'
import Communication from '../pages/Community/Communication'
import Layout from '../components/Layout'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: 'login',
				element: <Login />,
			},
			{
				path: 'signup',
				element: <SignUp />,
			},
			{
				path: '/',
				element: <Main />,
			},
			{
				path: 'raon',
				element: <UserNumber />,
				children: [
					{
						path: 'machine',
						element: <MachineIntroduction />,
					},
					{
						path: 'info',
						element: <Information />,
					},
				],
			},
			{
				path: 'chatbot',
				element: <Chatbot />,
			},
			{
				path: 'community',
				element: <Assignment />,
				children: [
					{
						path: 'together',
						element: <Together />,
					},
					{
						path: 'communication',
						element: <Communication />,
					},
				],
			},
		],
	},
])

export default router
