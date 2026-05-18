export default function Card({ title, value, icon, color }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300 border border-gray-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm font-medium">
            {title}
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-3">
            {value}
          </h2>
        </div>

        <div className={`${color} p-4 rounded-2xl text-white`}>
          {icon}
        </div>
      </div>
    </div>
  )
}
