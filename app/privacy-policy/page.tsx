import { PolicyPage } from "../policy-page";

const sections = [
  {
    title: "1. Introduction",
    body: "We are committed to protecting your personal information and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.",
  },
  {
    title: "2. Information We Collect",
    body: "We may collect personal and non-personal information when you interact with our website or contact us. This may include:",
    points: [
      "Name",
      "Email address",
      "Phone number",
      "Company name",
      "IP address",
      "Any information you provide through contact forms or inquiries",
    ],
  },
  {
    title: "3. How We Use Information",
    body: "The information we collect may be used for the following purposes:",
    points: [
      "To respond to inquiries and provide customer support",
      "To provide IT assistance and technical services",
      "To improve our website and services",
      "To communicate updates, services, or important information",
      "To manage and maintain our business operations",
    ],
  },
  {
    title: "4. Sharing of Information",
    body: "We do not sell, trade, or rent your personal information to third parties. Your information may only be shared when necessary to:",
    points: [
      "Provide services requested by you",
      "Comply with legal obligations",
      "Protect our rights, safety, or property",
    ],
  },
  {
    title: "5. Data Security",
    body: "We take reasonable measures to protect your personal information from unauthorized access, misuse, or disclosure. However, no method of transmission over the internet is completely secure.",
  },
  {
    title: "6. Cookies and Tracking Technologies",
    body: "Our website may use cookies or similar technologies to improve user experience, analyze website traffic, and understand how visitors use our website.",
  },
  {
    title: "7. Third-Party Links",
    body: "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those external sites.",
  },
  {
    title: "8. Your Rights",
    body: "You may request access, correction, or deletion of your personal information by contacting us.",
  },
  {
    title: "9. Changes to This Privacy Policy",
    body: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated effective date.",
  },
  {
    title: "10. Contact Us",
    body: "If you have any questions about this Privacy Policy or how your information is handled, please contact us through our website or provided contact details.",
  },
];

export default function PrivacyPolicyPage() {
  return <PolicyPage title="Privacy Policy" sections={sections} />;
}
