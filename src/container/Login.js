import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import { showform } from '../actions';
//import { loginReducer } from '../reducers/loginReducer';
//import loginreducer from '../reducers/loginreducer';
export default function Login() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.loginreducer.show)
  
  const handleClose = () => dispatch(showform(false));
  const handleShow = () => dispatch(showform(true));


  const [Details, setDetails] = useState({
    name: "",
    password: ""
  })
  const { name, password } = Details
  const handlechnage = (e) => {
    setDetails({ ...Details, [e.target.name]: e.target.value })
  }
  const history = useHistory
  const chnagepage = () => {
    history.push("/chnagepage")
  }

  return (
    <div>
      <h2 className="text-center">Welcome to login page</h2>
      <Button variant="primary" onClick={handleShow}>
        Login
      </Button>
      <Modal show={selector} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>
            Login Page
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            name="name"
            placeholder="username"
            className="my-3"
            value={name}
            onChange={handlechnage}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={handlechnage}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleClose}>Login</Button>
          {/* {users.map((item) => (
            <>
              <Button
                variant="primary"
                onClick={() => loginValidation(item.username, item.password)}>
                Login
              </Button>
            </>
          ))} */}
        </Modal.Footer>
      </Modal>
    </div>

  )
}

