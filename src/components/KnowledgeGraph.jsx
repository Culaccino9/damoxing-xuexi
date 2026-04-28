function collectNodes(tree){
  const root = { ...tree, depth: 0 }
  const children = (tree.children || []).map((child, index) => ({ ...child, depth: 1, index }))
  return { root, children }
}

export default function KnowledgeGraph({ title, description, data }){
  const { root, children } = collectNodes(data)
  const width = 920
  const height = 420
  const centerX = width / 2
  const centerY = 190
  const radius = 145

  return (
    <section className="knowledge-graph">
      {(title || description) && (
        <div className="diagram-header">
          {title && <h3>{title}</h3>}
          {description && <p>{description}</p>}
        </div>
      )}
      <div className="diagram-scroll">
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} role="img" aria-label={title || '知识图谱'}>
          <rect width={width} height={height} rx="24" fill="#081426" />
          <circle cx={centerX} cy={centerY} r="68" fill="#111827" stroke="#7dd3fc" strokeWidth="3" />
          <text x={centerX} y={centerY - 6} textAnchor="middle" fill="#fff" fontSize="22" fontWeight="800">{root.name}</text>
          {root.note && <text x={centerX} y={centerY + 22} textAnchor="middle" fill="#b8c7dd" fontSize="13">{root.note}</text>}

          {children.map((node, index) => {
            const angle = (-130 + (260 / Math.max(children.length - 1, 1)) * index) * Math.PI / 180
            const x = centerX + Math.cos(angle) * radius * 2.1
            const y = centerY + Math.sin(angle) * radius
            return (
              <g key={node.name}>
                <line x1={centerX} y1={centerY} x2={x} y2={y} stroke="#335f86" strokeWidth="2" />
                <rect x={x - 80} y={y - 30} width="160" height="60" rx="16" fill="#10233f" stroke="#31547d" />
                <text x={x} y={y - 3} textAnchor="middle" fill="#edf5ff" fontSize="15" fontWeight="700">{node.name}</text>
                {node.note && <text x={x} y={y + 18} textAnchor="middle" fill="#9fb4d8" fontSize="12">{node.note}</text>}
              </g>
            )
          })}
        </svg>
      </div>
    </section>
  )
}
