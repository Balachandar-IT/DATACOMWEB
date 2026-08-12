DO $$ BEGIN
  CREATE TYPE stock_status AS ENUM ('in', 'out');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE TYPE lead_status AS ENUM ('new', 'open', 'replied', 'closed');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE TYPE order_status AS ENUM ('draft', 'new', 'paid', 'fulfilled', 'cancelled');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE TYPE payment_status AS ENUM ('pending', 'paid', 'manual', 'failed');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

CREATE TABLE IF NOT EXISTS products (
  id BIGSERIAL PRIMARY KEY,
  slug VARCHAR(220) NOT NULL UNIQUE,
  title VARCHAR(255) NOT NULL,
  price_cents INTEGER NOT NULL DEFAULT 0,
  currency CHAR(3) NOT NULL DEFAULT 'SGD',
  compare_price_cents INTEGER,
  main_image_url TEXT,
  ribbon VARCHAR(80),
  stock_status stock_status NOT NULL DEFAULT 'in',
  stock_quantity INTEGER NOT NULL DEFAULT 0,
  is_visible BOOLEAN NOT NULL DEFAULT TRUE,
  seo_title VARCHAR(255),
  seo_description TEXT,
  description_html TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS products_title_index ON products (title);
CREATE INDEX IF NOT EXISTS products_stock_status_index ON products (stock_status);

CREATE TABLE IF NOT EXISTS product_images (
  id BIGSERIAL PRIMARY KEY,
  product_id BIGINT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  alt_text VARCHAR(255),
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS product_images_product_id_index ON product_images (product_id);

CREATE TABLE IF NOT EXISTS product_options (
  id BIGSERIAL PRIMARY KEY,
  product_id BIGINT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  name VARCHAR(120) NOT NULL,
  values_json JSONB NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS product_options_product_id_index ON product_options (product_id);

CREATE TABLE IF NOT EXISTS product_variants (
  id BIGSERIAL PRIMARY KEY,
  product_id BIGINT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  variant_key VARCHAR(255) NOT NULL,
  option_values_json JSONB NOT NULL,
  price_cents INTEGER,
  sku VARCHAR(120),
  stock_status stock_status NOT NULL DEFAULT 'in',
  stock_quantity INTEGER NOT NULL DEFAULT 0,
  is_visible BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (product_id, variant_key)
);

CREATE INDEX IF NOT EXISTS product_variants_product_id_index ON product_variants (product_id);

CREATE TABLE IF NOT EXISTS customers (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(180) NOT NULL,
  company VARCHAR(220),
  email VARCHAR(255),
  phone VARCHAR(80),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS customers_email_index ON customers (email);
CREATE INDEX IF NOT EXISTS customers_phone_index ON customers (phone);

CREATE TABLE IF NOT EXISTS leads (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(180) NOT NULL,
  company VARCHAR(220),
  email VARCHAR(255),
  phone VARCHAR(80),
  source VARCHAR(120) NOT NULL DEFAULT 'website',
  interest VARCHAR(255),
  message TEXT NOT NULL,
  status lead_status NOT NULL DEFAULT 'new',
  assigned_to VARCHAR(180),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS leads_status_index ON leads (status);
CREATE INDEX IF NOT EXISTS leads_created_at_index ON leads (created_at);

CREATE TABLE IF NOT EXISTS lead_replies (
  id BIGSERIAL PRIMARY KEY,
  lead_id BIGINT NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  body TEXT NOT NULL,
  sent_to_email VARCHAR(255),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS lead_replies_lead_id_index ON lead_replies (lead_id);

CREATE TABLE IF NOT EXISTS orders (
  id BIGSERIAL PRIMARY KEY,
  order_number VARCHAR(40) NOT NULL UNIQUE,
  customer_id BIGINT REFERENCES customers(id) ON DELETE SET NULL,
  customer_name VARCHAR(180),
  customer_email VARCHAR(255),
  status order_status NOT NULL DEFAULT 'draft',
  payment_status payment_status NOT NULL DEFAULT 'pending',
  subtotal_cents INTEGER NOT NULL DEFAULT 0,
  delivery_cents INTEGER NOT NULL DEFAULT 0,
  tax_cents INTEGER NOT NULL DEFAULT 0,
  total_cents INTEGER NOT NULL DEFAULT 0,
  currency CHAR(3) NOT NULL DEFAULT 'SGD',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS orders_customer_id_index ON orders (customer_id);
CREATE INDEX IF NOT EXISTS orders_status_index ON orders (status);

CREATE TABLE IF NOT EXISTS order_items (
  id BIGSERIAL PRIMARY KEY,
  order_id BIGINT NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  product_id BIGINT REFERENCES products(id) ON DELETE SET NULL,
  title VARCHAR(255) NOT NULL,
  sku VARCHAR(120),
  quantity INTEGER NOT NULL DEFAULT 1,
  unit_price_cents INTEGER NOT NULL DEFAULT 0,
  options_json JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS order_items_order_id_index ON order_items (order_id);
CREATE INDEX IF NOT EXISTS order_items_product_id_index ON order_items (product_id);

CREATE TABLE IF NOT EXISTS analytics_events (
  id BIGSERIAL PRIMARY KEY,
  session_id VARCHAR(120),
  event_name VARCHAR(120) NOT NULL,
  page_path VARCHAR(500),
  device_type VARCHAR(80),
  country VARCHAR(120),
  region VARCHAR(120),
  metadata_json JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS analytics_events_event_name_index ON analytics_events (event_name);
CREATE INDEX IF NOT EXISTS analytics_events_created_at_index ON analytics_events (created_at);
CREATE INDEX IF NOT EXISTS analytics_events_page_path_index ON analytics_events (page_path);

CREATE TABLE IF NOT EXISTS admin_activity (
  id BIGSERIAL PRIMARY KEY,
  actor VARCHAR(180),
  action VARCHAR(160) NOT NULL,
  target_type VARCHAR(120),
  target_id VARCHAR(120),
  metadata_json JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS admin_activity_created_at_index ON admin_activity (created_at);
CREATE INDEX IF NOT EXISTS admin_activity_action_index ON admin_activity (action);
