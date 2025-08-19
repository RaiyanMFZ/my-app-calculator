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
      </div>
    </div>
  )
}