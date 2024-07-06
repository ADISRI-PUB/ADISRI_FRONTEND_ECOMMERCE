import React,{useState} from 'react'
import FilterTAb from '../Components/FilterTAb';

function Ionetoeight() {
  const [Class, setClass] = useState([
    { id: 1, name: "1", isChecked: false },
    { id: 2, name: "2", isChecked: false },
    { id: 3, name: "3", isChecked: false },
    { id: 4, name: "4", isChecked: false },
    { id: 5, name: "5", isChecked: false },
    { id: 6, name: "6", isChecked: false },
    { id: 7, name: "7", isChecked: false },
    { id: 8, name: "8", isChecked: false },
  ]);
  const [Subject, setSubject] = useState([
    { id: 9, name: "All", isChecked: false },
    { id: 10, name: "Computer", isChecked: false },
    { id: 11, name: "Conversation", isChecked: false },
    { id: 12, name: "Math", isChecked: false },
    { id: 13, name: "Drawing", isChecked: false },
    { id: 14, name: "English", isChecked: false },
    { id: 15, name: "English Grammer", isChecked: false },
    { id: 16, name: "General Knowledge", isChecked: false },
    { id: 17, name: "Geography And History", isChecked: false },
    { id: 18, name: "Hindi", isChecked: false },
    { id: 19, name: "Hindi Grammer", isChecked: false },
    { id: 20, name: "Moral Value", isChecked: false },
    { id: 21, name: "Sanskrit", isChecked: false },
    { id: 22, name: "Science", isChecked: false },
    { id: 23, name: "Social Science", isChecked: false },
    { id: 24, name: "Social Studies", isChecked: false },
    { id: 25, name: "Urdu", isChecked: false },
  ]);

 
  return (
    <>
       <div>
        <FilterTAb Class={Class} Subject={Subject}/>
      </div>
    </>
  )
}

export default Ionetoeight