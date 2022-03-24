import './Header.scss'
import {Link} from "react-router-dom";
import { useState } from "react";


export const Header = () => {
  const [totalItems, setTotalItems] = useState(0)

  const openModal = () => {
    console.log('nothing for now')
  }

  const demoLogin = () => {
    console.log('nothing for now')
  }

  return(
    <header className="header">
      <nav className="header-nav">
        <Link to="/" className="header-nav__heading">
          CoreStoreNET
        </Link>
        <div className="header-nav__links">
          <div className="header-nav__links-auth">
            <span className="material-icons header-nav__links-auth__icon">account_circle</span>Sign In
            <div className="header-nav__links-auth__test">
              <button className="header-nav__links-auth__test__auth-sign" onClick={() => openModal('signin')}>
                Sign In
              </button>
              <button className="header-nav__links-auth__test__auth-create" onClick={() => openModal('signup')}>
                Create Account
              </button>
              <button className="header-nav__links-auth__test__auth-demo" onClick={demoLogin}>
                Demo Account
              </button>
            </div>
          </div>
          <Link to="/cart" className="header-nav__shoppingCart">
            <span className="material-icons header-nav__shoppingCart__icon">shopping_cart</span>
            {totalItems ? `(${totalItems} Items)` : ''}
          </Link>
        </div>
      </nav>
      {/*<Modal modalOpen={modalOpen} action={action}  openSignUpForm={openModal}/>*/}
    </header>
  )
}