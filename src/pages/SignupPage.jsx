import React from "react";
import "./signupform.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import * as services from "../services.js";

class SignupPage extends React.PureComponent {

    static propTypes = {
            history: PropTypes.object.isRequired,
        };


    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password:"",
            confirmPassword:""
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        services.signup(this.state)
        .then( () => {
          this.props.history.push("/login");
          toast.success("User was created");
        })
        .catch ( err => {
          console.log("Error", err);
          toast.success("There was an error");
        });
    };

    handleChange = (e) => {
        console.log("handle change", e.target.name, e.target.value);
        this.setState( {
            [e.target.name]: e.target.value,
        });
    };


    render() {
        return (
          <>
            <div className="signupSection">
            <form className="register-form"  onSubmit={this.handleSubmit}>
                <h2>Create Account</h2>
                <ul className="noBullet">
                    <li>
                        <label htmlFor="email"></label>
                        <input type="email" className="inputFields" placeholder="Email" name= {"email"} onChange = {this.handleChange}/>
                    </li>
                    <li>
                        <label htmlFor="password"></label>
                        <input type="password" className="inputFields" placeholder="Password" name= {"password"} onChange = {this.handleChange}/>
                    </li>
                    <li id="center-btn">
                        <button className="join-btn"> submit </button>
                    </li>
                    <p className="message">Already registered? <Link to={"/login"}>Login</Link></p>
                </ul>
            </form>
          </div>
        </>
        );
    }
}

export default SignupPage;
