ALTER TABLE users RENAME COLUMN avatar_url TO avatar_path;
ALTER TABLE listing_images RENAME COLUMN image_url TO image_path;
ALTER TABLE collections RENAME COLUMN cover_image TO cover_path;
