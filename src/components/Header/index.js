import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')

    history.replace('/login')
  }

  return (
    <nav className="nav-container">
      <div className="nav-item-container">
        <Link to="/">
          <img
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
          />
        </Link>
        <ul className="nav-list-container">
          <Link to="/">
            <li className="nav-menu">Home</li>
          </Link>
          <Link to="/jobs">
            <li className="nav-menu">Jobs</li>
          </Link>
          <li className="nav-button">
            <button
              type="button"
              className="logout-button"
              onClick={onClickLogout}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Header)
