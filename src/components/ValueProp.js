import React from 'react'

function ValueProp({ Icon, title }) {
    
  return (
    <div className="flex gap-4 items-center ">
      <Icon className="h-6 w-6 text-blue-400" />
       <p className="text-lg">{title}</p>
    </div>
  );
}

export default ValueProp