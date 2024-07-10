import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";

import { listCareersDetails } from "../actions/careerActions";

function SpecificCareer() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const { id } = useParams();
  const careerDetails = useSelector((state) => state.careerDetails);
  const { loading, error, career = [] } = careerDetails;
  useEffect(() => {
    dispatch(listCareersDetails(id));
  }, [dispatch, id]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
          <h1 className="text-2xl font-semibold mb-4">{career.Job_Title}</h1>
          <p className="text-gray-700 mb-2"><strong>Experience:</strong> {career.Experience}</p>
          <p className="text-gray-700 mb-2"><strong>Location:</strong> {career.Location}</p>
          <p className="text-gray-700 mb-2"><strong>Salary:</strong> {career.Salary}</p>
          <p className="text-gray-700 mb-2"><strong>Skills:</strong> {career.Skill}</p>
          <p className="text-gray-700 mb-4"><strong>Send Resume:</strong> {career.Send_Resume}</p>
          <Link to="/careers" className="text-indigo-600 hover:text-indigo-900">
            Back to Careers
          </Link>
        </div>
      )}
    </div>
  );
}

export default SpecificCareer;
