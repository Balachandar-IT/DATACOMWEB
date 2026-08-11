CREATE TABLE IF NOT EXISTS products (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  slug VARCHAR(220) NOT NULL,
  title VARCHAR(255) NOT NULL,
  price_cents INT UNSIGNED NOT NULL DEFAULT 0,
  currency CHAR(3) NOT NULL DEFAULT 'SGD',
  compare_price_cents INT UNSIGNED NULL,
  main_image_url TEXT NULL,
  ribbon VARCHAR(80) NULL,
  stock_status ENUM('in', 'out') NOT NULL DEFAULT 'in',
  is_visible BOOLEAN NOT NULL DEFAULT TRUE,
  seo_title VARCHAR(255) NULL,
  seo_description TEXT NULL,
  description_html MEDIUMTEXT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY products_slug_unique (slug),
  KEY products_title_index (title),
  KEY products_stock_status_index (stock_status)
);

CREATE TABLE IF NOT EXISTS product_images (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  product_id BIGINT UNSIGNED NOT NULL,
  image_url TEXT NOT NULL,
  alt_text VARCHAR(255) NULL,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY product_images_product_id_index (product_id),
  CONSTRAINT product_images_product_id_fk
    FOREIGN KEY (product_id) REFERENCES products(id)
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS product_options (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  product_id BIGINT UNSIGNED NOT NULL,
  name VARCHAR(120) NOT NULL,
  values_json JSON NOT NULL,
  sort_order INT NOT NULL DEFAULT 0,
  PRIMARY KEY (id),
  KEY product_options_product_id_index (product_id),
  CONSTRAINT product_options_product_id_fk
    FOREIGN KEY (product_id) REFERENCES products(id)
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS product_variants (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  product_id BIGINT UNSIGNED NOT NULL,
  variant_key VARCHAR(255) NOT NULL,
  option_values_json JSON NOT NULL,
  price_cents INT UNSIGNED NULL,
  sku VARCHAR(120) NULL,
  stock_status ENUM('in', 'out') NOT NULL DEFAULT 'in',
  is_visible BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY product_variants_key_unique (product_id, variant_key),
  KEY product_variants_product_id_index (product_id),
  CONSTRAINT product_variants_product_id_fk
    FOREIGN KEY (product_id) REFERENCES products(id)
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS customers (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(180) NOT NULL,
  company VARCHAR(220) NULL,
  email VARCHAR(255) NULL,
  phone VARCHAR(80) NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY customers_email_index (email),
  KEY customers_phone_index (phone)
);

CREATE TABLE IF NOT EXISTS leads (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(180) NOT NULL,
  company VARCHAR(220) NULL,
  email VARCHAR(255) NULL,
  phone VARCHAR(80) NULL,
  source VARCHAR(120) NOT NULL DEFAULT 'website',
  interest VARCHAR(255) NULL,
  message TEXT NOT NULL,
  status ENUM('new', 'open', 'replied', 'closed') NOT NULL DEFAULT 'new',
  assigned_to VARCHAR(180) NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY leads_status_index (status),
  KEY leads_created_at_index (created_at)
);

CREATE TABLE IF NOT EXISTS lead_replies (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  lead_id BIGINT UNSIGNED NOT NULL,
  body TEXT NOT NULL,
  sent_to_email VARCHAR(255) NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY lead_replies_lead_id_index (lead_id),
  CONSTRAINT lead_replies_lead_id_fk
    FOREIGN KEY (lead_id) REFERENCES leads(id)
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS orders (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  order_number VARCHAR(40) NOT NULL,
  customer_id BIGINT UNSIGNED NULL,
  customer_name VARCHAR(180) NULL,
  customer_email VARCHAR(255) NULL,
  status ENUM('draft', 'new', 'paid', 'fulfilled', 'cancelled') NOT NULL DEFAULT 'draft',
  payment_status ENUM('pending', 'paid', 'manual', 'failed') NOT NULL DEFAULT 'pending',
  subtotal_cents INT UNSIGNED NOT NULL DEFAULT 0,
  delivery_cents INT UNSIGNED NOT NULL DEFAULT 0,
  tax_cents INT UNSIGNED NOT NULL DEFAULT 0,
  total_cents INT UNSIGNED NOT NULL DEFAULT 0,
  currency CHAR(3) NOT NULL DEFAULT 'SGD',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY orders_order_number_unique (order_number),
  KEY orders_customer_id_index (customer_id),
  KEY orders_status_index (status),
  CONSTRAINT orders_customer_id_fk
    FOREIGN KEY (customer_id) REFERENCES customers(id)
    ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS order_items (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  order_id BIGINT UNSIGNED NOT NULL,
  product_id BIGINT UNSIGNED NULL,
  title VARCHAR(255) NOT NULL,
  sku VARCHAR(120) NULL,
  quantity INT UNSIGNED NOT NULL DEFAULT 1,
  unit_price_cents INT UNSIGNED NOT NULL DEFAULT 0,
  options_json JSON NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY order_items_order_id_index (order_id),
  KEY order_items_product_id_index (product_id),
  CONSTRAINT order_items_order_id_fk
    FOREIGN KEY (order_id) REFERENCES orders(id)
    ON DELETE CASCADE,
  CONSTRAINT order_items_product_id_fk
    FOREIGN KEY (product_id) REFERENCES products(id)
    ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS analytics_events (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  session_id VARCHAR(120) NULL,
  event_name VARCHAR(120) NOT NULL,
  page_path VARCHAR(500) NULL,
  device_type VARCHAR(80) NULL,
  country VARCHAR(120) NULL,
  region VARCHAR(120) NULL,
  metadata_json JSON NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY analytics_events_event_name_index (event_name),
  KEY analytics_events_created_at_index (created_at),
  KEY analytics_events_page_path_index (page_path)
);

CREATE TABLE IF NOT EXISTS admin_activity (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  actor VARCHAR(180) NULL,
  action VARCHAR(160) NOT NULL,
  target_type VARCHAR(120) NULL,
  target_id VARCHAR(120) NULL,
  metadata_json JSON NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY admin_activity_created_at_index (created_at),
  KEY admin_activity_action_index (action)
);
