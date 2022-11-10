import React from 'react';
import {useState} from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './CSS/Registration.css'
import {Link} from "react-router-dom";

const Registration = () => {

    const [reg, setReg] = useState({
        userName: '',
        password: '',
        repeatPassword: '',
        error: ''
    });

    const onReset = () => {
        setReg({
            userName: '',
            password: '',
            repeatPassword: '',
            error: ''
        })
    };

    const onChange = ({target: {name, value}}) => {
        setReg({...reg, [name]: value})
    };
    const onSubmit = async (event) => {

        if (event) {
            event.preventDefault();
        }
        if (reg.password === reg.repeatPassword) {
            setReg({...reg, error: ''})
            axios({
                method: 'post',
                url: `${process.env.REACT_APP_API_URL}/registration`,
                data: {
                    "userName": reg.userName,
                    "password": reg.password
                }
            }).then((response) => {
                alert(response.data)
                onReset()
            }).catch((error) => {
                alert(error.response.data.message)
            })

        } else {
            setReg({...reg, error: "Passwords don't match"})
        }
    };
    return (
        <Form className="registration" onSubmit={onSubmit}>
            <h1 className="registration-title"> Registration </h1>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>UserName</Form.Label>
                <Form.Control placeholder="userName" name="userName"
                              value={reg.userName}
                              onChange={onChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password"
                              value={reg.password}
                              onChange={onChange}/>
                <Form.Text className="text-muted">
                    {
                        reg.error
                    }
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formRepeatBasicPassword">

                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="repeatPassword" name="repeatPassword"
                              value={reg.repeatPassword}
                              onChange={onChange}/>
                <Form.Text className="text-muted">
                    {
                        reg.error
                    }
                </Form.Text>
            </Form.Group>
            <div className="registration-footer">
                <Button variant="outline-primary" type="submit">
                    Submit
                </Button>
                <Button variant="outline-danger" className="registration-reset"
                        onClick={onReset}>
                    Reset
                </Button>
                <Form.Text id="passwordHelpBlock" muted className="registration-linkLogin">
                    <Link to="/login">Login</Link>
                </Form.Text>
            </div>
        </Form>
    );
};

export default Registration;