import React, {Component, Fragment} from 'react'
import Modal from 'react-modal'
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { api } from '../api/init'

  // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
  // Modal.setAppElement('#app')
   
  class Login extends Component {
    state = {
      modalIsOpen: false,
      email: '',
      password: '',
      loginError: false
    }
   
    openModal = () => {
      this.setState({modalIsOpen: true});
    }
   
    handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value })
    }

    handleLogin = (e) =>{
      e.preventDefault()
      
      api.post('users/login',{email: this.state.email, password:this.state.password})
      .then(res => { localStorage.setItem('token',res.data.token)
      this.props.updatedLogIn()
      this.closeModal()})
      .catch(err => this.setState({loginError: true}))
    }

    closeModal = (e) => {
      this.setState({modalIsOpen: false});
    }
   
    render() {
      return (
        <MuiThemeProvider>
        <Fragment>
          <button className="login--button" onClick={this.openModal}>Login</button>
          <Modal
            className="modal fade modal-dialog loginmodal-container"
            id="login-modal"
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="Example Modal"
          >
   
          <button  className="close--button" onClick={this.closeModal}> <img className="close--button--img"  src="http://www.myiconfinder.com/uploads/iconsets/256-256-46602df56c953c27348b14d8651dcdc5-close.png" /> </button>
					<h1> Login </h1><br />
          <p>{this.state.loginError ? 'Invalid Login Details': ''}</p>
          <form>
          <TextField
              className="center--login--inputs"
              name= "email" 
              floatingLabelText= "email"
              value= {this.state.email} 
              onChange= {this.handleChange} />
          <TextField
              className="center--login--inputs"
              name= "password" 
              floatingLabelText= "password"
              value= {this.state.password} 
              onChange= {this.handleChange}
              type="password" />
				  	<button onClick={this.handleLogin} type="submit" name="login" className="Makebooking--button"> Login </button>
          </form>
          <div className="login-help">
					  <a href="#">Register</a> - <a href="#">Forgot Password</a>
          </div>
          </Modal>
        </ Fragment>
        </ MuiThemeProvider>
      );
    }
  }

export default Login

