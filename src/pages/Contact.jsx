import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaSignal } from "react-icons/fa";
import HudCard from "../components/HudCard";
import PageShell from "../components/PageShell";
import profile from "../data/profile";

const contactItems = [
  { label: "Location", value: profile.location, icon: FaMapMarkerAlt },
  { label: "Email", value: profile.email || "Not configured", icon: FaEnvelope },
  { label: "GitHub", value: profile.github || "Not configured", icon: FaGithub },
  { label: "LinkedIn", value: profile.linkedin || "Not configured", icon: FaLinkedin },
  { label: "Availability", value: profile.availability, icon: FaSignal },
];

const initialForm = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setStatus("");
  };

  const validate = () => {
    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = "Name is required.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Enter a valid email.";
    if (form.message.trim().length < 10) {
      nextErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) return;

    setStatus("Message validated. Connect an email service or backend endpoint to send it.");
    setForm(initialForm);
  };

  return (
    <PageShell
      eyebrow="Open channel"
      title="Let's Build Something"
      subtitle="Have a project, idea, or opportunity? Let's turn it into something great."
    >
      <section className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <HudCard className="p-6 sm:p-8">
          <p className="mb-6 text-xs font-bold tracking-[0.3em] text-green-400 uppercase">
            Contact information
          </p>

          <div className="space-y-4">
            {contactItems.map((item) => {
              const Icon = item.icon;
              const isConfigured = item.value !== "Not configured";

              return (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 border rounded-lg border-slate-800 bg-slate-950/40"
                >
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-green-400 border rounded border-green-400/30 bg-green-400/10">
                    <Icon aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-wider text-gray-500 uppercase">
                      {item.label}
                    </p>
                    <p className={isConfigured ? "text-sm text-gray-200" : "text-sm text-gray-500"}>
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </HudCard>

        <HudCard className="p-6 sm:p-8">
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div>
              <label htmlFor="name" className="block mb-2 text-xs font-bold tracking-wider text-green-400 uppercase">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={updateField}
                className="w-full px-4 py-3 text-sm text-white border rounded bg-slate-950/60 border-slate-700 outline-none transition focus:border-green-400 focus:shadow-[0_0_16px_rgba(114,255,99,0.15)]"
                autoComplete="name"
              />
              {errors.name && <p className="mt-2 text-xs text-red-400">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-xs font-bold tracking-wider text-green-400 uppercase">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={updateField}
                className="w-full px-4 py-3 text-sm text-white border rounded bg-slate-950/60 border-slate-700 outline-none transition focus:border-green-400 focus:shadow-[0_0_16px_rgba(114,255,99,0.15)]"
                autoComplete="email"
              />
              {errors.email && <p className="mt-2 text-xs text-red-400">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-xs font-bold tracking-wider text-green-400 uppercase">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={updateField}
                rows="7"
                className="w-full px-4 py-3 text-sm text-white border rounded resize-none bg-slate-950/60 border-slate-700 outline-none transition focus:border-green-400 focus:shadow-[0_0_16px_rgba(114,255,99,0.15)]"
              />
              {errors.message && <p className="mt-2 text-xs text-red-400">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full px-5 py-3 text-sm font-black tracking-wider text-black uppercase transition rounded bg-green-400 hover:bg-green-300"
            >
              Send Message
            </button>

            {status && (
              <p className="p-3 text-xs leading-5 text-green-300 border rounded border-green-400/30 bg-green-400/10">
                {status}
              </p>
            )}
          </form>
        </HudCard>
      </section>
    </PageShell>
  );
}
