'use client'
import { Task } from "@/taskinterface";
import React, { FormEventHandler, useState } from "react";
import { MdEditSquare } from "react-icons/md";
import { RiDeleteBin2Fill } from "react-icons/ri";
import Modal from "./modal";
import { useRouter } from "next/navigation";
import { deleteTask, editTask } from "@/api";

interface TaskDataProps {
  task: Task;
}

const TaskData: React.FC<TaskDataProps> = ({ task }) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [DesctaskToEdit, setDescTaskToEdit] = useState(task.desc);
  const [dateTaskToEdit, setDateTaskToEdit] = useState(task.date);
  const [TitleTaskToEdit, setTitleTaskToEdit] = useState(task.title);

  const handleEditSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editTask({
      id: task.id,
      title:TitleTaskToEdit,
      desc: DesctaskToEdit,
      date: dateTaskToEdit
    })
    
    setOpenModalEdit(false);
    router.refresh(); // Refresh the router after edit
  };

  const handleDelete= async (id:string) => {
   await deleteTask(id);
   setOpenModalDelete(false)
   router.refresh()
    
  }
  return (
    <tr key={task.id} className="">
      <td>{task.title}</td>
      <td>{task.desc}</td>
      <td>{task.date}</td>
      <td className="flex gap-5">
        <MdEditSquare
          cursor="pointer"
          onClick={() => setOpenModalEdit(true)}
          size={25}
          className="text-blue-500"
        />
        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleEditSubmit}>
            <h1 className="font-bold text-lg">Edit your task</h1>
            <div className="modal-action">
            <input
                value={TitleTaskToEdit}
                onChange={(e) => setTitleTaskToEdit(e.target.value)}
                type="text"
                placeholder="Enter a title"
                className="input input-bordered w-full"
              />
              <input
                value={DesctaskToEdit}
                onChange={(e) => setDescTaskToEdit(e.target.value)}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
              <input
                value={dateTaskToEdit}
                onChange={(e) => setDateTaskToEdit(e.target.value)}
                type="date"
                placeholder=""
                className="input input-bordered w-full"
              />
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </form>
        </Modal>

        {/* delete tasks */}
        
        <RiDeleteBin2Fill onClick={()=>setOpenModalDelete(true)} cursor="pointer" size={25} className="text-red-500" />
        <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
            <h3 className="text-lg">Are you sure you want to delete this task?</h3>
            <div className="modal-action">
              <button className=" btn" onClick={()=>handleDelete(task.id)}>Yes</button>
            </div>
        </Modal>
      </td>
    </tr>
  );
};

export default TaskData;