DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS pins CASCADE;
DROP TABLE IF EXISTS categories_pins CASCADE;
DROP TABLE IF EXISTS boards CASCADE;
DROP TABLE IF EXISTS boards_pins CASCADE;
DROP TABLE IF EXISTS comments CASCADE;
DROP TABLE IF EXISTS ratings CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(500) NOT NULL,
  profile_picture VARCHAR(2000) DEFAULT 'https://cdn3.f-cdn.com/contestentries/1376995/30494909/5b566bc71d308_thumb900.jpg'
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);

CREATE table pins (
  id SERIAL PRIMARY KEY NOT NULL,
  owner_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  image VARCHAR(2000) DEFAULT 'https://webpop.github.io/jquery.pin/images/pin.png',
  title VARCHAR(255),
  description TEXT,
  url VARCHAR(2000),
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE
);

CREATE TABLE boards (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255),
  owner_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  image VARCHAR(500) DEFAULT 'https://previews.123rf.com/images/bbtreesubmission/bbtreesubmission1810/bbtreesubmission181000461/109286486-peperoni-pizza.jpg',
  description TEXT
);

CREATE TABLE boards_pins (
  id SERIAL PRIMARY KEY NOT NULL,
  board_id INTEGER REFERENCES boards(id) ON DELETE CASCADE,
  pin_id INTEGER REFERENCES pins(id) ON DELETE CASCADE
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  pin_id INTEGER REFERENCES pins(id) ON DELETE CASCADE,
  text VARCHAR(255)
);

CREATE TABLE ratings (
  pin_id INTEGER REFERENCES pins(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  PRIMARY KEY (pin_id, user_id),
  value SMALLINT
);
