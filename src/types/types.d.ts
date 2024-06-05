type TailwindScreensConfig = {
  [key: string]: string
}

type TruckStatus = { [s: string]: string }

interface TruckBase {
  code: string // 'unique alphanumeric code' // minLength 1
  name: string // 'not empty' // minLength 1
  status: TruckStatus
  description?: string
}

interface Truck extends TruckBase {
  id: number | string
}

interface TrucksState {
  trucks: Truck[]
  loading: boolean
}
