import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const searchIndex = [
  { title: '首页', path: '/', keywords: ['知识地图', 'LLM', '学习路径', '体系'] },
  { title: 'Chapter1 微调与部署', path: '/chapter1', keywords: ['微调', '部署', 'Fine-tune', 'Gradio', '模型适配', '训练'] },
  { title: 'Chapter2 Prompt 与推理', path: '/chapter2', keywords: ['Prompt', '提示词', 'CoT', 'PoT', 'Self-consistency', '输入控制'] },
  { title: 'Chapter3 知识编辑', path: '/chapter3', keywords: ['知识编辑', '模型记忆', '局部性', '泛化性', '事实修正'] },
  { title: 'Chapter4 数学推理', path: '/chapter4', keywords: ['推理', 'Reasoning', '数学', 'Verifier', 'CoT', 'PoT'] },
  { title: 'Chapter5 大模型安全', path: '/chapter5', keywords: ['安全', '越狱', '提示注入', '水印', '隐写', 'RLHF'] },
  { title: 'Chapter6 Agent', path: '/chapter6', keywords: ['Agent', '工具调用', '任务规划', '执行系统', '反馈'] }
]

export default function SearchBox(){
  const [keyword, setKeyword] = useState('')

  const results = useMemo(() => {
    const value = keyword.trim().toLowerCase()
    if (!value) return []

    return searchIndex.filter((item) => {
      const source = [item.title, ...item.keywords].join(' ').toLowerCase()
      return source.includes(value)
    })
  }, [keyword])

  return (
    <div style={{ marginBottom: 22 }}>
      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="搜索 Prompt / Agent / 安全..."
        style={{
          width: '100%',
          padding: '11px 12px',
          borderRadius: 12,
          border: '1px solid #334155',
          background: '#020617',
          color: '#e2e8f0',
          outline: 'none'
        }}
      />

      {results.length > 0 && (
        <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
          {results.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setKeyword('')}
              style={{
                padding: '9px 10px',
                borderRadius: 10,
                background: '#111827',
                color: '#bae6fd',
                textDecoration: 'none',
                fontSize: 13,
                border: '1px solid #1f2937'
              }}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}

      {keyword.trim() && results.length === 0 && (
        <div style={{ marginTop: 10, color: '#64748b', fontSize: 13 }}>暂无匹配章节</div>
      )}
    </div>
  )
}
