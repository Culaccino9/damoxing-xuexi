import FlowDiagram from '../components/FlowDiagram.jsx'
import KnowledgeCard from '../components/KnowledgeCard.jsx'
import CompareTable from '../components/CompareTable.jsx'
import KnowledgeGraph from '../components/KnowledgeGraph.jsx'

export default function Chapter3(){
  return (
    <div>
      <h2>Chapter3：知识编辑</h2>
      <p>知识编辑关注的是：不重新训练整个模型，只对模型中的特定事实、关系或记忆进行定向修改。</p>

      <KnowledgeGraph
        title="知识编辑的核心结构"
        description="先定位要改的知识，再执行编辑，并验证编辑是否准确、局部、稳定。"
        data={{
          name: '知识编辑',
          note: '定向修改模型记忆',
          children: [
            { name: '目标知识', note: '要修改的事实' },
            { name: '编辑方法', note: '参数/表示修改' },
            { name: '验证问题', note: '编辑后是否正确' },
            { name: '局部性', note: '不影响无关知识' },
            { name: '泛化性', note: '相关问法也生效' },
            { name: '稳定性', note: '多轮测试仍有效' }
          ]
        }}
      />

      <FlowDiagram
        title="知识编辑流程"
        description="一个完整的编辑实验应该形成闭环，而不是只改一个答案。"
        steps={[
          { label: '选知识', note: '确定事实' },
          { label: '构造样本', note: '原问/改问' },
          { label: '执行编辑', note: '更新模型' },
          { label: '验证效果', note: '新答案' },
          { label: '检查副作用', note: '无关知识' }
        ]}
      />

      <KnowledgeCard
        title="学习时抓住 5 个关键词"
        points={[
          'Reliability：目标知识是否被成功修改',
          'Generalization：换一种问法是否仍然有效',
          'Locality：无关知识是否没有被破坏',
          'Portability：相关推理链路是否一起更新',
          'Efficiency：编辑成本是否低于重新训练'
        ]}
      />

      <CompareTable
        title="知识编辑 vs 微调"
        columns={["维度","知识编辑","微调"]}
        rows={[
          { "维度": "目标", "知识编辑": "修改少量特定知识", "微调": "整体提升任务表现" },
          { "维度": "成本", "知识编辑": "通常更轻量", "微调": "训练成本更高" },
          { "维度": "风险", "知识编辑": "可能破坏局部知识结构", "微调": "可能整体偏移模型行为" },
          { "维度": "适用场景", "知识编辑": "事实修正、模型记忆更新", "微调": "任务适配、风格适配、能力增强" }
        ]}
      />
    </div>
  )
}
