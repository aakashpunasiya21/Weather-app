import React from 'react'
import { Alert,Button } from 'react-bootstrap'
import { setcity } from '../actions'
import { useDispatch, useSelector } from 'react-redux'
import weather from '../reducers/dashbord'
import { requestweather } from '../thunk/weatherapi'
export default function Dashboard() {
  const fakeApi = useSelector((state)=>state.weather);
  console.log(fakeApi)
  const dispatch =useDispatch()
  const handlesubmit =(e)=>{
    e.prevent.default();
    dispatch(requestweather(weather))
  }
  return (
    <>
      <Alert variant="success">
        <Alert.Heading>Login Successfull</Alert.Heading>

      </Alert>
    <input type="text" onChange={(e)=>dispatch(setcity(e.target.value))}></input>{" "}
    <Button onClick={handlesubmit}>Search</Button>
    </>
  )
}
