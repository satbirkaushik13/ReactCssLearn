import { useState } from "react";
import "./State.css";

function State() {
    const [count, setCount] = useState(0);

    return (
        <div className="state">
            <h1>With State Count {count}</h1>
            <div className="button-group">
                <button onClick={() => setCount((prevState) => prevState + 1)}>
                    Increment
                </button>
                <button
                    onClick={() =>
                        setCount((prevState) => Math.max(0, prevState - 1))
                    }
                    disabled={count === 0}
                >
                    Decrement
                </button>
                <button onClick={() => setCount(0)} disabled={count === 0}>
                    Reset
                </button>
            </div>
        </div>
    );
}

export default State;
