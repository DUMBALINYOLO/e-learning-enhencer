import React, { Component, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import { getUser, fetchToken } from '../../actions/user';
import { Header } from '../../components/layout/Header';


export class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
    //this.props.fetchToken('blockresna','Mu12345678.');
    //this.props.getUser();
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/courses" />;
    }
    const { username, password } = this.state;
    return (
      <Fragment>
        {/* <Header/> */}
      
      <div className= {`col-md-6 mt-0 m-auto bg-${this.props.theme}  text-${this.props.navtheme}`}>
        <div className= {`card-${this.props.theme} card-body mt-5 bg-${this.props.theme}  text-${this.props.navtheme}`}>
          <h2 className="text-center">Login</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group" className={` bg-${this.props.theme}  text-${this.props.navtheme}`}>
              <label>Username</label>
              <input
                type="text"
                className={`form-control bg-${this.props.theme}  text-${this.props.navtheme}`}
                name="username"
                onChange={this.onChange}
                value={username}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className={`form-control bg-${this.props.theme}  text-${this.props.navtheme}`}
                name="password"
                onChange={this.onChange}
                value={password}
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </form>
        </div>
      </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  theme : state.theme.theme[0],
  navtheme : state.theme.theme[1]
});

export default connect(mapStateToProps, { login, getUser,fetchToken })(Login);
