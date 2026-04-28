CREATE TABLE inquiries (
  id uuid PRIMARY KEY,
  listing_id uuid NOT NULL REFERENCES listings(id) ON DELETE CASCADE,
  collector_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  note text,
  status inquiry_status NOT NULL DEFAULT 'pending',
  created_at timestamp DEFAULT now()
);
