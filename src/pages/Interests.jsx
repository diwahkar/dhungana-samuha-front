import { useEffect, useState } from 'react'

import api from 'api'
import InterestForm from 'components/InterestForm'



export default function Interests() {
  const [interests, setInterests] = useState([])
  const [form, setForm] = useState({ username: '', amount: '' })
  const [isOpen, setIsOpen] = useState(false)
  const [editingInterest, setEditingInterest] = useState(null)

  const fetchInterests = async () => {
    const res = await api.get('/interests')
    setInterests(res.data)
  }

  useEffect(() => {
    fetchInterests()
  }, [])

  const openAdd = () => {
    setForm({ username: '', amount: '' })
    setEditingInterest(null)
    setIsOpen(true)
  }

  const openEdit = (i) => {
    setForm({ username: i.username || '', amount: i.amount || ''})
    setEditingInterest(i)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setEditingInterest(null)
  }

  const handleSubmit = async () => {
    if (editingInterest) {
      await api.put(`/interests/${editingInterest.id}`, form)
    } else {
      await api.post('/interests', form)
    }

    closeModal()
    fetchInterests()
  }

  const deleteInterest = async (id) => {
    await api.delete(`/interests/${id}`)
    fetchInterests()
  }

  return (
    <div>

      {/* HEADER */}
      <div className="mb-6 flex justify-between items-center">

        <div>
          <h1 className="text-2xl font-bold">Interests</h1>
          <p className="text-gray-500">Manage Interests</p>
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

        {interests.map((i) => (
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
                onClick={() => deleteInterest(i.id)}
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
        <InterestForm
          form={form}
          setForm={setForm}
          onSubmit={handleSubmit}
          onClose={closeModal}
          editing={editingInterest}
        />
      )}

    </div>
  )
}
