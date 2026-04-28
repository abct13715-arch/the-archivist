CREATE TABLE listings (
  id uuid PRIMARY KEY,
  archivist_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  category_id integer NOT NULL REFERENCES categories(id) ON DELETE RESTRICT,
  title varchar NOT NULL,
  description text,
  price decimal NOT NULL,
  currency currency_code NOT NULL DEFAULT 'USD',
  condition listing_condition NOT NULL,
  status listing_status NOT NULL DEFAULT 'draft',
  created_at timestamp DEFAULT now()
);
