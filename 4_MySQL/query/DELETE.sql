DELETE FROM 테이블 이름 WHERE 조건 ;

DELETE FROM testtbl4 WHERE FNAME = 'AMER' LIMIT 5; 

USE sqldb
CREATE TABLE bigTbl1 (SELECT * FROM employees.employees);
CREATE TABLE bigTbl2 (SELECT * FROM employees.employees);
CREATE TABLE bigTbl3 (SELECT * FROM employees.employees);

SELECT * FROM bigTbl1;

DELETE FROM bigTbl1;
DROP TABLE bigTbl2;
TRUNCATE TABLE bigTbl3;