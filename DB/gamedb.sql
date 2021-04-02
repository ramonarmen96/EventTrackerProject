-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema gamedb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `gamedb` ;

-- -----------------------------------------------------
-- Schema gamedb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `gamedb` DEFAULT CHARACTER SET utf8 ;
USE `gamedb` ;

-- -----------------------------------------------------
-- Table `Game`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Game` ;

CREATE TABLE IF NOT EXISTS `Game` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `Release Year` INT NULL,
  `Description` VARCHAR(900) NULL,
  `Players` INT NULL,
  `Main Character` VARCHAR(45) NULL,
  `Rating` VARCHAR(5) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS ps2user@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'ps2user'@'localhost' IDENTIFIED BY 'ps2user';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'ps2user'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `Game`
-- -----------------------------------------------------
START TRANSACTION;
USE `gamedb`;
INSERT INTO `Game` (`id`, `title`, `Release Year`, `Description`, `Players`, `Main Character`, `Rating`) VALUES (1, 'Jak and Daxter The Precursor Legacy', 2001, 'Jak and Daxter: The Precursor Legacy is a 2001 open world platform video game developed by Naughty Dog and published by Sony Computer Entertainment for the Sony PlayStation 2 on December 3, 2001, as the first game of the Jak and Daxter series.', 1, 'Jak', 'E');
INSERT INTO `Game` (`id`, `title`, `Release Year`, `Description`, `Players`, `Main Character`, `Rating`) VALUES (2, 'Jak II', 2003, 'Jak II (known as Jak II: Renegade in Oceania and Europe) is an open world platform third-person shooter action-adventure video game developed by Naughty Dog and published by Sony Computer Entertainment for the PlayStation 2. It is the second game of the Jak and Daxter series and is the sequel to Jak and Daxter: The Precursor Legacy. It was followed by Jak 3 a year later.', 1, 'Jak', 'T');
INSERT INTO `Game` (`id`, `title`, `Release Year`, `Description`, `Players`, `Main Character`, `Rating`) VALUES (3, 'Jak 3', 2004, 'Jak 3 is an open world platform third-person shooter action-adventure video game developed by Naughty Dog and published by Sony Computer Entertainment for the PlayStation 2. The game is the sequel to Jak II, and the third game in the series. The game picks up after the events of the previous games and the player takes on the dual role of recurring protagonists Jak and Daxter. It adds new weapons, devices and playable areas.', 1, 'Jak', 'T');

COMMIT;

