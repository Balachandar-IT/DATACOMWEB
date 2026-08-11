import { withPostgres } from "../backend/postgres.mjs";

await withPostgres(async (db) => {
  const products = await db.query("SELECT COUNT(*)::int AS count FROM products WHERE main_image_url LIKE 'http%'");
  const images = await db.query("SELECT COUNT(*)::int AS count FROM product_images WHERE image_url LIKE 'http%'");
  console.log(
    JSON.stringify({
      products: products.rows[0].count,
      product_images: images.rows[0].count,
    }),
  );
});
