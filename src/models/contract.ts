export interface PredictItContractStub {
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

export interface PredictItContract {
  contractId: number
  contractName: string
  marketId: number
  marketName: string
  contractImageUrl: string
  contractImageSmallUrl: string
  isActive: boolean
  isOpen: boolean
  lastTradePrice: number
  lastClosePrice: number
  bestYesPrice: number
  bestYesQuantity: number
  bestNoPrice: number
  bestNoQuantity: number
  userPrediction: number
  userQuantity: number
  userOpenOrdersBuyQuantity: number
  userOpenOrdersSellQuantity: number
  userAveragePricePerShare: number
  isTradingSuspended: boolean
  dateOpened: string
  hiddenByDefault: boolean
  displayOrder: number
}
