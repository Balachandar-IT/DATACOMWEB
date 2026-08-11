import { SimplePageShell } from "../simple-page-shell";

type ExplorePost = {
  category?: string;
  image: string;
  title: string;
};

const wixImage = (name: string) =>
  `https://static.wixstatic.com/media/${name}/v1/fill/w_328,h_328,fp_0.50_0.50,q_95,enc_avif,quality_auto/${name}`;

const wixJpg = (name: string) =>
  `https://static.wixstatic.com/media/${name}/v1/fill/w_328,h_328,fp_0.50_0.50,q_90,enc_avif,quality_auto/${name}`;

const wixJpeg = (name: string) =>
  `https://static.wixstatic.com/media/${name}/v1/fill/w_328,h_328,fp_0.50_0.50,q_90,enc_avif,quality_auto/${name}`;

const wixWebp = (name: string) =>
  `https://static.wixstatic.com/media/${name}/v1/fill/w_328,h_328,al_c,q_90,enc_avif,quality_auto/${name}`;

const pageOnePosts: ExplorePost[] = [
  {
    category: "Datacom Service",
    image: wixImage("ab07e4_f480168a27de4e3b9823b57002e67fc7~mv2.png"),
    title: "The Importance of Effective Cable Management in Modern Network Performance",
  },
  {
    image: wixImage("31f7f6_58df12c653d646c898dd3b23cd1ba8c0~mv2.png"),
    title: "UPS Power Supply Selection for IT Infrastructure",
  },
  {
    image: wixImage("31f7f6_5800df6609d143c2ae10c3a50db66522~mv2.png"),
    title: "How to Choose a Server Rack Supplier in Singapore",
  },
  {
    image: wixImage("31f7f6_52a5cd43f47d4361932c60e90e960970~mv2.png"),
    title: "Network Server Rack Types and Configurations: Practical Guide for Business IT",
  },
  {
    image: wixJpg("31f7f6_4543126de38841b8a4e633b321f900f1~mv2.jpg"),
    title: "Network Attached Storage (NAS) Guide for Singapore",
  },
  {
    image: wixJpg("31f7f6_6b4ed78db5794514a1abfbc004cd4278~mv2.jpg"),
    title: "NAS Storage Explained for Business Use",
  },
  {
    image: wixJpeg("31f7f6_b29c941a9f0543708548a84daefcca50~mv2.jpeg"),
    title: "IT Support & Installation Services In Singapore",
  },
  {
    image: wixJpg("31f7f6_99bab4d564544c539adff203a060ce63~mv2.jpg"),
    title: "HP Business Computers & Workstations Guide for Singapore",
  },
  {
    image: wixImage("31f7f6_a020029391404ceea34b40d0808be0d9~mv2.png"),
    title: "Data Center Storage Solutions for Singapore Businesses",
  },
  {
    image: wixImage("d6f209_1850c500e5954076be34f18b3dd3bd7b~mv2.png"),
    title: "Choosing the Right Dell Laptop Singapore Partner for Your Business: A 2026 Guide",
  },
  {
    image: wixImage("d6f209_576d4b4c803348ca90d85693eb258e4a~mv2.png"),
    title: "Server Rack Singapore: Complete Guide to Buying Enterprise Server Racks",
  },
  {
    image: wixImage("d6f209_340765e6cef14deabc77ff7286935f01~mv2.png"),
    title: "Synology NAS Singapore: A 2026 Buyer's Guide",
  },
];

