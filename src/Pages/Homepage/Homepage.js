import React from 'react'
import {useSelector} from 'react-redux';

const Homepage = () => {
  
  const categories = useSelector(state => state.categories.productCategories)

  return (
    <>
        <div className="container">
             <div className="row">
                 {
                     Object.keys(categories).length > 0 && categories.map((category, index) => {
                        return <div key={index+category} className="col-md-6">
                                    <div className= {`homepage-${category.replace(/'/g,'').split(' ').join('-')} d-flex justify-content-center align-items-center`}>
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