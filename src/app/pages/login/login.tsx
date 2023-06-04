import { FC, useState } from "react"
import './index.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from "react-router-dom";




const Login: FC = () => {
    const [login2, setLogin] = useState("")
    const [pass, setPassword] = useState("")
    const navigate = useNavigate()

    const login = () => {
        const users = JSON.parse(localStorage.getItem('login')!)

        for (const user of users) {

            if (login2 === user.login && pass === user.password) {
                localStorage.setItem('logado', JSON.stringify(true))
                navigate('/')
            }

        }


    }


    return (

        <div className="background d-flex justify-content-center align-items-center">
            <div className="OuterloginBox " id="cardLogin">
                <div className="innerloginBox d-flex">
                    <div id="LeftLogin" className="LoginLeft">
                        <div className="elipseLogo2 my-2">
                            <h3 className="text">
                                MTM App
                            </h3>
                        </div>
                        <img src={'imageLogin.png'} className="imageLogin" />

                    </div>
                    <div id="LoginRight" className="LoginRight d-xx-flex justify-content-center align-items-center">
                        <div>
                            <div id="inputs" className="mx-auto">
                                <div className="mb-3 mx-5">
                                    <Form.Label htmlFor="basic-url" className="textLabel">User Name</Form.Label>
                                    <InputGroup className="mb-3">

                                        <InputGroup.Text id="basic-addon1"><i className="bi bi-person" ></i></InputGroup.Text>
                                        <Form.Control
                                            placeholder="Username"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                            onChange={(value: any) => {
                                                setLogin(value.target.value);
                                            }}
                                        />
                                    </InputGroup>

                                </div>
                                <div className="mb-3  mx-5">
                                    <Form.Label htmlFor="basic-url" className="textLabel">Password</Form.Label>
                                    <InputGroup className="mb-3">

                                        <InputGroup.Text id="basic-addon1"><i className="bi bi-lock-fill" ></i></InputGroup.Text>
                                        <Form.Control
                                            placeholder="Enter Password"
                                            aria-label="Enter Password"
                                            aria-describedby="basic-addon1"
                                            type="password"
                                            onChange={(value: any) => {
                                                setPassword(value.target.value);
                                            }}
                                        />
                                    </InputGroup>
                                </div>
                            </div>
                            <div className="d-grid gap-2 col-8 mx-auto my-5" id="buttons">
                                <div className="d-flex justify-content-center flex-fill">
                                    <button type="button" className="btn btn-outline-light login"
                                        onClick={() => login()}
                                    >Login
                                    </button>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <input className="form-check-input mx-1" type="checkbox" value="" />
                                        <label className="form-check-label textLabel" >
                                            Remember Me
                                        </label>
                                    </div>
                                    <div>
                                        <span className="textLabel" >forgot</span>
                                        <a href="#" className=" mx-1">Password?</a>
                                    </div>
                                </div>
                            </div>

                            <div className="my-5 mx-2 d-flex justify-content-evenly">
                                <button type="button" className="btn btn-danger">Cancel</button>
                                <button type="button" className="btn btn-outline-primary">Sign In</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export { Login }