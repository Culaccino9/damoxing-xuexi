import FlowDiagram from '../components/FlowDiagram.jsx'
import KnowledgeCard from '../components/KnowledgeCard.jsx'

export default function Chapter1(){
  return (
    <div>
      <h2>Chapter1：大模型微调与部署</h2>

      <FlowDiagram
        title="微调与部署流程"
        description="从数据到上线的完整链路"
        steps={[
          { label: '数据', note: '清洗/标注' },
          { label: '模型', note: 'BERT/T5' },
          { label: '训练', note: 'loss优化' },
          { label: '评估', note: '准确率' },
          { label: '部署', note: 'Gradio' }
        ]}
      />

      <KnowledgeCard
        title="关键知识点"
        points={[
          '数据准备：清洗、标注、划分训练集',
          '模型选择：BERT / T5 / LLaMA',
          '训练：loss优化、参数更新',
          '评估：准确率、推理结果',
          '部署：Gradio / API'
        ]}
      />
    </div>
  )
}
