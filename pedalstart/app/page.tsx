import { getAllTask } from "@/api";
import AddTask from "./component/AddTask";
import TaskList from "./component/TaskList";

export default async function Home() {
  const tasks=await getAllTask();
  console.log(tasks);
  return (
    <main className="max-w-full mx-auto mt-4 bg-ring">
      <div className="text-center my-5 mx-10 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Task management application</h1>
        <AddTask/>
      </div>
      <div className="flex justify-center items-center">
      <TaskList tasks={tasks}/>
      </div>
      
    </main>
  );
}
