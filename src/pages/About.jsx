import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is VaultView?",
    answer:
      "VaultView is a real-time NFT portfolio tracker. It lets you view any Ethereum wallet's NFT collection in a clean, visual interface.",
  },
  {
    question: "Do I need to sign in?",
    answer:
      "Nope! You can paste any wallet address or ENS and instantly explore the associated NFTs-no login or wallet connection required.",
  },
  {
    question: "Which blockchains are supported?",
    answer:
      "Currently, VaultView supports Ethereum mainnet. Support for other chains like Polygon and Base is coming soon.",
  },
  {
    question: "Is VaultView free?",
    answer:
      "Yes! It’s completely free for public wallet viewing. Pro features may be added later.",
  },
];

export default function About() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 pb-16 text-slate-800 dark:text-slate-100">
      {/* About Us */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          At Vault<span className="font-semibold text-indigo-600 dark:text-indigo-400">View</span>,
          we're passionate about making NFTs more accessible. Whether you're an NFT collector,
          trader, or simply curious, our platform helps you understand what lives in every Ethereum wallet.
        </p>
      </section>

      {/* Our Mission */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          We aim to build the fastest and cleanest NFT portfolio dashboard on the web - 
          empowering users with tools to browse, discover, and showcase collections without friction.
        </p>
      </section>

      {/* What We Do */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">What We Do</h2>
        <ul className="list-disc ml-5 space-y-2 text-slate-600 dark:text-slate-300">
          <li>Real-time NFT portfolio viewing by wallet address</li>
          <li>ENS resolution support</li>
          <li>Responsive NFT grid gallery</li>
          <li>Dark mode & mobile-first experience</li>
          <li>Demo wallet & no login required</li>
        </ul>
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8">FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-200 dark:border-slate-700 rounded-xl">
              <button
                className="w-full flex justify-between items-center px-5 py-4 text-left font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 text-slate-600 dark:text-slate-300 animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
