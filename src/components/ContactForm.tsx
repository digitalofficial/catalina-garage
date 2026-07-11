"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitLead, type LeadState } from "@/app/actions";

const services = ["Oil change / tune-up", "Brakes", "Engine diagnostics", "AC / heating", "Transmission", "Tires / alignment", "Electrical", "Suspension", "Pre-purchase inspection", "Something else"];
const field = "w-full border-2 border-ink/15 bg-white px-4 py-3 text-[15px] text-ink placeholder:text-ink/30 focus:border-red focus:outline-none transition-colors";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="btn-manga disabled:opacity-60 disabled:cursor-not-allowed">
      {pending ? "Sending\u2026" : "Book It"}
      {!pending && (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      )}
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useFormState<LeadState, FormData>(submitLead, {});
  return (
    <form action={formAction} className="space-y-4">
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-bold uppercase tracking-wide text-ink/60 mb-1.5">Name</label>
          <input id="name" name="name" required className={field} placeholder="Jane Doe" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-bold uppercase tracking-wide text-ink/60 mb-1.5">Phone</label>
          <input id="phone" name="phone" type="tel" required className={field} placeholder="(520) 555-0123" />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-bold uppercase tracking-wide text-ink/60 mb-1.5">Email</label>
        <input id="email" name="email" type="email" required className={field} placeholder="jane@email.com" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="vehicle" className="block text-sm font-bold uppercase tracking-wide text-ink/60 mb-1.5">Vehicle <span className="text-ink/30">(year/make/model)</span></label>
          <input id="vehicle" name="vehicle" className={field} placeholder="2019 Toyota Tacoma" />
        </div>
        <div>
          <label htmlFor="service_type" className="block text-sm font-bold uppercase tracking-wide text-ink/60 mb-1.5">What do you need?</label>
          <select id="service_type" name="service_type" defaultValue="Oil change / tune-up" className={field}>
            {services.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-bold uppercase tracking-wide text-ink/60 mb-1.5">Tell us what&apos;s going on <span className="text-ink/30">(optional)</span></label>
        <textarea id="message" name="message" rows={4} className={field} placeholder="Weird noise, warning light, how long it's been acting up..." />
      </div>
      {state?.error && (
        <p role="alert" className="border-2 border-red bg-red/5 px-4 py-3 text-sm text-red font-semibold">
          {state.error}
        </p>
      )}
      <div className="flex items-center gap-4 pt-2">
        <SubmitButton />
        <span className="text-xs text-ink/40 font-medium">We&apos;ll confirm fast.</span>
      </div>
    </form>
  );
}
