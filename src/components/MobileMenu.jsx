import { X } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

const MobileMenu = ({ onClose, navLinks }) => {
    const { pathname } = useLocation();

    return (
        <div className="fixed inset-0 bg-black/60 z-50 flex justify-end">
            <div className="bg-white dark:bg-slate-800 w-3/4 max-w-sm h-full p-5 shadow-lg flex flex-col">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-slate-800 dark:text-white">Menu</h2>
                    <button onClick={onClose} className="text-slate-600 dark:text-slate-300 hover:text-red-500">
                        <X className="w-6 h-6" />
                    </button>
                </div>
                <nav className="flex flex-col space-y-4">
                    {navLinks.map(link => (
                        <Link
                            key={link.label}
                            to={link.href}
                            onClick={onClose}
                            className={`text-lg transition ${pathname === link.href
                                    ? "text-indigo-600 dark:text-indigo-400 underline underline-offset-4"
                                    : "text-slate-700 dark:text-slate-200 hover:text-indigo-500 dark:hover:text-indigo-400"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default MobileMenu;
