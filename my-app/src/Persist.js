 import React, { useState } from "react"
 
 // テーマ
 function usePersist () {
    const key = "hooks"
    const value = () => {
      try {
        const item = window.localStorage.getItem(key)
        console.log("OK 1")
        return item ? JSON.parse(item) : null
      } catch(err){
        console.log(err)
        return null;
      }
    }
    const [savedValue, setSavedValue] = useState(value)

    return [savedValue, setSavedValue] 
  }

  export default usePersist