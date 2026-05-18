export default function LoanForm({
  form,
  setForm,
  onSubmit,
  onClose,
  editing
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">

      <div className="bg-white p-6 w-[420px] rounded-xl shadow-lg">

        <h2 className="text-xl font-bold mb-4">
          {editing ? 'Edit Loan' : 'Add Loan'}
        </h2>

        {/* MEMBER ID */}
        <input
          className="border p-2 w-full mb-3 rounded"
          placeholder="Member Username"
          value={form.username}
          onChange={(e) =>
            setForm({ ...form, username: e.target.value })
          }
        />

        {/* AMOUNT */}
        <input
          className="border p-2 w-full mb-4 rounded"
          placeholder="Amount"
          value={form.amount}
          onChange={(e) =>
            setForm({ ...form, amount: e.target.value })
          }
        />

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
