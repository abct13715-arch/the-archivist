CREATE TYPE user_role AS ENUM ('collector', 'archivist', 'admin');
CREATE TYPE listing_status AS ENUM ('draft', 'active', 'reserved', 'sold');
CREATE TYPE listing_condition AS ENUM ('mint', 'excellent', 'good', 'fair');
CREATE TYPE currency_code AS ENUM ('USD', 'EUR', 'GBP', 'INR');
CREATE TYPE inquiry_status AS ENUM ('pending', 'active', 'completed', 'cancelled');
