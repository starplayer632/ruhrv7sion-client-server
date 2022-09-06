CREATE TABLE nodedb.user_students (
	studentemail varchar(100) NOT NULL,
	password varchar(100) NOT NULL,
	created_at DATETIME DEFAULT CURRENT_TIMESTAMP NULL,
	studentid INT auto_increment NOT NULL,
	CONSTRAINT user_students_pk PRIMARY KEY (studentid)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_general_ci;
