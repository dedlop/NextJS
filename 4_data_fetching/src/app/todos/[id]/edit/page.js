import { findTodoById } from '@/actions'
import TodoForm from '@/components/TodoForm'
import React from 'react'

const TodoEdit = async ({params}) => {

    const id = Number(params.id)

    const todo = await findTodoById(id)

  return (
    <div className="max-w-md mx-auto mt-10">
        <h1 className="text-2xl font-bold text-center mb-6">
          Editando: {todo.titulo}
        </h1>
        <TodoForm todo={todo} />
    </div>
  )
}

export default TodoEdit