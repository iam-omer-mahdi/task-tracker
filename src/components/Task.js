import React from 'react';

function Task({task}) {
  return (
    <li className="nav-item py-2 px-4 bg-info shadow-sm">{task.name} - {task.time}</li>
  );
}

export default Task;
