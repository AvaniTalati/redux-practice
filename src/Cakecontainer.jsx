import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {buycake} from './Redux/cakeAction'
 function Cakecontainer() {
const  numOfCakes =useSelector(state => state.numOfCakes)
const Dispatch = useDispatch()
    return (
        <div>
            <h2> Number of Cakes{numOfCakes} </h2>
            <button onClick={() => Dispatch(buycake())}> Buy Cake </button>
        </div>
    )
}

export default Cakecontainer;
