"use server";

import { z } from "zod";

// Schema for validation using Zod v4
const InquirySchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    message: z.string().min(1, "Message is required"),
});

export async function submitInquiry(prevState: any, formData: FormData) {
    const rawData = {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
    };

    // Validate the data
    const validatedFields = InquirySchema.safeParse(rawData);

    if (!validatedFields.success) {
        // Zod v4 compatible error handling
        const fieldErrors: Record<string, string[]> = {};
        for (const issue of validatedFields.error.issues) {
            const path = issue.path[0] as string;
            if (!fieldErrors[path]) {
                fieldErrors[path] = [];
            }
            fieldErrors[path].push(issue.message);
        }

        return {
            success: false,
            errors: fieldErrors,
            message: "Please fix the errors below.",
        };
    }

    const { firstName, lastName, email, phone, message } = validatedFields.data;

    try {
        // Using FormSubmit.co - simple and free email service
        const response = await fetch("https://formsubmit.co/ajax/dhruviltextiles.owner@gmail.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                _subject: `New Inquiry from ${firstName} ${lastName} - Dhruvil Textiles`,
                name: `${firstName} ${lastName}`,
                email: email,
                phone: phone,
                message: message,
                _template: "table",
            }),
        });

        const result = await response.json();
        console.log("FormSubmit Response:", JSON.stringify(result, null, 2));

        // FormSubmit returns success: "true" as string or activation message
        if (result.success === "true" || result.success === true) {
            return {
                success: true,
                message: "Thank you! Your inquiry has been sent successfully. We will contact you shortly.",
                errors: {},
                resetKey: Date.now().toString(),
            };
        } else if (result.message && result.message.includes("activation")) {
            // First time use - activation email was sent
            return {
                success: true,
                message: "Thank you! Your inquiry was received. Please check back soon.",
                errors: {},
                resetKey: Date.now().toString(),
            };
        } else {
            console.error("FormSubmit error:", result);
            return {
                success: false,
                message: "Unable to send message. Please email us directly at dhruviltextiles.owner@gmail.com",
                errors: {},
            };
        }
    } catch (error) {
        console.error("Error sending email:", error);
        return {
            success: false,
            message: "Network error. Please email us directly at dhruviltextiles.owner@gmail.com",
            errors: {},
        };
    }
}
