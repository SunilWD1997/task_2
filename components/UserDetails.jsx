import React, { useEffect, useState } from "react";
import { useContext } from "react";
import Image from "next/image";


import {MdMenu} from 'react-icons/md'
import {RxCross2} from 'react-icons/rx'
import {MdOutlineEmail, MdWorkOutline} from 'react-icons/md'
import {BsPersonGear, BsPersonVcard} from 'react-icons/bs'




import { idContext } from "@/pages";
import { loadingContext } from "@/pages";
import fetchDataFromApi from "@/utills/api";
import Loader from "./Loader";

const UserDetails = () => {
  const[state, setState] =useState(null);
  const { userId } = useContext(idContext);
  const {  error, setError, loading, setLoading, setMobileMenu, mobileMenu } = useContext(loadingContext);

  // console.log(userId)

 
  

  useEffect(() => {
    const fetchUserDetail = async() =>{
try {
  setLoading(true)
  const {userList} = await fetchDataFromApi(`/users/${userId}`);
      setState(userList);

} catch (error) {
  setError(true);
}
setLoading(false);
      
    }
    fetchUserDetail();
  }, [userId]);

  console.log(state);

  return (
    <div className=" fixed top-[0] w-[100vw]  md:relative md:w-[50vw] lg:auto shadow-lg">
      {/* <h2 className="font-bold">User Details</h2> */}
      {/* mobilmenu starts here */}
       <div onClick={()=>setMobileMenu(!mobileMenu)} className="md:hidden cursor-pointer absolute top-[50px] shadow-lg border bg-[white] z-40 w-[40px] h-[40px] rounded-full flex justify-center items-center hover:bg-[grey]">{mobileMenu?<MdMenu className="text-[22px]"/>: <RxCross2 className="text-[22px]"/>}</div>
      {/* mobilmenu starts here */}
      {/* user details starts here */}
    {error? <div className="sticky top-[50%] px-4 text-[20px] text-[red] font-semibold">Something went wrong!</div>: loading? <Loader></Loader> : <div className="border-l h-[100vh] mt-[90px] md:mt-auto">

       <div className="relative bg-[pink] w-[100%] h-[250px] "> 
        <Image src={state?.avatar} width='200' height='200' alt="img" className="w-[100%] h-[100%] object-cover blur-[1px]"/>
       
       <div className=" absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center">
       <Image src={state?.avatar} width='100' height='100' alt='img' className=" border-[3px] border-[white] rounded-full"/>
      <h3 className="text-white font-bold  text-[20px] hover:text-[black] cursor-pointer">{state?.profile?.username}</h3>
       </div>
       
        </div>  
  

  <div className="flex flex-col gap-7 pl-10 pr-2 py-5">

    <div>
      <div className="flex items-center gap-2"><BsPersonVcard className="text-[18px]"/><h2 className="font-bold">Full Name</h2></div>
    
    <p className="font-semibold text-[25px] text-[grey] border-t-[3px] inline-block"><span>{state?.profile?.firstName}</span> <span >{state?.profile?.lastName}</span></p>
   </div>

   <div>
    <div className="flex items-center gap-2"><MdOutlineEmail className="text-[20px]"/> <h2 className="font-bold">Email</h2></div>
        
        <p className="font-semibold text-[25px] text-[grey] border-t-[3px] inline-block">{state?.profile?.email}</p>
    </div>

    <div>
      <div className="flex items-center gap-1"><MdWorkOutline className="text-[20px]"/> <h2 className="font-bold ">Job Tittle</h2></div>
        
        <p className="font-semibold text-[25px] text-[grey] border-t-[3px] inline-block">{state?.jobTitle}</p>
    </div>

   <div>
    <div className="flex items-center gap-1"><BsPersonGear className="text-[20px]"/><h2 className="font-bold border-b-[3px] inline-block">About Me</h2></div>
    
    <p className="font-semibold text-[25px] text-[grey] ">{state?.Bio}</p>
   </div>
    
  

  
  </div>

      </div>}
      {/* user details ends here */}


    </div>
  );
};

// export async function getStaticPaths() {
//     const userLists = await fetchDataFromApi("/users");
    
//     const paths = userLists?.map((list)=>{
//      return{ 
//       params:{ 
//         id: list.id
//       }
//     }
//     })
//     // console.log(userLists);

//     return{
//       paths,
//       fallback: false
//     };

// }

// export async function getStaticProps({params: {id}}) {
//     const userDetails = await fetchDataFromApi(`/users/${userId}`);
    
//     console.log(userDetails);

//     return{
//       props: {userDetails },
//     };

// }

export default UserDetails;
