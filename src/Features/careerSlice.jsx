import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_URL 
export const careerSlice =createSlice({
    name:'career',
    initialState:{
        career:[]
    },
    reducers:{
        careerList:(state,action)=>{
             try {
                  const {data} =axios.get(`${BASE_URL}/data/careers/`)
                  state.career.push(data)      
             } catch (error) {
                    
             }
             
        }
    }
})