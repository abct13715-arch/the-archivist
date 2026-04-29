-- 1. Seed Categories (Data already exists, but for completeness)
INSERT INTO categories (id, name) VALUES
  (1, 'Furniture'),
  (2, 'Ceramics'),
  (3, 'Paintings'),
  (4, 'Sculptures'),
  (5, 'Vintage Watches'),
  (6, 'Botanical Specimens'),
  (7, 'Handwritten Manuscripts')
ON CONFLICT (id) DO NOTHING;

-- 2. Seed Users
INSERT INTO users (id, display_name, role, avatar_path) VALUES
  ('afd7da31-fe60-4147-9825-cf0512b5f2d1', 'Marcus Thorne', 'archivist', 'curator-1.png'),
  ('245e78ab-a512-4108-9298-b4d382e3d1ba', 'Sienna Leigh', 'archivist', 'curator-2.png'),
  ('a9ce4650-1a19-47f6-adf3-ff2bd42c970a', 'Kenji Sato', 'archivist', 'curator-3.png'),
  ('dabeb621-4eb2-4160-a9d1-6306e6d9cbf9', 'Generic Archivist 1', 'archivist', 'curator-4.png'),
  ('0e02c120-55bc-4b0d-a467-aa7e0187b50f', 'Generic Archivist 2', 'archivist', 'curator-5.png'),
  ('5de45e68-c9a5-43e8-8b71-b414349d35d9', 'John Collector', 'collector', 'profile-face.png')
ON CONFLICT (id) DO NOTHING;

-- 3. Seed Archivist Profiles
INSERT INTO archivist_profiles (id, user_id, whatsapp_number, bio, location) VALUES
  (gen_random_uuid(), 'afd7da31-fe60-4147-9825-cf0512b5f2d1', '+46000000001', 'Marcus Thorne has spent the last decade sourcing and cataloguing...', 'STOCKHOLM, SE'),
  (gen_random_uuid(), '245e78ab-a512-4108-9298-b4d382e3d1ba', '+44000000002', 'Sienna Leigh is a London-based curator...', 'LONDON, UK'),
  (gen_random_uuid(), 'a9ce4650-1a19-47f6-adf3-ff2bd42c970a', '+81000000003', 'Kenji Sato works between Tokyo and Kyoto...', 'TOKYO, JP'),
  (gen_random_uuid(), 'dabeb621-4eb2-4160-a9d1-6306e6d9cbf9', '+10000000004', 'Archivist bio placeholder 1.', 'NEW YORK, US'),
  (gen_random_uuid(), '0e02c120-55bc-4b0d-a467-aa7e0187b50f', '+33000000005', 'Archivist bio placeholder 2.', 'PARIS, FR')
ON CONFLICT (user_id) DO NOTHING;

-- 4. Seed Collections
INSERT INTO collections (id, archivist_id, title, description, cover_path, is_featured) VALUES
  (gen_random_uuid(), 'afd7da31-fe60-4147-9825-cf0512b5f2d1', 'The Brutalist Series', 'Exploring the raw beauty of concrete.', 'series-1.png', true),
  (gen_random_uuid(), '245e78ab-a512-4108-9298-b4d382e3d1ba', 'Mid-Century Modern', 'The golden era of organic curves.', 'series-2.png', false),
  (gen_random_uuid(), 'a9ce4650-1a19-47f6-adf3-ff2bd42c970a', 'Japanese Minimalism', 'Silence translated into space.', 'series-3.png', false),
  (gen_random_uuid(), 'dabeb621-4eb2-4160-a9d1-6306e6d9cbf9', 'Modernist Glass', 'Transparency and reflection.', 'series-4.png', false),
  (gen_random_uuid(), '0e02c120-55bc-4b0d-a467-aa7e0187b50f', 'Industrial Utility', 'Objects born from necessity.', 'series-5.png', false);

-- 6. Seed Acquisitions (Using 'Generic Archivist 2' as owner)
INSERT INTO listings (id, archivist_id, category_id, title, price, currency, condition, status) VALUES
  (gen_random_uuid(), '0e02c120-55bc-4b0d-a467-aa7e0187b50f', 2, 'Porous Vessel No. 14', 240, 'USD', 'excellent', 'active'),
  (gen_random_uuid(), '0e02c120-55bc-4b0d-a467-aa7e0187b50f', 4, 'Obsidian Pillar Mount', 165, 'USD', 'excellent', 'active'),
  (gen_random_uuid(), '0e02c120-55bc-4b0d-a467-aa7e0187b50f', 1, 'Raw Flax Runner', 95, 'USD', 'good', 'active'),
  (gen_random_uuid(), '0e02c120-55bc-4b0d-a467-aa7e0187b50f', 1, 'Charred Oak Plinth', 310, 'USD', 'good', 'active');

