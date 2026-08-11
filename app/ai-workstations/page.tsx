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
    "/assets/vendor/rtx-pro-6000-blackwell-ai-workstation-513af3375949.avif",
  ],
  [
    "RTX 6000 Ada",
    "RTX 6000 Ada delivers powerful AI and rendering performance with 48GB memory for demanding workloads.",
    "/assets/vendor/rtx6000ada-datacom-5523deaf4ce6.avif",
  ],
  [
    "RTX 5000 Ada",
    "Delivers strong AI, rendering, and compute performance with advanced cores and 32GB memory for professional workflows.",
    "/assets/vendor/rtx-5000-ada-1ec4a36dff14.avif",
  ],
  [
    "L40S",
    "Data centre GPU optimized for AI training, inference, and high-performance computing workloads.",
    "/assets/vendor/l40s-5cb2e1e24748.avif",
  ],
  [
    "H100",
    "Enterprise GPU built for AI and HPC, delivering massive speed improvements for training and large-scale workloads.",
    "/assets/vendor/h100-6407ccb6f67d.avif",
  ],
  [
    "H200",
    "Advanced GPU with faster, larger memory, boosting generative AI, LLMs, and high-performance computing efficiency.",
    "/assets/vendor/h200-9f6d3d5783a4.avif",
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
    "/assets/vendor/close-up-computer-screens-server-room-monitoring-art-a21eb447859a.avif",
  ],
  [
    "GPU Servers",
    "Powerful multi-GPU servers for large-scale AI workloads.",
    "/assets/vendor/mainframe-devices-racks-room-with-big-data-cyber-int-8c06388aac02.avif",
  ],
  [
    "HPC Clusters",
    "Scalable computing clusters for intensive data processing and simulations.",
    "/assets/vendor/modern-data-center-providing-cloud-services-enabling-ea1c4d23fed5.avif",
  ],
  [
    "AI Storage Solutions",
    "High-speed storage designed for large datasets and AI workflows.",
    "/assets/vendor/businessman-interacting-with-futuristic-graphics-06eddd2d1266.avif",
  ],
  [
    "High-Speed Networking",
    "Fast and reliable connectivity for data transfer and system performance.",
    "/assets/vendor/5g-network-smart-city-background-technology-0cf4af78bec7.avif",
  ],
  [
    "AI Infrastructure Deployment",
    "End-to-end setup and integration of complete AI environments.",
    "/assets/vendor/data-center-engineer-using-pc-adjusting-ai-model-par-228f35bfb5d2.avif",
  ],
];

const deploymentCards = [
  {
    title: "AI Simulation & Research Workstation",
    intro:
      "High-performance AI workstations designed for simulation, model training, and advanced research workloads.",
    icon:
      "/assets/vendor/ai-icon-1-2f4eef54cc93.avif",
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
      "/assets/vendor/ai-icon-2-2c101ba35ba7.avif",
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
      "/assets/vendor/ai-icon-b6553650825f.avif",
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
    "/assets/vendor/group-9-3-c02583d79f3d.avif",
  ],
  [
    "Tailored services for SMEs, enterprises, and government projects.",
    "/assets/vendor/group-8-4-7c39b47b6694.avif",
  ],
  [
    "Reliable and cost-effective solutions built by us.",
    "/assets/vendor/group-6-3410c33d0482.avif",
  ],
  [
    "Installation, cabling, relocation, and SLA support handled by certified engineers.",
    "/assets/vendor/group-5-2-d959f8fbb4cc.avif",
  ],
  [
    "Partnerships with HPE, Dell, Lenovo, Apple, Synology, APC, and more.",
    "/assets/vendor/group-7-1-af6a8f5de370.avif",
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
          poster="/assets/vendor/11062b-fc39bc30d1b04fa48aa1a5bcefaafe7ef000-2de7c8f3cce1.avif"
        >
          <source
            src="/assets/vendor/video/ai-workstation-bg.mp4"
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
          src="/assets/vendor/ai-workstation-sg-6fce6d7df9d2.avif"
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
          src="/assets/vendor/low-light-data-center-running-advanced-ai-models-neu-6a6a71be2714.avif"
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
