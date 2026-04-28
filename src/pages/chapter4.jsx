import FlowDiagram from '../components/FlowDiagram.jsx'
import KnowledgeCard from '../components/KnowledgeCard.jsx'
import CompareTable from '../components/CompareTable.jsx'
import SystemDiagram from '../components/SystemDiagram.jsx'

export default function Chapter4(){
  return (
    <div>
      <h2>Chapter4：数学推理（Reasoning）</h2>
      <p>这一章关注的是：大模型如何一步步“思考”，而不是直接给答案。</p>

      <FlowDiagram
        title="推理基本流程"
        description="从问题到答案的拆解过程"
        steps={[
          { label: '问题', note: '输入问题' },
          { label: '拆解', note: '分步骤' },
          { label: '推理', note: '逻辑过程' },
          { label: '计算', note: '中间结果' },
          { label: '答案', note: '最终输出' }
        ]}
      />

      <SystemDiagram
        nodes={["问题","推理","结果","校验"]}
        edges={[
          ["问题","推理"],
          ["推理","结果"],
          ["结果","校验"],
          ["校验","推理"]
        ]}
      />

      <KnowledgeCard
        title="核心方法"
        points={[
          'CoT：一步步推理',
          'Self-consistency：多次采样投票',
          'PoT：用代码解决问题',
          'Verifier：结果校验机制'
        ]}
      />

      <CompareTable
        title="推理方法对比"
        columns={["方法","特点","优点"]}
        rows={[
          { "方法": "CoT", "特点": "自然语言推理", "优点": "简单通用" },
          { "方法": "Self-consistency", "特点": "多路径推理", "优点": "更稳定" },
          { "方法": "PoT", "特点": "程序执行", "优点": "更精确" }
        ]}
      />
    </div>
  )
}
