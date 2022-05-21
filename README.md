# predictit.js

An unofficial typescript client for accessing the [PredictIt](https://www.predictit.org/) API.

## Install

```
yarn add predictit.js
```

or 

```
npm install predictit.js
```

## API

```typescript
import { predictIt } from '../src'

// Load a list of all the markets
const allMarkets = await predictIt.allMarkets()

// Load a specific market
const someMarket = await predictIt.market(12345)

// Models

interface PredictItMarket {
  id: number
  name: string
  shortName: string
  image: string
  url: string
  contracts: PredictItContract[]
  timeStamp: string
  status: `Open` | `Closed`
}

interface PredictItContract {
  id: number
  dateEnd: string
  image: string
  name: string
  shortName: string
  status: `Open` | `Closed`
  lastTradePrice: number
  bestBuyYesCost: number
  bestBuyNoCost: number
  bestSellYesCost: number
  bestSellNoCost: number
  lastClosePrice: number
  displayOrder: number
}

```

