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
-- Table structure for table `message`
--

DROP TABLE IF EXISTS `message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `message` (
  `id_message` int NOT NULL AUTO_INCREMENT,
  `message` varchar(144) NOT NULL,
  `sender_id` int NOT NULL,
  `sender_name` varchar(45) DEFAULT NULL,
  `recipient_id` int NOT NULL,
  `recipient_name` varchar(45) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `sent_deleted` int DEFAULT NULL,
  `received_deleted` int DEFAULT NULL,
  PRIMARY KEY (`id_message`)
) ENGINE=InnoDB AUTO_INCREMENT=107 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `message`
--

LOCK TABLES `message` WRITE;
/*!40000 ALTER TABLE `message` DISABLE KEYS */;
INSERT INTO `message` VALUES (1,'este es un msj de prueba con postman para enviar ala base de datos',1,'',2,'','2021-07-31 00:00:00',1,0),(2,'este es un msj de prueba con postman para enviar ala base de datos',1,'',3,'','2021-07-31 00:00:00',1,1),(3,'este es un msj de prueba con postman para enviar ala base de datos',1,'',4,'','2021-07-31 00:00:00',1,1),(4,'este es un msj de prueba con postman para enviar ala base de datos',1,'',4,'','2021-07-31 00:00:00',1,1),(5,'este otro mensaje de prueba',2,'',1,'','2021-07-31 00:00:00',1,1),(6,'este otro mensaje de prueba 2',2,'',3,'','2021-07-31 00:00:00',1,1),(7,'este otro mensaje de prueba 2',2,'',4,'','2021-07-31 00:00:00',NULL,NULL),(8,'sadasd',8,'',4,'','2021-08-01 00:00:00',NULL,NULL),(9,'estoy probando el envio de un mensaje ala tabla de msg, para ver si funciona el mismo tendra los 144 carcteres, solcitados en el trabajopractico',8,'',8,'','2021-08-01 00:00:00',NULL,NULL),(10,'este es un mensaje para mutiples destianatarios',8,'',8,'','2021-08-01 00:00:00',NULL,NULL),(11,'este es un mensaje de prueba',8,'',6,'','2021-08-01 00:00:00',NULL,NULL),(12,'hola este un mensaje enviado el 02/08 las 14.21hs',8,'',7,'','2021-08-02 00:00:00',NULL,NULL),(13,'Mensaje de prueba sender_id:1 ; recipient_:2',1,'',2,'','2021-08-02 00:00:00',NULL,NULL),(14,'Mensaje de prueba sender_id:2 ; recipient_:1',2,'',1,'','2021-08-02 00:00:00',NULL,NULL),(15,'Mensaje de prueba sender_id:2 ; recipient_:3',2,'',3,'','2021-08-02 00:00:00',NULL,NULL),(16,'hola michel',10,'',6,'','2021-08-02 00:00:00',NULL,NULL),(17,'hola gimena',10,'',3,'','2021-08-03 00:00:00',NULL,NULL),(18,'hola michel',10,'',6,'','2021-08-03 00:00:00',NULL,NULL),(19,'hola marucio\n',10,'',15,'','2021-08-03 00:00:00',NULL,NULL),(20,'hola michel estoy enviando una mensaje de prueba\n',12,'',6,'','2021-08-04 00:00:00',NULL,NULL),(21,'hola anto te estoy enviando una mensaje soy michek id 6',6,'',1,'','2021-08-04 00:00:00',NULL,NULL),(22,'hola mauricio te estoy enviando un mensaje soy michel id 6\n',6,'',15,'','2021-08-04 00:00:00',NULL,NULL),(23,'hola michel te estoy devolviendo el mensaje soy mauricio id 14\n',14,'',6,'','2021-08-04 00:00:00',NULL,NULL),(24,'hola gonza ',6,'',13,'','2021-08-04 00:00:00',NULL,NULL),(25,'hola gonza',6,'',12,'','2021-08-04 00:00:00',NULL,NULL),(26,'hola hola',10,'',2,'','2021-08-05 00:00:00',NULL,NULL),(27,'hola',10,'',15,'','2021-08-05 00:00:00',NULL,NULL),(28,'asdad',10,'',3,'','2021-08-06 00:00:00',NULL,NULL),(29,'asdsadsad',10,'',5,'','2021-08-06 00:00:00',NULL,NULL),(30,'hola hola',6,'',12,'','2021-08-06 00:00:00',NULL,NULL),(31,'hola ',6,'',1,'','2021-08-06 00:00:00',NULL,NULL),(32,'safasfasf',6,'',6,'','2021-08-06 00:00:00',NULL,NULL),(33,'hola gime',6,'',3,'','2021-08-08 03:06:23',0,1),(34,'hola maurico',6,'',15,'','2021-08-08 03:09:02',0,1),(35,'hola anto soy mochel',6,'',1,'','2021-08-08 03:19:08',0,1),(36,'sadasdasd',10,'',1,'','2021-08-08 14:30:39',1,1),(37,'hahas',10,'',5,'','2021-08-08 23:40:52',1,1),(38,'hola michel soy pepe santander\n',18,NULL,6,NULL,'2021-08-09 21:08:48',NULL,NULL),(39,'santander te envio un mensaje',19,NULL,18,NULL,'2021-08-10 00:15:34',0,0),(40,'frances soy santander',18,'\"santander\"',19,NULL,'2021-08-10 00:24:28',NULL,NULL),(41,'santander soy frances',19,'frances',18,NULL,'2021-08-10 00:47:20',0,0),(42,'frances soy santander',18,'santander',19,NULL,'2021-08-10 00:49:59',NULL,NULL),(43,'ole gallego ole\n',19,'frances',18,NULL,'2021-08-10 18:30:29',0,0),(44,'vamos para lo de manolo gallego',19,'frances',18,NULL,'2021-08-10 18:44:55',0,0),(45,'oye francesito .....wi..... wi..... wi...... wi.....',18,'santander',19,NULL,'2021-08-10 19:02:49',NULL,NULL),(46,'Francesitooooooo\n',18,'santander',19,NULL,'2021-08-10 19:07:17',NULL,NULL),(47,'o la la ,la france wi wi wi',18,'santander',19,NULL,'2021-08-10 19:11:17',NULL,NULL),(48,'VIVA LA FRANNNNCCCCCEEEEE\n',18,'santander',19,NULL,'2021-08-10 19:14:59',NULL,NULL),(49,'asdasdas',6,'michel',19,NULL,'2021-08-10 22:23:21',NULL,NULL),(50,'hola hola',18,'santander',19,NULL,'2021-08-10 23:05:09',NULL,NULL),(51,'franchute\n',18,'santander',19,'{\"user_name\":\"frances\"}','2021-08-10 23:18:27',NULL,NULL),(52,'hola galleguito',19,'frances',18,NULL,'2021-08-11 00:26:53',NULL,NULL),(53,'asdasda',19,'frances',18,'{\"user_name\":\"santander\"}','2021-08-11 00:34:45',0,0),(54,'bon yorno frnchute',18,'santander',19,'{\"user_name\":\"frances\"}','2021-08-11 17:57:46',0,0),(55,'sadasd',18,'santander',19,NULL,'2021-08-11 18:18:59',NULL,NULL),(56,'hola franchute ',18,'santander',19,NULL,'2021-08-11 18:23:53',NULL,NULL),(57,'asdasda',18,'santander',7,NULL,'2021-08-11 18:25:42',NULL,NULL),(58,'dfafdasdffsd',18,'santander',19,NULL,'2021-08-11 18:30:05',NULL,NULL),(59,'te llenado la casilla de mensajes ',18,'santander',19,NULL,'2021-08-11 18:31:42',0,0),(60,'hola gallego',19,'frances',18,NULL,'2021-08-11 18:40:58',0,0),(61,'gellego feo ahi va otro mensaje',19,'frances',18,'\"{\\\"user_name\\\":\\\"santander\\\"}\"','2021-08-11 18:54:12',0,0),(62,'vamos que se puede gallego',19,'frances',18,'santander','2021-08-11 19:46:54',0,0),(63,'hola gui',19,'frances',17,'gui','2021-08-11 19:59:54',NULL,NULL),(64,'frances pruebo los mensajes enviados, tendria que llegar',18,'santander',19,'frances','2021-08-12 20:21:39',0,0),(65,'frances te envio un mensaje nuevo',18,'santander',19,'frances','2021-08-12 20:28:44',0,0),(66,'gallego veo si te llega el mesaje ',19,'frances',18,'santander','2021-08-12 20:29:50',1,0),(67,'mauricio soy santander',18,'santander',14,'mauricio','2021-08-12 21:43:25',0,1),(68,'santander recibi tu mensaje',14,'mauricio',18,'santander','2021-08-12 21:45:15',1,0),(69,'fraces soy mauricio',14,'mauricio',19,'frances','2021-08-12 21:46:16',1,0),(70,'Ahora en confianza gallego que paso con messi',14,'mauricio',18,'santander','2021-08-12 21:47:42',1,0),(71,'frachute estan contestos con la llegada de messi\n',14,'mauricio',19,'frances','2021-08-12 21:48:43',1,0),(72,'che antonio como andas',14,'mauricio',1,'anto','2021-08-12 21:49:19',1,1),(73,'viva la france',14,'mauricio',19,'frances','2021-08-12 21:54:27',1,0),(74,'sadasdad',14,'mauricio',2,'newuser1','2021-08-12 21:55:04',1,1),(75,'asdadsad',14,'mauricio',16,'gui','2021-08-12 21:56:22',1,1),(76,'asdadsa',14,'mauricio',2,'newuser1','2021-08-12 21:57:05',1,1),(77,'asdasdads',14,'mauricio',6,'michel','2021-08-12 21:57:43',1,0),(78,'sadasdads',14,'mauricio',1,'anto','2021-08-12 21:58:12',1,1),(79,'asdada',14,'mauricio',17,'gui','2021-08-12 21:59:00',1,1),(80,'asdasdad',14,'mauricio',2,'newuser1','2021-08-12 22:11:58',1,1),(81,'sadadasd',18,'santander',15,'mauricio','2021-08-12 22:12:46',0,1),(82,'asdasd',18,'santander',5,'nvouser1','2021-08-12 22:14:24',0,1),(83,'asdasd',18,'santander',6,'michel','2021-08-12 22:14:45',0,0),(84,'dasdasda',18,'santander',19,'frances','2021-08-12 22:15:23',0,0),(85,'asdasd',18,'santander',2,'newuser1','2021-08-12 22:16:15',0,1),(86,'que haces gallego',20,'italiano',18,'santander','2021-08-12 22:41:53',0,0),(87,'gsfafasfsa',20,'italiano',10,'antonio','2021-08-12 22:46:43',0,1),(88,'asdasdas',21,'andres',20,'italiano','2021-08-12 22:51:53',0,0),(89,'asdasdasd',21,'andres',1,'anto','2021-08-12 22:53:09',0,1),(90,'asdadsa',20,'italiano',21,'andres','2021-08-12 23:07:34',1,0),(91,'asdasda',21,'andres',20,'italiano','2021-08-12 23:08:21',0,1),(92,'sadasda',21,'andres',4,'nvouser','2021-08-12 23:09:57',0,1),(93,'asdasdas',21,'andres',6,'michel','2021-08-12 23:11:02',0,0),(94,'asdasda',21,'andres',6,'michel','2021-08-12 23:12:27',0,0),(95,'sadadsa',21,'andres',5,'nvouser1','2021-08-12 23:12:40',0,1),(96,'asdasd',21,'andres',6,'michel','2021-08-12 23:14:16',0,0),(97,'sadadsa',21,'andres',3,'gime','2021-08-12 23:14:41',1,1),(98,'asdasd',18,'santander',6,'michel','2021-08-12 23:18:25',0,0),(99,'asasdas',18,'santander',6,'michel','2021-08-12 23:25:08',0,0),(100,'sadadsa',18,'santander',21,'andres','2021-08-12 23:26:08',0,1),(101,'sadasda',18,'santander',6,'michel','2021-08-12 23:26:33',0,0),(102,'sadads',18,'santander',1,'anto','2021-08-12 23:38:34',1,1),(103,'asadsa',6,'michel',21,'andres','2021-08-12 23:41:30',1,1),(104,'sadasda',18,'santander',21,'andres','2021-08-13 00:04:13',1,0),(105,'sadasd',6,'michel',11,'antonio','2021-08-13 00:08:34',1,1),(106,'sada',18,'santander',21,'andres','2021-08-13 00:17:27',0,1);
/*!40000 ALTER TABLE `message` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-12 21:32:26
