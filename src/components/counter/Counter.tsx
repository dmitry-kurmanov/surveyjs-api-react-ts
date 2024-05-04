import { useSelector, useDispatch } from 'react-redux'

import type {RootState} from '../../store.ts'
import { decrement, increment } from '../../slices/counterSlice.ts'

export default function Counter() {
    const count = useSelector((state:RootState) => state.counter.value);
    const dispatch = useDispatch();

    return <div>
        <div>
            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>
            <div>count: {count}</div>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>
        </div>
    </div>
}