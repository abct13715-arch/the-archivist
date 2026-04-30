  -- Comprehensive Seed Script for Marketplace App
  -- This script seeds Categories, Users, Archivist Profiles, Collections, Listings, Listing Images, and Collection-Listing relationships.
  -- It uses valid RFC 4122 version 4 compliant UUIDs for all entities.

  -- 1. Seed Categories
  INSERT INTO categories (id, name) VALUES
    (1, 'Furniture'),
    (2, 'Ceramics'),
    (3, 'Paintings'),
    (4, 'Sculptures'),
    (5, 'Vintage Watches'),
    (6, 'Botanical Specimens'),
    (7, 'Handwritten Manuscripts'),
    (8, 'Lighting'),
    (9, 'Textiles'),
    (10, 'Archive'),
    (11, 'Optics'),
    (12, 'Metalwork'),
    (13, 'Woodwork')
  ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name;

  -- 2. Seed Users
  INSERT INTO users (id, display_name, role, avatar_path) VALUES
    ('afd7da31-fe60-4147-9825-cf0512b5f2d1', 'Marcus Thorne', 'archivist', 'curator-1.png'),
    ('245e78ab-a512-4108-9298-b4d382e3d1ba', 'Sienna Leigh', 'archivist', 'curator-2.png'),
    ('a9ce4650-1a19-47f6-adf3-ff2bd42c970a', 'Kenji Sato', 'archivist', 'curator-3.png'),
    ('dabeb621-4eb2-4160-a9d1-6306e6d9cbf9', 'Generic Archivist 1', 'archivist', 'curator-4.png'),
    ('0e02c120-55bc-4b0d-a467-aa7e0187b50f', 'Generic Archivist 2', 'archivist', 'curator-5.png'),
    ('5de45e68-c9a5-43e8-8b71-b414349d35d9', 'John Collector', 'collector', 'profile-face.png')
  ON CONFLICT (id) DO UPDATE SET 
    display_name = EXCLUDED.display_name,
    role = EXCLUDED.role,
    avatar_path = EXCLUDED.avatar_path;

  -- 3. Seed Archivist Profiles
  INSERT INTO archivist_profiles (id, user_id, whatsapp_number, bio, location) VALUES
    ('b1a11111-1111-4111-b111-111111111111', 'afd7da31-fe60-4147-9825-cf0512b5f2d1', '+46000000001', 'Marcus Thorne has spent the last decade sourcing and cataloguing the forgotten monuments of Scandinavian modernism.', 'STOCKHOLM, SE'),
    ('b1a22222-2222-4222-b222-222222222222', '245e78ab-a512-4108-9298-b4d382e3d1ba', '+44000000002', 'Sienna Leigh is a London-based curator specializing in British industrial design, archive photography, and early Penguin book covers.', 'LONDON, UK'),
    ('b1a33333-3333-4333-b333-333333333333', 'a9ce4650-1a19-47f6-adf3-ff2bd42c970a', '+81000000003', 'Kenji Sato works between Tokyo and Kyoto, specializing in traditional Japanese craft and its intersection with modernist principles.', 'TOKYO, JP'),
    ('b1a44444-4444-4444-b444-444444444444', 'dabeb621-4eb2-4160-a9d1-6306e6d9cbf9', '+10000000004', 'Specializing in mid-century artifacts and urban archeology.', 'NEW YORK, US'),
    ('b1a55555-5555-4555-b555-555555555555', '0e02c120-55bc-4b0d-a467-aa7e0187b50f', '+33000000005', 'Focused on industrial utility and functional minimalism.', 'PARIS, FR')
  ON CONFLICT (id) DO UPDATE SET 
    bio = EXCLUDED.bio,
    location = EXCLUDED.location;

  -- 4. Seed Collections
  INSERT INTO collections (id, archivist_id, title, description, cover_path, is_featured) VALUES
    ('c0000001-0001-4001-c001-000000000001', 'afd7da31-fe60-4147-9825-cf0512b5f2d1', 'The Brutalist Series', 'Exploring the raw, unadorned beauty of concrete monoliths and structural honesty.', 'series-1.png', true),
    ('c0000002-0002-4002-c002-000000000002', '245e78ab-a512-4108-9298-b4d382e3d1ba', 'Mid-Century Modern', 'The golden era of organic curves and functional elegance.', 'series-2.png', false),
    ('c0000003-0003-4003-c003-000000000003', 'a9ce4650-1a19-47f6-adf3-ff2bd42c970a', 'Japanese Minimalism', 'Silence translated into space. A study of Ma and the art of subtraction.', 'series-3.png', false),
    ('c0000004-0004-4004-c004-000000000004', 'dabeb621-4eb2-4160-a9d1-6306e6d9cbf9', 'Modernist Glass', 'Transparency, reflection, and the dissolution of boundaries.', 'series-4.png', false),
    ('c0000005-0005-4005-c005-000000000005', '0e02c120-55bc-4b0d-a467-aa7e0187b50f', 'Industrial Utility', 'Objects born from necessity, celebrated for their functionality.', 'series-5.png', false)
  ON CONFLICT (id) DO UPDATE SET 
    title = EXCLUDED.title,
    description = EXCLUDED.description,
    cover_path = EXCLUDED.cover_path,
    is_featured = EXCLUDED.is_featured;

  -- 5. Seed Listings

  -- 5.1 Marcus Thorne Listings
  INSERT INTO listings (id, archivist_id, category_id, title, price, currency, condition, status, description) VALUES
    ('11111111-1111-4111-a111-111111111111', 'afd7da31-fe60-4147-9825-cf0512b5f2d1', 1, 'Monolith Lounge', 4200, 'USD', 'excellent', 'active', 'A definitive expression of minimal form, this vessel embodies wabi-sabi aesthetics.'),
    ('22222222-2222-4222-a222-222222222222', 'afd7da31-fe60-4147-9825-cf0512b5f2d1', 2, 'Basalt Form IV', 850, 'USD', 'excellent', 'active', 'A raw basalt sculpture that anchors any space with its silent presence.'),
    ('33333333-3333-4333-a333-333333333333', 'afd7da31-fe60-4147-9825-cf0512b5f2d1', 8, 'Linear Beam', 1100, 'USD', 'excellent', 'active', 'Industrial lighting that celebrates the honesty of structural steel.'),
    ('44444444-4444-4444-a444-444444444444', 'afd7da31-fe60-4147-9825-cf0512b5f2d1', 9, 'Woven Silence', 2800, 'USD', 'good', 'active', 'Hand-loomed textiles inspired by Nordic landscape textures.'),
    ('55555555-5555-4555-a555-555555555555', 'afd7da31-fe60-4147-9825-cf0512b5f2d1', 4, 'Concrete Resolve', 3400, 'USD', 'excellent', 'active', 'A study in permanence through raw cast concrete.'),
    ('66666666-6666-4666-a666-666666666666', 'afd7da31-fe60-4147-9825-cf0512b5f2d1', 1, 'Oak Fragment', 1650, 'USD', 'good', 'active', 'Salvaged oak beam repurposed into a minimalist functional plinth.')
  ON CONFLICT (id) DO UPDATE SET 
    title = EXCLUDED.title,
    price = EXCLUDED.price,
    description = EXCLUDED.description;

  -- 5.2 Sienna Leigh Listings
  INSERT INTO listings (id, archivist_id, category_id, title, price, currency, condition, status, description) VALUES
    ('77777777-7777-4777-a777-777777777777', '245e78ab-a512-4108-9298-b4d382e3d1ba', 8, 'GWR Brass Lantern', 1800, 'USD', 'good', 'active', 'A genuine Great Western Railway lantern, restored with original patina.'),
    ('88888888-8888-4888-a888-888888888888', '245e78ab-a512-4108-9298-b4d382e3d1ba', 10, 'Penguin 1000', 420, 'USD', 'excellent', 'active', 'A complete set of early Penguin paperbacks in remarkable condition.'),
    ('99999999-9999-4999-a999-999999999999', '245e78ab-a512-4108-9298-b4d382e3d1ba', 2, 'Studio Vessel', 680, 'USD', 'excellent', 'active', 'British studio pottery emphasizing the artisan mark.'),
    ('aaaaaaaa-aaaa-4aaa-baaa-aaaaaaaaaaaa', '245e78ab-a512-4108-9298-b4d382e3d1ba', 1, 'Riveted Stool', 2100, 'USD', 'good', 'active', 'Industrial seating with visible structural joinery.')
  ON CONFLICT (id) DO UPDATE SET 
    title = EXCLUDED.title,
    price = EXCLUDED.price,
    description = EXCLUDED.description;

  -- 5.3 Kenji Sato Listings
  INSERT INTO listings (id, archivist_id, category_id, title, price, currency, condition, status, description) VALUES
    ('bbbbbbbb-bbbb-4bbb-abbb-bbbbbbbbbbbb', 'a9ce4650-1a19-47f6-adf3-ff2bd42c970a', 2, 'Temple Bowl', 940, 'USD', 'excellent', 'active', 'Edo-period ceremonial bowl with deep contemplative qualities.'),
    ('cccccccc-cccc-4ccc-accc-cccccccccccc', 'a9ce4650-1a19-47f6-adf3-ff2bd42c970a', 13, 'Cedar Form', 3200, 'USD', 'excellent', 'active', 'Sculpted from ancient Yakushima cedar, celebrating the grain.'),
    ('dddddddd-dddd-4ddd-addd-dddddddddddd', 'a9ce4650-1a19-47f6-adf3-ff2bd42c970a', 12, 'Iron Garden', 1500, 'USD', 'good', 'active', 'Cast iron meditative object for interior gardens.')
  ON CONFLICT (id) DO UPDATE SET 
    title = EXCLUDED.title,
    price = EXCLUDED.price,
    description = EXCLUDED.description;

  -- 5.4 Generic Archivist 1 Listings
  INSERT INTO listings (id, archivist_id, category_id, title, price, currency, condition, status, description) VALUES
    ('eeeeeeee-eeee-4eee-aeee-eeeeeeeeeeee', 'dabeb621-4eb2-4160-a9d1-6306e6d9cbf9', 2, 'Earthen Vessel No. 04', 420, 'USD', 'excellent', 'active', 'Hand-thrown stoneware with natural ash glaze.'),
    ('ffffffff-ffff-4fff-afff-ffffffffffff', 'dabeb621-4eb2-4160-a9d1-6306e6d9cbf9', 1, 'The Artek Lounge', 1850, 'USD', 'good', 'active', 'Classic Scandinavian design, restored teak frame.'),
    ('00000000-0000-4000-a000-000000000000', 'dabeb621-4eb2-4160-a9d1-6306e6d9cbf9', 8, 'Brushed Brass Task Lamp', 315, 'USD', 'excellent', 'active', 'Minimalist lighting with architectural precision.'),
    ('10101010-1010-4101-b010-101010101010', 'dabeb621-4eb2-4160-a9d1-6306e6d9cbf9', 5, 'Minimalist Wall Clock', 450, 'USD', 'excellent', 'active', 'Steel frame clock with silent movement.')
  ON CONFLICT (id) DO UPDATE SET 
    title = EXCLUDED.title,
    price = EXCLUDED.price,
    description = EXCLUDED.description;

  -- 5.5 Generic Archivist 2 Listings
  INSERT INTO listings (id, archivist_id, category_id, title, price, currency, condition, status, description) VALUES
    ('20202020-2020-4202-b020-202020202020', '0e02c120-55bc-4b0d-a467-aa7e0187b50f', 2, 'Porous Vessel No. 14', 240, 'USD', 'excellent', 'active', 'Organic ceramic form with unique surface texture.'),
    ('30303030-3030-4303-b030-303030303030', '0e02c120-55bc-4b0d-a467-aa7e0187b50f', 4, 'Obsidian Pillar Mount', 165, 'USD', 'excellent', 'active', 'Sharp geometry in volcanic stone.'),
    ('40404040-4040-4404-b040-404040404040', '0e02c120-55bc-4b0d-a467-aa7e0187b50f', 9, 'Raw Flax Runner', 95, 'USD', 'good', 'active', 'Hand-woven textile with natural fibers.'),
    ('50505050-5050-4505-b050-505050505050', '0e02c120-55bc-4b0d-a467-aa7e0187b50f', 13, 'Charred Oak Plinth', 310, 'USD', 'good', 'active', 'Shou Sugi Ban treated oak block.')
  ON CONFLICT (id) DO UPDATE SET 
    title = EXCLUDED.title,
    price = EXCLUDED.price,
    description = EXCLUDED.description;

  -- 6. Seed Listing Images
  INSERT INTO listing_images (id, listing_id, image_path, display_order) VALUES
    (gen_random_uuid(), '11111111-1111-4111-a111-111111111111', 'chair.png', 1),
    (gen_random_uuid(), '22222222-2222-4222-a222-222222222222', 'bowl.png', 1),
    (gen_random_uuid(), '33333333-3333-4333-a333-333333333333', 'light.png', 1),
    (gen_random_uuid(), '44444444-4444-4444-a444-444444444444', 'flower-pot.png', 1),
    (gen_random_uuid(), '55555555-5555-4555-a555-555555555555', 'stone-monolith.png', 1),
    (gen_random_uuid(), '66666666-6666-4666-a666-666666666666', 'clock.png', 1),
    (gen_random_uuid(), '77777777-7777-4777-a777-777777777777', 'table-lamp.png', 1),
    (gen_random_uuid(), '88888888-8888-4888-a888-888888888888', 'folio.png', 1),
    (gen_random_uuid(), '99999999-9999-4999-a999-999999999999', 'bottle-1.png', 1),
    (gen_random_uuid(), 'aaaaaaaa-aaaa-4aaa-baaa-aaaaaaaaaaaa', 'raw-plinth-stool.png', 1),
    (gen_random_uuid(), 'bbbbbbbb-bbbb-4bbb-abbb-bbbbbbbbbbbb', 'bottle-2.png', 1),
    (gen_random_uuid(), 'cccccccc-cccc-4ccc-accc-cccccccccccc', 'p-1.png', 1),
    (gen_random_uuid(), 'dddddddd-dddd-4ddd-addd-dddddddddddd', 'series-1.png', 1),
    (gen_random_uuid(), 'eeeeeeee-eeee-4eee-aeee-eeeeeeeeeeee', 'bottle-1.png', 1),
    (gen_random_uuid(), 'ffffffff-ffff-4fff-afff-ffffffffffff', 'chair-2.png', 1),
    (gen_random_uuid(), '00000000-0000-4000-a000-000000000000', 'light.png', 1),
    (gen_random_uuid(), '10101010-1010-4101-b010-101010101010', 'clock.png', 1),
    (gen_random_uuid(), '20202020-2020-4202-b020-202020202020', 'bowl.png', 1),
    (gen_random_uuid(), '30303030-3030-4303-b030-303030303030', 'stone-monolith.png', 1),
    (gen_random_uuid(), '40404040-4040-4404-b040-404040404040', 'chair.png', 1),
    (gen_random_uuid(), '50505050-5050-4505-b050-505050505050', 'clock.png', 1)
  ON CONFLICT (id) DO NOTHING;

  -- 7. Seed Collection Listings
  -- Brutalist Series
  INSERT INTO collection_listings (collection_id, listing_id, display_order) VALUES
    ('c0000001-0001-4001-c001-000000000001', '55555555-5555-4555-a555-555555555555', 1),
    ('c0000001-0001-4001-c001-000000000001', '66666666-6666-4666-a666-666666666666', 2),
    ('c0000001-0001-4001-c001-000000000001', '11111111-1111-4111-a111-111111111111', 3)
  ON CONFLICT (collection_id, listing_id) DO NOTHING;

  -- Mid-Century Modern
  INSERT INTO collection_listings (collection_id, listing_id, display_order) VALUES
    ('c0000002-0002-4002-c002-000000000002', 'ffffffff-ffff-4fff-afff-ffffffffffff', 1)
  ON CONFLICT (collection_id, listing_id) DO NOTHING;

  -- Japanese Minimalism
  INSERT INTO collection_listings (collection_id, listing_id, display_order) VALUES
    ('c0000003-0003-4003-c003-000000000003', 'bbbbbbbb-bbbb-4bbb-abbb-bbbbbbbbbbbb', 1),
    ('c0000003-0003-4003-c003-000000000003', 'cccccccc-cccc-4ccc-accc-cccccccccccc', 2)
  ON CONFLICT (collection_id, listing_id) DO NOTHING;

  -- 8. Seed Reviews
  INSERT INTO reviews (id, reviewer_id, archivist_id, listing_id, rating, body) VALUES
    (gen_random_uuid(), '5de45e68-c9a5-43e8-8b71-b414349d35d9', 'afd7da31-fe60-4147-9825-cf0512b5f2d1', '11111111-1111-4111-a111-111111111111', 5, 'Exceptional attention to provenance and material integrity.'),
    (gen_random_uuid(), '5de45e68-c9a5-43e8-8b71-b414349d35d9', '245e78ab-a512-4108-9298-b4d382e3d1ba', '77777777-7777-4777-a777-777777777777', 5, 'The lantern is a museum-quality piece. Truly remarkable.'),
    (gen_random_uuid(), '5de45e68-c9a5-43e8-8b71-b414349d35d9', 'a9ce4650-1a19-47f6-adf3-ff2bd42c970a', 'bbbbbbbb-bbbb-4bbb-abbb-bbbbbbbbbbbb', 5, 'A spiritual dimension captured in a physical object.')
  ON CONFLICT (id) DO NOTHING;
