import { getAllTask } from "@/api";
import AddTask from "./component/AddTask";
import TaskList from "./component/TaskList";

export default async function Home() {
  const tasks=await getAllTask();
  // console.log(tasks);
  return (
   
    <div className=" max-w-full mx-auto h-screen mb-4 flex flex-col  items-center justify-center space-x-2 overflow-hidden border border-gray-200 bg-white px-7 py-2 shadow-md  ">
    <main className="flex flex-col w-full justify-center relative isolate">
      <div className="pointer-events-none absolute insert-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
       
      <div style={{
              clipPath:"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            }} className="relative left-[calc(50%-11rem)]  aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"/>

           
      </div>
      <div className="text-center my-5 mx-10 flex flex-col gap-4 max-x-6xl px-6">
        <h1 className="text-2xl font-bold underline">Task management application</h1>
        <AddTask/>
      </div>
      <div className="flex justify-center items-center ">
      <TaskList tasks={tasks}/>
      </div>
    
    </main>
    </div>
  );
}