const pageTwoPosts: ExplorePost[] = [
  {
    image: wixImage("d6f209_86689a63cc414f0294968eccbe38d699~mv2.png"),
    title: "APC UPS Singapore: Complete Guide to Reliable Power Protection Solutions",
  },
  {
    category: "Data Center Products Solutions",
    image: wixJpg("c422759e720247e6baa7758c3d611959.jpg"),
    title: "Flexible Storage Management: Demystifying Advanced Storage Technologies",
  },
  {
    category: "Server Security",
    image: wixJpg("ab07e4_8ca4fd378a3e4d6b982c6ba23535b005~mv2.jpg"),
    title: "Optimising Server Room Layouts: The Art of Efficient Server Rack Placement",
  },
  {
    category: "Data Center Products Solutions",
    image: wixJpg("ab07e4_7d7995e8fcf042fc8195e599387a2582~mv2.jpg"),
    title: "A Guide to Choosing the Right UPS for Your Needs",
  },
  {
    category: "Data Center Products Solutions",
    image: wixJpg("ab07e4_da2710b6d9a441498a943581b3e0883c~mv2.jpg"),
    title: "A Guide to Data Backup Strategies",
  },
  {
    category: "Data Center Products Solutions",
    image: wixJpg("11062b_1df7f63791924c3285ea7dd7096bc576~mv2.jpg"),
    title: "The Importance of Server Security and How to Secure Your Server",
  },
  {
    category: "Business Products Solution",
    image: wixJpg("ab07e4_432593b0071a45dcaf85a86379e6ed26~mv2.jpg"),
    title: "What Is a UPS and Why do you need It for your Data Centre?",
  },
  {
    image: wixJpg("ab07e4_4979868db51949d693d2cb291887125a~mv2.jpg"),
    title: "6 Benefits of Using a Server Rack",
  },
  {
    image: wixWebp("ab07e4_27123123ffa14078895bcaeee2e5f5a5~mv2.webp"),
    title: "Everything You Need To Know About Choosing Storage Solutions For Your Data Center",
  },
];

function ExploreFilters() {
  return (
    <div className="explore-filters">
      <div className="explore-tabs" aria-label="Explore categories">
        <a className="active" href="/explore">All Posts</a>
        <a href="/explore">Business Products Solution</a>
        <a className="hide-on-narrow" href="/explore">Data Center Products Solutions</a>
        <div className="explore-more">
          <button type="button" aria-haspopup="true">
            More
          </button>
          <div>
            <a href="/explore">New Products</a>
            <a href="/explore">Server Security</a>
            <a href="/explore">Datacom Service</a>
          </div>
        </div>
      </div>
      <label className="explore-search">
        <span className="explore-search-icon" aria-hidden="true" />
        <span>Search</span>
        <input aria-label="Search posts" type="search" />
        <span className="explore-search-close" aria-hidden="true">&times;</span>
      </label>
    </div>
  );
}

function ExploreGrid({ posts }: { posts: ExplorePost[] }) {
  return (
    <section className="explore-post-grid" aria-label="Explore posts">
      {posts.map((post) => (
        <article className="explore-post-card" key={post.title}>
          <img src={post.image} alt="" aria-hidden="true" />
          <div className="explore-post-shade" />
          <div className="explore-post-content">
            {post.category ? <span>{post.category}</span> : null}
            <h2>{post.title}</h2>
          </div>
        </article>
      ))}
    </section>
  );
}

function ExplorePagination({ page }: { page: 1 | 2 }) {
  return (
    <nav className="explore-pagination" aria-label="Explore pagination">
      <a className={page === 1 ? "disabled" : ""} href="/explore" aria-label="Previous page">
        &lsaquo;
      </a>
      <a className={page === 1 ? "active" : ""} href="/explore">1</a>
      <a className={page === 2 ? "active" : ""} href="/explore/page/2">2</a>
      <a className={page === 2 ? "disabled" : ""} href="/explore/page/2" aria-label="Next page">
        &rsaquo;
      </a>
    </nav>
  );
}

export function ExploreContent({ page }: { page: 1 | 2 }) {
  const posts = page === 1 ? pageOnePosts : pageTwoPosts;

  return (
    <SimplePageShell active="Explore">
      <section className="explore-hero">
        <span className="pill-label">Insights &amp; Updates</span>
        <h1>Stay informed with the latest IT trends, tips, and company updates.</h1>
      </section>
      <ExploreFilters />
      <ExploreGrid posts={posts} />
      <ExplorePagination page={page} />
    </SimplePageShell>
  );
}
