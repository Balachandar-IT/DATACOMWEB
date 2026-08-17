import { redirect } from "next/navigation";
import { legacyCategoryBySlug, legacyPageBySlug, legacyPostBySlug } from "../../legacy-content";
import { shopCatalogBySlug } from "../../shop-catalog";

type DashboardSubPathPageProps = {
  params?: {
    path?: string[];
  };
};

function normalizeSlug(value: string) {
  return decodeURIComponent(value)
    .trim()
    .toLowerCase()
    .replace(/%20/g, " ")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9/]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function DashboardSubPathPage({ params }: DashboardSubPathPageProps) {
  const parts = params?.path ?? [];
  const first = normalizeSlug(parts[0] ?? "");
  const rest = normalizeSlug(parts.slice(1).join("/"));

  if (first === "category" && rest && legacyCategoryBySlug[rest]) {
    redirect(`/category/${rest}`);
  }

  if (first === "post" && rest && legacyPostBySlug[rest]) {
    redirect(`/post/${rest}`);
  }

  if (first === "product-page" && rest && shopCatalogBySlug[rest]) {
    redirect(`/product-page/${rest}`);
  }

  const directSlug = normalizeSlug(parts.join("/"));
  if (legacyPageBySlug[directSlug]) {
    redirect(`/${directSlug}`);
  }

  if (legacyCategoryBySlug[directSlug]) {
    redirect(`/category/${directSlug}`);
  }

  if (legacyPostBySlug[directSlug]) {
    redirect(`/post/${directSlug}`);
  }

  if (shopCatalogBySlug[directSlug]) {
    redirect(`/product-page/${directSlug}`);
  }

  redirect("/dashboard");
}
