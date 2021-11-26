import React from 'react'
import { Alert, Button, ListGroup } from 'react-bootstrap'
import { setcity } from '../actions'
import { useDispatch, useSelector } from 'react-redux'
import { requestweather } from '../thunk/weatherapi'
import { useHistory } from 'react-router'

export default function Dashboard() {
  const fakeApi = useSelector((state) => state.weather.api);
  const cityName = useSelector((state) => state.weather.city);
  console.log(fakeApi)
  console.log(cityName)
  const dispatch = useDispatch()
  const handlesubmit = () => {
    dispatch(requestweather(cityName))
  }
  const history = useHistory();
  const newpage = () => {
    history.push(`/History`)
  }
  return (
    <>
      <Alert variant="success">
        <Alert.Heading>Login Successfull</Alert.Heading>
      </Alert>
      <input type="text" placeholder="Enter city name" onChange={(e) => dispatch(setcity(e.target.value))}></input>{" "}
      <Button onClick={handlesubmit}>Search</Button>{" "}
      <Button onClick={newpage}>History</Button>
      {fakeApi.map(data => (
        <>
          <ul>
            <ListGroup variant="flush">
              <ListGroup.Item>City : {data.name}</ListGroup.Item>
              <ListGroup.Item>Country Code : {data.sys.country}</ListGroup.Item>
              <ListGroup.Item>Weather : {data.weather[0].description}</ListGroup.Item>
              <ListGroup.Item>Wind speed : {data.wind.speed}</ListGroup.Item>
              <ListGroup.Item>Main (humidity) : {data.main.humidity}</ListGroup.Item>
            </ListGroup>
          </ul>

        </>
      ))
      }
    </>
  )
}
