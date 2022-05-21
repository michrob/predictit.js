export interface PredictItSearchContract {
  bestNoPrice: number
  bestYesPrice: number
  contractId: number
  contractImageUrl: string
  contractName: string
  endDate: string
  hasTodaysChange: boolean
  lastClosePrice: number
  lastTradePrice: number
  maxShareValue: number
  startDate: string
  todaysChange: number
  todaysChangePercentage: number
  totalTrades: number
}

export interface PredictItSearchMarket {
  contracts: PredictItSearchContract[]
  isMarketWatched: boolean
  marketId: number
  marketImageUrl: string
  marketName: string
  marketUrl: string
  status: `Open` | `Closed`
  totalSharesTraded: number
  totalTrades: number
  type: string
  userHasOwnership: boolean
}

export interface PredictItSearchResults {
  markets: PredictItSearchMarket[]
  marketsPerPage: number
  page: number
  totalMarkets: number
  totalPages: number
}
