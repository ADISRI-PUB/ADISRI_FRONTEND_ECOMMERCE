import React, { useState } from "react";
import "../Css/IPrePrimary.css";
export default function IPrePrimary() {
  const Class = [
    { id: 1, name: "Play", isChecked: false },
    { id: 2, name: "Nursery", isChecked: false },
    { id: 3, name: "Pre-Primary", isChecked: false },
    { id: 4, name: "Primary", isChecked: false },
  ];
  const Subject = [
    { id: 9, name: "All", isChecked: false },
    { id: 1, name: "English", isChecked: false },
    { id: 2, name: "Hindi", isChecked: false },
    { id: 3, name: "Math", isChecked: false },
    { id: 4, name: "Colouring", isChecked: false },
    { id: 5, name: "Picture", isChecked: false },
    { id: 6, name: "Poem", isChecked: false },
    { id: 7, name: "Evs", isChecked: false },
    { id: 8, name: "Counting", isChecked: false },
  ];
  let [selectedClass, setselectedClass] = useState([]);

  return (
    <>
      <div>
        <div className="selection-section w-1/5 bg-slate-200 p-4 ">
          <p className="text-xl">Class</p>
          
          {Class.map((element) => {
            return (
              <div key={element.id}>
                <input
                  type="checkbox"
                  onChange={() => handleChange(element.id)}
                  name={`${element.name}`}
                  value={`${element.name}`}
                  id={`${element.id}`}
                />
                <label htmlFor={`${element.id}`}>{element.name}</label>
              </div>
            );
          })}
          <br />
          <p className="text-xl">Subjects</p>
          
          {Subject.map((element) => {
            return (
              <div key={element.id}>
                <input
                  type="checkbox"
                  onChange={() => handleChange(element.id)}
                  name={`${element.name}`}
                  value={`${element.name}`}
                  id={`${element.id}`}
                />
                <label htmlFor={`${element.id}`}>{element.name}</label>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
