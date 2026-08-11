import { CookieSettings } from "../cookie-settings";
import { NavMoreMenu } from "../nav-more-menu";
import { ProductSearch } from "../product-search";
import { SiteFooter } from "../site-footer";
import { SmartChat } from "../smart-chat";

const navItems = [
  ["Home", "/"],
  ["Services", "/home/services"],
  ["Shop", "/shop"],
  ["Business IT Products", "/business-it-products-2"],
  ["Promotion", "/promotion-1"],
  ["Data Center Products", "/business-it-products-2-1"],
  ["TOUGH Server Racks", "/s-projects-side-by-side"],
  ["AI Workstations", "/ai-workstations"],
  ["Explore", "/explore"],
  ["Careers", "/careers"],
  ["More", "#more"],
];

const gpuCards = [
  [
    "RTX PRO 6000 Blackwell",
    "RTX Pro 6000 delivers high-performance AI and rendering capabilities with 96GB memory for demanding workloads.",
    "https://static.wixstatic.com/media/1470f5_5659abe1471a48759347a10e3fd7e2ad~mv2.png/v1/fill/w_301,h_271,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/rtx-pro-6000-blackwell-ai-workstation.png",
  ],
  [
    "RTX 6000 Ada",
    "RTX 6000 Ada delivers powerful AI and rendering performance with 48GB memory for demanding workloads.",
    "https://static.wixstatic.com/media/1470f5_d945eb98aaec4b91be5f7781f36ca239~mv2.png/v1/fill/w_301,h_271,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/RTX6000Ada-datacom.png",
  ],
  [
    "RTX 5000 Ada",
    "Delivers strong AI, rendering, and compute performance with advanced cores and 32GB memory for professional workflows.",
    "https://static.wixstatic.com/media/1470f5_0da89a8e191c4982858477b31fa7654e~mv2.png/v1/fill/w_301,h_271,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/rtx%205000%20ada.png",
  ],
  [
    "L40S",
    "Data centre GPU optimized for AI training, inference, and high-performance computing workloads.",
    "https://static.wixstatic.com/media/1470f5_9e842a0345ac40fba217e41c804e34ee~mv2.png/v1/fill/w_301,h_271,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/L40S.png",
  ],
  [
    "H100",
    "Enterprise GPU built for AI and HPC, delivering massive speed improvements for training and large-scale workloads.",
    "https://static.wixstatic.com/media/1470f5_dcbbdebe9b3d492b8fa11082cc44a106~mv2.png/v1/fill/w_301,h_271,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/H100.png",
  ],
  [
    "H200",
    "Advanced GPU with faster, larger memory, boosting generative AI, LLMs, and high-performance computing efficiency.",
    "https://static.wixstatic.com/media/1470f5_cc8deb49f0b14a75b43d20b14a10b32f~mv2.png/v1/fill/w_301,h_271,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/H200.png",
  ],
];

const workloadCards = [
  [
    "Large Language Models",
    "Train, fine-tune, and run inference on LLMs with multi-GPU configurations for larger context windows and faster throughput.",
    "🧠",
  ],
  [
    "Computer Vision",
    "Real-time object detection, image segmentation, video analysis, and quality inspection pipelines accelerated by Tensor Cores.",
    "👁️",
  ],
  [
    "Simulation",
    "Physics-based simulation, digital twins, and synthetic data generation for AI training in engineering and manufacturing.",
    "🌐",
  ],
  [
    "Robotics",
    "Perception stacks, motion planning, and reinforcement learning for autonomous systems with low-latency GPU compute.",
    "🤖",
  ],
  [
    "AI Research",
    "Rapid experimentation and reproducible research environments configured for Jupyter, PyTorch, TensorFlow, and JAX.",
    "🔬",
  ],
];

