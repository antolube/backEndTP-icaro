-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: memorandum
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id_user` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `last_name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `created_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL,
  `country` int DEFAULT NULL,
  `city` int DEFAULT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'anto','anto1234','antonio','luduena ','antogmail.com',NULL,NULL,NULL,NULL),(2,'newuser1','$2b$10$wGV/7vfHU2ndfI5l9dsB1.kTyn03YEDQxrnkWtFNXoHryQGAI24je','User1','User1_LastName','new_user1@gamil.com','2021-07-23','2021-07-23',1,2),(3,'gime','$2b$10$zb3STdnkhxa6DbZ6/HTmSOWSmHv3Nd8apyLYIUJcccF8M97w0uAbC','gi','ro','gimena@gamil.com','2021-07-26','2021-07-26',1,1),(4,'nvouser','$2b$10$y5ArrhWkrJUd6eYSGpSfcuVUCHNrGwqpr184dePPssBpPJZO7E36e','gi','ro','gimena2@gamil.com','2021-07-27','2021-07-27',1,1),(5,'nvouser1','$2b$10$5D3gbmUWAUay8dTs/Xz5p.HIEQc37OipKqphRns53KZ/0qvMvusDi','gi','ro','gimena20@gamil.com','2021-07-27','2021-07-27',1,1),(6,'michel','$2b$10$bDTl/Fb2ETqmP86DHUtx/.ILy3GlP1qh5fdZIxOffynTPliP.zgS2','michel','gomez','michel@gmail.com','2021-07-29','2021-07-29',1,0),(7,'michel','$2b$10$B88VI5BMUUpQQJYma9dSAuyn2WdW4OfB.W8BUAc.jq997BIzUNXE6','michel','gomez','michel@gmail.com','2021-07-29','2021-07-29',1,0),(8,'gimenita','$2b$10$oMrCdKw3iMc49UPIHR.BLe0wl0kiWFaV84SzZOpP4bCh3lO1wLWVa','gimenaRo','me','gimenita@hotmail.com','2021-07-31','2021-07-31',1,0),(9,'gimenita','$2b$10$OTvq0dwIM0ioK.xT/OrmceKWCY0/FPlLuboVmqLITCyD9WrHlIWXq','gimenaRo','me','gimenita@hotmail.com','2021-07-31','2021-07-31',1,0),(10,'antonio','$2b$10$q/CiXfRNuei51yIW3zm1ROGpMpnbVq18.h4cO6OQuiuMHgSSmLvqO','antonio','Luduena','antonio@gmail.com','2021-08-02','2021-08-02',1,0),(11,'antonio','$2b$10$pvvYdvTfJQbMFopMZlmBXuaBCeZkzN8Aru/sSp6aZxOlpfkNGKpRW','antonio','Luduena','antonio@gmail.com','2021-08-02','2021-08-02',1,0),(12,'gonza','$2b$10$r6x7Lrk9Y5pXkAaU9VmNNeEyzjZPKhHSD0AcASq0jWhtiafJtpwq6','gonza','gonza','gonza@gmail.com','2021-08-03','2021-08-03',1,0),(13,'gonza','$2b$10$9d/AvJjDbUzQISanFSZ0uutZhrxdjtu2IIJ3/GQOX9F3MvdANlJOe','gonza','gonza','gonza@gmail.com','2021-08-03','2021-08-03',1,0),(14,'mauricio','$2b$10$P1LHih2vmZ/rI1aQfzvDreayKjF2bNeVOXAkxu4PLsW6fADAh73Gy','mauricio','gestal','mauri@gmail.com','2021-08-03','2021-08-03',1,1),(15,'mauricio','$2b$10$G0Zsm1wCht8BFxExPc5bueqruXEz/Ef5/WsbIQ3ULFKtS8dY1GjIu','mauricio','gestal','mauri@gmail.com','2021-08-03','2021-08-03',1,1),(16,'gui','$2b$10$WIIa7I.wYqN42AfsTtg7VOUBB7o12lP8p30oX85JwMaR6D2jNUOJ.','guido','guidoLoPinto','guido@gmail.com','2021-08-05','2021-08-05',2,2),(17,'gui','$2b$10$sxIfqj3Kc/H3DXrqLQ0Zke8GWRO59ZHAFeqpW62wqeSrAiqgmbeRS','guido','guidoLoPinto','guido@gmail.com','2021-08-05','2021-08-05',2,2),(18,'santander','$2b$10$yPliXtz.jF4OTwWj5TkxIO.9c/UKwUcAS6V2zB/DNjQ0MgGw/Ody6','pepe','pepe','s@g.com',NULL,NULL,1,0),(19,'frances','$2b$10$TDXDI3yJYxJ.aIFc8kye..uAXo7mWo8Ltkn85wGVGcgfX.yMt4frm','frances','f','f@gmail.com',NULL,NULL,1,0),(20,'italiano','$2b$10$12hmB7m/hd8cv5Y6SYuj7.WayRPWdZxjZwbq0bgpZeMQlXoJza/TO','italiano','franc','italiano@g.com',NULL,NULL,3,2),(21,'andres','$2b$10$OOHRUwLs8tit.i3Lkjs0JORtsgq4gBvuLuKYPlkE6PHDGVWG/d9Nq','andres','asdas','asdasd',NULL,NULL,1,0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-12 21:32:27
