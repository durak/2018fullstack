import axios from 'axios'
// const baseUrl = 'http://localhost:3001/notes'
const baseUrl = 'https://agile-everglades-31794.herokuapp.com/notes'

const getAll = () => {                          // palauttaa myös promisen, .then palauttaa promise
    const req = axios.get(baseUrl)              // promise muuttujaan req
    //return req.then(response => response.data)  // kutsutaan sille metodia then
    // vrt.   return request.then(response => { return response.data })
    const nonExisting = {
        id: 10000,
        content: 'Tätä muistiinpanoa ei ole palvelimelta',
        date: '2017-12-10T17:30:31.098Z',
        important: true
      }
      return req.then(response => response.data.concat(nonExisting))
}

const create = (newObject) => {
    const req = axios.post(baseUrl, newObject)
    return req.then(response => response.data)
}

const update = (id, newObject) => {
    const req =  axios.put(`${baseUrl}/${id}`, newObject)
    return req.then(response => response.data)
}

export default {getAll, create, update}