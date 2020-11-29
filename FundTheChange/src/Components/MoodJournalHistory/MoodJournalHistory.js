import React, { useEffect, useState } from 'react'
import './MoodJournalHistory.css'

const MoodJournalHistory = () => {

  const [journals, setJournals] = useState([])
  useEffect(() => {
    fetch('/userJournals')
      .then(res => res.json()).then(data => setJournals(data.result))
    // dependency array that checks for changes between the hook that is placed in the dependency array
  }, [journals])

  return (
    <div>
      {journals.map(journal => {
        // styling my journal entries here 
        return (
          <div>{journal.journal + ' ' + journal.mood} </div>
        )
      })}
    </div>
  )
}

export default MoodJournalHistory;