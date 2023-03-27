import type { FunctionComponent } from 'react'
import { usePlatform } from '../usePlatform'
import './global.css'

export const Example: FunctionComponent = () => {
	const platform = usePlatform()

	return (
		<>
			<h1>
				Hook <code>usePlatform</code>
			</h1>
			<p>
				Your platform is <output>{platform}</output>.
			</p>
		</>
	)
}
