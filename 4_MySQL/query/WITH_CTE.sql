-- 비재귀적 CTE

WITH CTE_테이블 이름(열 이름)
AS 
(
		QUERY
)
SELECT 열 이름 FROM CTE_테이블이름 ;


USE sqldb;
SELECT userid AS '사용자', SUM(price*amount) AS '총구매액'
		FROM buyTBL GROUP BY userid;
        

WITH abc(userid, total)
AS
(SELECT userid AS '사용자', SUM(price*amount) AS '총구매액'
		FROM buyTBL GROUP BY userid)
SELECT * FROM abc ORDER BY total DESC;