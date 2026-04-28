export default function Chapter1(){
  return (
    <div>
      <h2>Chapter1：大模型微调与部署</h2>
      <p>核心流程：数据 → 模型 → 训练 → 评估 → 部署</p>

      <svg width="600" height="200">
        <rect x="10" y="80" width="100" height="40" fill="#4CAF50" />
        <text x="60" y="105" fill="#fff" textAnchor="middle">数据</text>

        <rect x="130" y="80" width="100" height="40" fill="#2196F3" />
        <text x="180" y="105" fill="#fff" textAnchor="middle">模型</text>

        <rect x="250" y="80" width="100" height="40" fill="#FF9800" />
        <text x="300" y="105" fill="#fff" textAnchor="middle">训练</text>

        <rect x="370" y="80" width="100" height="40" fill="#9C27B0" />
        <text x="420" y="105" fill="#fff" textAnchor="middle">评估</text>

        <rect x="490" y="80" width="100" height="40" fill="#F44336" />
        <text x="540" y="105" fill="#fff" textAnchor="middle">部署</text>
      </svg>

      <ul>
        <li>数据准备：清洗、标注、划分训练集</li>
        <li>模型选择：BERT / T5 / LLaMA</li>
        <li>训练：loss优化、参数更新</li>
        <li>评估：准确率、推理结果</li>
        <li>部署：Gradio / API</li>
      </ul>
    </div>
  )
}
