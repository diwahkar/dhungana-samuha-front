import { useEffect, useState } from 'react'

import api from 'api'
import LoanForm from 'components/LoanForm'



export default function Loans() {
  const [loans, setLoans] = useState([])
  const [form, setForm] = useState({ username: '', amount: '' })
  const [isOpen, setIsOpen] = useState(false)
  const [editingLoan, setEditingLoan] = useState(null)

  const fetchLoans = async () => {
    const res = await api.get('/loans')
    setLoans(res.data)
  }

  useEffect(() => {
    fetchLoans()
  }, [])

  const openAdd = () => {
    setForm({ username: '', amount: '' })
    setEditingLoan(null)
    setIsOpen(true)
  }

  const openEdit = (l) => {
    setForm({ username: l.username || '', amount: l.amount || ''})
    setEditingLoan(l)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setEditingLoan(null)
  }

  const handleSubmit = async () => {
    if (editingLoan) {
      await api.put(`/loans/${editingLoan.id}`, form)
    } else {
      await api.post('/loans', form)
    }

    closeModal()
    fetchLoans()
  }

  const deleteLoan = async (id) => {
    await api.delete(`/loans/${id}`)
    fetchLoans()
  }

  return (
    <div>

      {/* HEADER */}
      <div className="mb-6 flex justify-between items-center">

        <div>
          <h1 className="text-2xl font-bold">Loans</h1>
          <p className="text-gray-500">Manage Loans</p>
        </div>

        <button
          onClick={openAdd}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>

      </div>

      {/* LIST */}
      <div className="bg-white rounded shadow divide-y">

        {loans.map((l) => (
          <div key={l.id} className="flex justify-between p-4">

            <div>
              <p className="font-medium">Member: {l.username}</p>
              <p className="text-sm text-gray-500">Rs {l.amount}</p>
            </div>

            <div className="flex gap-2">

              <button
                onClick={() => openEdit(l)}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => deleteLoan(l.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>

            </div>

          </div>
        ))}

      </div>

      {/* MODAL */}
      {isOpen && (
        <LoanForm
          form={form}
          setForm={setForm}
          onSubmit={handleSubmit}
          onClose={closeModal}
          editing={editingLoan}
        />
      )}

    </div>
  )
}
