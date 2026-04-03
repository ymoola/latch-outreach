"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { SectionReveal } from "@/components/SectionReveal";

type FormState = {
  name: string;
  email: string;
  company: string;
  notes: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  notes: ""
};

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message?: string;
  }>({ type: "idle" });
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ type: "idle" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formState)
      });

      const payload = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus({
          type: "error",
          message: payload.error || "Unable to send your message right now."
        });
        return;
      }

      setFormState(initialState);
      setStatus({
        type: "success",
        message:
          "Thanks. Your note has been sent and we'll follow up to schedule a conversation."
      });
    } catch {
      setStatus({
        type: "error",
        message: "A network error prevented the message from being sent."
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="section-shell bg-white">
      <div className="container-shell">
        <div className="grid gap-12 xl:grid-cols-[0.85fr_1.15fr]">
          <SectionReveal>
            <SectionHeading
              eyebrow="Contact"
              title="Let's build this together."
              description="Reach out to learn more, request the pitch deck, or schedule a call."
            />
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="surface-card p-8 md:p-10">
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid gap-5 md:grid-cols-2">
                  <Field
                    label="Name"
                    name="name"
                    type="text"
                    value={formState.name}
                    onChange={(value) =>
                      setFormState((state) => ({ ...state, name: value }))
                    }
                  />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={(value) =>
                      setFormState((state) => ({ ...state, email: value }))
                    }
                  />
                </div>
                <Field
                  label="Company"
                  name="company"
                  type="text"
                  value={formState.company}
                  onChange={(value) =>
                    setFormState((state) => ({ ...state, company: value }))
                  }
                />
                <div>
                  <label
                    htmlFor="notes"
                    className="mb-2 block text-sm font-semibold text-carbon"
                  >
                    Notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={6}
                    value={formState.notes}
                    onChange={(event) =>
                      setFormState((state) => ({
                        ...state,
                        notes: event.target.value
                      }))
                    }
                    className="w-full rounded-[1.25rem] border border-carbon/10 bg-bone px-4 py-3 text-base text-carbon outline-none transition placeholder:text-carbon/35 focus:border-teal"
                    placeholder="What would you like to discuss?"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full"
                  disabled={submitting}
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>

                {status.type !== "idle" ? (
                  <div
                    className={`rounded-[1.25rem] px-4 py-3 text-sm ${
                      status.type === "success"
                        ? "bg-teal/10 text-teal-500"
                        : "bg-red-50 text-red-600"
                    }`}
                  >
                    {status.message}
                  </div>
                ) : null}
              </form>

              <p className="mt-6 text-sm text-carbon/58">
                Or email us directly at{" "}
                <a
                  href="mailto:corporate@latchclub.ca"
                  className="font-semibold text-teal hover:text-teal-500"
                >
                  corporate@latchclub.ca
                </a>
              </p>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
};

function Field({ label, name, type, value, onChange }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-carbon">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-[1.25rem] border border-carbon/10 bg-bone px-4 py-3 text-base text-carbon outline-none transition placeholder:text-carbon/35 focus:border-teal"
        required
      />
    </div>
  );
}
