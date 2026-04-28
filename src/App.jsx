import { Routes, Route, Link } from 'react-router-dom'
import Chapter1 from './pages/chapter1.jsx'
import Chapter2 from './pages/chapter2.jsx'

export default function App(){
  return (
    <div style={{padding:20,fontFamily:'sans-serif'}}>
      <h1>LLM 学习站</h1>
      <nav>
        <Link to="/">首页</Link> | 
        <Link to="/chapter1">Chapter1 微调</Link> | 
        <Link to="/chapter2">Chapter2 Prompt</Link>
      </nav>
      <Routes>
        <Route path="/" element={<div>请选择章节</div>} />
        <Route path="/chapter1" element={<Chapter1/>} />
        <Route path="/chapter2" element={<Chapter2/>} />
      </Routes>
    </div>
  )
}
