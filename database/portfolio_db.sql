-- TABLE works
CREATE TABLE IF NOT EXISTS works (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(200) NOT NULL,
  description VARCHAR(300),
  image VARCHAR(200),
  link_1 VARCHAR (150),
  link_2 VARCHAR (150),
  tech_1 VARCHAR(50),
  tech_2 VARCHAR(50),
  tech_3 VARCHAR(50),
  type VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS personal_projects (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(200) NOT NULL,
  description VARCHAR(300),
  image VARCHAR(200),
  link_1 VARCHAR (150),
  link_2 VARCHAR (150),
  tech_1 VARCHAR(50),
  tech_2 VARCHAR(50),
  tech_3 VARCHAR(50),
  type VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS testimonials (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  image VARCHAR(200),
  job VARCHAR(200),
  testimonial TEXT NOT NULL
);