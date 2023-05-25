import React from 'react';
import Image from 'next/image';



import { useContext } from 'react';
import { idContext } from '@/pages';



// const ListCard = ({list}) => {

//     const {setUserId} = useContext(idContext);

//   return (
//     <div onClick={()=>setUserId(list?.id)} >
// <label  className='flex items-center gap-2 bg-[#d1d1ff] my-1 py-1 px-2 rounded shadow-lg cursor-pointer border hover:border-w-[2px] hover:border-[#9871f5] duration-100'>
// <input type="radio" className=" peer sr-only" name="userDetails" />
    

          
//             <div className="flex items-center gap-2 rounded-md bg-white py-1 px-3  text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:bg-[#f1fff5] peer-checked:text-[#47BA68] peer-checked:ring-[#47BA68] peer-checked:ring-offset-1">
            
//             <Image src={list?.avatar} width='35' height='35' alt='img' className='rounded-full'/>
//     <div className='flex items-center gap-2'><span className='font-[500]'>{list?.profile?.firstName}</span>  <span className='font-[500]'>{list?.profile?.lastName}</span></div>
    
             
          

//         </div>

   
//     </label>
//     </div>
//   )
// }

// export default ListCard



{/* <label className="w-[100%] cursor-pointer border-[3px]  rounded-[4px]">
        <input type="radio" className=" peer sr-only" name="pricing" />

        <div className=" max-w-xl rounded-md bg-white py-1 px-3  text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:bg-[#f1fff5] peer-checked:text-[#47BA68] peer-checked:ring-[#47BA68] peer-checked:ring-offset-1">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between h-[40px]">
            
             
             
                 
                </div>
          </div>

        </div>
      </label> */}









      const ListCard = ({list}) => {

        const {setUserId} = useContext(idContext);
      
      return (
      <label htmlFor={list?.id} onClick={()=>setUserId(list.id)} className='flex items-center gap-2 bg-[#d1d1ff] my-1 py-1 px-2 rounded shadow-lg cursor-pointer border hover:border-w-[2px] hover:border-[#9871f5] duration-100 '>
         
         <input type="radio"  className= "peer hidden " name="userDetails" id={list?.id}  />
         <div className='flex items-center gap-2   rounded-md bg-white py-1 px-3  text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:bg-[#d7caf5] peer-checked:text-[#7c47f8] peer-checked:ring-[#9871f5] peer-checked:ring-offset-1'>
        <Image src={list?.avatar} width='35' height='35' alt='img' className='rounded-full'/>
        <div className='flex items-center gap-2 '><span className='font-[500]'>{list?.profile?.firstName}</span>  <span className='font-[500]'>{list?.profile?.lastName}</span></div>
        </div>
        </label>
        
      )
      }
      
      export default ListCard




// Root component---------------------------------------

// const ListCard = ({list}) => {

//   const {setUserId} = useContext(idContext);

// return (
// <label onClick={()=>setUserId(list.id)} className='flex items-center gap-2 bg-[#d1d1ff] my-1 py-1 px-2 rounded shadow-lg cursor-pointer border hover:border-w-[2px] hover:border-[#9871f5] duration-100'>
   
//   {/* <Image src={list?.avatar} width='35' height='35' alt='img'/> */}
//   <Image src={list?.avatar} width='35' height='35' alt='img' className='rounded-full'/>
//   <div className='flex items-center gap-2'><span className='font-[500]'>{list?.profile?.firstName}</span>  <span className='font-[500]'>{list?.profile?.lastName}</span></div>
  
//   </div>
  
// )
// }

// export default ListCard