export type DinosaurModel = {
  id: string
  specie: string
  kingdom: string
  family: string
  price: number
  accessories: AcessoriesModel[]
}

type AcessoriesModel = {
  name: string
  type: string
}
