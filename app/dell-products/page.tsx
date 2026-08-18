import type { Metadata } from "next";
import { SimplePageShell } from "../simple-page-shell";
import { absoluteUrl } from "../seo-utils";
import { shopCatalogBySlug } from "../shop-catalog";

export const metadata: Metadata = {
  title: "Dell Laptops - Dell Computers in Singapore - Dell Products | Datacom",
  description:
    "Dell laptops, desktops, workstations, monitors, accessories, and PowerEdge server solutions for Singapore businesses.",
  alternates: {
    canonical: absoluteUrl("/dell-products"),
  },
  openGraph: {
    title: "Dell Products Singapore",
    description:
      "Browse Dell laptops, desktops, workstations, monitors, accessories, and server solutions from Datacom Enterprise.",
    type: "website",
    url: absoluteUrl("/dell-products"),
  },
  twitter: {
    card: "summary_large_image",
    title: "Dell Products Singapore",
    description:
      "Browse Dell laptops, desktops, workstations, monitors, accessories, and server solutions from Datacom Enterprise.",
  },
};

const productHref = (slug: string, fallback = "/contact-10") => shopCatalogBySlug[slug]?.productHref ?? fallback;

const officialDellImages = {
  wordmark:
    "https://static.wixstatic.com/media/ab07e4_6d28348e674b4849947c2e247448016f~mv2.png/v1/fill/w_400,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Dell_Technologies_logo_svg.png",
  laptops:
    "https://static.wixstatic.com/media/ab07e4_0f77120f22254311bb069612df60a779~mv2.png/v1/fill/w_178,h_178,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(55).png",
  desktop:
    "https://static.wixstatic.com/media/ab07e4_465971ae2f094482bf1231622a127d66~mv2.png/v1/fill/w_178,h_178,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(56).png",
  workstation:
    "https://static.wixstatic.com/media/ab07e4_15155fc5d7674bbeae01ac47dca44e9a~mv2.png/v1/fill/w_178,h_178,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(57).png",
  server:
    "https://static.wixstatic.com/media/ab07e4_3d1fab5d76ef438b83777f9ac86aa813~mv2.png/v1/fill/w_178,h_178,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(53).png",
  monitor:
    "https://static.wixstatic.com/media/ab07e4_c2ff310dd98f498daf64093864fd9dad~mv2.png/v1/fill/w_178,h_178,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(54).png",
  accessories:
    "https://static.wixstatic.com/media/ab07e4_ccd4eaefbe0e4478a8c4c91bcc3591e9~mv2.png/v1/fill/w_178,h_178,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(58).png",
  latitudeHero:
    "https://static.wixstatic.com/media/ab07e4_0f77120f22254311bb069612df60a779~mv2.png/v1/crop/x_8,y_282,w_1072,h_618/fill/w_319,h_184,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(55).png",
  precisionMobile:
    "https://static.wixstatic.com/media/ab07e4_36c2f602e826415aa6d36e7392ca8622~mv2.png/v1/crop/x_0,y_150,w_1080,h_446/fill/w_281,h_116,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(60).png",
  ultrasharp:
    "https://static.wixstatic.com/media/ab07e4_a77166d63d4f4e3fa25686dfe4276a9e~mv2.png/v1/crop/x_0,y_34,w_1080,h_1012/fill/w_160,h_150,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(68).png",
  businessMonitor:
    "https://static.wixstatic.com/media/ab07e4_eb0f93b2f4d94d1fa012d3265dc9e23b~mv2.png/v1/crop/x_0,y_168,w_1080,h_890/fill/w_167,h_138,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(63).png",
  gamingMonitor:
    "https://static.wixstatic.com/media/ab07e4_f1bc93a7ce374facbbbc3388a6580f22~mv2.png/v1/crop/x_0,y_34,w_1080,h_1012/fill/w_176,h_165,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(67).png",
  curvedMonitor:
    "https://static.wixstatic.com/media/ab07e4_27d8f00ba2534659a8da8100ca300739~mv2.png/v1/crop/x_0,y_95,w_1080,h_918/fill/w_193,h_164,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(65).png",
  fourKMonitor:
    "https://static.wixstatic.com/media/ab07e4_61aa30dd461f40b1a0825f7a8aa535b4~mv2.png/v1/crop/x_0,y_34,w_1080,h_1012/fill/w_142,h_133,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(66).png",
  videoMonitor:
    "https://static.wixstatic.com/media/ab07e4_5e7c5ffdd6924492a4ded935f8d8ff00~mv2.png/v1/crop/x_0,y_78,w_1080,h_957/fill/w_162,h_144,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(64).png",
  optiplexFeature:
    "https://static.wixstatic.com/media/ab07e4_e95d9f5455ef4fef9a8f3bb18ba547d8~mv2.png/v1/crop/x_0,y_109,w_1080,h_776/fill/w_307,h_220,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(71).png",
  precisionFixed:
    "https://static.wixstatic.com/media/ab07e4_15155fc5d7674bbeae01ac47dca44e9a~mv2.png/v1/crop/x_60,y_185,w_991,h_802/fill/w_263,h_212,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(57).png",
  inspironFeature:
    "https://static.wixstatic.com/media/ab07e4_ebc52c89ce594545b655b353a26f83e2~mv2.png/v1/crop/x_0,y_152,w_1080,h_775/fill/w_296,h_212,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(70).png",
  xpsDesktop:
    "https://static.wixstatic.com/media/ab07e4_cb6fe37d587f474087558706a79ab657~mv2.png/v1/crop/x_155,y_34,w_776,h_1046/fill/w_115,h_155,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(74).png",
  optiplexSmall:
    "https://static.wixstatic.com/media/ab07e4_648393e7497d4accb761f3974ff6d236~mv2.png/v1/crop/x_0,y_32,w_1080,h_1048/fill/w_148,h_144,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(75).png",
  optiplexTower:
    "https://static.wixstatic.com/media/ab07e4_d4343447b0514b3899685f29932d8324~mv2.png/v1/crop/x_160,y_0,w_755,h_1080/fill/w_123,h_176,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(76).png",
  inspironSmall:
    "https://static.wixstatic.com/media/ab07e4_fb89d2a9ff054c4d8de92baad08e8450~mv2.png/v1/fill/w_155,h_155,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(77).png",
  inspironAio:
    "https://static.wixstatic.com/media/ab07e4_a8f1d8cc31e94cb9b51ea6a7f46d7743~mv2.png/v1/crop/x_0,y_34,w_1080,h_1012/fill/w_178,h_167,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(78).png",
  precisionTower:
    "https://static.wixstatic.com/media/ab07e4_850f464a16c941a3a51e1f1f6fb29c4d~mv2.png/v1/crop/x_0,y_0,w_1080,h_1055/fill/w_158,h_155,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(79).png",
  docking:
    "https://static.wixstatic.com/media/ab07e4_55251bfe59a1476bb971257324fe210e~mv2.png/v1/crop/x_88,y_234,w_940,h_625/fill/w_161,h_107,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(80).png",
  keyboardBag:
    "https://static.wixstatic.com/media/ab07e4_f396a550ba4144099b558e14e152273c~mv2.png/v1/crop/x_0,y_285,w_973,h_617/fill/w_189,h_120,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(81).png",
  storageMedia:
    "https://static.wixstatic.com/media/ab07e4_efe10b14865142cf8ade4ba0f65a97f6~mv2.png/v1/crop/x_209,y_410,w_712,h_456/fill/w_167,h_107,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(82).png",
  battery:
    "https://static.wixstatic.com/media/ab07e4_853a716ca1d24ad7a5adae0ff202b63e~mv2.png/v1/crop/x_0,y_237,w_1052,h_661/fill/w_191,h_120,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(83).png",
  webcam:
    "https://static.wixstatic.com/media/ab07e4_fc48ec554dc2491aba5157e8a56b7fc3~mv2.png/v1/crop/x_0,y_33,w_1080,h_1013/fill/w_178,h_167,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(84).png",
  security:
    "https://static.wixstatic.com/media/ab07e4_3f9c526441334a26b5b694275e1c437a~mv2.png/v1/crop/x_177,y_190,w_754,h_740/fill/w_175,h_172,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(85).png",
  powerEdge:
    "https://static.wixstatic.com/media/ab07e4_36f6bfbad7744e5b8b56d47a4557d8de~mv2.png/v1/crop/x_0,y_471,w_1080,h_423/fill/w_472,h_185,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(86).png",
  towerServer:
    "https://static.wixstatic.com/media/ab07e4_66b2dcb70c5e4c7abca935c7bb068f07~mv2.png/v1/crop/x_0,y_215,w_1066,h_823/fill/w_240,h_185,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(88).png",
  rackServer:
    "https://static.wixstatic.com/media/ab07e4_b3118df004bf46af90992e72ef070856~mv2.png/v1/crop/x_0,y_302,w_1060,h_677/fill/w_267,h_170,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(87).png",
  modularServer:
    "https://static.wixstatic.com/media/ab07e4_169c8b5b36d647beb1caa1510379b918~mv2.png/v1/crop/x_0,y_337,w_1067,h_636/fill/w_270,h_161,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(89).png",
  ruggedServer:
    "https://static.wixstatic.com/media/ab07e4_ceb13cbbe7e74d00a01576a62b007492~mv2.png/v1/crop/x_0,y_77,w_1080,h_848/fill/w_279,h_219,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(90).png",
};

