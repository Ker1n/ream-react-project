import React from "react";
import loginImg from "./style/img/user-login-icon-14.png";
import Button from "@material-ui/core/Button"


export class Login extends React.Component { 
    constructor (props) { 
        super (props);
    } 

    render () { 
        return (
            <div className="base-container" ref={this.props.containerRef}>
                
                <div className="content">
                    <div className="image">
                        <img src={loginImg} alt="login"/>
                    </div>
                    <div className="form">  
                        <div className="from-group">
                            <label htmlFor="username"></label>
                            <input type="text" name = "username" placeholder="User name"/>
                        </div>
                        <div className="from-group">
                            <label htmlFor="password"></label>
                            <input type="password" name = "password" placeholder="Password" />
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <Button variant="contained" color="primary" type = "button" className="btn">
                        Login
                    </Button>
                </div>
            </div>
        )
    }


}

