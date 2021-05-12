CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` 
SQL SECURITY DEFINER VIEW `uv_membertbl` 
AS 
	select `membertbl`.`memberID` AS `memberID`,`membertbl`.`memberAddress` AS `memberAddress` from `membertbl`;
