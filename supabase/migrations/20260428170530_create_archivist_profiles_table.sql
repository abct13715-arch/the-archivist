CREATE TABLE archivist_profiles (
  id uuid PRIMARY KEY,
  user_id uuid NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
  whatsapp_number varchar NOT NULL,
  bio text,
  location varchar,
  persona_inquiry_id varchar,
  verified_at timestamp,
  created_at timestamp DEFAULT now()
);
