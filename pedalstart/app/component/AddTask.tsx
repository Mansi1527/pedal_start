'use client'
import { CiCirclePlus } from "react-icons/ci";
import Modal from "./modal";
import { FormEventHandler, useState } from "react";
import { addTask } from "@/api";
import { useRouter } from "next/navigation";
import {v4 as uuidv4} from "uuid"
const AddTask=()=>{
    const router =useRouter()
    const [modalOpen,setModalOpen]=useState(false)
    const [newDescTaskValue,setNewDescTaskValue]=useState('')
    const [newTitleValue,setNewTitleValue]=useState('')
    const [newDateValue,setNewDateValue]=useState(Date)
    const handleNewTaskSubmit:FormEventHandler<HTMLFormElement>= async(e)=>{
        e.preventDefault();
       await addTask({
        id:uuidv4(),
        title:newTitleValue,
        desc:newDescTaskValue,
        date:newDateValue
       })
       setNewDescTaskValue('')
       setNewTitleValue('')
       setNewDateValue('')
        setModalOpen(false)
        router.refresh()
    }
    return(
        <div className="">
        <button onClick={()=>setModalOpen(true)} className="w-full btn bg-blue-700 flex justify-center py-1 rounded-lg">Add new task <CiCirclePlus size={20} /></button>
        <Modal  modalOpen={modalOpen} setModalOpen={setModalOpen}>
            <form onSubmit={handleNewTaskSubmit}>
                <h1 className="font-bold text-lg">Add your new task</h1>
                <div className="modal-action">
                <input 
                value={newTitleValue}
                onChange={e=>setNewTitleValue(e.target.value)}
                type="text"
                placeholder="Enter a Title"
                className="input input-bordered w-full input-lg placeholder:text-sm" />
                <input 
                value={newDescTaskValue}
                onChange={e=>setNewDescTaskValue(e.target.value)}
                type="text"
                placeholder="Describe your task"
                className="input input-bordered w-full input-lg placeholder:text-sm" />

                <input 
                value={newDateValue}
                onChange={e=>setNewDateValue(e.target.value)}
                type="date"
                
                className="input input-bordered w-full input-lg " />
                <button type="submit" className="btn btn-lg">Submit</button>
                </div>
            </form>
        </Modal>
        </div>
    )
}
export default AddTask