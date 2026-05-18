export default function MemberForm({
  form,
  setForm,
  onSubmit,
  onClose,
  editing
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">

      <div className="bg-white p-6 w-[420px] rounded-xl shadow-lg">

        {/* TITLE */}
        <h2 className="text-xl font-bold mb-4">
          {editing ? 'Edit Member' : 'Add Member'}
        </h2>

        {/* NAME */}
        <input
          className="border p-2 w-full mb-3 rounded"
          placeholder="Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        {/* USERNAME */}
        <input
          className="border p-2 w-full mb-3 rounded"
          placeholder="Username"
          value={form.username}
          onChange={(e) =>
            setForm({ ...form, username: e.target.value?.toLowerCase() })
          }
        />

        {/* CONTACT */}
        <input
          className="border p-2 w-full mb-4 rounded"
          placeholder="Contact"
          value={form.contact}
          onChange={(e) =>
            setForm({ ...form, contact: e.target.value })
          }
        />

        {/* BUTTONS */}
        <div className="flex justify-end gap-2">

          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-400 text-white rounded"
          >
            Cancel
          </button>

          <button
            onClick={onSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            {editing ? 'Update' : 'Save'}
          </button>

        </div>

      </div>

    </div>
  )
}
