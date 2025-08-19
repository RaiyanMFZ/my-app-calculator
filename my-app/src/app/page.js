"use client"

import { useState } from "react"

export default function Home() {
  const [screen, setScreen] = useState("0")
  const [firstNum, setFirstNum] = useState(null)
  const [op, setOp] = useState(null)
  const [newNum, setNewNum] = useState(false)

  function pressNumber(n) {
    if (newNum) {
      setScreen(String(n))
      setNewNum(false)
    } else {
      if (screen === "0") {
        setScreen(String(n))
      } else {
        setScreen(screen + n)
      }
    }
  }

  function pressDot() {
    if (!screen.includes(".")) {
      setScreen(screen + ".")
    }
  }

  function clearAll() {
    setScreen("0")
    setFirstNum(null)
    setOp(null)
    setNewNum(false)
  }

  function pressOp(nextOp) {
    const value = parseFloat(screen)

    if (firstNum === null) {
      setFirstNum(value)
    } else if (op) {
      let result = 0
      if (op === "+") result = firstNum + value
      if (op === "-") result = firstNum - value
      if (op === "*") result = firstNum * value
      if (op === "/") result = firstNum / value
      if (op === "=") result = value
      setScreen(String(result))
      setFirstNum(result)
    }
    setOp(nextOp)
    setNewNum(true)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-700 rounded-xl shadow-lg p-4 w-72">
        <div className="bg-black text-green-400 p-2 rounded mb-3 text-right font-mono text-2xl overflow-hidden">
          {screen}
        </div>

        <div className="grid grid-cols-4 gap-2">
          <button onClick={clearAll} className="col-span-2 bg-red-500 text-white p-3 rounded">AC</button>
          <button onClick={() => pressOp("/")} className="bg-yellow-500 text-white p-3 rounded">÷</button>
          <button onClick={() => pressOp("*")} className="bg-yellow-500 text-white p-3 rounded">×</button>

          <button onClick={() => pressNumber(7)} className="bg-gray-300 p-3 rounded">7</button>
          <button onClick={() => pressNumber(8)} className="bg-gray-300 p-3 rounded">8</button>
          <button onClick={() => pressNumber(9)} className="bg-gray-300 p-3 rounded">9</button>
          <button onClick={() => pressOp("-")} className="bg-yellow-500 text-white p-3 rounded">-</button>

          <button onClick={() => pressNumber(4)} className="bg-gray-300 p-3 rounded">4</button>
          <button onClick={() => pressNumber(5)} className="bg-gray-300 p-3 rounded">5</button>
          <button onClick={() => pressNumber(6)} className="bg-gray-300 p-3 rounded">6</button>
          <button onClick={() => pressOp("+")} className="bg-yellow-500 text-white p-3 rounded">+</button>

          <button onClick={() => pressNumber(1)} className="bg-gray-300 p-3 rounded">1</button>
          <button onClick={() => pressNumber(2)} className="bg-gray-300 p-3 rounded">2</button>
          <button onClick={() => pressNumber(3)} className="bg-gray-300 p-3 rounded">3</button>
          <button onClick={() => pressOp("=")} className="bg-green-500 text-white p-3 rounded">=</button>

          <button onClick={() => pressNumber(0)} className="col-span-2 bg-gray-300 p-3 rounded">0</button>
          <button onClick={pressDot} className="bg-gray-300 p-3 rounded">.</button>
        </div>
      </div>
    </div>
  )
}