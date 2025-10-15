"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle"|"ok"|"error">("idle");

  async function onSubmit(formData: FormData) {
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      className="grid gap-4 max-w-lg"
      action={onSubmit as any}
    >
      <label className="grid gap-2">
        <span className="text-sm">Name</span>
        <input name="name" required className="border rounded-lg px-3 py-2" />
      </label>
      <label className="grid gap-2">
        <span className="text-sm">Email</span>
        <input name="email" type="email" required className="border rounded-lg px-3 py-2" />
      </label>
      <label className="grid gap-2">
        <span className="text-sm">Message</span>
        <textarea name="message" rows={5} required className="border rounded-lg px-3 py-2" />
      </label>
      <button className="bg-brand text-white rounded-lg px-5 py-3 w-fit">Submit</button>

      {status === "error" && (
        <p className="text-red-600">Something went wrong. Please, try again later.</p>
      )}
      {status === "ok" && (
        <p className="text-green-700">Thank you for reaching out to us! We will get back to you as soon as possible.</p>
      )}
    </form>
  );
}
