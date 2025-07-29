import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DEMO_ADDRESS = import.meta.env.VITE_DEMO_WALLET;

const Demo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/portfolio/${DEMO_ADDRESS}`);
  }, [navigate]);

  return null;
};

export default Demo;
