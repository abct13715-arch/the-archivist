CREATE TABLE categories (
  id serial PRIMARY KEY,
  name varchar NOT NULL UNIQUE,
  created_at timestamp DEFAULT now()
);

INSERT INTO categories (id, name) VALUES
  (1, 'Furniture'),
  (2, 'Ceramics'),
  (3, 'Paintings'),
  (4, 'Sculptures'),
  (5, 'Vintage Watches'),
  (6, 'Botanical Specimens'),
  (7, 'Handwritten Manuscripts');
