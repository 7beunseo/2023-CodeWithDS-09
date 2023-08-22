import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import { RouterProvider } from 'react-router-dom'
import theme from './styles/theme'
import router from './routes/router'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<RouterProvider router={router} />
		</ThemeProvider>
	)
}

export default App
