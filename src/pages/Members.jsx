import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import MemberForm from 'components/MemberForm'
import api from 'api'


export default function Members() {
  const [members, setMembers] = useState([])
  const [form, setForm] = useState({ name: '', username: '', contact: '' })
  const [isOpen, setIsOpen] = useState(false)
  const [editingMember, setEditingMember] = useState(null)
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)


  const fetchMembers = async (page=0) => {
    const limit = 5
    const offset = page * limit
    const res = await api.get(`/members?offset=${offset}&limit=${limit}`)
    setMembers(res.data.data)
    setCurrentPage(res.data.page)
    setTotalPages(res.data.total_pages)
  }

  useEffect(() => {
    fetchMembers()
  }, [])

  const openAdd = () => {
    setForm({ name: '', username: '', contact: '' })
    setEditingMember(null)
    setIsOpen(true)
  }

  const openEdit = (m) => {
    setForm({ name: m.name || '', username: m.username|| '', contact: m.contact ||''})
    setEditingMember(m)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setEditingMember(null)
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
    fetchMembers(page)
  }

  const handleSubmit = async () => {
    if (editingMember) {
      await api.put(`/members/${editingMember.id}`, form)
    } else {
      await api.post('/members', form)
    }
    closeModal()
    fetchMembers()
  }

  const deleteMember = async (id) => {
    await api.delete(`/members/${id}`)
    fetchMembers()
  }

  return (
    <div>

      {/* HEADER */}
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Members</h1>
          <p className="text-gray-500">Manage Members</p>
        </div>

        <button
          onClick={openAdd}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

{/* TABLE */}
<div className="bg-white rounded-xl shadow overflow-hidden">

  <table className="w-full">

    {/* HEADER */}
    <thead className="bg-gray-100">
      <tr>

        <th className="text-left p-4">ID</th>
        <th className="text-left p-4">Name</th>
        <th className="text-left p-4">Username</th>
        <th className="text-left p-4">Contact</th>
        <th className="text-left p-4">Actions</th>

      </tr>
    </thead>

    {/* BODY */}
    <tbody>

      {members.map((m) => (
        <tr
          key={m.id}
          className="border-t hover:bg-gray-50"
        >

          {/* CLICKABLE ID */}
          <td className="p-4">
            <Link
              to={`/members/${m.id}`}
              className="text-blue-600 hover:underline"
            >
              {m.id}
            </Link>
          </td>

          {/* NAME */}
          <td className="p-4 font-medium">
            {m.name}
          </td>

          {/* CLICKABLE USERNAME */}
          <td className="p-4">
            <Link
              to={`/members/${m.id}`}
              className="text-blue-600 hover:underline"
            >
              @{m.username}
            </Link>
          </td>

          {/* CONTACT */}
          <td className="p-4">
            {m.contact}
          </td>

          {/* ACTIONS */}
          <td className="p-4">

            <div className="flex gap-2">

              <button
                onClick={() => openEdit(m)}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => deleteMember(m.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>

            </div>

          </td>

        </tr>
      ))}

    </tbody>

  </table>

</div>

      <div className="flex justify-center mt-4 gap-2">

        <button
          disabled={currentPage === 0}
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Prev
        </button>

        <span className="px-3 py-1">
          Page {currentPage} of {totalPages-1}
        </span>

        <button
          disabled={currentPage === totalPages-1}
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>

      </div>

      {/* MODAL */}
      {isOpen && (
        <MemberForm
          form={form}
          setForm={setForm}
          onSubmit={handleSubmit}
          onClose={closeModal}
          editing={editingMember}
        />
      )}

    </div>
  )
}