const officialDellVideos = {
  crowd:
    "https://video.wixstatic.com/video/11062b_193233ac68a84f4f881f6e5484cd3e84/720p/mp4/file.mp4",
  softLight:
    "https://video.wixstatic.com/video/11062b_7e61ffd6dbb040ee8b0e4dc604e8fd4e/720p/mp4/file.mp4",
};

const heroTiles = [
  ["Laptops", officialDellImages.laptops, "/category/laptop"],
  ["Desktop", officialDellImages.desktop, "/category/dell"],
  ["Workstation", officialDellImages.workstation, "/ai-workstations"],
  ["Server", officialDellImages.server, "/category/dell-server"],
  ["Monitor", officialDellImages.monitor, "/category/accessories"],
  ["Accessories", officialDellImages.accessories, "/category/accessories"],
];

const monitorCards = [
  ["UltraSharp Monitors", officialDellImages.ultrasharp],
  ["Business Professionals", officialDellImages.businessMonitor],
  ["Gaming Monitors", officialDellImages.gamingMonitor],
  ["Curved Monitors", officialDellImages.curvedMonitor],
  ["4K Monitors", officialDellImages.fourKMonitor],
  ["Video Conferencing", officialDellImages.videoMonitor],
];

const desktopCards = [
  ["New XPS Desktop", officialDellImages.xpsDesktop],
  ["OptiPlex 7000 Small Form Factor", officialDellImages.optiplexSmall],
  ["OptiPlex 7000 Tower", officialDellImages.optiplexTower],
  ["New Inspiron Small Desktop", officialDellImages.inspironSmall],
  ["Inspiron24 All-in-One", officialDellImages.inspironAio],
  ["Precision 3660 Tower Workstation", officialDellImages.precisionTower],
];

