"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("Sending...");

        const formData = new FormData(event.currentTarget);
        formData.append("access_key", "07e6346a-1cc3-49d0-81e3-1740cedfa055");
        formData.append("subject", "New Inquiry from Dhruvil Textiles Website");
        formData.append("from_name", "Dhruvil Textiles Website");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setResult("Thank you! Your inquiry has been sent successfully. We will contact you shortly.");
                setIsSuccess(true);
                (event.target as HTMLFormElement).reset();
            } else {
                console.error("Web3Forms error:", data);
                setResult(data.message || "Something went wrong. Please try again.");
                setIsSuccess(false);
            }
        } catch (error) {
            console.error("Network error:", error);
            setResult("Network error. Please try again later.");
            setIsSuccess(false);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white p-8 border border-neutral-100 shadow-lg rounded-lg space-y-4">
            <h3 className="text-xl font-bold text-primary mb-4">Send us an inquiry</h3>

            {result && (
                <div
                    className={`p-4 rounded-md mb-4 ${isSuccess
                            ? "bg-green-50 text-green-700 border border-green-200"
                            : isSubmitting
                                ? "bg-blue-50 text-blue-700 border border-blue-200"
                                : "bg-red-50 text-red-700 border border-red-200"
                        }`}
                >
                    {result}
                </div>
            )}

            <form onSubmit={onSubmit} className="space-y-4">
                {/* Honeypot field to prevent spam */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                <div className="grid grid-cols-2 gap-4">
                    <input
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        required
                        autoComplete="given-name"
                        className="w-full p-3 border border-neutral-200 rounded-sm focus:outline-none focus:border-secondary transition-colors"
                    />
                    <input
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        required
                        autoComplete="family-name"
                        className="w-full p-3 border border-neutral-200 rounded-sm focus:outline-none focus:border-secondary transition-colors"
                    />
                </div>

                <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    required
                    autoComplete="email"
                    className="w-full p-3 border border-neutral-200 rounded-sm focus:outline-none focus:border-secondary transition-colors"
                />

                <input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    required
                    autoComplete="tel"
                    className="w-full p-3 border border-neutral-200 rounded-sm focus:outline-none focus:border-secondary transition-colors"
                />

                <textarea
                    name="message"
                    rows={4}
                    placeholder="Your Message / Requirement"
                    required
                    className="w-full p-3 border border-neutral-200 rounded-sm focus:outline-none focus:border-secondary transition-colors"
                />

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
            </form>
        </div>
    );
}
