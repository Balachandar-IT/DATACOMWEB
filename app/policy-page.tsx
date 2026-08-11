import { SimplePageShell } from "./simple-page-shell";

type PolicySection = {
  title: string;
  body?: string;
  points?: string[];
};

type PolicyPageProps = {
  title: string;
  sections: PolicySection[];
};

export function PolicyPage({ title, sections }: PolicyPageProps) {
  return (
    <SimplePageShell active="More">
      <section className="policy-hero">
        <h1>{title}</h1>
      </section>

      <section className="policy-content" aria-label={title}>
        {sections.map((section) => (
          <article className="policy-section" key={section.title}>
            <h2>{section.title}</h2>
            {section.body ? <p>{section.body}</p> : null}
            {section.points ? (
              <ul>
                {section.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </section>
    </SimplePageShell>
  );
}
