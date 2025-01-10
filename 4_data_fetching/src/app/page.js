import { db } from "@/db";

import Link from "next/link";

export default async function Home() {
  // 3 - Resgatando dados do banco
  const todos = await db.todo.findMany();

  return (    
      <main className="container mx-auto p-4">
        <Link href="/todos/create">Ir para criação de todo</Link>
        <h1 className="text-2xl font-bold mb-4">Todos!</h1>
        <div className="space-y-4">
          {todos.map((todo) => (
            <div key={todo.id} className="bg-gray-100 p-4 rounded-lg shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold">{todo.titulo}</h2>
                  <p>{todo.descricao}</p>
                </div>
                <div className="flex space-x-2 mt-3">
                  <Link
                    href=""
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Visualizar
                  </Link>
                  <Link
                    href=""
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Editar
                  </Link>
                  <button
                    href=""
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Excluir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    );
}
