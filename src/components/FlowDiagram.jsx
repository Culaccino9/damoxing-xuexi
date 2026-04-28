const defaultPalette = ['#4CAF50', '#2196F3', '#FF9800', '#9C27B0', '#F44336', '#00BCD4', '#8BC34A']

export default function FlowDiagram({ title, description, steps = [], palette = defaultPalette }) {
  const width = Math.max(680, steps.length * 150)
  const height = 250
  const boxWidth = 110
  const boxHeight = 48
  const gap = 40
  const startX = 40
  const y = 110

  return (
    <section className="diagram-card">
      {(title || description) && (
        <div className="diagram-header">
          {title && <h3>{title}</h3>}
          {description && <p>{description}</p>}
        </div>
      )}
      <div className="diagram-scroll">
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} role="img" aria-label={title || '流程图'}>
          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L8,3 L0,6 Z" fill="#7dd3fc" />
            </marker>
          </defs>
          <rect x="0" y="0" width={width} height={height} rx="24" fill="#081426" />
          {steps.map((step, index) => {
            const x = startX + index * (boxWidth + gap)
            const color = palette[index % palette.length]
            return (
              <g key={step.label || index}>
                {index < steps.length - 1 && (
                  <line
                    x1={x + boxWidth + 8}
                    y1={y + boxHeight / 2}
                    x2={x + boxWidth + gap - 8}
                    y2={y + boxHeight / 2}
                    stroke="#7dd3fc"
                    strokeWidth="3"
                    markerEnd="url(#arrow)"
                  />
                )}
                <rect x={x} y={y} width={boxWidth} height={boxHeight} rx="14" fill={color} opacity="0.95" />
                <text x={x + boxWidth / 2} y={y + 30} fill="#fff" textAnchor="middle" fontSize="15" fontWeight="700">
                  {step.label}
                </text>
                {step.note && (
                  <text x={x + boxWidth / 2} y={y + 75} fill="#b8c7dd" textAnchor="middle" fontSize="12">
                    {step.note}
                  </text>
                )}
              </g>
            )
          })}
        </svg>
      </div>
    </section>
  )
}
