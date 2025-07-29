const Footer = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 mt-12 border-t border-slate-200 dark:border-slate-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-6 text-sm md:text-base text-slate-600 dark:text-slate-400 text-center">
        &copy; {new Date().getFullYear()} Vault<span className="font-semibold text-indigo-800 dark:text-white">View</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
