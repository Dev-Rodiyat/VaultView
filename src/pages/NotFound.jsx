import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { AlertTriangle } from 'lucide-react';

const NotFound = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        if (window.history.length > 2) {
            navigate(-1);
        } else {
            navigate('/');
        }
    };
    return (
        <div className="flex items-center justify-center bg-white dark:bg-slate-900 px-4">
            <div className="text-center max-w-md">
                <div className="flex justify-center mb-6">
                    <AlertTriangle className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />
                </div>

                <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-2">
                    404 — Page not found
                </h1>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                    The page you're looking for doesn’t exist or has been moved.
                </p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <button
                        onClick={handleBack}
                        className="inline-flex items-center gap-2 bg-indigo-500 text-white px-6 py-3 rounded-full hover:bg-indigo-600 transition font-medium"
                    >
                        <FaArrowLeft /> Go Back
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default NotFound;
