import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccess()
    }
    console.log(response)
    console.log(data)
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <div className="input-container">
        <label className="label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          className="input"
          value={username}
          onChange={this.onChangeUsername}
        />
      </div>
    )
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <div className="input-container">
        <label className="label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="input"
          value={password}
          onChange={this.onChangePassword}
        />
      </div>
    )
  }

  render() {
    return (
      <div className="login-form-container">
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website-logo"
          />
          {this.renderUsernameField()}
          {this.renderPasswordField()}
          <button className="login-button" type="submit">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default LoginForm