const accessoryCards = [
  ["Docking Stations", officialDellImages.docking],
  ["Keyboards, Mice & Bags", officialDellImages.keyboardBag],
  ["Storage Drives & Media", officialDellImages.storageMedia],
  ["Battery & Adapter", officialDellImages.battery],
  ["Dell Webcam", officialDellImages.webcam],
  ["Security and Protection", officialDellImages.security],
];

const serverBlocks = [
  {
    title: "Tower Servers",
    subtitle: "For small businesses and remote offices",
    text:
      "Compact, quiet tower servers help support everyday business applications, virtualization, and growing compute workloads.",
    image: officialDellImages.towerServer,
  },
  {
    title: "Rack Servers",
    subtitle: "Advanced users and applications",
    text:
      "Rack server options support scalable infrastructure, dense workloads, and cloud-ready business environments.",
    image: officialDellImages.rackServer,
  },
  {
    title: "Modular Infrastructure & Specialty Servers",
    subtitle: "Flexible and scalable environments",
    text:
      "Plan data center growth with server, storage, networking, and rack-ready hardware options.",
    image: officialDellImages.modularServer,
  },
  {
    title: "Rugged Servers",
    subtitle: "For edge and demanding environments",
    text:
      "Rugged hardware supports special use cases that need reliable performance in challenging conditions.",
    image: officialDellImages.ruggedServer,
  },
];

function EnquiryLink({ href = "/contact-10" }: { href?: string }) {
  return (
    <a className="dell-enquiry" href={href}>
      Enquiry Now
    </a>
  );
}

function VideoBackground({ src }: { src: string }) {
  return (
    <video className="dell-video-bg" src={src} autoPlay muted loop playsInline aria-hidden="true" />
  );
}

