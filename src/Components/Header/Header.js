import React , {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import cart from '../../Assets/images/cart.svg'
import { getCategories } from '../../State/Action-creator/CateogoriesActionCreator';

const Header = () => {
  const dispatch = useDispatch()

  useEffect(() => {
     getCategories(dispatch)
  } , [])

  const categories = useSelector(state => state.categories.productCategories)

  return (
    <div >
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">EShop</a>
                <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                {Object.keys(categories).length > 0 && categories.map((category, index) => {
                       return  <li key={category+index} className="nav-item">
                                 <a className="nav-link active" aria-current="page" href="#"> { category }</a>
                               </li>
                })}
                </ul>
                <ul className="navbar-nav mb-2 mb-lg-0">
                    <li> <img src={cart} alt="cart" /> </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}


export default Header