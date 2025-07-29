import { useParams } from "react-router-dom";
import Portfolio from "../components/Portfolio";

const PortfolioPage = () => {
  const { address } = useParams();

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      <Portfolio address={address} />
    </main>
  );
};

export default PortfolioPage;
