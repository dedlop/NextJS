"use client";

// Usar com use (hook) => ambiente client

import { useSearchParams } from "next/navigation"

const ExemploPage = () => {

    const searchParams = useSearchParams();

    const valorParam = searchParams.get("parametro");

    const presencaParam = searchParams.has("parametro");

  return (
    <div>
        <h1>Exibindo resultados para: {valorParam}</h1>
        {presencaParam ? "Tem parametro" : "Não tem"}
    </div>
  )
}

export default ExemploPage