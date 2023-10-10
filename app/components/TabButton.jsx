import React from 'react'

const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active ? 'text-pink-400 border-b border-green-400' : 'text-zinc-200'
  return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-pink-400 ${buttonClasses}`}>
    {children}
    </p>
    </button>
  )
}

export default TabButton