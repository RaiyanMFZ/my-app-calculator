'use client'

import { useState } from 'react'

export default function Page() {
  const [screen] = useState('0')

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 rounded-xl shadow-lg p-6 w-72">
        <div className="bg-black text-green-400 p-2 rounded mb-3 text-right overflow-hidden">
          {screen}
        </div>
        <div className="grid grid-cols-4 gap-2">
          <button className="bg-red-700 text-white p-2 rounded">AC</button>
          <button className="bg-yellow-500 text-white p-2 rounded">/</button>
          <button className="bg-yellow-500 text-white p-2 rounded">*</button>
          <button className="bg-yellow-500 text-white p-2 rounded">C</button>

          <button className="bg-gray-300 text-white p-2 rounded">7</button>
          <button className="bg-gray-300 text-white p-2 rounded">8</button>
          <button className="bg-gray-300 text-white p-2 rounded">9</button>
          <button className="bg-yellow-500 text-white p-2 rounded">-</button>

          <button className="bg-gray-300 text-white p-2 rounded">4</button>
          <button className="bg-gray-300 text-white p-2 rounded">5</button>
          <button className="bg-gray-300 text-white p-2 rounded">6</button>
          <button className="bg-yellow-500 text-white p-2 rounded">+</button>

          <button className="bg-gray-300 text-white p-2 rounded">1</button>
          <button className="bg-gray-300 text-white p-2 rounded">2</button>
          <button className="bg-gray-300 text-white p-2 rounded">3</button>
          <button className="bg-yellow-500 text-white p-2 rounded">=</button>

          <button className="bg-gray-300 text-white p-2 rounded">0</button>
          <button className="bg-gray-300 text-white p-2 rounded">.</button>
        </div>
      </div>
    </div>
  )
}