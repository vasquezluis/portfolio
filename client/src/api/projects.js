import axios from 'axios'

const projectsAPI = axios.create({
  baseURL: 'https://portfolio-jwgt.onrender.com/api/v1/projects/'
})

export const getItems = async () => {
  try {
    const response = await projectsAPI.get('/')
    const data = response.data

    return data.body
  } catch (error) {
    console.log(error.message)
  }
}
