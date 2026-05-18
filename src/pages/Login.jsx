import { useNavigate } from 'react-router-dom'



export default function Login() {
  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow w-96">
        <h1 className="text-xl font-bold mb-5">Login</h1>

        <input className="border p-2 w-full mb-3" placeholder="Email" />
        <input className="border p-2 w-full mb-3" placeholder="Password" type="password" />

        <button
          onClick={() => navigate('/dashboard')}
          className="bg-blue-600 text-white w-full py-2"
        >
          Login
        </button>
      </div>
    </div>
  )
}
