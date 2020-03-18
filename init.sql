CREATE TABLE users (
    id SERIAL PRIMARY KEY, 
    oauth_id VARCHAR (50) UNIQUE,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(50) UNIQUE,
    userpassword VARCHAR(50),
    goal TEXT,
    goal_startdate DATE,
    goal_enddate DATE
);

INSERT INTO users (username, email, userpassword) VALUES ('jennl97', 'jennhott97@gmail.com', 'test123');