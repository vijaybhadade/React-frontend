import { useDispatch, useSelector } from "react-redux";
import { Increment, Decrement, FiveCounterIncre } from "../Redux/Features/counterSlice.js";
import {useState} from "react";
const Counter = () => {
    const dispatch = useDispatch();//It is perform changes
    const count = useSelector((state) => state.counter.value);//That showcase counter current value
    const[num,setNum]=useState(0);
    return (
        <div  >
            <h1 className=" flex items-center ">This is counter page!</h1>
            <div className=" flex justify-center items-center flex-col ">
                <h2>{count}</h2>
                <button onClick={() => dispatch(Increment())}
                    className=" border-2 border-green-800 active:scale-95 cursor-pointer  font-semibold hover:bg-green-400  rounded-2xl mt-3 py-2 px-2"
                >Increment
                </button>
                <button onClick={() => dispatch(Decrement())}
                    className=" border-2 border-green-800 active:scale-95 cursor-pointer  font-semibold hover:bg-green-400 py-2 px-2  rounded-2xl mt-3"
                >
                    Decrement
                </button>
                <input type="number" value={num} onChange={(e)=>setNum(e.target.value)} className="py-3 px-2 m-3 border-2 border-amber-950" />
                <button onClick={() => dispatch(FiveCounterIncre(Number(num)))}
                    className=" border-2 border-green-800 active:scale-95 cursor-pointer  font-semibold hover:bg-green-400 py-2 px-2  rounded-2xl mt-3"
                >
                    Increse by amount
                </button>
            </div>
        </div>
    )
}

export default Counter;
