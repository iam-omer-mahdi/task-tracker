import Task from './Task'

function Tasks({tasks}) {
  return (
    <ul className="nav gap-2 justify-content-center mt-3">
      {tasks.map(task => <Task key={task.name} task={task} />)}
    </ul>
  );
}

export default Tasks;
