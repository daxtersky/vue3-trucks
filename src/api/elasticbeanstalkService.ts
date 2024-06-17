export const URL = 'http://qa-api-mock-3.eu-central-1.elasticbeanstalk.com/'

async function fetchTrucks(endpoint: string): Promise<Truck[] | undefined> {
  try {
    const res = await fetch(`${URL}${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return res.ok ? ((await res.json()) as Truck[]) : undefined
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

async function putTruck(endpoint: string, truck: Truck): Promise<Truck[] | undefined> {
  try {
    const res = await fetch(`${URL}${endpoint}/${truck.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(truck)
    })
    return res.ok ? ((await res.json()) as Truck[]) : undefined
  } catch (error) {
    console.error('Error putting data', error)
    throw error
  }
}

export { fetchTrucks, putTruck }
