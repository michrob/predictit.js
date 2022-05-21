import 'isomorphic-fetch'
import { stringify } from 'query-string'
import {
  PredictItContract,
  PredictItMarket,
  PredictItMarketStub,
  PredictItSearchResults
} from './models'

export const PI_API_ENDPOINT = `https://www.predictit.org/api`

const predictItAPICall = async <ReturnType>(
  path: string
): Promise<ReturnType> => {
  const response = await fetch(`${PI_API_ENDPOINT}${path}`, {
    method: `GET`,
    headers: {
      'Content-Type': 'application/json',
      'user-agent': `predictit.js`
    }
  })
  return await response.json()
}

export const predictIt = {
  stub: {
    allMarkets: () =>
      predictItAPICall<{ markets: PredictItMarketStub[] }>(`/marketdata/all`),
    market: (id: number) =>
      predictItAPICall<PredictItMarketStub>(`/marketdata/markets/${id}`)
  },
  market: (id: number) => predictItAPICall<PredictItMarket>(`/market/${id}`),
  contracts: (marketId: number) =>
    predictItAPICall<PredictItContract[]>(`/market/${marketId}/contracts`),
  search: (query: string, page: number = 1, itemsPerPage: number = 30) =>
    predictItAPICall<PredictItSearchResults>(
      `/Browse/Search/${encodeURIComponent(query)}?${stringify({
        page,
        itemsPerPage
      })}`
    )
}
