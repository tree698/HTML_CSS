CREATE VIEW uv_memberTBL
AS
		SELECT memberID, memberAddress FROM memberTBL;
        
SELECT * FROM uv_memberTBL;