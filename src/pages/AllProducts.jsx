import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllProducts = () => {
  //STATE
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => setAllProducts(res.data))
      .catch((errors) => console.log(errors));
  }, [refresh]);

  const dateFormat = (dateString) => {
    let dateObj = new Date(dateString);
  };

  return (
    <fieldset>
      <legend>AllProducts.jsx</legend>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {allProducts.map((product) => {
            const { _id, title, Price, description } = product;
            return (
              <tr key={_id}>
                <td>{_id}</td>
                <td>{title}</td>
                <td>{Price}</td>
                <td>{description}</td>

                <td>
                  <Link to={`/products/${_id}`}>View</Link>
                  <Link to={`/products/edit/${_id}`}>Edit</Link>
                  {/* <button onClick={() => deleteProduct(_id)}>Delete</button> */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </fieldset>
  );
};

export default AllProducts;
