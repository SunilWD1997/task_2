import UserLists from "@/components/UserLists";
import UserDetails from "@/components/UserDetails";
import { useState } from "react";
import { createContext } from "react";

import FetchDataFromApi from "@/utills/api";

export const idContext = createContext();
export const loadingContext = createContext();

export default function Home({ userList }) {
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [userId, setUserId] = useState("11");

  return (
    <loadingContext.Provider value={{state, setState,loading, setLoading, error, setError}}>
    <idContext.Provider value={{userId: userId, setUserId: setUserId}}>

      {/* main index.js parent div starts here */}
      <div className="max-w-[100vw] mx-auto flex gap-10  ">

        {/*Nextjs div for design only starts here for large screen rendering */}
         <div className=" bg-[#bdbdbd] text-[white] font-semibold italic text-[50px] w-[20vw] h-[100vh] shadow-lg hidden lg:flex flex-col justify-evenly items-center">
          <span>N</span>
          <span>E</span>
          <span>X</span>
          <span>T</span>
          <span>J</span>
          <span>S</span>
        </div>
        {/*Nextjs div for design only ends here for large screen rendering */}

        {/* User list column starts here */}
        <div className="w-[60vw]">
          <UserLists userList={userList} />
        </div>
        {/* User list column ends here */}

        {/* User details column starts here */}
        <UserDetails />
        {/* User details column ends here */}

      </div>
 {/* main index.js parent div ends here */}
    </idContext.Provider>
    </loadingContext.Provider>
  );
}

// Next.js builtIn function for apicall starts here for all users list 

export async function getStaticProps() {
  const { userList } = await FetchDataFromApi(`/users`);


  return {
    props: { userList },
  };
}

// Next.js builtIn function for apicall ends here for all users list 