const solutionCards = [
  [
    "AI Workstation",
    "High-performance systems built for AI development and model training.",
    "https://static.wixstatic.com/media/1470f5_2c308c7bf3d4414881f3cc6111e63e92~mv2.jpg/v1/fill/w_379,h_253,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/close-up-computer-screens-server-room-monitoring-artificial-intelligence.jpg",
  ],
  [
    "GPU Servers",
    "Powerful multi-GPU servers for large-scale AI workloads.",
    "https://static.wixstatic.com/media/1470f5_aa4204037ae84409a87ba64dae79b0dd~mv2.jpg/v1/fill/w_379,h_253,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/mainframe-devices-racks-room-with-big-data-cyber-internet-content-neon-light-cloud-computi.jpg",
  ],
  [
    "HPC Clusters",
    "Scalable computing clusters for intensive data processing and simulations.",
    "https://static.wixstatic.com/media/1470f5_b20d555192b3493dad8369713228606a~mv2.jpg/v1/fill/w_379,h_253,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/modern-data-center-providing-cloud-services-enabling-businesses-access-computing-resources.jpg",
  ],
  [
    "AI Storage Solutions",
    "High-speed storage designed for large datasets and AI workflows.",
    "https://static.wixstatic.com/media/1470f5_0e5c04ef2a5c488faf51c6c64d791bf8~mv2.jpg/v1/fill/w_379,h_253,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/businessman-interacting-with-futuristic-graphics.jpg",
  ],
  [
    "High-Speed Networking",
    "Fast and reliable connectivity for data transfer and system performance.",
    "https://static.wixstatic.com/media/1470f5_bc695a6d093441cda8d5939f203de05d~mv2.jpg/v1/fill/w_379,h_253,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5g-network-smart-city-background-technology.jpg",
  ],
  [
    "AI Infrastructure Deployment",
    "End-to-end setup and integration of complete AI environments.",
    "https://static.wixstatic.com/media/1470f5_7f0883be3051466aa5d69d628ec4bb33~mv2.jpg/v1/fill/w_379,h_253,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/data-center-engineer-using-pc-adjusting-ai-model-parameters-enhance-accuracy-server-hub-wo.jpg",
  ],
];

const deploymentCards = [
  {
    title: "AI Simulation & Research Workstation",
    intro:
      "High-performance AI workstations designed for simulation, model training, and advanced research workloads.",
    icon:
      "https://static.wixstatic.com/media/1470f5_30b681c2710840c5882ebc6d1677f4c0~mv2.png/v1/fill/w_65,h_65,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Ai%20icon%201.png",
    points: [
      "Multi-GPU capable configurations",
      "High-memory system design for large datasets",
      "Optimized for Linux-based AI environments",
      "Seamless integration with shared storage systems",
    ],
    example:
      "Deployed AI workstation for simulation and digital twin workloads in a research environment.",
    useCase:
      "Robotics simulation, digital twin environments, engineering analysis, and AI research",
  },
  {
    title: "AI Training & HPC Infrastructure",
    intro:
      "Scalable GPU infrastructure designed for AI model training and parallel computing.",
    icon:
      "https://static.wixstatic.com/media/1470f5_8c716fe378a84d228785b5d24fff526e~mv2.png/v1/fill/w_65,h_65,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Ai%20icon%202.png",
    points: [
      "Multi-node GPU architecture",
      "High-speed networking for cluster communication",
      "Centralized storage integration for data-intensive workloads",
      "Designed for performance and scalability",
    ],
    example:
      "Implemented GPU-based compute infrastructure for AI research and parallel processing workloads.",
    useCase:
      "Large Language Models (LLM), scientific computing, AI research, and high-performance workloads",
  },
  {
    title: "AI Storage & Data Management",
    intro: "Reliable storage solutions built to support AI workloads and large datasets.",
    icon:
      "https://static.wixstatic.com/media/1470f5_6ecff2b67cbf41358b31ae6acc146745~mv2.png/v1/fill/w_65,h_65,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Ai%20icon.png",
    points: [
      "High-capacity and high-throughput storage systems",
      "Optimized for AI data pipelines and backup",
      "Designed for multi-user access and data sharing",
      "Integration with AI compute infrastructure",
    ],
    example:
      "Delivered centralized storage solution to support multi-user AI data access and backup requirements.",
    useCase:
      "AI datasets storage, backup and recovery, collaborative research environments",
  },
];

const whyItems = [
  [
    "Proven IT infrastructure experience across industries.",
    "https://static.wixstatic.com/media/1470f5_cee3035399564d6f943dbfe50a0f11ae~mv2.png/v1/fill/w_64,h_64,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Group%209%20(3).png",
  ],
  [
    "Tailored services for SMEs, enterprises, and government projects.",
    "https://static.wixstatic.com/media/1470f5_545779eeda0548c79e046ebbbd42197a~mv2.png/v1/fill/w_64,h_64,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Group%208%20(4).png",
  ],
  [
    "Reliable and cost-effective solutions built by us.",
    "https://static.wixstatic.com/media/1470f5_190dc023bb35401190849958157d5d09~mv2.png/v1/fill/w_64,h_64,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Group%206.png",
  ],
  [
    "Installation, cabling, relocation, and SLA support handled by certified engineers.",
    "https://static.wixstatic.com/media/1470f5_08fa97e9c89a42a89d144f4a5ce617d3~mv2.png/v1/fill/w_64,h_64,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Group%205%20(2).png",
  ],
  [
    "Partnerships with HPE, Dell, Lenovo, Apple, Synology, APC, and more.",
    "https://static.wixstatic.com/media/1470f5_9720af1cb9c34598bebf01d4e1495c8e~mv2.png/v1/fill/w_64,h_64,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Group%207%20(1).png",
  ],
];

