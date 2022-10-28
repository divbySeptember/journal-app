import React, {useState} from 'react'


function Stats() {
    const [ entry, setEntry] = useState(35);
    const [catagories, setCatagories] = useState(6)

  return (
    <div>
        <h3>Stats</h3>
        <h5>Entries: {entry}</h5>
        <h5>Catagories: {catagories}</h5>
    </div>
  )
}

export default Stats