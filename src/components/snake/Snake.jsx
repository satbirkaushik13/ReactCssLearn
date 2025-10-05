import React, { useState, useEffect, useRef } from "react";
import "./Snake.css";

const GRID_SIZE = 20;

function SnakeGame() {
    const [snake, setSnake] = useState([{ x: 10, y: 10 }]); // starting point
    const [food, setFood] = useState({ x: 5, y: 5 });
    const [direction, setDirection] = useState("RIGHT");
    const [gameOver, setGameOver] = useState(false);

    // Listen to keyboard
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "ArrowUp" && direction !== "DOWN") setDirection("UP");
            if (e.key === "ArrowDown" && direction !== "UP")
                setDirection("DOWN");
            if (e.key === "ArrowLeft" && direction !== "RIGHT")
                setDirection("LEFT");
            if (e.key === "ArrowRight" && direction !== "LEFT")
                setDirection("RIGHT");
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [direction]);

    // Game loop
    useEffect(() => {
        if (gameOver) return;
        const interval = setInterval(moveSnake, 200);
        return () => clearInterval(interval);
    }, [snake, direction, gameOver]);

    // Move snake
    const moveSnake = () => {
        const newSnake = [...snake];
        const head = { ...newSnake[0] };

        if (direction === "UP") head.x -= 1;
        if (direction === "DOWN") head.x += 1;
        if (direction === "LEFT") head.y -= 1;
        if (direction === "RIGHT") head.y += 1;

        // Collision with wall
        if (
            head.x < 0 ||
            head.x >= GRID_SIZE ||
            head.y < 0 ||
            head.y >= GRID_SIZE
        ) {
            setGameOver(true);
            return;
        }

        // Collision with self
        if (newSnake.some((part) => part.x === head.x && part.y === head.y)) {
            setGameOver(true);
            return;
        }

        newSnake.unshift(head);

        // Eating food
        if (head.x === food.x && head.y === food.y) {
            setFood({
                x: Math.floor(Math.random() * GRID_SIZE),
                y: Math.floor(Math.random() * GRID_SIZE),
            });
        } else {
            newSnake.pop();
        }

        setSnake(newSnake);
    };

    return (
        <div>
            <h2>Snake Game</h2>
            {gameOver && <h3>Game Over!</h3>}
            <div className="board">
                {Array.from({ length: GRID_SIZE }).map((_, row) => (
                    <div className="row" key={"row-" + row}>
                        {Array.from({ length: GRID_SIZE }).map((_, col) => {
                            const isSnake = snake.some(
                                (s) => s.x === col && s.y === row
                            );
                            const isFood = food.x === col && food.y === row;
                            return (
                                <div
                                    key={"col-" + col}
                                    className={`cell ${
                                        isSnake ? "snake" : ""
                                    } ${isFood ? "food" : ""}`}
                                ></div>
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SnakeGame;
