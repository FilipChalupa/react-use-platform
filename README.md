# React use platform [![npm](https://img.shields.io/npm/v/react-use-platform.svg)](https://www.npmjs.com/package/react-use-platform) ![npm type definitions](https://img.shields.io/npm/types/react-use-platform.svg)

React hook to detect client platform.

See it in action at [https://filipchalupa.cz/react-use-platform/](https://filipchalupa.cz/react-use-platform/).

## Installation

```bash
npm install react-use-platform
```

## Usage

```jsx
import { usePlaform } from 'react-use-platform'

const App = () => {
	const platform = usePlatform()

	return <p>Your platform is {platform}.</p>
}
```

### Possible values

```typescript
type Platform = 'android' | 'ios' | 'windows' | 'mac' | 'unknown'
```
