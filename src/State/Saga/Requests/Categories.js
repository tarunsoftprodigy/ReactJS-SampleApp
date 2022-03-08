import axios from 'axios'

const requestCategories = () => {
  return axios.request({
      method : 'get',
      url : "https://fakestoreapi.com/products/categories"
  })
}

export default requestCategories;