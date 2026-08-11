import { ContactIcon } from "../contact-icon";
import { ContactLeadForm } from "../contact-lead-form";
import { ContactPageReset } from "../contact-page-reset";
import { SimplePageShell } from "../simple-page-shell";

const contactDetails = [
  {
    icon: "location",
    label: "Location:",
    lines: ["No. 20 Lorong 21A Geylang", "Datacom Enterprise Building.", "Singapore 388430"],
  },
  {
    icon: "phone",
    label: "Contact number:",
    lines: ["+65 6844 4272"],
  },
  {
    icon: "whatsapp",
    label: "WhatsApps:",
    lines: ["+65 8939 3191"],
  },
  {
    icon: "mail",
    label: "Email Address:",
    lines: ["info@dcom.com.sg"],
  },
];

export default function ContactPage() {
  return (
    <SimplePageShell active="More">
      <ContactPageReset />
      <section className="contact-page-hero" aria-label="Contact Datacom">
        <div className="contact-page-card">
          <div className="contact-page-copy">
            <span className="pill-label">Connect with us today</span>
            <h1>We're Here to Help</h1>
            <p>Fill out the form and our team will reach out within 1-2 business days.</p>

            <div className="contact-page-details" aria-label="Contact details">
              {contactDetails.map((detail) => (
                <div
                  className={detail.icon === "whatsapp" ? "contact-page-detail whatsapp" : "contact-page-detail"}
                  key={detail.label}
                >
                  <span>
                    <span className="contact-icon" aria-hidden="true">
                      <ContactIcon type={detail.icon as "location" | "phone" | "whatsapp" | "mail"} />
                    </span>
                  </span>
                  <p>
                    <strong>{detail.label}</strong>
                    {detail.lines.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </p>
                </div>
              ))}
            </div>

            <a className="contact-live-link" href="#chat">
              <img src="/assets/footer-icon-whatsapp.svg" alt="" aria-hidden="true" />
              Live Chat -Monday- Friday: 08.30-18.00 Hours
            </a>
          </div>

          <ContactLeadForm className="contact-page-form" title="Get in touch" />
        </div>
      </section>

      <section className="contact-visit" id="visit-us" aria-label="Visit Datacom Enterprise">
        <div className="contact-visit-inner">
          <h2>Visit Us</h2>
          <p>
            Looking for a reliable IT partner in Singapore? Datacom Enterprise provides expert consultation,
            installation, and support for all your rack and infrastructure needs. Contact us to discuss your project
            or request a quotation.
          </p>

          <address>
            <strong>Address:</strong>
            <a href="#contact-enquire-now">
              No. 20 Lorong 21A Geylang
              <br />
              Datacom Enterprise Building.
              <br />
              Singapore 388430
            </a>
          </address>

          <div className="contact-hours">
            <strong>Opening Hours</strong>
            <p>
              <span>Mon - Fri</span>
              <span>8:00 am - 6:00 pm</span>
            </p>
            <p>(Excluding Public Holidays)</p>
          </div>

          <iframe
            className="contact-map"
            title="Datacom Enterprise location map"
            src="https://maps.google.com/maps?hl=en&q=Datacom%20Enterprise%20Pte%20Ltd%2C%20No.%2020%20Lorong%2021A%20Geylang%2C%20Singapore%20388430&z=14&iwloc=B&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section
        className="enquiry-modal contact-enquiry-modal"
        id="contact-enquire-now"
        aria-label="Enquire Now form"
      >
        <a className="enquiry-backdrop" href="#visit-us" aria-label="Close enquiry form" />
        <div className="enquiry-dialog" role="dialog" aria-modal="true" aria-labelledby="contact-enquiry-title">
          <a className="enquiry-close" href="#visit-us" aria-label="Close enquiry form">x</a>
          <h2 id="contact-enquiry-title">Enquire Now</h2>
          <form className="enquiry-form">
            <label>
              First Name *
              <input aria-label="First Name" />
            </label>
            <label>
              Last Name *
              <input aria-label="Last Name" />
            </label>
            <label>
              Email *
              <input aria-label="Enquiry Email" />
            </label>
            <label>
              Phone
              <input aria-label="Enquiry Phone" />
            </label>
            <label className="wide">
              Product Name *
              <input aria-label="Product Name" />
            </label>
            <label className="wide">
              Write a message
              <textarea aria-label="Enquiry Message" />
            </label>
            <div className="recaptcha-box" aria-hidden="true">
              <span />
              <b>I'm not a robot</b>
              <small>reCAPTCHA</small>
            </div>
            <button className="enquiry-submit" type="button">Submit</button>
          </form>
        </div>
      </section>
    </SimplePageShell>
  );
}
