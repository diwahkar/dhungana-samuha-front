import Sidebar from 'components/Sidebar'


export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />

      <div className="ml-64 p-6">
        {children}
      </div>
    </div>
  )
}
