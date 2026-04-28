import { Link, useParams } from 'react-router-dom'
import data from '../data/source-summary.json'

export default function SourceDetail(){
  const { key } = useParams()
  const item = data.chapters.find((chapter) => chapter.key === key)

  if (!item) {
    return (
      <div>
        <h1>未找到同步章节</h1>
        <p>当前 key：{key}</p>
        <Link to="/">返回首页</Link>
      </div>
    )
  }

  return (
    <article>
      <Link to="/" style={{ color: '#38bdf8', textDecoration: 'none' }}>← 返回首页</Link>
      <h1 style={{ marginTop: 20 }}>{item.title}</h1>
      <p style={{ color: '#94a3b8' }}>来源：{data.sourceRepo}</p>
      <p style={{ color: '#64748b', fontSize: 13 }}>同步时间：{new Date(item.updatedAt).toLocaleString()}</p>

      <section style={{
        marginTop: 24,
        padding: 22,
        borderRadius: 16,
        background: '#020617',
        border: '1px solid #1e293b',
        lineHeight: 1.8,
        whiteSpace: 'pre-wrap'
      }}>
        {item.summary}
      </section>

      <a
        href={item.source}
        target="_blank"
        style={{ display: 'inline-block', marginTop: 20, color: '#38bdf8' }}
      >
        查看源仓库原文 →
      </a>
    </article>
  )
}
