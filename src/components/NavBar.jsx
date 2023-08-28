import Link from "next/link";

export default function NavBar(){
return (
    <nav className= " flex justify-between bg-slate-800 p-7">
 
          <ul className="flex gap-12 text-slate-400 text-sm itens-end">
            <li> <a href="#"></a>
              <h1 className="text-slate-200 text-xl font-bold"><Link href="/Conversor">Conversor Moedas</Link></h1>
              <a href="#"></a>
            </li>
            <li> <Link href="/Moeda">Moeda</Link></li>
            <li> <Link href="/Conversor">Conversor</Link></li>
            <li> <Link href="/Teste">Perfil</Link></li>
          </ul>

          <div className="h-10 w-10 rounded overflow-hidden">
            <img src="https://i.pravatar.cc/180" alt="imagem"></img>
          </div>

    </nav>
)
}