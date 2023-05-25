import React from 'react'
// import Image from 'next/image'

import ListCard from './ListCard'

const UserLists = ({userList}) => {

    console.log(userList)
  return (
    <div className='md:px-2'>
   <h1 className="w-[100vw] z-50 lg:w-auto  text-[20px] font-bold h-[72px] flex items-center shadow-lg px-10 rounded-[10px] mb-4">{`Users - Total no of user's are ${userList?.length-11}`}</h1>

{/* Each users List mapping starts here */}

<div className='grid grid-cols-1 lg:grid-cols-2 gap-x-3  overflow-y-scroll overflow-x-hidden scroll_bar  shadow-lg max-h-[85vh] border px-1 py-[2px] rounded-[10px]'>
   {userList?.slice(11, userList.length - 1 )?.map((list)=>{
    return <ListCard key={list.id} list={list}/>
   })}
     </div>
     {/* Each users List mapping ends here */}
        
       </div>
  )
}

export default UserLists