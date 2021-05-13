USE employees;

-- 잘못된 DB 선택
USE mysql;
SELECT * FROM employees;

SELECT * FROM titles;

-- DB와 table 이름을 함께 사용 가능 
SELECT * FROM employees.titles;

USE employees;
SELECT first_name FROM employees;
SELECT first_name, last_name, gender FROM employees;


-- < 실습: database 들여다 보기> --

SHOW DATABASES;         -- 전체 DB를 보여 달라
USE employees;                  -- 그중 employees DB를 사용하겠다
SHOW TABLE STATUS;    -- 테이블의 상태를 (자세히) 보여 달라
SHOW TABLES;                -- 테이블의 상태를 (제목만) 보여 달라 

DESCRIBE employees;     -- 또는 DESC employees;   -- employees 테이블을 자세히 보여 달라 
SELECT first_name, gender FROM employees;          -- employees 테이블에서 first_name, gender를 찾아 와라