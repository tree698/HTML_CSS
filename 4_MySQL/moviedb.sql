CREATE DATABASE moviedb;

USE moviedb;
CREATE TABLE movietbl
	(movie_id				INT,
    movie_title			VARCHAR(30),
    movie_director		VARCHAR(20),
    movie_star			VARCHAR(20),
    movie_script			LONGTEXT,
    movie_film			LONGBLOB
    ) DEFAULT CHARSET=utf8mb4;

INSERT INTO movietbl VALUES (1, '쉰들러리스트', '스필버그', '리암 니슨',
		LOAD_FILE('C:/Users/COM/Desktop/Web_Development/4_MySQL/movies/Schindler.txt'),        -- script와 film은 업로드가 되지 않음
        LOAD_FILE('C:/Users/COM/Desktop/Web_Development/4_MySQL/movies/Schindler.mp4'));
        
SELECT * FROM movietbl;

SHOW variables LIKE 'max_allowed_packet';      -- 첫째 이유는 담을 수 있는 크기가 작아서 임 (현재 4M)
SHOW variables LIKE 'secure_file_priv';              -- 보안상 업로드가 허용되어야 함 (현재는 C:\ProgramData\MySQL\MySQL Server 8.0\Uploads\)만 허용되어 있음 

-- my.ini 에서 설정을 변경해 주어야 함  (설정 변경 후 restart 필요) 


USE moviedb;
TRUNCATE movietbl;   -- 기존 행 모두 제거 


INSERT INTO movietbl VALUES (1, '쉰들러리스트', '스필버그', '리암 니슨',
		LOAD_FILE('C:/Users/COM/Desktop/Web_Development/4_MySQL/movies/Schindler.txt'),        
        LOAD_FILE('C:/Users/COM/Desktop/Web_Development/4_MySQL/movies/Schindler.mp4'));


-- 왜 안되지?

-- script와 film 내용을 보려면, download 해야 한다
SELECT movie_script FROM movietbl WHERE movie_id=1
		INTO OUTFILE '다운 받을 경로'
        LINES TERMINATED BY '\\n';       -- script 줄바꿈 
        
SELECT movie_film FROM movietbl WHERE movie_id=3
		INTO DUMPFILE '다운 받을 경로';

