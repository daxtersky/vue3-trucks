import { defineStore } from 'pinia'
import { v4 as uuid } from 'uuid'
import { URL } from '../constants/constants'
// import { uniqueNumber } from '../utils/methods'

export const useTrucksStore = defineStore('trucksStore', {
  state: (): TrucksState => ({
    trucks: [],
    loading: false,
    isFormOpen: false,
    isFormEdit: false,
    truckForm: {}
  }),
  getters: {
    getAllTrucks: (state: TrucksState) => {
      return state.trucks
    }
    // getTruckById(id: string) {
    //   return this.trucks.find((truck) => truck.id === id)
    // }
    // getTruckById: (state: TrucksState) => (id: number) => {
    //   return state.trucks.find((truck) => truck.id === id)
    // }
  },
  actions: {
    async getTrucks() {
      try {
        this.loading = true
        const res = await fetch(URL + 'trucks', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        if (res.ok) {
          const data = await res.json()
          this.trucks = data as Truck[]
        }
      } catch (error) {
        console.info('err', error)
      } finally {
        this.loading = false
      }
    },
    async editTruck(truck: any) {
      const editedTruck: Truck = {
        ...truck,
        code: uuid()
      }
      try {
        this.loading = true
        const res = await fetch(URL + 'trucks/' + editedTruck.id, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(editedTruck)
        })
        if (res.ok) {
          const data = await res.json()
          this.trucks = data as Truck[]
        }
      } catch (error) {
        console.info('err', error)
      } finally {
        this.loading = false
        this.getTrucks()
        this.isFormOpen = false
      }
    },
    async addTruck(newTruck: TruckBase) {
      console.info('store addTruck///', newTruck)
      try {
        this.loading = true
        const res = await fetch(URL + 'trucks/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newTruck)
        })
        if (res.ok) {
          const data = await res.json()
          this.trucks = data as Truck[]
        }
      } catch (error) {
        console.info('err', error)
      } finally {
        this.loading = false
        this.getTrucks()
        this.isFormOpen = false
      }
    },
    removeTruck(id: string) {
      this.trucks = this.trucks.filter((truck) => truck.id !== id)
    },
    updateTruck(id: string, update: TruckBase) {
      this.trucks = this.trucks.map((truck) => (truck.id === id ? { ...truck, ...update } : truck))
    },
    setTruckForm(id: string = '') {
      if (id) {
        this.truckForm = this.trucks.find((truck) => truck.id === +id) as Truck
      } else {
        this.truckForm = {
          // id: uniqueNumber(uuid()),
          code: uuid(),
          status: 'OUT_OF_SERVICE',
          name: '',
          description: ''
        }
      }
    },
    clearTruckForm() {
      this.truckForm = {}
    },
    openForm(id: string = '') {
      this.isFormOpen = true
      this.isFormEdit = !!id
    },
    closeForm() {
      this.isFormOpen = false
      this.getTrucks()
      this.clearTruckForm()
    }
  }
})
