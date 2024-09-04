import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProdcutsCard from '../Components/ProdcutsCard';
import Loader from '../Components/Loader';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { Helmet } from 'react-helmet';
const BASE_URL = import.meta.env.VITE_URL
function Nursery() {
    const history = useNavigate()
    const [loading,setLoading]=useState(true)
    const [Books,setBooks] =useState([])
    useEffect(()=>{
       
        const fetchData = async () => {
            try {
               
             const  {data} = await axios.get(`${BASE_URL}/data/products/product/?&class=Nursery`);
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
                <div className='min-h-screen bg-[rgb(255,241,208)] py-[3vh] '>
                    <div className="applications">
        <Helmet>
        <title> Nursery Books - Adisri Publications</title>
        <meta 
          name="description" 
          content="Explore our Nursery books covering early literacy, basic numeracy, and Environmental Studies. " 
        />
        <meta 
          name="keywords" 
          content="Adisri Publications, online books, personalized book cover, stationery, play books, nursery books, pre-primer books, primer books, school books" 
        />
      </Helmet>

        </div>

                <h1 className='text-center sm:text-[2.5vw] max-sm:text-lg relative z-20 '>Exclusive Collection Of Nursery Books</h1>
                 <img className='z-0 nursery w-[30%] max-sm:w-4/5 m-auto opacity-85  ' src="nursery.png " alt=""/>
                 <div className='w-4/5 max-sm:w-full m-auto py-5 text-lg text-center relative z-20 nursertext'>
                     <p>
                     The collection covers a wide range of foundational subjects, including early literacy in English and Hindi, basic numeracy, and an introduction to the world around them through Environmental Studies. But what truly sets our nursery books apart is their focus on holistic development. Through a blend of playful activities, creative art projects, and delightful rhymes, our books help children develop fine motor skills, enhance their creativity, and build a love for learning from the very beginning.

Developed by a team of early childhood education experts, our nursery books are designed to align with the developmental milestones of this crucial stage. We believe that the first years of learning should be filled with joy, exploration, and imagination, and our exclusive collection is crafted to provide just that. With our nursery books, you’re not just introducing your child to the basics; you’re nurturing a lifelong passion for knowledge and discovery.
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

export default Nursery