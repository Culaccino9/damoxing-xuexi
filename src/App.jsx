import { Routes, Route, Link } from 'react-router-dom'
import Chapter1 from './pages/chapter1.jsx'
import Chapter2 from './pages/chapter2.jsx'
import Chapter3 from './pages/chapter3.jsx'
import Chapter4 from './pages/chapter4.jsx'
import Chapter5 from './pages/chapter5.jsx'
import KnowledgeGraph from './components/KnowledgeGraph.jsx'

function Home(){
  return (
    <div>
      <h2>大模型知识体系入口</h2>
      <p>从这里开始，把《动手学大模型》的内容拆成可学习、可复用、可扩展的知识系统。</p>

      <KnowledgeGraph
        title="LLM 知识地图"
        description="先建立全局结构，再进入每个章节做专项学习。"
        data={{
          name: 'LLM',
          note: '大模型实践',
          children: [
            { name: 'Prompt', note: '输入控制' },
            { name: 'Fine-tune', note: '模型适配' },
            { name: 'Reasoning', note: '推理增强' },
            { name: 'Multimodal', note: '多模态理解' },
            { name: 'Agent', note: '任务执行' },
            { name: 'Security', note: '安全对齐' }
          ]
        }}
      />

      <h3>已完成章节</h3>
      <ul>
        <li><Link to="/chapter1">Chapter1：微调与部署</Link></li>
        <li><Link to="/chapter2">Chapter2：Prompt 与推理</Link></li>
        <li><Link to="/chapter3">Chapter3：知识编辑</Link></li>
        <li><Link to="/chapter4">Chapter4：数学推理</Link></li>
        <li><Link to="/chapter5">Chapter5：安全</Link></li>
      </ul>
    </div>
  )
}

export default function App(){
  return (
    <div style={{padding:20,fontFamily:'sans-serif'}}>
      <h1>LLM 学习站</h1>
      <nav>
        <Link to="/">首页</Link> | 
        <Link to="/chapter1">Chapter1 微调</Link> | 
        <Link to="/chapter2">Chapter2 Prompt</Link> | 
        <Link to="/chapter3">Chapter3 编辑</Link> | 
        <Link to="/chapter4">Chapter4 推理</Link> | 
        <Link to="/chapter5">Chapter5 安全</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/chapter1" element={<Chapter1/>} />
        <Route path="/chapter2" element={<Chapter2/>} />
        <Route path="/chapter3" element={<Chapter3/>} />
        <Route path="/chapter4" element={<Chapter4/>} />
        <Route path="/chapter5" element={<Chapter5/>} />
      </Routes>
    </div>
  )
}
