import React from 'react'

const ListTask = ({task}) => {
  return (
    <>
      <div>
       {task.title}
       <button>Dlt</button>
      </div>
    </>
  );
};

export default ListTask;