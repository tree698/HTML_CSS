USE sqldb;
CREATE TABLE memberTBL (SELECT userID, name, addr FROM usertbl LIMIT 3);
ALTER TABLE memberTBL 
		ADD CONSTRAINT pk_memberTBL PRIMARY KEY (userID);
SELECT * FROM memberTBL;

INSERT INTO memberTBL VALUES('BBK','비비코','미국');
INSERT INTO memberTBL VALUES('SJH','서장훈','서울');
INSERT INTO memberTBL VALUES('HJY','현주엽','경기');
SELECT * FROM memberTBL;

INSERT IGNORE INTO memberTBL VALUES('BBK','비비코','미국');
INSERT IGNORE memberTBL VALUES('SJH','서장훈','서울');
INSERT IGNORE INTO memberTBL VALUES('HJY','현주엽','경기');
SELECT * FROM memberTBL;

INSERT INTO memberTBL VALUES('BBK','비비코','미국')
		ON DUPLICATE KEY UPDATE name='비비코', addr='미국';
INSERT INTO memberTBL VALUES('DJM','동짜몽','일본')
		ON DUPLICATE KEY UPDATE name='동짜몽', addr='일본';
SELECT * FROM memberTBL;




