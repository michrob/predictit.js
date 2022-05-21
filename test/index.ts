import { predictIt } from '../src'

const formatPercent = (number: number): string => {
  return !number ? '' : number.toFixed(2) + '%'
}

const loadAll = async () => {
  const search = await predictIt.search('elon musk')
  const market = search.markets[0]
  const contracts = market.contracts //await predictIt.contracts(market.marketId)

  const total = contracts.reduce((tot, curr) => curr.bestYesPrice + tot, 0)
  const table = contracts.map(contract => ({
    name: contract.contractName,
    percent: contract.bestYesPrice / total
  }))

  table.forEach(entry => {
    console.log(`${entry.name} ${formatPercent(entry.percent * 100)}`)
  })

  console.log(market.marketName)
}

loadAll().then()
