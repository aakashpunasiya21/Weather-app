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
  }, [])

  const loginValidation= () =>{

    if(username && password==result.map((user)=>user.username&&user.password)){
       history.push('/Dashboard')
    }
    else(alert("check name and user"))
  }


  return (
    <div>
      <h2 className="text-center">Welcome to login page</h2>
      <Button variant="primary" onClick={handleShow}>
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


          <>
            <Button variant="primary" onClick={loginValidation}>
              Login
            </Button>
          </>

        </Modal.Footer>
      </Modal>
    </div>

  )
}

