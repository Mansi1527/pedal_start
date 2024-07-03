import { Task } from "./taskinterface";
const baseurl="http://localhost:3001"

export const getAllTask = async():Promise<Task[]>=>{
    const res= await fetch(`${baseurl}/tasks`,{cache:'no-store'});
    // if (!res.ok) {
    //     throw new Error(`Failed to fetch tasks: ${res.statusText}`);
    // }
    const tasks=await res.json();
    return tasks
}
export const addTask=async(todo:Task):Promise<Task>=>{
    const res=await fetch(`${baseurl}/tasks`,{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(todo)
    })
    const newTask=await res.json();
    return newTask;
}
export const editTask=async(todo:Task):Promise<Task>=>{
    const res=await fetch(`${baseurl}/tasks/${todo.id}`,{
        method:'PUT',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(todo)
    })
    const updatedTask=await res.json();
    return updatedTask;
}

export const deleteTask=async(id:string):Promise<void>=>{
   await fetch(`${baseurl}/tasks/${id}`,{
        method:'delete',
    })
}