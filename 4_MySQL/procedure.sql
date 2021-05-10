SELECT * FROM productTBL;
SELECT * FROM memberTBL;

DELIMITER //
CREATE PROCEDURE myProc()
BEGIN
		SELECT * FROM memberTBL WHERE memberID='Jiwha';
        SELECT * FROM productTBL WHERE productName='냉장고';
END //
DELIMITER ;

CALL myProc() ;