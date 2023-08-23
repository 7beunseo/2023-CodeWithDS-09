import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import { RouterProvider } from 'react-router-dom'
import theme from './styles/theme'
import router from './routes/router'
import { RecoilRoot } from 'recoil'

function App() {
	return (
		<RecoilRoot>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<RouterProvider router={router} />
			</ThemeProvider>
		</RecoilRoot>
	)
}

export default App
