export default function KnowledgeCard({ title, points = [] }){
  return (
    <div style={{border:'1px solid #333',borderRadius:12,padding:16,marginBottom:12}}>
      <h3>{title}</h3>
      <ul>
        {points.map((p,i)=>(<li key={i}>{p}</li>))}
      </ul>
    </div>
  )
}
