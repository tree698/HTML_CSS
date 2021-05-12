CREATE TABLE `membertbl` (
  `memberID` char(8) NOT NULL,
  `memberTBLcol` varchar(45) NOT NULL,
  `memberAddress` char(20) DEFAULT NULL,
  PRIMARY KEY (`memberID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `shopdb`.`membertbl`
(`memberID`,
`memberTBLcol`,
`memberAddress`)
VALUES
(<{memberID: }>,
<{memberTBLcol: }>,
<{memberAddress: }>);
