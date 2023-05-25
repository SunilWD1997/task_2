import React,{useState} from 'react'
import {MdMenu} from 'react-icons/md'
import {RxCross2} from 'react-icons/rx'

import ListCard from './ListCard'

const UserLists = ({userList}) => {

  const[mobileMenu, setMobileMenu]= useState(true);
    
  return (
    <div className='md:px-2'>
      
   <h1 className="w-[100vw] z-50 lg:w-auto  text-[20px] font-bold h-[72px] flex items-center gap-3 shadow-lg px-10 rounded-[10px] mb-4 ">
   <span className='text-[25px]  md:hidden cursor-pointer'>{mobileMenu? <MdMenu/> :<RxCross2/>}  </span>
   <spna>{`Users - Total no of user's are ${userList?.length-11}`}</spna> </h1>

{/* Each users List mapping starts here */}

<div className='fixed left-[-100%] md:relative md:left-[0] grid grid-cols-1 lg:grid-cols-2 gap-x-3  overflow-y-scroll overflow-x-hidden scroll_bar  shadow-lg max-h-[85vh] border px-1 py-[2px] rounded-[10px]'>
   {userList?.slice(11, userList.length - 1 )?.map((list)=>{
    return <ListCard key={list.id} list={list}/>
   })}
     </div>
     {/* Each users List mapping ends here */}
        
       </div>
  )
}

export default UserLists