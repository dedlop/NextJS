import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* Aula 1 - navegação */}
        <h1>Home</h1>
        <Link href="/sobre">Sobre</Link>
        {/* Aula 2 - dados dinâmicos */}
        <h1>Acessar posts</h1>
        <Link href="/posts">Posts</Link>
        {/* Aula 3 - parâmetros na URL */}
        <Link href="/exemplo?parametro=valor">Página com parâmetro</Link>
        {/* Aula 4 - nested  routes */}
        <Link href="/produtos/categorias/roupas">Ir a categoria de Roupas</Link>
    </main>    
  );
}
