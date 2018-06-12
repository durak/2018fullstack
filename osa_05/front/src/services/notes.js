import axios from 'axios'
const baseUrl = '/api/notes'

let token = null

const getAll = () => {                        // palauttaa myös promisen, .then palauttaa promise
  const request = axios.get(baseUrl)          // promise muuttujaan req
  return request.then(response => response.data)  // kutsutaan sille metodia then  
}

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}


const create = async (newObject) => {
  const config = {
    headers: {'Authorization': token}
  }

  const response = await axios.post(baseUrl, newObject, config)
  return response.data

  // const request = axios.post(baseUrl, newObject)
  // return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

export default { getAll, create, update, setToken }