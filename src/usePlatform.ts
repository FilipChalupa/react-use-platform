import { useCallback, useSyncExternalStore } from 'react'
import type { Platform } from './Platform'
import { getPlatform, unknownPlatform } from './getPlatform'

export const usePlatform = (initial: Platform = unknownPlatform) => {
	const subscribe = useCallback(() => {
		// Nothing to subscribe to
		return () => {
			// Nothing to unsubscribe from
		}
	}, [])
	const getSnapshot = useCallback(() => getPlatform(), [])
	const getServerSnapshot = useCallback(() => initial, [initial])
	return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
