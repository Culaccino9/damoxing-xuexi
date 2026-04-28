import KnowledgeGraph from '../components/KnowledgeGraph.jsx'
import SourceSummary from '../components/SourceSummary.jsx'

export default function Home(){
  return (
    <div>
      <h1>LLM 知识体系</h1>
      <p>从整体理解大模型能力结构，再进入各个章节深入学习。</p>

      <KnowledgeGraph
        title="LLM 知识地图"
        data={{
          name: 'LLM',
          children: [
            { name: 'Prompt' },
            { name: 'Fine-tune' },
            { name: 'Reasoning' },
            { name: 'Agent' },
            { name: 'Security' }
          ]
        }}
      />

      <SourceSummary />
    </div>
  )
}
