type TailwindScreensConfig = {
  [key: string]: string
}

// // https://stackoverflow.com/questions/38335668/how-to-refer-to-typescript-enum-in-d-ts-file-when-using-amd/48159049#48159049
type TruckStatus = { [s: string]: string }

interface TruckBase {
  code: string // 'unique alphanumeric code' // minLength 1
  name: string // 'not empty' // minLength 1
  status: TruckStatus
  description?: string
}

interface Truck extends TruckBase {
  id: string | number
}

interface TrucksState {
  trucks: Truck[]
  loading: boolean
  isFormOpen: boolean
  isFormEdit: boolean
  truckForm: Partial<Truck> // | TruckBase
}
