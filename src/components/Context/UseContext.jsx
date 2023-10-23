import React,{useState} from 'react'
export const UserDataContext = React.createContext(null)

function UseContext({children}) {
    let [data,setData] = useState([
        {
          name:"deepa",
          username:'dee123',
          email:'deepa@gmail.com',
          mobile: "1234567890",
          batch: 'B100',
    
        },
        {
          name:"sree",
          username:'sree423',
          email:'sree@gmail.com',
          mobile: "57684567890",
          batch: 'B200',
        }
      ])

  return <UserDataContext.Provider value={{data,setData}}>
   {children}
  </UserDataContext.Provider>
}

export default UseContext

