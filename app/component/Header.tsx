import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-16 bg-black text-white flex items-center px-10">
      <div className="flex  w-full justify-between">
        <div>Logo</div>
        <nav className="block">
          <ul className="flex space-x-2">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/club">Club</Link></li>
            <li><Link href="/equipe">Equipe</Link></li>
            <li><Link href="/infos">Infos</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}