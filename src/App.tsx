import './App.css'

function App() {

  // grid column headers
  const cols = [
    "c1",
    "c2", 
    "c3",
    "c4",
    "c5",
    "c6",
    "c7"
  ]

  // grid row headers
  const rows = [
    "r1",
    "r2",
    "r3",
    "r4",
    "r5"
  ]

  // collection of data for cells
  const collection = new Map<string, string | null | undefined>()
  collection.set("c1r1", "Cell Content")
  collection.set("c1r3", "Cell Content 2")
  collection.set("c3r2", "Cell Content 4")
  collection.set("c4r4", "Cell Content 3")

  const cells = rows.map((r) => {
    return cols.map((c) => {
      const key = `${c}${r}`
      return <div style={{border: "1px dotted #49e649"
    ,fontSize: "11px",
    display: "flex", alignItems: "center", justifyContent: "center"
    }}><span style={{
      background: "green", color: "white"
    }}>
      {collection.get(key) ?? ""}
      </span></div>
    })
  })

  // cell size can be modified and all squares will adjust
  const cellSize = "80px "
  return (<div>
      <h1>dynamic grid</h1>
      <div style={{
        display: 'grid',
        gridTemplateAreas: `
          'rows cols'
          'rows cells'
        `
      }}>
            <div style={{
              gridArea: "cols",
              display:'grid',
              gridTemplateColumns: new Array(cols.length + 1).fill(null).map(() => cellSize).join(""),
              gridTemplateRows: cellSize
              }}>
              {cols.map(c => <div style={{border:'1px dotted orange'}}>{c}</div>)}
            </div>
            <div style={{
              gridArea: "rows",
              display:'grid',
              gridTemplateRows: new Array(rows.length + 1).fill(null).map(() => cellSize).join(""),
              gridTemplateColumns: '100px'
              }}>
            {["", ...rows].map(r => <div style={{border:'1px dotted blue'}}>{r}</div>)}
            </div>
            <div style={{
              gridArea: "cells",
              gridTemplateColumns: new Array(cols.length).fill(null).map(() => cellSize).join(""),
              gridTemplateRows: new Array(rows.length).fill(null).map(() => cellSize).join(""),
              display: 'grid'
             }}
              >
                {cells}
            </div>
      </div>
      
    </div>)
}

export default App
