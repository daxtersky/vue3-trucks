import { defineStore } from 'pinia'
import { v4 as uuid } from 'uuid'
import { URL } from '../constants/constants'

export const useTrucksStore = defineStore('trucksStore', {
  state: (): TrucksState => ({
    trucks: [],
    loading: false
  }),
  getters: {
    getAllTrucks: (state: TrucksState) => {
      return state.trucks
    },
    getTruckById: (state: TrucksState) => (id: number) => {
      return state.trucks.find((truck) => truck.id === id)
    }
  },
  actions: {
    async getTrucks() {
      try {
        this.loading = true
        const res = await fetch(URL + 'trucks', {
          method: 'GET',
          // mode: 'cors',
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
    addTruck(newTruck: TruckBase) {
      const truck: Truck = {
        id: uuid(),
        ...newTruck
      }
      this.trucks.push(truck)
    },
    removeTruck(id: string) {
      this.trucks = this.trucks.filter((truck) => truck.id !== id)
    },
    updateTruck(id: string, update: TruckBase) {
      this.trucks = this.trucks.map((truck) => (truck.id === id ? { ...truck, ...update } : truck))
    }
  }
})
