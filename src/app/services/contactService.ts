export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  business?: string;
  inquiry: string;
}

export const submitContactForm = async (data: ContactFormData) => {
  try {
    // Ganti dengan URL API backend Anda jika sudah ada
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  } catch (error) {
    console.error("Error submitting contact form:", error);
    throw error;
  }
};
