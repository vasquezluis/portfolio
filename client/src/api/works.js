import axios from 'axios'

const worksAPI = axios.create({
  baseURL: 'https://portfolio-jwgt.onrender.com/api/v1/works'
})

export const getItems = async () => {
  try {
    const response = await worksAPI.get('/')
    const data = response.data

    return data.body
  } catch (error) {
    console.log(error.message)
  }
}
