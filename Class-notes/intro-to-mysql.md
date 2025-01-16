# Introduction to MySQL

## Setting Up MySQL

### Installation
Make sure MySQL is installed on your system. You can download it from [https://dev.mysql.com/downloads/installer/](https://dev.mysql.com/downloads/installer/).

### Accessing MySQL
Once installed, you can access MySQL through:
* MySQL Command Line
* MySQL Workbench (GUI)
* Terminal/Command Prompt with the command:

```bash
mysql -u root -p
```

Enter your password to log in.

## Creating a Database

A database in MySQL is a container for tables.

### Steps to Create a Database
1. Open MySQL
2. Run the following command:

sql
CREATE DATABASE school;


3. Use the database:

sql
USE school;


## Creating Tables

Tables hold the data in a structured format. Let's create two tables: students and courses.

### Creating the students Table
sql
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    age INT,
    enrolled_at DATE DEFAULT CURRENT_DATE
);


### Creating the courses Table
sql
CREATE TABLE courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    course_name VARCHAR(100) NOT NULL,
    description TEXT,
    created_at DATE DEFAULT CURRENT_DATE
);


### Creating the enrollments Table
This table will link students to courses (a many-to-many relationship).

sql
CREATE TABLE enrollments (
    student_id INT,
    course_id INT,
    enrollment_date DATE DEFAULT CURRENT_DATE,
    PRIMARY KEY (student_id, course_id),
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (course_id) REFERENCES courses(id)
);


## Inserting Data

### Inserting Data into students
sql
INSERT INTO students (name, email, age) VALUES
('Alice', 'alice@example.com', 22),
('Bob', 'bob@example.com', 24),
('Charlie', 'charlie@example.com', 21);


### Inserting Data into courses
sql
INSERT INTO courses (course_name, description) VALUES
('Mathematics', 'An introduction to mathematics'),
('Science', 'Basics of physics, chemistry, and biology'),
('History', 'World history overview');


### Inserting Data into enrollments
sql
INSERT INTO enrollments (student_id, course_id) VALUES
(1, 1),
(1, 2),
(2, 1),
(3, 3);


## Querying the Database

### Basic Queries

#### Retrieve All Students
sql
SELECT * FROM students;


#### Retrieve Specific Columns
sql
SELECT name, email FROM students;


#### Filter Results
sql
SELECT * FROM students WHERE age > 21;


#### Sort Results
sql
SELECT * FROM students ORDER BY age DESC;


### Using Joins

Joins combine data from multiple tables.

#### Inner Join
Retrieve a list of students and their enrolled courses:
sql
SELECT students.name AS student_name, courses.course_name
FROM enrollments
INNER JOIN students ON enrollments.student_id = students.id
INNER JOIN courses ON enrollments.course_id = courses.id;


#### Left Join
Retrieve all students and their courses (including students not enrolled in any course):
sql
SELECT students.name AS student_name, courses.course_name
FROM students
LEFT JOIN enrollments ON students.id = enrollments.student_id
LEFT JOIN courses ON enrollments.course_id = courses.id;


## Updating and Deleting Data

### Updating Records
sql
UPDATE students SET age = 23 WHERE name = 'Alice';


### Deleting Records
sql
DELETE FROM students WHERE name = 'Charlie';


## Task:

1. Create a new table called teachers with the following columns:
   * id (Primary Key, Auto Increment)
   * name (String, Required)
   * email (Unique, Required)
   * hired_at (Date, Default to Current Date)

2. Add data for at least 3 teachers.

3. Create a teaches table that links teachers to courses:
   * Include teacher_id and course_id as foreign keys.

4. Write queries to:
   * Retrieve all courses along with the names of the teachers who teach them
   * Retrieve a list of teachers who are not teaching any course
