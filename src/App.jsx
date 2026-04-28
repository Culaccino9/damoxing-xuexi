import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'

import Home from './pages/home.jsx'
import Chapter1 from './pages/chapter1.jsx'
import Chapter2 from './pages/chapter2.jsx'
import Chapter3 from './pages/chapter3.jsx'
import Chapter4 from './pages/chapter4.jsx'
import Chapter5 from './pages/chapter5.jsx'
import Chapter6 from './pages/chapter6.jsx'

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="chapter1" element={<Chapter1/>} />
        <Route path="chapter2" element={<Chapter2/>} />
        <Route path="chapter3" element={<Chapter3/>} />
        <Route path="chapter4" element={<Chapter4/>} />
        <Route path="chapter5" element={<Chapter5/>} />
        <Route path="chapter6" element={<Chapter6/>} />
      </Route>
    </Routes>
  )
}
