import axios from 'axios'

const RequestCategoriesResult = (category) => {
  return axios.request({
      method : 'get',
      url : `https://fakestoreapi.com/products/category/${category}`
  })
}

export default RequestCategoriesResult;