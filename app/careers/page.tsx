import { SimplePageShell } from "../simple-page-shell";

const responsibilities = [
  "Provide high quality customer services and attend user calls & emails on priority",
  "Need to Provide a IT Assistance and technical support via phone, email and remote tools or in person at the user's location.",
  "Hardware: Desktop, Notebooks, Printer, Video Conference, UPS, NAS, Servers and other Network devices need to Install, Configure, administer and maintain computer hardware operating system and applications.",
  "Based on customer request Relocation of computer devices and peripherals / Support and Troubleshoot which include diagnosis of hardware, networking and software failures or problem.",
  "Hardware and software which include notebooks/workstation/UPS/NAS/Server/Microsoft Office 365 / Window 7/8/10/11.",
  "Troubleshoot includes password resets, printer set up, troubleshooting account specific client applications and basic diagnosing of the desktop / laptop software problems",
  "Replace parts for notebook, Desktop, Server or Related IT hardware.",
  "Setting up of the users profiles for applications.",
  "Assisting / advising end user in data backup if required.",
  "Providing basis training in computer operation and management.",
  "Advising on software or hardware upgrades.",
  "Provisioning of IT Equipment for new joiners",
  "Front line support for customer inquiries and issues via email, phone and onsite.",
  "Any other ad-hoc duties assigned / assist team lead in any assigned tasks.",
];

export default function CareersPage() {
  return (
    <SimplePageShell active="Careers">
      <section className="careers-hero">
        <span className="pill-label">Careers</span>
        <h1>Position Available</h1>
      </section>

      <section className="career-position">
        <h2>01. IT Support Engineer</h2>
        <div className="career-position-grid">
          <div>
            <h3>Job Description:</h3>
            <p>
              Provide IT assistance and technical support, including the
              installation, configuration, administration, and maintenance of
              computer hardware, operating systems, and applications. This
              includes diagnosing and resolving hardware, networking, and
              software issues. Deliver appropriate solutions and consultation
              for data center infrastructure, servers, and other IT-related
              inquiries.
            </p>
            <img
              src="https://static.wixstatic.com/media/1470f5_521b4d8c3f594ad092b445a054fb662e~mv2.jpg/v1/fill/w_1172,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/low-light-data-center-running-advanced-ai-models-neural-network-processes.jpg"
              alt="Data center infrastructure"
            />
          </div>

          <div>
            <h3>Job Responsibilities</h3>
            <ul>
              {responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a href="https://www.linkedin.com/hiring/jobs/3327918552/detail/">
              https://www.linkedin.com/hiring/jobs/3327918552/detail/
            </a>
          </div>
        </div>
      </section>

      <section className="career-apply">
        <h2>Apply Position Now</h2>
        <form className="career-apply-form">
          <h3>Apply Now</h3>
          <label>
            First Name *
            <input name="firstName" type="text" />
          </label>
          <label>
            Last Name *
            <input name="lastName" type="text" />
          </label>
          <div className="career-form-row">
            <label>
              Email *
              <input name="email" type="email" />
            </label>
            <label>
              Phone *
              <input name="phone" type="tel" />
            </label>
          </div>
          <label>
            Start Date
            <input aria-label="Choose a start date" name="startDate" type="date" />
          </label>
          <button type="button">Next</button>
        </form>
      </section>
    </SimplePageShell>
  );
}
