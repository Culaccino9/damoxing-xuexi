import data from '../data/source-summary.json'

export default function SourceSummary(){
  const chapters = data?.chapters || []

  return (
    <div style={{ marginTop: 40 }}>
      <h2>📚 同步知识摘要</h2>
      <p style={{ color: '#94a3b8', marginBottom: 20 }}>
        自动同步自 dive-into-llms 仓库的核心内容（简要摘要）
      </p>

      <div style={{ display: 'grid', gap: 16 }}>
        {chapters.map((item) => (
          <div
            key={item.key}
            style={{
              padding: 16,
              borderRadius: 14,
              background: '#020617',
              border: '1px solid #1e293b'
            }}
          >
            <h3 style={{ marginBottom: 6 }}>{item.title}</h3>
            <p style={{ fontSize: 13, color: '#64748b', marginBottom: 10 }}>
              {new Date(item.updatedAt).toLocaleString()}
            </p>
            <p style={{ lineHeight: 1.6 }}>{item.summary}</p>

            <a
              href={item.source}
              target="_blank"
              style={{
                display: 'inline-block',
                marginTop: 10,
                fontSize: 13,
                color: '#38bdf8'
              }}
            >
              查看原文 →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
