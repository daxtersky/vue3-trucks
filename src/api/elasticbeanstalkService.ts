export const URL = 'http://qa-api-mock-3.eu-central-1.elasticbeanstalk.com/'

async function fetchTrucks(endpoint: string): Promise<Truck[] | undefined> {
  try {
    const res = await fetch(`${URL}${endpoint}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
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
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
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
