import React, { Component } from 'react'

const Table = props => {
    const { characterData, removeCharacter } = props
  
    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} removeCharacter={removeCharacter} />
  <tr key={index}>
    <td>{row.name}</td>
    <td>{row.job}</td>
    <td>
      <button onClick={() => props.removeCharacter(index)}>Delete</button>
    </td>
  </tr>
  
      </table>
    )
  }
  
export default Table
