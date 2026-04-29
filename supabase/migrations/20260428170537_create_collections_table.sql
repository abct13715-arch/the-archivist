CREATE TABLE collections (
  id uuid PRIMARY KEY,
  archivist_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title varchar NOT NULL,
  description text,
  cover_image text,
  is_featured boolean DEFAULT false,
  created_at timestamp DEFAULT now()
);
