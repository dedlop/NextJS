"use server"

import { db } from "./db"
import { redirect } from "next/navigation"

export async function deleteTodo(formData) {
    const id = Number(formData.get("id"))

    await db.todo.delete({
      where: {id}
    })

    redirect("/");
  }

export const addTodo = async(formData) => {
    const titulo = formData.get("titulo");
    const descricao = formData.get("descricao");
    const status = "pendente"

    const todo = await db.todo.create({
      data: {
        titulo,
        descricao,
        status,
      },
    });

    console.log(todo);

    redirect("/");
  };

export const findTodoById = async (id) => {

      // throw new Error("Ops!");

    const todo = db.todo.findFirst({
        where: {id},
    })

    return todo;
};

export const updateTodo = async(formState, formData) => {
  const id = Number(formData.get("id"));
  const titulo = formData.get("titulo");
  const descricao = formData.get("descricao");

  try {
    // throw new Error("Falha ao salvar dados, sistema offline.");

    if(titulo.length < 5) {
      return {
        errors: "O título precisa de pelo menos 5 caracteres.",
      }
    }
  
    if(descricao.length < 10) {
      return {
        errors: "A descrição precisa de pelo menos 10 caracteres.",
      }
    }

    await db.todo.update({
      where: { id },
      data: { titulo, descricao },
    });
  
    redirect("/");
  } catch (error) {


    return {
      errors: error.message,
    }
  }
};