import React from 'react'

export default function Filter({handleSetFilter, filter}) {
  return (
    <div><input value={filter} onChange={handleSetFilter} type="text" /></div>
  )
}
