import type { Platform } from './Platform'

export const getPlatform = (): Platform => {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const userAgentDataPlatform: string | undefined = navigator.userAgentData?.platform
	if (userAgentDataPlatform === 'Android' || navigator.userAgent.includes('Android')) {
		return 'android'
	}
	if (navigator.platform === 'iPhone' || navigator.userAgent.includes('iPhone')) {
		return 'ios'
	}
	if (
		userAgentDataPlatform === 'Windows' ||
		navigator.platform.startsWith('Win') ||
		navigator.userAgent.includes('Windows')
	) {
		return 'windows'
	}
	if (
		userAgentDataPlatform === 'macOS' ||
		navigator.platform.startsWith('Mac') ||
		navigator.userAgent.includes('Macintosh')
	) {
		return 'mac'
	}
	return 'unkwnown'
}