export default function DellProductsPage() {
  return (
    <SimplePageShell active="Business IT Products" servicePage>
      <section className="dell-intro">
        <h1>Dell</h1>
        <p>
          Dell offers electronic devices and accessories for business and data center needs. Datacom helps Singapore
          companies source Dell laptops, desktops, workstations, monitors, accessories, and server solutions.
        </p>
      </section>

      <section className="dell-logo-strip" aria-label="Dell product areas">
        <img className="dell-wordmark" src={officialDellImages.wordmark} alt="Dell Technologies" />
        <div className="dell-tile-grid">
          {heroTiles.map(([label, image, href]) => (
            <a className="dell-tile" href={href} key={label}>
              <img src={image} alt="" />
              <strong>{label}</strong>
              <span>View More</span>
            </a>
          ))}
        </div>
      </section>

      <section className="dell-section">
        <h2>All-in-One Laptops: Everything in One Place</h2>
        <div className="dell-video-panel">
          <VideoBackground src={officialDellVideos.softLight} />
          <div className="dell-split-feature">
            <article>
              <span>New</span>
              <h3>Latitude Laptops & 2-in-1 PCs</h3>
              <img src={officialDellImages.latitudeHero} alt="" />
              <h4>Business Performance & Collaboration</h4>
              <p>Work from anywhere with secure business laptops designed for productivity, mobility, and modern teams.</p>
              <EnquiryLink href={productHref("dell-latitude-3440-laptop")} />
            </article>
            <article>
              <h3>Precision Mobile Workstations</h3>
              <img src={officialDellImages.precisionMobile} alt="" />
              <h4>Versatile Performance</h4>
              <p>Precision workstation options support creators, engineers, data users, and demanding professional work.</p>
              <EnquiryLink href="/ai-workstations" />
            </article>
          </div>
        </div>
      </section>

      <section className="dell-band monitor-band">
        <VideoBackground src={officialDellVideos.crowd} />
        <h2>Stream & entertain in high resolution.</h2>
        <p>Discover 4K, video conferencing, touch, curved, gaming, UltraSharp and more monitors.</p>
        <div className="dell-card-row">
          {monitorCards.map(([title, image]) => (
            <article className="dell-showcase-card" key={title}>
              <strong>{title}</strong>
              <img src={image} alt="" />
              <EnquiryLink />
            </article>
          ))}
        </div>
      </section>

      <section className="dell-band desktop-band">
        <VideoBackground src={officialDellVideos.softLight} />
        <h2>Everything in one place</h2>
        <div className="dell-mosaic">
          <article>
            <h3>OptiPlex Desktops & All-in-One PCs</h3>
            <p>Enterprise productivity with integrated security, flexible form factors, and trusted IT support.</p>
            <img src={officialDellImages.optiplexFeature} alt="" />
            <EnquiryLink href="/category/dell" />
          </article>
          <article>
            <h3>Precision Fixed Workstations</h3>
            <p>Workstations optimized for performance, reliability, and demanding applications.</p>
            <img src={officialDellImages.precisionFixed} alt="" />
            <EnquiryLink href="/ai-workstations" />
          </article>
          <article>
            <h3>Inspiron Desktops & All-in-One PCs</h3>
            <p>Compact desktops and all-in-ones for everyday creation, consumption, and connectivity.</p>
            <img src={officialDellImages.inspironFeature} alt="" />
            <EnquiryLink href="/category/dell" />
          </article>
        </div>
        <div className="dell-card-row">
          {desktopCards.map(([title, image]) => (
            <article className="dell-showcase-card" key={title}>
              <strong>{title}</strong>
              <img src={image} alt="" />
              <EnquiryLink />
            </article>
          ))}
        </div>
      </section>

      <section className="dell-band accessories-band">
        <VideoBackground src={officialDellVideos.softLight} />
        <h2>Accessories</h2>
        <p>PC accessories can make your PC better</p>
        <div className="dell-card-row">
          {accessoryCards.map(([title, image]) => (
            <article className="dell-showcase-card" key={title}>
              <strong>{title}</strong>
              <img src={image} alt="" />
              <EnquiryLink href="/category/accessories" />
            </article>
          ))}
        </div>
      </section>

      <section className="dell-band server-band">
        <VideoBackground src={officialDellVideos.softLight} />
        <h2>Accelerate your transformation anywhere</h2>
        <article className="dell-server-hero">
          <div>
            <h3>Dell PowerEdge Servers</h3>
            <p>Server, storage, and network solutions that adapt and scale with business needs.</p>
          </div>
          <img src={officialDellImages.powerEdge} alt="" />
        </article>
        <div className="dell-server-grid">
          {serverBlocks.map((block) => (
            <article key={block.title}>
              <div>
                <h3>{block.title}</h3>
                <h4>{block.subtitle}</h4>
                <p>{block.text}</p>
                <EnquiryLink href="/server-products" />
              </div>
              <img src={block.image} alt="" />
            </article>
          ))}
        </div>
      </section>
    </SimplePageShell>
  );
}
