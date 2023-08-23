import React, { useEffect } from 'react'

function Chatbot() {
	useEffect(() => {
		// inject.js 스크립트 생성 및 추가
		const injectScript = document.createElement('script')
		injectScript.src = 'https://cdn.botpress.cloud/webchat/v0/inject.js'
		injectScript.async = true
		injectScript.onload = () => {
			// inject.js 스크립트 로드 후 실행될 코드
			// 챗봇 UI가 특정 위치에 나타날 것입니다.
		}
		document.body.appendChild(injectScript)

		// config.js 스크립트 생성 및 추가
		const configScript = document.createElement('script')
		configScript.src =
			'https://mediafiles.botpress.cloud/e38c4369-680d-480e-9116-9561b75dad28/webchat/config.js'
		configScript.defer = true
		document.body.appendChild(configScript)

		return () => {
			// 컴포넌트 언마운트 시 스크립트 제거
			document.body.removeChild(injectScript)
			document.body.removeChild(configScript)
		}
	}, [])

	return <></>
}

export default Chatbot
