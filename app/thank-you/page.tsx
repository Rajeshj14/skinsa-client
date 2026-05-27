import type { Metadata } from "next";
import Navbared from "@/component/navthank";
import ThankYouPage from "@/component/thank-you";

export const metadata: Metadata = {
  title: "Thank You | Skinsa Aesthetic",
  description: "Thank you for contacting Skinsa Aesthetic Clinic.",
};

export default function Page() {
  return (
    <div>
      <Navbared />
      <ThankYouPage />
    </div>
  );
}
