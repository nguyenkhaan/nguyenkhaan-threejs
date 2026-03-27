import { navLinks } from '../constants/navLink';
import { styles } from '../styles/styles';
import logo from '../../assets/logo.svg';
import menu from '../../assets/menu.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
function Navbar() {
    const [active, setActive] = useState('About');
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav
            className={`${styles.paddingX} w-screen py-3 bg-primary text-white-100 flex items-center justify-between top-0 fixed left-0 right-0 z-20`}
        >
            <Link to={'/'} className="flex items-center gap-3">
                <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
                <p className="font-bold text-lg">Cloudian</p>
            </Link>

            <ul className="sm:flex hidden items-center gap-10 text-lg">
                {navLinks.map((navLink) => (
                    <li
                        key={navLink.id}
                        style={{
                            color:
                                navLink.title === active
                                    ? 'white'
                                    : 'var(--color-secondary)',
                        }}
                    >
                        <a
                            className="hover:text-white font-medium cursor-pointer"
                            onClick={() => setActive(navLink.title)}
                            href={`#${navLink.id}`}
                        >
                            {navLink.title}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="sm:hidden flex flex-1 items-center justify-end">
                {!showMenu ? (
                    <img
                        src={menu}
                        className="w-7 h-7 cursor-pointer"
                        onClick={() => setShowMenu(!showMenu)}
                    />
                ) : (
                    <span
                        className="cursor-pointer font-black text-3xl font-mono"
                        onClick={() => setShowMenu(!showMenu)}
                    >
                        X
                    </span>
                )}
                {showMenu && (
                    <ul className="absolute p-6 black-gradient text-lg flex-col justify-between flex text-white top-full my-2 min-w-[140px] right-0 mx-2 z-10 rounded-xl gap-4">
                        {navLinks.map((navLink) => (
                            <li>
                                <a
                                    className="hover:text-white font-medium cursor-pointer"
                                    onClick={() => setActive(navLink.title)}
                                    href={`#${navLink.id}`}
                                >
                                    {navLink.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    );
}
export default Navbar;
