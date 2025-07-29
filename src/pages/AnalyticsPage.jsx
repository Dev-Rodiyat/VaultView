import { useParams } from "react-router-dom";
import Analytics from "../components/Analytics";

const AnalyticsPage = () => {
    const { address } = useParams()

    return (
        <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
            {address ? (
                <Analytics address={address} />
            ) : (
                <div className="max-w-xl mx-auto px-4 py-20 text-center">
                    <h1 className="text-2xl font-semibold">No wallet address provided.</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-2">Try clicking from the home page in order use the wallet id</p>
                </div>
            )}
        </main>
    );
};

export default AnalyticsPage;
