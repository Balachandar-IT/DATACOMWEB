import { PolicyPage } from "../policy-page";

const sections = [
  {
    title: "1. Introduction",
    body: "These Terms and Conditions govern the use of our website and services. By accessing this website or engaging with our services, you agree to comply with these terms.",
  },
  {
    title: "2. Use of Website",
    body: "You agree to use this website only for lawful purposes and in a way that does not infringe on the rights or restrict the use of this website by others. Unauthorized use of this website may give rise to a claim for damages or be considered a criminal offense.",
  },
  {
    title: "3. Services",
    body: "We provide IT-related services including technical support, system installation, configuration, and consultation for servers, data centers, and other IT infrastructure. All services are subject to availability and agreement between both parties.",
  },
  {
    title: "4. Accuracy of Information",
    body: "We strive to ensure that all information on this website is accurate and up to date. However, we do not guarantee the completeness, reliability, or accuracy of the information provided.",
  },
  {
    title: "5. Intellectual Property",
    body: "All content on this website, including text, images, graphics, and logos, is the property of the company unless otherwise stated. Unauthorized reproduction or distribution of any materials is prohibited.",
  },
  {
    title: "6. Limitation of Liability",
    body: "We will not be liable for any direct, indirect, incidental, or consequential damages arising from the use of this website or our services, including but not limited to data loss, system downtime, or business interruption.",
  },
  {
    title: "7. Third-Party Links",
    body: "Our website may include links to third-party websites. We do not control or take responsibility for the content or policies of these external websites.",
  },
  {
    title: "8. Changes to Services or Terms",
    body: "We reserve the right to modify or update these Terms and Conditions at any time without prior notice. Continued use of the website after changes are made constitutes acceptance of the updated terms.",
  },
  {
    title: "9. Governing Law",
    body: "These Terms and Conditions shall be governed and interpreted in accordance with the applicable laws and regulations of the jurisdiction in which the company operates.",
  },
  {
    title: "10. Contact Information",
    body: "If you have any questions regarding these Terms and Conditions, please contact us through the website or provided contact details.",
  },
];

export default function TermsAndConditionsPage() {
  return <PolicyPage title="Terms and Conditions" sections={sections} />;
}
