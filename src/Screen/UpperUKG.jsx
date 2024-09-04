import React, { useEffect, useState} from 'react'
import axios from 'axios'
import ProdcutsCard from '../Components/ProdcutsCard';
import Loader from '../Components/Loader';
import { useNavigate } from 'react-router-dom';

const BASE_URL = import.meta.env.VITE_URL
function UpperUKG() {
    const history = useNavigate()
    const [loading,setLoading]=useState(true)
    const [Books,setBooks] =useState([])
    useEffect(()=>{
        const fetchData = async () => {
            try {
               
             const  {data} = await axios.get(`${BASE_URL}/data/products/product/?&class=Primer`);
                setBooks(data.results)
                setLoading(false)
              
            } catch (error) {
              // setLoader(false);
              console.log("cant get the data", error);
              history('/error')
            }
            finally{
           
            }
          };
          fetchData();
    },[])
  
  return (
    <div className='relative'>
        {
            loading ?(
                <div className='min-h-screen flex  justify-center relative'>
                <Loader/>
                </div>
            ):(
                <div className='min-h-screen bg-[rgb(255,213,213)] py-[3vh] '>
                <h1 className='text-center sm:text-[2.5vw] max-sm:text-lg relative z-20 '>Exclusive Collection Of UpperUKG Books</h1>
                 <img className='z-0  w-[30%] max-sm:w-4/5 m-auto opacity-85  ' src="nursery3.png " alt=""/>
                 <div className='w-4/5 max-sm:w-full m-auto py-5 text-lg text-center relative z-20'>
                     <p>
                     Welcome to our collection of high-quality UKG (Upper Kindergarten) books, designed to inspire young minds. Our carefully curated selection includes a wide range of subjects, from English and Mathematics to Art and Environmental Studies. We believe in nurturing curiosity and creativity in every child, which is why our books are not just educational but also engaging and fun. With a focus on innovative content and attractive designs, we aim to make learning a delightful experience for both children and educators. Explore our collection and give your little ones the tools they need to excel in their early educational journey.
        </p>
                 </div>
                 <div className='py-5'>
                     <div  className="sm:w-[80%]  sm:p-5 m-auto   max-sm:w-full  card-container relative  ">
                            {
                                
                                Books ?(
                                    <>
                                    {
                                        Books.map((book,index)=>{
                                            return(
                                                <div key={index}>
                                                  <ProdcutsCard product={book} id={1}/>
                                                </div>
                                            )
                                        })
                                      
                                       
                                        
                                    }
                                    </>
                                ):(
                                    <Loader/>
                                )
                            }
                     </div>
                 </div>
                 </div>  
            )
        }
       
    </div>
  )
}

export default UpperUKG