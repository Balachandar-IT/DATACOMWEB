import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Datacom reference-style clone", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Datacom Enterprise Pte Ltd/i);
  assert.match(html, /Empowering Businesses through Reliable IT/i);
  assert.match(html, /End-to-end IT services designed to[\s\S]*support your business growth/i);
  assert.match(html, /Products We Deliver/i);
  assert.match(html, /Featured Products/i);
  assert.match(html, /Get in touch/i);
  assert.match(html, /href="\/return-and-refund-policy"/i);
  assert.match(html, /href="\/terms-and-conditions"/i);
  assert.match(html, /href="\/privacy-policy"/i);
  assert.doesNotMatch(html, /Your site is taking shape/i);
  assert.doesNotMatch(html, /react-loading-skeleton/i);
});

test("server-renders the footer policy pages", async () => {
  const pages = [
    ["/return-and-refund-policy", /Return and Refund Policy/i],
    ["/terms-and-conditions", /Terms and Conditions/i],
    ["/privacy-policy", /Privacy Policy/i],
  ];

  for (const [pathname, title] of pages) {
    const response = await render(pathname);
    assert.equal(response.status, 200);

    const html = await response.text();
    assert.match(html, title);
    assert.match(html, /href="\/return-and-refund-policy"/i);
    assert.match(html, /href="\/terms-and-conditions"/i);
    assert.match(html, /href="\/privacy-policy"/i);
  }
});

test("server-renders product and cart shopping flow pages", async () => {
  const shop = await render("/shop");
  const shopHtml = await shop.text();
  assert.match(shopHtml, /href="\/product-page\/hp-elitebook-8-g1i-14-ai-pc"/i);
  assert.match(shopHtml, /Quick View/i);

  const product = await render("/product-page/hp-elitebook-8-g1i-14-ai-pc");
  const productHtml = await product.text();
  assert.equal(product.status, 200);
  assert.match(productHtml, /HP EliteBook 8 G1i 14&quot; AI PC/i);
  assert.match(productHtml, /Add to Cart/i);
  assert.match(productHtml, /Datacom Enterprise Pte Ltd/i);

  const cart = await render("/cart-page");
  const cartHtml = await cart.text();
  assert.equal(cart.status, 200);
  assert.match(cartHtml, /My cart/i);
  assert.match(cartHtml, /Order summary/i);
  assert.match(cartHtml, /href="\/checkout\?checkoutId=ca727402-59ab-46c8-a7f1-8e7389be0db2/i);
  assert.match(cartHtml, /Datacom Enterprise Pte Ltd/i);

  const checkout = await render("/checkout?checkoutId=ca727402-59ab-46c8-a7f1-8e7389be0db2");
  const checkoutHtml = await checkout.text();
  assert.equal(checkout.status, 200);
  assert.match(checkoutHtml, /CHECKOUT/i);
  assert.match(checkoutHtml, /Customer details/i);
  assert.match(checkoutHtml, /Order summary/i);
});

test("server-renders product search results with related suggestions", async () => {
  const search = await render("/search?q=ds423%2B&type=products");
  const searchHtml = await search.text();

  assert.equal(search.status, 200);
  assert.match(searchHtml, /10 products/i);
  assert.match(searchHtml, /DS423\+Synology Plus Series/i);
  assert.match(searchHtml, /DS423\+ Seagate Iron Wolf/i);
  assert.match(searchHtml, /Synology RackStation/i);
  assert.match(searchHtml, /HPE DL360 Gen10 8SFF/i);
  assert.match(searchHtml, /Lenovo-ThinkPad E14 Gen 5/i);
  assert.match(searchHtml, /search-product-image-hover/i);
});

test("server-renders owner control dashboard", async () => {
  const dashboard = await render("/dashboard");
  const dashboardHtml = await dashboard.text();

  assert.equal(dashboard.status, 200);
  assert.match(dashboardHtml, /Owner Control/i);
  assert.match(dashboardHtml, /Datacom dashboard login/i);
  assert.match(dashboardHtml, /DASHBOARD_USERNAME/i);
  assert.doesNotMatch(dashboardHtml, /Datacom website control center/i);
  assert.doesNotMatch(dashboardHtml, /Catalog products/i);
});
