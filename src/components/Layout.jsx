import { Link, Outlet, useLocation } from 'react-router-dom'
import SearchBox from './SearchBox.jsx'

const navItems = [
  { path: '/', label: '首页', desc: '知识地图' },
  { path: '/chapter1', label: 'Chapter1 微调', desc: '模型适配' },
  { path: '/chapter2', label: 'Chapter2 Prompt', desc: '输入控制' },
  { path: '/chapter3', label: 'Chapter3 编辑', desc: '知识更新' },
  { path: '/chapter4', label: 'Chapter4 推理', desc: '思考能力' },
  { path: '/chapter5', label: 'Chapter5 安全', desc: '风险控制' },
  { path: '/chapter6', label: 'Chapter6 Agent', desc: '任务执行' }
]

export default function Layout(){
  const location = useLocation()

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#020617', color: '#e2e8f0' }}>
      <aside style={{ width: 280, padding: 24, background: '#0f172a', borderRight: '1px solid #1e293b', position: 'sticky', top: 0, height: '100vh', overflowY: 'auto' }}>
        <div style={{ marginBottom: 20 }}>
          <div style={{ color: '#38bdf8', fontWeight: 800, letterSpacing: 1 }}>LLM DOCS</div>
          <h2 style={{ margin: '8px 0 4px' }}>大模型学习站</h2>
          <p style={{ color: '#94a3b8', fontSize: 13, lineHeight: 1.6 }}>基于 dive-into-llms 整理的可视化知识系统</p>
        </div>

        <SearchBox />

        <nav style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {navItems.map((item) => {
            const active = location.pathname === item.path
            return (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  display: 'block',
                  padding: '12px 14px',
                  borderRadius: 12,
                  color: active ? '#020617' : '#cbd5e1',
                  background: active ? '#38bdf8' : 'transparent',
                  textDecoration: 'none',
                  border: active ? '1px solid #38bdf8' : '1px solid transparent'
                }}
              >
                <strong>{item.label}</strong>
                <div style={{ fontSize: 12, color: active ? '#0f172a' : '#64748b', marginTop: 2 }}>{item.desc}</div>
              </Link>
            )
          })}
        </nav>
      </aside>

      <main style={{ flex: 1, padding: '36px 48px', overflow: 'auto' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <Outlet />
        </div>
      </main>
    </div>
  )
}
