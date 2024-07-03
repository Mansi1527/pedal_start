import { Task } from "@/taskinterface";
import React from "react";
import TaskData from "./task";

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <div className=" ">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th className="text-black">Title</th>
              <th className="text-black">Description</th>
              <th className="text-black">Due Date</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <TaskData key={task.id} task={task} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskList;
