import React from 'react'
import { fetchUsers } from '.';
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux';
import {useEffect} from 'react'

function Usercontainer() {

 const userdata = useSelector(state => state)
  const Dispatch = useDispatch()
    useEffect(()=>{
        Dispatch(fetchUsers())
    },[])

    return  userdata.loading ?(
        <h2> Loading </h2>
    ) : userdata.error?(
        <h2>{userdata.error}</h2>  
    ): (
        <div>
            <h2>user list </h2>
            <div>
            {userdata && userdata.users && userdata.users.map((user,id) => <p key={id}> {user.name}</p>)}
            </div>
        </div>
        
        
    )
        // <div>
        //     <h2>users</h2>
            {/* <button onClick={() => Dispatch(fetchUsers())}> Display </button> */}
        // </div>
        
   
}
export default Usercontainer;