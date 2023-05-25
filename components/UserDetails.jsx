import React, { useEffect, useState } from "react";
import { useContext } from "react";
import Image from "next/image";

import { idContext } from "@/pages";
import fetchDataFromApi from "@/utills/api";

const UserDetails = () => {
  const { userId } = useContext(idContext);

  // console.log(userId)

  const [state, setState] = useState(null);

  useEffect(() => {
    const fetchUserDetail = async() =>{
      const {userList} = await fetchDataFromApi(`/users/${userId}`);
      
      setState(userList);
    }
    fetchUserDetail();
  }, [userId]);

  console.log(state);

  return (
    <div className="w-[40vw] ">
      {/* <h2 className="font-bold">User Details</h2> */}

      {/* user details starts here */}
      <div className="border-l h-[100vh] mt-[90px] md:mt-auto">

       <div className="relative bg-[pink] w-[100%] h-[250px] "> 
        <Image src={state?.avatar} width='200' height='200' alt="img" className="w-[100%] h-[100%] object-cover blur-[1px]"/>
       
       <div className=" absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center">
       <Image src={state?.avatar} width='100' height='100' alt='img' className=" border-[3px] border-[white] rounded-full"/>
      <h3 className="text-white font-bold  text-[20px] hover:text-[black] cursor-pointer">{state?.profile?.username}</h3>
       </div>
       
        </div>  
  

  <div className="flex flex-col gap-7 pl-10 pr-2 py-5">

  <div>
    <h2 className="font-bold">Full Name</h2>
    <p className="font-semibold text-[25px] text-[grey] border-t-[3px] inline-block"><span>{state?.profile?.firstName}</span> <span >{state?.profile?.lastName}</span></p>
   </div>

   <div>
        <h2 className="font-bold">Email</h2>
        <p className="font-semibold text-[25px] text-[grey] border-t-[3px] inline-block">{state?.profile?.email}</p>
    </div>

    <div>
        <h2 className="font-bold ">Job Tittle</h2>
        <p className="font-semibold text-[25px] text-[grey] border-t-[3px] inline-block">{state?.jobTitle}</p>
    </div>

   <div>
    <h2 className="font-bold border-b-[3px] inline-block">About Me</h2>
    <p className="font-semibold text-[25px] text-[grey] ">{state?.Bio}</p>
   </div>
    
  

  
  </div>

      </div>
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
