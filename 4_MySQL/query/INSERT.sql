USE sqldb;
CREATE TABLE testtbl (id int, userName CHAR(3), age int);
INSERT INTO testtbl VALUES(1, '홍길동', 25);
INSERT INTO testtbl (id, userName) VALUES(2, '이찬우');   -- ID와 이름만 입력할 경우

SELECT * FROM testtbl;

-- 대량의 샘플 데이터 생성
CREATE TABLE testtbl4 (id int, fname VARCHAR(50), lname VARCHAR(50);
INSERT INTO testtbl4
	SELECT emp_no, first_name, last_name FROM employees.employees    -- employee DB에 있는 employee 테이블에서 emp_no, first_name, last_name을 삽입하라 

