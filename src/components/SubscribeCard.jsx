import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function SubscribeCard() {
    const [email, setEmail] = useState("");
    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState({ type: "", text: "" });

    const isValidEmail = (v) => /\S+@\S+\.\S+/.test(v);

    const handleSubscribe = async (e) => {
        e.preventDefault();
        if (!isValidEmail(email)) {
            setMsg({ type: "error", text: "Please enter a valid email address." });
            return;
        }
        if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
            setMsg({ type: "error", text: "Email service is not configured." });
            return;
        }

        try {
            setSending(true);
            setMsg({ type: "", text: "" });

            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    to_email: email,
                    subject: "Welcome to VaultView - You're subscribed!",
                    newsletter_title: "Welcome to VaultView",
                    newsletter_snippet: "NFT insights and platform updates, straight to your inbox.",
                    cta_url: "https://vaultview-tau.app",
                    cta_label: "Open VaultView",
                    unsubscribe_url: "https://vaultview-tau.vercel.app/unsubscribe",
                    sent_at: new Date().toLocaleDateString(),
                    year: new Date().getFullYear().toString()
                },
                { publicKey: PUBLIC_KEY }
            );

            setMsg({ type: "success", text: "Subscribed! Check your inbox." });
            toast.success("Subscribed! Check your inbox or spam.");
            setEmail("");
        } catch (err) {
            setMsg({ type: "error", text: "Subscription failed. Please try again." });
            toast.success("Subscription failed. Please try again later.");
        } finally {
            setSending(false);
        }
    };

    return (
        <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 backdrop-blur-sm">
            <h4 className="text-lg font-bold text-white mb-2">Stay Updated</h4>
            <p className="text-sm text-slate-400 mb-4">
                Get the latest NFT insights and platform updates
            </p>

            <form onSubmit={handleSubscribe} className="flex gap-3">
                <input type="text" name="_gotcha" className="hidden" tabIndex="-1" autoComplete="off" />

                <input
                    type="email"
                    name="to_email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={sending}
                    className="flex-1 px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-300"
                />

                <button
                    type="submit"
                    disabled={sending || !isValidEmail(email)}
                    className="px-6 py-3 font-semibold text-white rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-violet-500/25 disabled:opacity-60"
                >
                    {sending ? "Sending…" : "Subscribe"}
                </button>
            </form>

            {msg.text && (
                <p
                    className={`mt-3 text-sm ${msg.type === "success" ? "text-emerald-400" : "text-rose-400"
                        }`}
                    role="status"
                    aria-live="polite"
                >
                    {msg.text}
                </p>
            )}
        </div>
    );
}
