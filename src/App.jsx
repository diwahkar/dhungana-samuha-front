import { Routes, Route } from 'react-router-dom'
import Layout from 'components/Layout'

import Login from 'pages/Login'
import Dashboard from 'pages/Dashboard'
import Members from 'pages/Members'
import MemberProfile from 'pages/MemberProfile'
import Savings from 'pages/Savings'
import Loans from 'pages/Loans'
import Interests from 'pages/Interests'

export default function App() {
  return (
    <Routes>

      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login /> } />
      <Route path="/dashboard" element={<Layout> <Dashboard /> </Layout>} />
      <Route path="/members" element={<Layout> <Members /> </Layout>} />
      <Route path="/members/:id" element={<Layout> <MemberProfile /> </Layout>} />
      <Route path="/savings" element={<Layout> <Savings /> </Layout>} />
      <Route path="/loans" element={<Layout> <Loans /> </Layout>} />
      <Route path="/interests" element={<Layout> <Interests /> </Layout>} />

    </Routes>
  )
}
