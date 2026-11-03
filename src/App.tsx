import { useState } from 'react';

interface TaskInterface {
  content: string;
  completion: boolean;
}

interface TaskListProps {
  taskList: TaskInterface[];
}

function Task(props: TaskInterface) {
  const [isCompleted, setIsCompleted] = useState(props.completion);

  function HandleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setIsCompleted(event.target.checked);
  }

  return (
    <li>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={HandleChange}
      />     {props.content}
    </li>
  );
}

export const taskData: TaskInterface[] = [
  { content: "Ugotować obiad", completion: false },
  { content: "Nakarmić psa", completion: true },
  { content: "Skosić ogród", completion: false }
];

export function TaskList(props: TaskListProps) {
  return (
    <ul style={{listStyleType: "none"}}>
      {props.taskList.map((task, index) => (
        <Task
          key={index}
          content={task.content}
          completion={task.completion}
        />
      ))}
    </ul>
  );
}