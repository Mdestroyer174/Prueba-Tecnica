DROP DATABASE IF EXISTS DB_PRUEBA_TECNICA;
CREATE SCHEMA IF NOT EXISTS DB_PRUEBA_TECNICA;

USE DB_PRUEBA_TECNICA;

CREATE TABLE IF NOT EXISTS ARTICLES(
    ID BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    TITULAR VARCHAR(255),
    CONTENIDO VARCHAR(255));

INSERT INTO ARTICLES (TITULAR, CONTENIDO) VALUES 
('Actualidad', 'Dentienen a un narco en vallecas'),
('Cine', 'Estreno de MadMax 3'),
('Cultura', 'Abren antes de tiempo las piscinas de reus'),
('Futbol', 'El Barça está muy mal de fichajes'),
('Moda', 'Nueva linea de verano de Gucci');
SELECT * FROM ARTICLES;

