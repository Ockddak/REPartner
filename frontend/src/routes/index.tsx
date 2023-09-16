import { Navigate, Route, Routes } from 'react-router-dom'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<div>Home</div>} />
      <Route path='/hello' element={<div>Hello</div>} />
      <Route path='*' element={<Navigate replace to='/' />} />
    </Routes>
  )
}

export default Router
