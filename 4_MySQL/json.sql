USE sqldb;
SELECT JSON OBJECT('name', name, 'height', height) AS 'JSON 값'
		FROM usertbl
        WHERE height >= 180;
        
SET @json 