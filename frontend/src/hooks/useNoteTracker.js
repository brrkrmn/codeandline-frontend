import { useState } from "react";

const useNoteTracker = (maxNumber) => {
  const [currentNote, setCurrentNote] = useState(0);

  const handleNextNote = () => {
    setCurrentNote(currentNote => (currentNote === maxNumber ? currentNote : currentNote + 1))
  }

  const handlePrevNote = () => {
    setCurrentNote(currentNote => (currentNote === 0 ? currentNote : currentNote - 1))
  }

  return { currentNote, handleNextNote, handlePrevNote }
}

export default useNoteTracker;