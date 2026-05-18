import {
  Users,
  Wallet,
  Landmark,
  Clock3,
} from 'lucide-react'

import Card from 'components/Card'



export default function Dashboard() {
  return (
    <div>
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard Overview
        </h1>

        <p className="text-gray-500 mt-1">
          Welcome back admin.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <Card title="Total Members" value="120" icon={<Users size={28} />} color="bg-blue-600" />
        <Card title="Total Savings" value="$50,000" icon={<Wallet size={28} />} color="bg-emerald-600" />
        <Card title="Active Loans" value="25" icon={<Landmark size={28} />} color="bg-orange-500" />
        <Card title="Pending Loans" value="6" icon={<Clock3 size={28} />} color="bg-red-500" />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-10">

        <div className="xl:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">
            Recent Transactions
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between border-b pb-3">
              <div>
                <p className="font-medium">Ram Sharma</p>
                <p className="text-sm text-gray-500">Monthly Saving</p>
              </div>
              <span className="text-green-600">+$200</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <div>
                <p className="font-medium">Sita KC</p>
                <p className="text-sm text-gray-500">Loan Payment</p>
              </div>
              <span className="text-blue-600">+$500</span>
            </div>

            <div className="flex justify-between">
              <div>
                <p className="font-medium">Hari Thapa</p>
                <p className="text-sm text-gray-500">New Loan</p>
              </div>
              <span className="text-red-500">-$2000</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">
            Quick Stats
          </h2>

          <div className="space-y-4 text-sm">
            <div>
              <div className="flex justify-between">
                <span>Loan Recovery</span>
                <span>75%</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded mt-1">
                <div className="bg-blue-600 h-2 rounded w-[75%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between">
                <span>Monthly Collection</span>
                <span>60%</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded mt-1">
                <div className="bg-green-600 h-2 rounded w-[60%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between">
                <span>Growth</span>
                <span>90%</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded mt-1">
                <div className="bg-orange-500 h-2 rounded w-[90%]"></div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}
