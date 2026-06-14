"use client";

import { useEffect, useRef, useState } from "react";

export default function WaitlistModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const kitFormRef = useRef(null);
  const kitEmailRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedEmail = email.trim();
    if (!trimmedEmail || !kitFormRef.current || !kitEmailRef.current) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    kitEmailRef.current.value = trimmedEmail;
    kitFormRef.current.submit();

    window.setTimeout(() => {
      setStatus("success");
    }, 700);
  };

  return (
    <>
      <button className="hero-join-button" type="button" onClick={() => setIsOpen(true)}>
        Join now
      </button>

      {isOpen && (
        <div className="waitlist-modal-layer" role="presentation" onMouseDown={() => setIsOpen(false)}>
          <div
            className="waitlist-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="waitlist-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button className="waitlist-close" type="button" aria-label="Close popup" onClick={() => setIsOpen(false)}>
              x
            </button>

            <p className="waitlist-kicker">Private Sellers Network</p>
            <h2 id="waitlist-title">Join the waiting list</h2>
            <p className="waitlist-copy">Get early access to brand owner playbooks, funding rooms, and private growth sessions.</p>

            <form className="waitlist-form" onSubmit={handleSubmit}>
              <label htmlFor="waitlist-email">Email address</label>
              <input
                id="waitlist-email"
                type="email"
                value={email}
                placeholder="you@brand.com"
                autoComplete="email"
                required
                onChange={(event) => {
                  setEmail(event.target.value);
                  setStatus("idle");
                }}
              />
              {status === "success" ? (
                <p className="waitlist-confirmation">Got it, please check your email or spam folder in a minute</p>
              ) : (
                <button type="submit" disabled={status === "submitting"}>
                  {status === "submitting" ? "Joining..." : "Join the waiting list"}
                </button>
              )}
            </form>
            {status === "error" && <p className="waitlist-status waitlist-status-error">Please enter a valid email.</p>}
          </div>
        </div>
      )}

      <form
        ref={kitFormRef}
        className="kit-hidden-form"
        action="https://app.kit.com/forms/9564295/subscriptions"
        method="post"
        target="kit-waitlist-frame"
        data-sv-form="9564295"
        data-uid="687c4975d9"
        data-format="inline"
        data-version="5"
        aria-hidden="true"
      >
        <input ref={kitEmailRef} type="email" name="email_address" tabIndex={-1} />
        <button type="submit" tabIndex={-1}>Subscribe</button>
      </form>
      <iframe className="kit-hidden-frame" name="kit-waitlist-frame" title="Kit waitlist submission" />
    </>
  );
}


