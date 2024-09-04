import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProdcutsCard from '../Components/ProdcutsCard';
import Loader from '../Components/Loader';
import { Helmet } from 'react-helmet';

const BASE_URL = import.meta.env.VITE_URL
function PlayGroup() {
    const [loading,setLoading]=useState(true)
    const [Books,setBooks] =useState([])
    useEffect(()=>{
        const fetchData = async () => {
            try {
               
             const  {data} = await axios.get(`${BASE_URL}/data/products/product/?&class=Play`);
                setBooks(data.results)
                setLoading(false)
              
            } catch (error) {
              // setLoader(false);
              console.log("cant get the data", error);
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
                <div className='min-h-screen bg-[#E4FEFF] py-[3vh] '>
                     <div className="applications">
        <Helmet>
        <title>PlayGroup Books - Adisri Publications</title>
        <meta 
          name="description" 
          content="Explore our Playgroup books, designed to make learning fun with interactive exercises, vibrant visuals, and creative prompts." 
        />
        <meta 
          name="keywords" 
          content="Adisri Publications, online books, personalized book cover, stationery, play books, nursery books, pre-primer books, primer books, school books" 
        />
      </Helmet>

        </div>
                 <img className='fixed z-0  w-[30%] right-0 opacity-85  ' src="playimages.png " alt=""/>
                <h1 className='text-center sm:text-[2.5vw] relative z-20 '>Exclusive Collection Of PlayGroup Books</h1>
                 <div className='w-4/5 m-auto py-5 text-lg text-center relative z-20'>
                     <p>
         Our exclusive play school books stand out not only for their educational value but also for their ability to transform learning into an adventure. Each page is filled with <i className='p-1 bg-[#b4fdff] rounded-lg '>interactive exercises, colorful visuals, and creative prompts</i> that encourage children to explore and express themselves. From foundational language skills in English and Hindi to the basics of Mathematics and Environmental Studies, our books are designed to nurture critical thinking and problem-solving abilities from an early age. The art and activity sections are crafted to stimulate creativity, while our carefully selected rhymes bring joy and rhythm to learning.
         
         What sets our collection apart is the attention to detail in pedagogy, ensuring that every concept is introduced in a way that is both understandable and enjoyable for young learners. We understand that the early years are crucial, and that’s why our books are developed by experts in child education, combining years of research with innovative teaching methods. With our exclusive collection, you’re not just buying books; you’re investing in a learning experience that will shape your child’s future.</p>
                 </div>
                 <div className='py-5'>
                     <div  className="sm:w-[75%] sm:p-5 m-auto   max-sm:w-full  card-container relative  ">
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