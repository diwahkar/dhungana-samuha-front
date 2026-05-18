import { Link, useLocation, useNavigate } from 'react-router-dom'


export default function Sidebar() {
  const location = useLocation()
  const navigate = useNavigate()

  const isActive = (path) => location.pathname === path

  const handleLogout = () => {
    // remove auth token (adjust based on your backend)
    localStorage.removeItem('token')
    localStorage.removeItem('user')

    // redirect to login page
    navigate('/login')
  }

  return (
    <div className="w-64 bg-gray-900 text-white h-screen flex flex-col fixed">

      {/* HEADER */}
      <div className="p-4 border-b border-gray-700">
        <h1 className="text-xl font-bold">Dhungana Samuha</h1>
        <p className="text-sm text-gray-400">Admin Panel</p>
      </div>

      {/* NAVIGATION */}
      <nav className="flex-1 p-4 space-y-2">

        <Link
          to="/dashboard"
          className={`block p-2 rounded ${
            isActive('/dashboard') ? 'bg-blue-600' : 'hover:bg-gray-700'
          }`}
        >
          Dashboard
        </Link>

        <Link
          to="/members"
          className={`block p-2 rounded ${
            isActive('/members') ? 'bg-blue-600' : 'hover:bg-gray-700'
          }`}
        >
          Members
        </Link>

        <Link
          to="/savings"
          className={`block p-2 rounded ${
            isActive('/savings') ? 'bg-blue-600' : 'hover:bg-gray-700'
          }`}
        >
          Savings
        </Link>

        <Link
          to="/loans"
          className={`block p-2 rounded ${
            isActive('/loans') ? 'bg-blue-600' : 'hover:bg-gray-700'
          }`}
        >
          Loans
        </Link>

        <Link
          to="/interests"
          className={`block p-2 rounded ${
            isActive('/interests') ? 'bg-blue-600' : 'hover:bg-gray-700'
          }`}
        >
          Interests
        </Link>
      </nav>

      {/* LOGOUT SECTION */}
      <div className="p-4 border-t border-gray-700 mt-auto">
        <button
          onClick={handleLogout}
          className="w-full bg-red-600 py-2 rounded"
        >
          Logout
        </button>
      </div>

    </div>
  )
}
