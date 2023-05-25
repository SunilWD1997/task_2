// import { useEffect } from "react"

import UserLists from "@/components/UserLists";
import UserDetails from "@/components/UserDetails";
import { useState } from "react";
import { createContext } from "react";

import  FetchDataFromApi  from "@/utills/api";



export const idContext = createContext();

export default function Home( {userList} ) {

  

  const[userId, setUserId] =useState('11')

  // console.log(userLists);

  // const fetchData = async() =>{
     
  //   const res = await fetch('https://602e7c2c4410730017c50b9d.mockapi.io/users');
  //   const users = await res.json();
  //   console.log(users)
  // }

  // useEffect(()=>{ 
  //   fetchData()

  //  }, [fetchData])

  return (

<idContext.Provider value={{userId: userId , setUserId: setUserId}}>

<div className="max-w-[100vw] mx-auto flex gap-10  "> 

{/* div for design only starts here*/}

<div className=" bg-[#bdbdbd] text-[white] font-semibold italic text-[50px] w-[20vw] h-[100vh] shadow-lg hidden lg:flex flex-col justify-evenly items-center">

  <span className="nextjs">N</span><span>E</span><span>X</span><span>T</span><span>J</span><span>S</span>
</div>
{/* div for design ends only */}

{/* User list column starts here */}
<div className="w-[60vw]">

<UserLists userList={userList} />

</div>
{/* User list column ends here */}


{/* User details column starts here */}
<UserDetails />
{/* User details column ends here */}
</div>

  </idContext.Provider>
  )
}



// export async function getStaticProps() {

//   const data = await fetch("https://602e7c2c4410730017c50b9d.mockapi.io/users");
//   const userLists = await data.json();
//   console.log(userLists);


//   return{
//     props: {userLists },
//   };
// }

export async function getStaticProps() {

  const  {userList}  = await FetchDataFromApi(`/users`);
  // const userList = await userData.json();
  
  console.log(userList);
  

  return{
    props: { userList },
  };
}