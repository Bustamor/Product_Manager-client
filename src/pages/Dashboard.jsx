import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';

const Dashboard = () => {
  //STATE
  const [allProducts, setAllProducts]= useState([])
  const[refresh, setRefresh] = useState(false)

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/products`)
        .then(res => setAllProducts(res.data))
        .catch(errors => console.log(errors))
}, [refresh])

  const deleteProduct = (product_id) => {
    axios.delete(`http://localhost:8000/api/products/${product_id}`)
    .then(res => setRefresh(!refresh))
    .catch(errors => console.log(errors))
  }

  return (
    <fieldset>
      <legend>Dashboard.jsx</legend>
      <Table striped boredered hover >
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {
            allProducts.map((product) => {
              const {_id, title, price, description} = product
              return(
                <tr key={_id}>
                  <td>{_id}</td>
                  <td>{title}</td>
                  <td>{price}</td>
                  <td>{description}</td>
                  <td>
                    <Link to={`/products/${_id}`}>View</Link> {' '}
                    <Link to={`/products/edit/${_id}`}>Edit</Link> {' '}
                    <Button size='sm' variant="info" onClick={() =>deleteProduct(_id)} >Delete</Button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </fieldset>

  )
}

export default Dashboard