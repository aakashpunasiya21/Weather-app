import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import { login, setLogin } from '../actions';
export default function Login() {

  const [result, setResult] = useState();
  const data = useSelector((state) => state.loginreducer.data)
  const selector = useSelector((state) => state.loginreducer)
  console.log(data)
  const history = useHistory();
  const { username, password } = data

  const dispatch = useDispatch();

  const handleChnage = (e) => {
    dispatch(setLogin({ ...data, [e.target.name]: e.target.value }))
  }
  const handleClose = () => {
    dispatch(login(false))
  }
  const handleShow = () => {
    dispatch(login(true))
  }

  const DataLoad = async () => {
    axios.get("http://localhost:3002/user").then((response) => {

      (setResult(response.data))
    })
  }

  useEffect(() => {
    DataLoad()
    //localStorage.setItem('lists',JSON.stringify(setResult))
  }, [])

  const loginValidation = () => {

    if (username && password == result.map((user) => user.username && user.password)) {
      history.push('/dasbord')
    }
    else (alert("check username and password"))
  }
  return (
    <div className="container">
      <h2 className="text-center">Weather App</h2>
      <Button variant="primary" className="ml-10" onClick={handleShow}>
        Login
      </Button>
      <Modal show={selector.show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>
            Login Page
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            name="username"
            placeholder="username"
            autoComplete="off"
            className="my-3"
            value={username}
            onChange={handleChnage}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            autoComplete="off"
            value={password}
            onChange={handleChnage}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={loginValidation}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </div>

  )
}

