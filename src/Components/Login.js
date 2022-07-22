import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/Login.css'
import {useContext, useState} from "react";
import axios from "axios";
import {userContext} from "../context/userContext";
import {Link, useNavigate} from "react-router-dom";


function Login() {
    const [log, setLog] = useState({
        userName: '', password: ''
    });

    let navigate = useNavigate();

    const {setUser} = useContext(userContext)

    const onChange = ({target: {name, value}}) => {
        setLog({...log, [name]: value})
    };
    const onSubmit = async (event) => {
        if (event) {
            event.preventDefault();
        }

        try {
            const response = await axios({
                method: 'post',
                url: 'http://localhost:8080/api/login',
                data: {
                    "userName": log.userName,
                    "password": log.password
                }
            })
            setUser({
                id: response.data.id,
                userName: response.data.username,
                password: response.data.password,
                role: response.data.role,
                isAuth: true
            })
            navigate("/")
        } catch (e) {
            alert(e.data)
        }
    };
    return (
        <Form className="login" onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>UserName</Form.Label>
                <Form.Control placeholder="userName" name="userName"
                              value={log.userName}
                              onChange={onChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password"
                              value={log.password}
                              onChange={onChange}/>
            </Form.Group>
            <div className="login-footer">
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Form.Text id="passwordHelpBlock" muted className="login-linkReg">
                    <Link to="/registration">Registration</Link>
                </Form.Text>
            </div>
        </Form>
    );
}

export default Login;