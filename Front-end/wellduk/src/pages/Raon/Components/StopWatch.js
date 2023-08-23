import { useEffect, useState } from 'react'

function StopWatch() {
	const [count, setCount] = useState(1)

	useEffect(() => {
		const intervalId = setInterval(() => {
			console.log(count)
			setCount(prevTime => prevTime + 1)
		}, 1000)

		return () => {
			clearInterval(intervalId)
		}
	}, [])

	return <div>{count}</div>
}
export default StopWatch
