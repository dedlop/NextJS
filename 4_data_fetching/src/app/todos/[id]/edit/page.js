import { findTodoById } from '@/actions'
import React from 'react'

const TodoEdit = async ({params}) => {

    const id = Number(params.id)

    const todo = await findTodoById(id)

  return (
    <div>
        <h1>Editando: {todo.titulo}</h1>
        {/* form */}
    </div>
  )
}

export default TodoEdit