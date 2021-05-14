DROP DATABASE IF EXISTS  sqldb; 
CREATE DATABASE sqldb;

USE sqldb;
CREATE TABLE usertbl   -- 회원 테이블
(	userID        CHAR(8) NOT NULL PRIMARY KEY,
	name         VARCHAR(10) NOT NULL,
	birthYear     INT NOT NULL,
	addr           CHAR(2) NOT NULL,
	mobile1      CHAR(3),
	mobile2      CHAR(8),
	height        SMALLINT,
	nDate         DATE
);

CREATE TABLE buytbl   -- 회원 구매 테이블 
(	num    INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
	userID   CHAR(8) NOT NULL,
    prodName  CHAR(6) NOT NULL,
    groupName   CHAR(4),
    price      INT NOT NULL,
    amount    SMALLINT  NOT NULL,
    FOREIGN KEY  (userID)  REFERENCES usertbl(userID)
);

INSERT INTO usertbl VALUES('LSG', '이승기', 1987, '서울', '011', '1111111', 182, '2008-8-8');
INSERT INTO usertbl VALUES('KBS', '김범수', 1979, '경남', '011', '1111111', 182, '2008-8-8');
INSERT INTO usertbl VALUES('KKH', '김경호', 1971, '전남', '011', '1111111', 182, '2008-8-8');
INSERT INTO usertbl VALUES('JYP', '조용필', 1950, '경기', '011', '1111111', 182, '2008-8-8');
INSERT INTO usertbl VALUES('SSK', '성시경', 1979, '서울', '011', '1111111', 182, '2008-8-8');
INSERT INTO usertbl VALUES('LJB', '임재범', 1963, '서울', '011', '1111111', 182, '2008-8-8');
INSERT INTO usertbl VALUES('YJS', '윤종신', 1969, '경남', '011', '1111111', 182, '2008-8-8');
INSERT INTO usertbl VALUES('EJW', '은지원', 1972, '경북', '011', '1111111', 182, '2008-8-8');
INSERT INTO usertbl VALUES('JKW', '조관우', 1965, '경기', '011', '1111111', 182, '2008-8-8');
INSERT INTO usertbl VALUES('BBK', '바비킴', 1973, '서울', '011', '1111111', 182, '2008-8-8');

INSERT INTO buytbl VALUES(NULL, 'KBS', '운동화', NULL,  30, 2);
INSERT INTO buytbl VALUES(NULL, 'KBS', '노트북', '전자',  30, 2);
INSERT INTO buytbl VALUES(NULL, 'JYP', '모니터', '전자',  30, 2);
INSERT INTO buytbl VALUES(NULL, 'BBK', '모니터','전자',  30, 2);
INSERT INTO buytbl VALUES(NULL, 'KBS', '청바지', '의류',  30, 2);
INSERT INTO buytbl VALUES(NULL, 'BBK', '메모리', '전자',  30, 2);
INSERT INTO buytbl VALUES(NULL, 'SSK', '책', '서적',  30, 2);
INSERT INTO buytbl VALUES(NULL, 'EJW', '책', '서적',  30, 2);
INSERT INTO buytbl VALUES(NULL, 'EJW', '청바지', '의류',  30, 2);
INSERT INTO buytbl VALUES(NULL, 'BBK', '운동화', NULL,  30, 2);
INSERT INTO buytbl VALUES(NULL, 'EJW', '책', '서적',  30, 2);
INSERT INTO buytbl VALUES(NULL, 'BBK', '운동화', NULL,  30, 2);

SELECT * FROM usertbl;
SELECT * FROM buytbl;