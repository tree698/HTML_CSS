SELECT * FROM usertbl;
SELECT * FROM buytbl;

SELECT userID, amount FROM buytbl ORDER BY userID;
SELECT userID, SUM(amount) FROM buytbl GROUP BY userID;
SELECT userID AS '사용자 아이디', SUM(amount) AS '총 구매 개수' FROM buytbl GROUP BY userID;
SELECT userID, SUM(price*amount) AS '총 구매액' FROM buytbl GROUP BY userID;
SELECT AVG(amount) AS '평균 구매수' FROM buytbl;
SELECT userID, AVG(amount) AS '평균 구매수' FROM buytbl GROUP BY userID;

SELECT name, height FROM usertbl
	WHERE height = (SELECT MAX(height) FROM usertbl)
		OR height = (SELECT MIN(height) FROM usertbl);
SELECT COUNT(mobile1) AS '휴대폰 있는 사용자' FROM usertbl;

SELECT userID AS '사용자' , SUM(price*amount) AS '총구매액' 
	FROM buytbl
    GROUP BY userID
    HAVING SUM(price*amount) > 1000;    -- having (where와 유사)은 group by와 함께 사용 
    
    
    -- 형식
    -- SELECT  (...)
		-- FROM ...
		-- WHERE ...
		-- GROUP BY ...
		-- HAVING ...
		-- ORDER BY ...
        

