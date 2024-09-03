import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProdcutsCard from '../Components/ProdcutsCard';
import Loader from '../Components/Loader';
import { useNavigate } from 'react-router-dom';
const BASE_URL = import.meta.env.VITE_URL
function PlayGroup() {
  const history = useNavigate()
    const [loading,setLoading]=useState(true)
    const [Books,setBooks] =useState([])
    useEffect(()=>{
        const fetchData = async () => {
            try {
               
             const  {data} = await axios.get(`${BASE_URL}/data/products/product/?&class=Pre - Primer`);
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
                <div className='min-h-screen bg-[rgb(226,253,228)] py-[3vh] '>
                <h1 className='text-center sm:text-[2.5vw] max-sm:text-lg relative z-20 '>Exclusive Collection Of Nursery Books</h1>
                 <img className='z-0  w-[30%] max-sm:w-4/5 m-auto opacity-85  ' src="nursery2.png " alt=""/>
                 <div className='w-4/5 max-sm:w-full m-auto py-5 text-lg text-center relative z-20'>
                     <p>
                     Explore our exclusive collection of LKG (Lower Kindergarten) books, carefully designed to bridge the gap between early learning and more structured education. Each book in this collection is tailored to meet the growing curiosity and expanding cognitive abilities of LKG students, offering a perfect blend of play and learning. Our LKG books cover a comprehensive range of subjects, including English, Hindi, Mathematics, Environmental Studies, Art, and Rhymes, all designed to build a strong academic foundation.

What makes our LKG collection unique is its focus on interactive learning. The books are filled with vibrant illustrations, engaging exercises, and fun activities that encourage children to think critically and independently. Whether it’s learning the basics of counting, recognizing letters and sounds, or understanding the world around them, our LKG books present concepts in a way that’s both enjoyable and educational.

The collection also emphasizes creativity and imagination, with art projects and rhymes that inspire self-expression and artistic growth. Developed by education experts, our LKG books are aligned with key developmental milestones, ensuring that your child is not only prepared for the next stage of their education but also excited about it. With our exclusive LKG collection, you’re providing your child with the tools they need to succeed, all while making learning a fun and rewarding experience.
        </p>
                 </div>
                 <div className='py-5'>
                     <div  className="sm:w-[80%] sm:p-5 m-auto   max-sm:w-full  card-container relative  ">
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

export default PlayGroup