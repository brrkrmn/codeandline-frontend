import { useState } from "react";

const useToggle = () => {
  const [isTrue, setIsTrue] = useState(false);
  const handleToggleTrue = () => {
    setIsTrue(!isTrue)
  }
  return { isTrue, handleToggleTrue }
}

export default useToggle;