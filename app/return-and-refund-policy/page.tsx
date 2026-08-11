import { PolicyPage } from "../policy-page";

const sections = [
  {
    title: "1. Overview",
    body: "We aim to provide reliable IT products and services. If you encounter any issues with the products or services provided, this Return and Refund Policy outlines the conditions under which returns or refunds may be accepted.",
  },
  {
    title: "2. Eligibility for Returns",
    body: "Returns may be accepted under the following conditions:",
    points: [
      "The product received is defective or damaged.",
      "The product delivered is incorrect or not as ordered.",
      "The issue is reported within 7 days of receiving the product.",
      "Items must be returned in their original condition, including packaging, accessories, and documentation where applicable.",
    ],
  },
  {
    title: "3. Non-Returnable Items",
    body: "The following items are generally not eligible for return or refund:",
    points: [
      "Products that have been used, modified, or damaged after delivery.",
      "Software, licenses, or digital products once activated or delivered.",
      "Customized or special-order items.",
      "Services that have already been completed.",
    ],
  },
  {
    title: "4. Return Process",
    body: "To request a return, please contact us with the following information:",
    points: [
      "Order or invoice number",
      "Description of the issue",
      "Photos or evidence if the product is damaged or defective",
      "Our team will review the request and provide instructions for the return process.",
    ],
  },
  {
    title: "5. Refunds",
    body: "Once the returned item has been received and inspected, we will notify you of the approval or rejection of your refund. If approved:",
    points: [
      "Refunds will be processed through the original payment method where possible.",
      "Processing time may take 7-14 business days depending on the payment provider.",
    ],
  },
  {
    title: "6. Exchange",
    body: "In certain cases, we may offer a replacement instead of a refund if the product is defective or incorrect.",
  },
  {
    title: "7. Shipping Costs",
    points: [
      "Customers may be responsible for return shipping costs unless the return is due to an error on our side, such as wrong or defective items.",
    ],
  },
  {
    title: "8. Contact Us",
    body: "For any return or refund requests, please contact us through our website or the provided contact details.",
  },
];

export default function ReturnAndRefundPolicyPage() {
  return <PolicyPage title="Return and Refund Policy" sections={sections} />;
}
