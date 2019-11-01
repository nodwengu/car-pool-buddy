

CREATE TABLE users(
    id SERIAL NOT NULL  PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL, 
    usertype TEXT NOT NULL,
    phone TEXT NOT NULL,
    destination TEXT NOT NULL,
    pick_up TEXT NOT NULL,
    time_slot INT NOT NULL,
    price INT NOT NULL
);

CREATE TABLE cars(
    id SERIAL NOT NULL  PRIMARY KEY,
    seats TEXT NOT NULL,
    reg_number TEXT NOT NULL, 
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);