export default function AiWorkstationsPage() {
  return (
    <main className="ai-workstations-page">
      <header className="services-header" aria-label="Datacom Enterprise header">
        <a className="services-logo-link" href="/" aria-label="Datacom Enterprise home">
          <img
            className="services-logo"
            src="/assets/datacom-logo.png"
            alt="Datacom Enterprise Pte Ltd"
          />
        </a>
        <ProductSearch />
      </header>

      <nav className="services-nav" aria-label="Primary navigation">
        <div className="services-nav-inner">
          {navItems.map(([item, href]) =>
            item === "More" ? (
              <NavMoreMenu linkClassName="services-nav-link" key={item} />
            ) : (
              <a
                className={
                  item === "AI Workstations"
                    ? "services-nav-link active"
                    : "services-nav-link"
                }
                href={href}
                key={item}
              >
                {item}
              </a>
            ),
          )}
        </div>
      </nav>

      <section className="ai-hero">
        <video
          aria-hidden="true"
          autoPlay
          className="ai-hero-video"
          loop
          muted
          playsInline
          poster="https://static.wixstatic.com/media/11062b_fc39bc30d1b04fa48aa1a5bcefaafe7ef000.jpg/v1/fill/w_1470,h_830,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_fc39bc30d1b04fa48aa1a5bcefaafe7ef000.jpg"
        >
          <source
            src="https://video.wixstatic.com/video/11062b_fc39bc30d1b04fa48aa1a5bcefaafe7e/1080p/mp4/file.mp4"
            type="video/mp4"
          />
        </video>
        <div className="ai-hero-content">
          <h1>
            <span>High-Performance AI Workstations</span>
            <span>&amp; GPU Servers in Singapore</span>
          </h1>
          <h2>AI Infrastructure. Built for Performance. Designed to Scale.</h2>
          <p>
            Purpose-built GPU computing for AI training, simulation, and
            data-intensive workloads. Designed for enterprises, research labs,
            and AI teams.
          </p>
          <div className="ai-hero-points">
            <span>Up to 8x GPUs per system</span>
            <span>AI &amp; HPC Infrastructure Design</span>
            <span>Local Singapore Deployment &amp; Support</span>
          </div>
          <a href="#ai-platforms">View Our AI Platforms</a>
        </div>
      </section>

      <section className="ai-intro">
        <h2>What is an AI Workstation?</h2>
        <p>
          An AI workstation is a high-performance system built with powerful GPUs
          to handle intensive workloads such as machine learning, data
          processing, and model training.
        </p>
        <p>
          Designed to accelerate AI workloads with NVIDIA GPUs, high-speed
          storage, and optimized Linux environments.
        </p>
        <img
          src="https://static.wixstatic.com/media/1470f5_44b376d59cb84dbfb417495e0b71f67f~mv2.png/v1/fill/w_739,h_385,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/AI%20Workstation%20SG.png"
          alt="NVIDIA AI workstation GPUs"
        />
      </section>

      <section className="ai-platforms" id="ai-platforms">
        <div className="ai-section-heading split">
          <div>
            <span className="pill-label">Our AI Platforms</span>
            <h2>Two Flagship Platform Categories</h2>
          </div>
          <p>
            From standalone AI workstations to rack-mounted GPU clusters,
            Datacom delivers purpose-configured systems for every scale of AI
            deployment.
          </p>
        </div>
        <div className="ai-platform-grid">
          <article>
            <div className="ai-icon-box">
              <span className="ai-platform-symbol" aria-hidden="true">🖥️</span>
            </div>
            <h3>Tower AI Workstation</h3>
            <p>
              Desk-side AI computing for researchers, engineers, and developers
              who need enterprise-grade GPU performance in a workstation form
              factor.
            </p>
            <dl>
              <div><dt>Form Factor</dt><dd>Tower</dd></div>
              <div><dt>GPU Support</dt><dd>Up to 4x GPUs</dd></div>
              <div><dt>Ideal For</dt><dd>Research, Development, Inference</dd></div>
              <div><dt>Deployment</dt><dd>On-premises / Lab / Office</dd></div>
            </dl>
          </article>
          <article>
            <div className="ai-icon-box">
              <span className="ai-platform-symbol" aria-hidden="true">🗄️</span>
            </div>
            <h3>GPU Server</h3>
            <p>
              Rack-mounted GPU servers for organisations running large-scale AI
              training, multi-user inference services, or private AI simulation.
            </p>
            <dl>
              <div><dt>Form Factor</dt><dd>1U / 2U / 4U Rack</dd></div>
              <div><dt>GPU Support</dt><dd>Up to 8x GPUs per node</dd></div>
              <div><dt>Ideal For</dt><dd>LLM Training, HPC, AI Cloud</dd></div>
              <div><dt>Deployment</dt><dd>Data Centre / Colocation</dd></div>
            </dl>
          </article>
        </div>
      </section>

      <section className="ai-gpus">
        <div className="ai-highlight-card">
          <h2>The Right GPU For Every AI Workload</h2>
          <p>
            Leverage advanced GPU architecture designed for parallel processing,
            enabling faster model training, real-time inference, and efficient
            handling of large datasets.
          </p>
        </div>
        <div className="ai-gpu-grid">
          {gpuCards.map(([title, text, image]) => (
            <article key={title}>
              <img src={image} alt="" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ai-workloads">
        <div className="ai-section-heading center">
          <span className="pill-label">AI Workload Applications</span>
          <h2>Engineered for Every AI Use Case</h2>
          <p>
            Our AI workstations and GPU servers are configured and validated
            across the full spectrum of modern AI application domains.
          </p>
        </div>
        <div className="ai-workload-grid">
          {workloadCards.map(([title, text, icon]) => (
            <article key={title}>
              <span className="ai-workload-icon" aria-hidden="true">{icon}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ai-solutions">
        <div className="ai-section-heading center">
          <span className="pill-label">AI Infrastructure Architecture</span>
          <h2>Complete AI Infrastructure Solutions</h2>
          <p>
            From standalone AI workstations to full-scale GPU clusters, Datacom
            designs and deploys end-to-end AI infrastructure tailored to your
            requirements.
          </p>
        </div>
        <div className="ai-solution-grid">
          {solutionCards.map(([title, text, image]) => (
            <article key={title}>
              <img src={image} alt="" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ai-deployments">
        <div className="ai-section-heading center">
          <span className="pill-label">AI Deployment Scenarios</span>
          <h2>Example AI Deployment Scenarios</h2>
        </div>
        <div className="ai-deployment-grid">
          {deploymentCards.map((card) => (
            <article key={card.title}>
              <img src={card.icon} alt="" aria-hidden="true" />
              <h3>{card.title}</h3>
              <p>{card.intro}</p>
              <ul>
                {card.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div>
                <p>
                  <strong>Example Deployment:</strong> {card.example}
                </p>
                <p>
                  <strong>Use Case:</strong> {card.useCase}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="ai-advantages">
        <div>
          <span className="pill-label">AI Workstation</span>
          <h2>Key Advantages</h2>
          <p>
            Our AI solutions are built to deliver high performance, scalability,
            and enterprise-grade reliability.
          </p>
          <ul>
            <li>Custom AI Workstation &amp; GPU Server Builds</li>
            <li>HPC &amp; AI Infrastructure Design Expertise</li>
            <li>End-to-End Deployment &amp; Integration</li>
            <li>Local Singapore Technical Support &amp; SLA</li>
          </ul>
        </div>
        <img
          src="https://static.wixstatic.com/media/1470f5_521b4d8c3f594ad092b445a054fb662e~mv2.jpg/v1/fill/w_628,h_361,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/low-light-data-center-running-advanced-ai-models-neural-network-processes.jpg"
          alt="AI data centre infrastructure"
        />
      </section>

      <section className="ai-why">
        <div className="ai-section-heading center">
          <span className="pill-label">Why Choose Us</span>
          <h2>Why Choose Datacom for AI Infrastructure</h2>
        </div>
        <div className="ai-why-grid">
          {whyItems.map(([item, image]) => (
            <article key={item}>
              <img src={image} alt="" aria-hidden="true" />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ai-final-cta">
        <h2>Ready to Build Your AI Infrastructure?</h2>
        <p>
          Share your requirements with our Singapore-based team. We will design
          the right AI infrastructure - from a single workstation to a full GPU
          cluster.
        </p>
        <a href="/contact-10">Get a Proposal</a>
      </section>

      <SiteFooter />
      <SmartChat servicePage />
      <CookieSettings servicePage />
    </main>
  );
}
