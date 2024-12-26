import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { TodoContext } from '../Contexts/TodoContext'
import { toast } from "react-toastify";
import Modal from '../components/Modal'

function Detay() {

  const navigate = useNavigate()
  const { slug } = useParams()
  const { state, dispatch } = useContext(TodoContext)
  const todoDetail = state.todos.find((e) => e.id == slug)

  // const [isEdited, setIsEdited] = useState(false)
  const [editedTodo, setEditedTodo] = useState(null)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  useEffect(() => {
    if (todoDetail) {
      setEditedTodo(todoDetail.todo)
    } else {
      navigate('/')
    }
  }, [todoDetail])

  function handleEdit() {
    dispatch({ type: 'EDIT_TODO', payload: editedTodo, id: slug })
    toast.success('Yapılacak güncellendi.')
    setIsEditModalOpen(false)
  }

  function handleDelete() {
    dispatch({ type: 'DELETE_TODO', id: todoDetail.id })
    toast.success('Yapılacak silindi.')
    setIsDeleteModalOpen(false)
    navigate('/')
  }



  return (
    <div className='container mx-auto p-1 flex justify-center items-center h-dvh'>
      {todoDetail && (
        <div className='shadow-md p-3 rounded-md w-full text-center'>
          <p className='text-xl my-5'>{todoDetail.todo}</p>

          <div className='flex justify-center gap-3'>
            <button
              onClick={() => setIsDeleteModalOpen(true)}
              className='border w-32 p-2 hover:opacity-70 duration-300 rounded-md bg-red-500'
            >
              Sil
            </button>
            <button
              onClick={() => setIsEditModalOpen(true)}
              className='border p-2 hover:opacity-70 duration-300 rounded-md bg-blue-500 w-32'
            >
              Düzenle
            </button>
          </div>

          {/* Düzenleme Modalı */}
          <Modal
            isOpen={isEditModalOpen}
            onClose={() => setIsEditModalOpen(false)}
            title="Yapılacak Düzenle"
          >
            <input
              value={editedTodo}
              type="text"
              onChange={(e) => setEditedTodo(e.target.value)}
              className='border w-full mb-4 p-2 rounded-md'
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="w-full py-2 border rounded-md hover:bg-gray-100"
              >
                İptal
              </button>
              <button
                onClick={handleEdit}
                className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Kaydet
              </button>
            </div>
          </Modal>

          {/* Silme Modalı */}
          <Modal
            isOpen={isDeleteModalOpen}
            onClose={() => setIsDeleteModalOpen(false)}
            title="Yapılacak Sil"
          >
            <p className="mb-4">Bu yapılacağı silmek istediğinizden emin misiniz?</p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="w-full py-2 border rounded-md hover:bg-gray-100"
              >
                İptal
              </button>
              <button
                onClick={handleDelete}
                className="w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Sil
              </button>
            </div>
          </Modal>
        </div>
      )}
    </div>
  )
}

export default Detay