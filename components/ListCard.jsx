import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


import { useContext } from 'react';
import { idContext } from '@/pages';



const ListCard = ({list}) => {

    const {setUserId} = useContext(idContext);

  return (
<div onClick={()=>setUserId(list.id)} className='flex items-center gap-2 bg-[#d1d1ff] my-1 py-1 px-2 rounded shadow-lg cursor-pointer border hover:border-w-[2px] hover:border-[#9871f5] duration-100'>
     
    {/* <Image src={list?.avatar} width='35' height='35' alt='img'/> */}
    <Image src={list?.avatar} width='35' height='35' alt='img' className='rounded-full'/>
    <div className='flex items-center gap-2'><span className='font-[500]'>{list?.profile?.firstName}</span>  <span className='font-[500]'>{list?.profile?.lastName}</span></div>
    
    </div>
    
  )
}

export default ListCard