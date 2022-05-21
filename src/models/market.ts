import { PredictItContractStub } from './contract'

export interface PredictItMarketStub {
  id: number
  name: string
  shortName: string
  image: string
  url: string
  contracts: PredictItContractStub[]
  timeStamp: string
  status: `Open` | `Closed`
}

export interface PredictItMarket {
  marketId: number
  marketName: string
  imageName: string
  marketType: number
  dateEndString: string
  isActive: boolean
  rule: string
  userHasOwnership: boolean
  userHasTradeHistory: boolean
  userInvestment: number
  userMaxPayout: number
  info: null
  dateOpened: string
  isMarketWatched: false
  seoTitle: string
  seoDescription: string
  marketUrl: string
  status: `Open` | `Closed`
  isOpen: boolean
  isOpenStatusMessage: 'Open'
  isTradingSuspended: boolean
  isTradingSuspendedMessage: string
  isEngineBusy: boolean
  isEngineBusyMessage: string
  disqus_Identifier: string
  disqus_Title: string
  disqus_UserAuth: null
  disqus_Url: string
  disqus_PrevThreadID: null
  disqus_NextThreadID: null
  disqus_ArchivedCommentsTotal: number
  econIndicatorTradeStatus: number
}
