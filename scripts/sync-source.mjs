import fs from 'node:fs/promises'
import path from 'node:path'

const SOURCE_REPO = 'https://raw.githubusercontent.com/Lordog/dive-into-llms/main'
const OUTPUT_DIR = path.resolve('src/data')
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'source-summary.json')

const files = [
  { key: 'root', title: '项目 README', url: `${SOURCE_REPO}/README.md` },
  { key: 'chapter1', title: 'Chapter1 微调与部署', url: `${SOURCE_REPO}/documents/chapter1/README.md` },
  { key: 'chapter2', title: 'Chapter2 Prompt 与推理', url: `${SOURCE_REPO}/documents/chapter2/README.md` }
]

function extractSummary(markdown = ''){
  return markdown
    .split('\n')
    .filter((line) => line.trim() && !line.trim().startsWith('!['))
    .slice(0, 20)
    .join('\n')
}

async function fetchText(url){
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Fetch failed: ${url} ${response.status}`)
  }
  return response.text()
}

async function main(){
  const chapters = []

  for (const file of files) {
    const markdown = await fetchText(file.url)
    chapters.push({
      key: file.key,
      title: file.title,
      source: file.url,
      summary: extractSummary(markdown),
      updatedAt: new Date().toISOString()
    })
  }

  await fs.mkdir(OUTPUT_DIR, { recursive: true })
  await fs.writeFile(
    OUTPUT_FILE,
    JSON.stringify({ sourceRepo: 'Lordog/dive-into-llms', chapters }, null, 2),
    'utf-8'
  )

  console.log(`Synced ${chapters.length} source documents to ${OUTPUT_FILE}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
