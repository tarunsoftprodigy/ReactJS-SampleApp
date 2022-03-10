import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCategoriesResults } from '../../State/Action-creator/CateogoriesActionCreator';

const Homepage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const categories = useSelector(state => state.categories.productCategories)

  const goToListing = (category) => {
    getCategoriesResults(dispatch, category)
    let param = category.replace(/'/g,'').split(' ').join('-')
    navigate('/category/' + param)
  }

  return (
    <>
        <div className="container">
             <div className="row">
                 {
                     Object.keys(categories).length > 0 && categories.map((category, index) => {
                        return <div onClick={() => goToListing(category)} className="col-md-6">
                                    <div to={`/category/${category}`} 
                                    className= {`homepage-${category.replace(/'/g,'').split(' ').join('-')} d-flex justify-content-center align-items-center`}>
                                            <h3>{category}</h3>
                                    </div>
                                </div> 
                     })
                 }
             </div>
        </div>
    </>
  )
}

export default Homepage