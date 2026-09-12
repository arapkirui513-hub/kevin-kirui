"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const inputStyles =
  "w-full rounded-md border border-black/15 bg-white px-4 py-2.5 text-sm text-[var(--color-text)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      company: formData.get("company"), // honeypot, left empty by real visitors
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(
        "Something went wrong. Please try again, or email directly."
      );
    }
  }

  if (status === "success") {
    return (
      <p className="mt-2 text-sm" style={{ color: "var(--color-accent)" }}>
        Message sent. I&apos;ll get back to you soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 max-w-md space-y-4">
      {/* Honeypot field, hidden off-screen. Bots that auto-fill every field
          will fill this one; real visitors never see or reach it. No visible
          label: nothing here should be perceivable, not even briefly. */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <input
          type="text"
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="name" className="mb-1 block text-sm text-black/70">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          maxLength={200}
          className={inputStyles}
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm text-black/70">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          maxLength={320}
          className={inputStyles}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm text-black/70">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={5}
          className={inputStyles}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-md bg-[var(--color-primary)] px-6 py-3 text-sm font-medium !text-white transition-colors duration-200 hover:bg-[var(--color-accent)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
