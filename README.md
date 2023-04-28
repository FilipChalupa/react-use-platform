# React use platform [![npm](https://img.shields.io/npm/v/react-use-platform.svg)](https://www.npmjs.com/package/react-use-platform) ![npm type definitions](https://img.shields.io/npm/types/react-use-platform.svg)

React hook to detect client platform.

See it in action at [https://filipchalupa.cz/react-use-platform/](https://filipchalupa.cz/react-use-platform/).

Use this hook to e.g. offer users to download an app from a platform specific store like Google Play, Apple App Store, Microsoft Store.

## Installation

```bash
npm install react-use-platform
```

## Usage

```jsx
import { usePlatform } from 'react-use-platform'

const App = () => {
	const platform = usePlatform()

	return <p>Your platform is {platform}.</p>
}
```

### Possible values

```typescript
type Platform = 'android' | 'ios' | 'windows' | 'mac' | 'unknown'
```
