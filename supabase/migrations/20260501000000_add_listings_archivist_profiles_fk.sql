-- Add a foreign key from listings to archivist_profiles to allow direct joins
ALTER TABLE listings
ADD CONSTRAINT listings_archivist_id_fkey_profiles
FOREIGN KEY (archivist_id) REFERENCES archivist_profiles(user_id)
ON DELETE CASCADE;
