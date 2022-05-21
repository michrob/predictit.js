import { predictIt } from '../src'

const loadAll = async () => {
  const ep = await predictIt.allMarkets()
  const sp = await predictIt.market(ep.markets[0].id)
  console.log(sp.shortName)
}

loadAll().then()
