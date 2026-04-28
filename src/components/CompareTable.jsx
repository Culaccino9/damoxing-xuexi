export default function CompareTable({ title, columns = [], rows = [] }) {
  return (
    <section className="compare-card">
      {title && <h3>{title}</h3>}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column} style={{ textAlign: 'left', borderBottom: '1px solid #ddd', padding: 12 }}>
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column) => (
                  <td key={column} style={{ borderBottom: '1px solid #eee', padding: 12, verticalAlign: 'top' }}>
                    {row[column]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
