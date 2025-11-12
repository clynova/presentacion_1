import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="bg-white rounded-xl shadow-lg p-8 text-center max-w-md w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">¡Bienvenido!</h1>
        <p className="text-lg text-gray-600 mb-6">Esta es tu aplicación React + Vite, estilizada con Tailwind CSS.</p>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-200"
          onClick={() => setCount((count) => count + 1)}
        >
          El contador es {count}
        </button>
      </div>
    </div>
  )
}

export default App
