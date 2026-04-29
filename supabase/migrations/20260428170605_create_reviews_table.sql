CREATE TABLE reviews (
  id uuid PRIMARY KEY,
  reviewer_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  archivist_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  listing_id uuid NOT NULL REFERENCES listings(id) ON DELETE CASCADE,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  body text,
  created_at timestamp DEFAULT now()
);
