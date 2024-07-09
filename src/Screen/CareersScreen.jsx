import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listCareers } from '../actions/careerActions';
import CareerItem from '../Components/CareerItem'

function CareersScreen() {
    const dispatch = useDispatch();
    const careerList = useSelector(state => state.careerList);
    const { error, loading, careers = [] } = careerList;
  
     useEffect(() => {
       dispatch(listCareers());

 }, [dispatch]);
  
    return (
      <div>
     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, doloremque.</p>
        {/* {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
             <h1>Current Openings</h1>
            {careers.map(career => (
              <div key={career.Carrer_Job_Id} className="col-span-1">
                <CareerItem career={career} />
              </div>
            ))}
          </div>
        )} */}

      </div>
    );
  }

export default CareersScreen