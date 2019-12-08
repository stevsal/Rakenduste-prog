import React from "react";
import "./loginform.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userUpdate, tokenUpdate } from "../store/actions";
import { toast } from "react-toastify";
import * as services from "../services.js";

class LoginPage extends React.PureComponent {

    static propTypes = {
          history: PropTypes.object.isRequired,
          dispatch: PropTypes.func.isRequired,
      };

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password:""
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        /*console.log("submit", this.state);
        fetch("/api/v1/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(this.state),
        })
        .then( res => res.json())*/
        services.login(this.state)
        .then(this.handleSuccess)
        .catch ( err => {
            console.log("Error", err);
            toast.error("Log in failed");
        });
    };

    handleSuccess = ({token, user}) => {
      this.props.dispatch(userUpdate(user));
      this.props.dispatch(tokenUpdate(token));
      this.props.history.push(`/users/${user._id}`);
    };

    handleChange = (e) => {
        this.setState( {
            [e.target.name]: e.target.value,
        });
    };

    render() {
        return (
          <>
            <div><h1 style={{textAlign: "center"}}>Login</h1></div>
            <div className="form">
            <div className="form-toggle"></div>
            <div className="form-panel one">
                <div className="form-header">
                    <h1>Account Login</h1>
                </div>
                <div className="form-content">
                    <form onSubmit = {this.handleSubmit}>
                        <div className="form-group"><label htmlFor="email">email</label><input type="email" name="email" value = {this.state.email} onChange = {this.handleChange}/></div>
                        <div className="form-group"><label htmlFor="password">Password</label><input type="password" name="password" value = {this.state.password} onChange = {this.handleChange} /></div>
                        <div className="form-group"><label className="form-remember"><input type="checkbox"/>Remember Me</label><a className="form-recovery" href="#">Forgot Password?</a></div>
                        <div className="form-group"><button type="submit">Log In</button></div>
                        <p className= "message"> Not registered? <Link to={"/signup"}>Create an account</Link></p>
                    </form>
                </div>
            </div>
        </div>
      </>
        );
    }
}

export default connect()(LoginPage);
