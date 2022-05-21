export interface PredictItMarket {
  id: number
  name: string
  shortName: string
  image: string
  url: string
  contracts: PredictItContract[]
  timeStamp: string
  status: `Open` | `Closed`
}

export interface PredictItContract {
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
