import {Route, Routes } from "react-router"

import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'
import toast from "react-hot-toast"
import './index.css';

export const App = () => {
  return (
    <div>
      <button className="btn btn-primary">Click Me Please</button>
      <button onClick={() => toast.success("congrats!!")} className="bg-red-400 p-4">Click me </button>
      <div className="p-4 bg-blue-500">Hello</div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>

    </div>
  )
}

