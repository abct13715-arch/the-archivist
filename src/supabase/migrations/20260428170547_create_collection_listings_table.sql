CREATE TABLE collection_listings (
  collection_id uuid NOT NULL REFERENCES collections(id) ON DELETE CASCADE,
  listing_id uuid NOT NULL REFERENCES listings(id) ON DELETE CASCADE,
  display_order integer NOT NULL,
  PRIMARY KEY (collection_id, listing_id)
);
