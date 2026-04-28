CREATE TABLE listing_images (
  id uuid PRIMARY KEY,
  listing_id uuid NOT NULL REFERENCES listings(id) ON DELETE CASCADE,
  image_url text NOT NULL,
  display_order integer NOT NULL,
  created_at timestamp DEFAULT now()
);
