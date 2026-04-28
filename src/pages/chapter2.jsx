import FlowDiagram from '../components/FlowDiagram.jsx'
import KnowledgeCard from '../components/KnowledgeCard.jsx'
import CompareTable from '../components/CompareTable.jsx'

export default function Chapter2(){
  return (
    <div>
      <h2>Chapter2：Prompt 与推理</h2>

      <FlowDiagram
        title="Prompt 推理流程"
        description="从问题到答案的推理路径"
        steps={[
          { label: '问题', note: '用户输入' },
          { label: 'Prompt', note: '提示设计' },
          { label: '模型', note: 'LLM推理' },
          { label: '推理链', note: 'CoT' },
          { label: '输出', note: '答案' }
        ]}
      />

      <KnowledgeCard
        title="Prompt 核心技巧"
        points={[
          'Zero-shot：直接提问',
          'Few-shot：给示例',
          'Chain-of-Thought：逐步推理',
          'Self-consistency：多次采样'
        ]}
      />

      <CompareTable
        title="CoT vs PoT 对比"
        columns={["方式","特点","适用场景"]}
        rows={[
          { "方式": "CoT", "特点": "自然语言推理", "适用场景": "通用问题" },
          { "方式": "PoT", "特点": "程序执行推理", "适用场景": "数学/计算" }
        ]}
      />
    </div>
  )
}
