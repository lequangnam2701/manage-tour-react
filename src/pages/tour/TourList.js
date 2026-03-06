import { useEffect, useState } from "react";
import axios from "axios";

function TourList() {

  const [tours, setTours] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/tours")
      .then(res => setTours(res.data));
  }, []);

  return (
    <div>

      <h2>Manage Tour</h2>

      <table className="table">

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {tours.map(tour => (
            <tr key={tour.id}>
              <td>{tour.id}</td>
              <td>{tour.name}</td>
              <td>{tour.price}</td>

              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default TourList;