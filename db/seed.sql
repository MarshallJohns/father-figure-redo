CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(40),
    first_name VARCHAR(40),
    hash TEXT
);

CREATE TABLE jokes(
    joke_id SERIAL PRIMARY KEY,
    joke_text TEXT,
    user_id INT REFERENCES users(user_id)
)