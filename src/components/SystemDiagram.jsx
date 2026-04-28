export default function SystemDiagram({ nodes = [], edges = [] }){
  const width = 700
  const height = 400

  const positions = nodes.map((n, i) => {
    const angle = (i / nodes.length) * 2 * Math.PI
    const r = 120
    return {
      name: n,
      x: width/2 + Math.cos(angle)*r,
      y: height/2 + Math.sin(angle)*r
    }
  })

  return (
    <svg width={width} height={height} style={{background:'#0b1a2b',borderRadius:12}}>
      {edges.map(([from,to],i)=>{
        const a = positions.find(p=>p.name===from)
        const b = positions.find(p=>p.name===to)
        if(!a||!b) return null
        return (
          <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="#7dd3fc" strokeWidth="2" />
        )
      })}

      {positions.map((p,i)=> (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r="28" fill="#1e3a5f" />
          <text x={p.x} y={p.y+5} fill="#fff" textAnchor="middle" fontSize="12">
            {p.name}
          </text>
        </g>
      ))}
    </svg>
  )
}
