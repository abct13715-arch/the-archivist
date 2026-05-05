ALTER TABLE listings 
ADD COLUMN subtitle varchar,
ADD COLUMN price_label varchar,
ADD COLUMN quote text,
ADD COLUMN specs jsonb;
