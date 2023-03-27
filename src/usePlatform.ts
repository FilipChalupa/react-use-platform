import { useEffect, useState } from 'react'
import { getPlatform } from './getPlatform'
import type { Platform } from './Platform'


export const usePlatform = (initial: Platform = 'unknown') => {
	const [platform, setPlatform] = useState(initial)

	useEffect(() => {
		setPlatform(getPlatform())
	}, [])

	return platform
}
