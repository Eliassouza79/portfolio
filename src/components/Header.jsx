import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-[#0a0a0a] border-b border-[#6b8e6b] sticky top-0 z-50">
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">

                    <Link to="/" className="text-6xl font-bold text-[#6b8e6b]">
                    Portfólio
                    </Link>

                    <div className="flex gap-8">
                        <Link to="/" className="text-white hover:text-[#6b8e6b] transition">
                        Home
                        </Link>

                        <Link to="/about" className="text-white hover:text-[#6b8e6b] transition">
                        Sobre
                        </Link>

                        <Link to="/projects" className="text-white hover:text-[#6b8e6b] transition">
                        Projetos
                        </Link>

                        <Link to="/skills" className="text-white hover:text-[#6b8e6b] transition">
                        Skills
                        </Link>

                        <Link to="/contact" className="text-white hover:text-[#6b8e6b] transition">
                        Contato
                        </Link>
                    </div>

                </div>

            </nav>
        </header>
    );
}

export default Header;