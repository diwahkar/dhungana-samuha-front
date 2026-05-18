import { useEffect, useState } from 'react'

import api from 'api'
import SavingForm from 'components/SavingForm'



export default function Savings() {
  const [savings, setSavings] = useState([])
  const [form, setForm] = useState({ username: '', amount: '' })
  const [isOpen, setIsOpen] = useState(false)
  const [editingSaving, setEditingSaving] = useState(null)

  const fetchSavings = async () => {
    const res = await api.get('/savings')
    setSavings(res.data)
  }

  useEffect(() => {
    fetchSavings()
  }, [])

  const openAdd = () => {
    setForm({ username: '', amount: '' })
    setEditingSaving(null)
    setIsOpen(true)
  }

  const openEdit = (i) => {
    setForm({ username: i.username || '', amount: i.amount || ''})
    setEditingSaving(i)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setEditingSaving(null)
  }

  const handleSubmit = async () => {
    if (editingSaving) {
      await api.put(`/savings/${editingSaving.id}`, form)
    } else {
      await api.post('/savings', form)
    }

    closeModal()
    fetchSavings()
  }

  const deleteSaving = async (id) => {
    await api.delete(`/savings/${id}`)
    fetchSavings()
  }

  return (
    <div>

      {/* HEADER */}
      <div className="mb-6 flex justify-between items-center">

        <div>
          <h1 className="text-2xl font-bold">Savings</h1>
          <p className="text-gray-500">Manage Savings</p>
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

        {savings.map((i) => (
          <div key={i.id} className="flex justify-between p-4">

            <div>
              <p className="font-medium">Member: {i.username}</p>
              <p className="text-sm text-gray-500">Rs {i.amount}</p>
            </div>

            <div className="flex gap-2">

              <button
                onClick={() => openEdit(i)}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => deleteSaving(i.id)}
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
        <SavingForm
          form={form}
          setForm={setForm}
          onSubmit={handleSubmit}
          onClose={closeModal}
          editing={editingSaving}
        />
      )}

    </div>
  )
}
