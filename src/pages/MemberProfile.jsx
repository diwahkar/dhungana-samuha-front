import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import api from 'api'



export default function MemberProfile() {

  const { id } = useParams()

  const [member, setMember] = useState(null)
  const [savings, setSavings] = useState([])
  const [loans, setLoans] = useState([])
  const [interests, setInterests] = useState([])

  // FETCH EVERYTHING
  useEffect(() => {

    fetchMember()
    fetchSavings()
    fetchLoans()
    fetchInterests()

  }, [])

  // MEMBER
  const fetchMember = async () => {
    const res = await api.get(`/members/${id}`)
    console.log('fetching member')
    setMember(res.data)
  }

  // MONTHLYSAVINGS
  const fetchSavings = async () => {
    const res = await api.get(`/savings/member/${id}`)
    setSavings(res.data)
  }

  // LOANS
  const fetchLoans = async () => {
    const res = await api.get(`/loans/member/${id}`)
    setLoans(res.data)
  }

    // MONTHLYSAVINGS
  const fetchInterests = async () => {
    const res = await api.get(`/interests/member/${id}`)
    setInterests(res.data)
  }



  if (!member) {
    return <p>Loading...</p>
  }

  return (
    <div>

      {/* HEADER */}
      <div className="mb-8">

        <h1 className="text-3xl font-bold">
          {member.name}
        </h1>

        <p className="text-gray-500">
          @{member.username}
        </p>

      </div>

      {/* MEMBER INFO */}
      <div className="bg-white rounded-xl shadow p-6 mb-6">

        <h2 className="text-xl font-semibold mb-4">
          Member Details
        </h2>

        <div className="space-y-2">

          <p>
            <strong>ID:</strong> {member.id}
          </p>

          <p>
            <strong>Name:</strong> {member.name}
          </p>

          <p>
            <strong>Username:</strong> {member.username}
          </p>

          <p>
            <strong>Contact:</strong> {member.contact}
          </p>

        </div>

      </div>

      {/* SAVINGS */}
      <div className="bg-white rounded-xl shadow p-6 mb-6">

        <h2 className="text-xl font-semibold mb-4">
          Savings
        </h2>

        {savings.length === 0 ? (
          <p className="text-gray-500">
            No Savings Found
          </p>
        ) : (

          <table className="w-full">

            <thead>
              <tr className="bg-gray-100">

                <th className="p-3 text-left">
                  Saving ID
                </th>

                <th className="p-3 text-left">
                  Amount
                </th>

              </tr>
            </thead>

            <tbody>

              {savings.map((i) => (
                <tr key={i.id} className="border-t">

                  <td className="p-3">{i.id}</td>
                  <td className="p-3">Rs {i.amount}</td>

                </tr>
              ))}

            </tbody>

          </table>

        )}

      </div>

      {/* LOANS */}
      <div className="bg-white rounded-xl shadow p-6 mb-6">

        <h2 className="text-xl font-semibold mb-4">
          Loans
        </h2>

        {loans.length === 0 ? (
          <p className="text-gray-500">
            No Loans Found
          </p>
        ) : (

          <table className="w-full">

            <thead>
              <tr className="bg-gray-100">

                <th className="p-3 text-left">
                  Loan ID
                </th>

                <th className="p-3 text-left">
                  Amount
                </th>

              </tr>
            </thead>

            <tbody>

              {loans.map((l) => (
                <tr key={l.id} className="border-t">

                  <td className="p-3">{l.id}</td>
                  <td className="p-3">Rs {l.amount}</td>

                </tr>
              ))}

            </tbody>

          </table>

        )}

      </div>

      {/* INTERESTS */}
      <div className="bg-white rounded-xl shadow p-6">

        <h2 className="text-xl font-semibold mb-4">
          Interests
        </h2>

        {interests.length === 0 ? (
          <p className="text-gray-500">
            No Interests Found
          </p>
        ) : (

          <table className="w-full">

            <thead>
              <tr className="bg-gray-100">

                <th className="p-3 text-left">
                  Saving ID
                </th>

                <th className="p-3 text-left">
                  Amount
                </th>

              </tr>
            </thead>

            <tbody>

              {interests.map((i) => (
                <tr key={i.id} className="border-t">

                  <td className="p-3">{i.id}</td>
                  <td className="p-3">Rs {i.amount}</td>

                </tr>
              ))}

            </tbody>

          </table>

        )}

      </div>

    </div>
  )
}
