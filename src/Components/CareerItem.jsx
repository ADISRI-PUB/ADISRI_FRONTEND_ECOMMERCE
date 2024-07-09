import React from 'react'
import { Link } from 'react-router-dom'

function CareerItem({career}) {
  return (

    <div className="bg-white shadow rounded overflow-hidden my-3 p-3">
       <div class="flex justify-end px-4 pt-4">
      <div className="p-4">
        <Link to={`http://localhost:8000/careers/${career.Carrer_Job_Id}`}>
          <h2 className="text-lg font-semibold">
            {career.Job_Title}
          </h2>
        </Link>
        </div>
        <h5>Experience {career.Experience}</h5>
        <h5>Location {career.Location}</h5>
        <h5>Salary {career.Salary}</h5>
        
      </div>
    </div>
  );
}

export default CareerItem