import type { Platform } from './Platform'

export const unknownPlatform = 'unknown'

export const getPlatform = (): Platform => {
	const userAgentDataPlatform: string | undefined =
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		navigator.userAgentData?.platform
	if (
		userAgentDataPlatform === 'Android' ||
		navigator.userAgent.includes('Android')
	) {
		return 'android'
	}
	if (
		navigator.platform === 'iPhone' ||
		navigator.userAgent.includes('iPhone')
	) {
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
	return unknownPlatform
}
