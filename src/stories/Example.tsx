import { FunctionComponent, useMemo } from 'react'
import { usePlatform } from '../usePlatform'
import './global.css'

export const Example: FunctionComponent = () => {
	const platform = usePlatform()

	const store = useMemo<null | {
		name: string
		link: string
	}>(() => {
		if (platform === 'windows') {
			return {
				name: 'Microsoft Store',
				link: 'https://apps.microsoft.com/',
			}
		}
		if (platform === 'android') {
			return {
				name: 'Google Play',
				link: 'https://play.google.com/',
			}
		}
		if (platform === 'ios') {
			return {
				name: 'Apple App Store',
				link: 'https://apps.apple.com/',
			}
		}
		return null
	}, [platform])

	return (
		<>
			<h1>
				Hook <code>usePlatform</code>
			</h1>
			<p>
				Your platform is <output>{platform}</output>.
			</p>
			{store && (
				<p>
					Your platform specific store is <a href={store.link}>{store.name}</a>.
				</p>
			)}
		</>
	)
}
