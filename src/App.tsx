import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./redux/counter/counterSlice";

function App() {

  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex min-h-[300px] items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-lg">
        <h2 className="mb-6 text-2xl font-bold text-gray-800">Counter</h2>

        <div className="mb-8 text-6xl font-bold text-gray-900">{value}</div>

        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => dispatch(decrement())}
            className="rounded-lg bg-red-500 px-5 py-3 text-xl font-bold text-white transition hover:bg-red-600">
            −
          </button>

          <button className="rounded-lg bg-gray-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-900">
            Reset
          </button>

          <button
            onClick={() => dispatch(increment())}
            className="rounded-lg bg-green-500 px-5 py-3 text-xl font-bold text-white transition hover:bg-green-600">
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
