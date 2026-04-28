CREATE TABLE users (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  role user_role NOT NULL DEFAULT 'collector',
  display_name varchar NOT NULL,
  avatar_url text,
  created_at timestamp DEFAULT now()
);
