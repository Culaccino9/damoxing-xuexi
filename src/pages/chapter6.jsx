import FlowDiagram from '../components/FlowDiagram.jsx'
import KnowledgeCard from '../components/KnowledgeCard.jsx'
import CompareTable from '../components/CompareTable.jsx'
import SystemDiagram from '../components/SystemDiagram.jsx'
import KnowledgeGraph from '../components/KnowledgeGraph.jsx'

export default function Chapter6(){
  return (
    <div>
      <h2>Chapter6：Agent（执行系统）</h2>
      <p>Agent 让大模型不仅能回答问题，还能调用工具、完成任务，并在反馈中不断修正策略。</p>

      <KnowledgeGraph
        title="Agent 能力结构"
        description="从感知到执行的完整能力链路。"
        data={{
          name: 'Agent',
          note: '执行系统',
          children: [
            { name: '感知', note: '理解输入' },
            { name: '规划', note: '拆解任务' },
            { name: '推理', note: '选择策略' },
            { name: '工具', note: '外部能力' },
            { name: '执行', note: '完成动作' },
            { name: '反馈', note: '结果修正' }
          ]
        }}
      />

      <SystemDiagram
        nodes={["用户","任务规划","模型","工具调用","执行结果","反馈"]}
        edges={[
          ["用户","任务规划"],
          ["任务规划","模型"],
          ["模型","工具调用"],
          ["工具调用","执行结果"],
          ["执行结果","反馈"],
          ["反馈","模型"]
        ]}
      />

      <FlowDiagram
        title="Agent 执行流程"
        description="一个任务从输入到完成的全过程。"
        steps={[
          { label: '输入任务', note: '用户需求' },
          { label: '任务拆解', note: '规划步骤' },
          { label: '调用工具', note: 'API/数据库' },
          { label: '执行动作', note: '完成任务' },
          { label: '结果反馈', note: '修正策略' }
        ]}
      />

      <KnowledgeCard
        title="Agent 核心能力"
        points={[
          '任务规划：把复杂问题拆成可执行步骤',
          '工具使用：调用外部API/数据库/搜索引擎',
          '状态管理：记录上下文和执行进度',
          '反馈机制：根据结果动态调整策略',
          '安全控制：限制工具权限与调用范围'
        ]}
      />

      <CompareTable
        title="LLM vs Agent"
        columns={["维度","LLM","Agent"]}
        rows={[
          { "维度": "能力", "LLM": "文本生成", "Agent": "任务执行" },
          { "维度": "输入输出", "LLM": "输入→输出", "Agent": "输入→多步执行→结果" },
          { "维度": "工具", "LLM": "无", "Agent": "可调用外部工具" },
          { "维度": "复杂任务", "LLM": "有限", "Agent": "强" }
        ]}
      />
    </div>
  )
}
