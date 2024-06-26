

import { decrement, increment, incrementByvalue } from './redux/features/CounterSlice'
import { useAppDispatch, useAppSelector } from './redux/hook'

function App() {
  const {count}= useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch()

  

  return (
    <>
     <p className='text-center text-3xl text-purple-700 font-bold pt-10'>Lear Redux toolkit </p>

     <div className='pt-10 w-full flex justify-center items-center'>
      <div className='flex gap-5 border border-purple-500 bg-slate-200 p-10 rounded-md'>
        <button onClick={() => dispatch(increment())} 
        className='px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white'>Increment
        </button>

        <button onClick={() => dispatch(incrementByvalue(5))} 
        className='px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white'>Increment +5
        </button>

        <h1 className='pt-3 font-bold'>{count}</h1>

        <button
         onClick={() => dispatch(decrement())}
        className='px-3 py-2 rounded-md bg-red-500 text-xl font-semibold text-white'>Decrement
        </button>
      </div>
     </div>
    </>
  )
}

export default App
