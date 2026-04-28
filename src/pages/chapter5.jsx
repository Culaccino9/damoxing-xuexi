import FlowDiagram from '../components/FlowDiagram.jsx'
import KnowledgeCard from '../components/KnowledgeCard.jsx'
import CompareTable from '../components/CompareTable.jsx'
import SystemDiagram from '../components/SystemDiagram.jsx'
import KnowledgeGraph from '../components/KnowledgeGraph.jsx'

export default function Chapter5(){
  return (
    <div>
      <h2>Chapter5：大模型安全</h2>
      <p>这一章关注大模型在生成、对话和工具调用中的风险：越狱、提示注入、水印、隐写和防御。</p>

      <KnowledgeGraph
        title="大模型安全知识结构"
        description="安全不是单点功能，而是攻击、防御、检测、追踪和对齐的组合。"
        data={{
          name: 'LLM 安全',
          note: '风险与防御',
          children: [
            { name: '越狱攻击', note: '绕过规则' },
            { name: '提示注入', note: '污染指令' },
            { name: '水印', note: '内容溯源' },
            { name: '隐写', note: '隐藏信息' },
            { name: 'Agent 风险', note: '工具误用' },
            { name: 'RLHF', note: '安全对齐' }
          ]
        }}
      />

      <SystemDiagram
        nodes={["用户","攻击Prompt","模型","安全策略","输出","反馈"]}
        edges={[
          ["用户","攻击Prompt"],
          ["攻击Prompt","模型"],
          ["模型","安全策略"],
          ["安全策略","输出"],
          ["输出","反馈"],
          ["反馈","攻击Prompt"]
        ]}
      />

      <FlowDiagram
        title="安全防御流程"
        description="从输入到输出的安全检查链路。"
        steps={[
          { label: '输入', note: '用户请求' },
          { label: '检测', note: '风险识别' },
          { label: '过滤', note: '策略判断' },
          { label: '生成', note: '模型输出' },
          { label: '审计', note: '记录追踪' }
        ]}
      />

      <KnowledgeCard
        title="安全学习重点"
        points={[
          '越狱攻击：通过角色扮演、反向指令等方式绕过限制',
          '提示注入：把恶意指令混入上下文或工具返回内容',
          '水印：在生成文本中加入可检测信号，用于内容溯源',
          '隐写：在自然文本中隐藏额外信息，需要关注滥用风险',
          'Agent 安全：工具调用必须控制权限、范围和确认机制'
        ]}
      />

      <CompareTable
        title="安全概念对比"
        columns={["概念","目标","风险/价值"]}
        rows={[
          { "概念": "越狱", "目标": "绕过模型安全策略", "风险/价值": "用于红队测试，也可能被滥用" },
          { "概念": "水印", "目标": "标记和追踪生成内容", "风险/价值": "提升可追溯性，但要考虑鲁棒性" },
          { "概念": "隐写", "目标": "隐藏和传递秘密信息", "风险/价值": "可研究编码，也可能用于隐蔽通信" },
          { "概念": "RLHF", "目标": "把人类偏好融入模型行为", "风险/价值": "提升安全性，但依赖反馈质量" }
        ]}
      />
    </div>
  )
}
