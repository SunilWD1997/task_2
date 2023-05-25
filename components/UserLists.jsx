import React,{useState} from 'react'
import { useContext } from 'react';
import { loadingContext } from '@/pages';


import ListCard from './ListCard'




const UserLists = ({userList}) => {
  const {  setMobileMenu, mobileMenu } = useContext(loadingContext);
  
    
  return (
    <div className='md:px-2'>
      
   <div className="w-[100vw]  lg:w-auto  text-[20px] font-bold h-[72px] flex items-center gap-3 shadow-lg px-10 rounded-[10px] mb-4 ">
  
   <div className='cursor-pointer' >Users</div> </div>
    
{/* Each users List mapping starts here */}

<div className={`fixed ${mobileMenu?`left-[-100%]`:`left-[0]`} z-50 duration-150 md:relative md:left-[0] grid grid-cols-1 lg:grid-cols-2 gap-x-3  overflow-y-scroll overflow-x-hidden scroll_bar  shadow-lg max-h-[85vh] border px-1 py-[2px] rounded-[10px]`}>
   {userList?.slice(11, userList.length - 1 )?.map((list)=>{
    return <ListCard key={list.id} list={list}/>
   })}
     </div>
     {/* Each users List mapping ends here */}
        
       </div>
  )
}

export default UserLists