import { useReducer } from "react";
import "./Reducer.css";

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: Math.max(0, state.count - 1) };
        case "reset":
            return initialState;
        default:
            throw new Error();
    }
}

function Reducer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="reducer">
            <h1>With Reducer Count {state.count}</h1>
            <div className="button-group">
                <button onClick={() => dispatch({ type: "increment" })}>
                    Increment
                </button>
                <button
                    onClick={() => dispatch({ type: "decrement" })}
                    disabled={state.count === 0}
                >
                    Decrement
                </button>
                <button
                    onClick={() => dispatch({ type: "reset" })}
                    disabled={state.count === 0}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Reducer;
