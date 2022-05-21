import 'isomorphic-fetch'
import { PredictItMarket } from './models'

export const PI_API_ENDPOINT = `https://www.predictit.org/api/marketdata`

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
  allMarkets: () => predictItAPICall<{ markets: PredictItMarket[] }>(`/all`),
  market: (id: number) => predictItAPICall<PredictItMarket>(`/markets/${id}`)
}
