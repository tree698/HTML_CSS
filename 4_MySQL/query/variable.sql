USE sqldb;

SET @myVar1 = 5;
SET @myVar2 = 3;
SET @myVar3 = 4.25;
SET @myVar4 = '가수 이름==>  ';

SELECT @myVar1 ;
SELECT @myVar2 + @myVar3;
SELECT @myVar4, Name FROM usertbl WHERE height > 180;


SET @myVar1 = 3;
PREPARE myQuery
		FROM 'SELECT Name, height FROM usertbl ORDER BY height LIMIT ?';
EXECUTE myQuery USING @myVar1;