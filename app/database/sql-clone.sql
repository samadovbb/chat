-- MySQL dump 10.13  Distrib 8.0.25, for Linux (x86_64)
--
-- Host: localhost    Database: chat
-- ------------------------------------------------------
-- Server version	8.0.25-0ubuntu0.20.04.1

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
-- Dumping data for table `contact`
--

LOCK TABLES `contact` WRITE;
/*!40000 ALTER TABLE `contact` DISABLE KEYS */;
INSERT INTO `contact` VALUES (4,4,4,'2021-07-16 23:09:43');
/*!40000 ALTER TABLE `contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `send_code`
--

LOCK TABLES `send_code` WRITE;
/*!40000 ALTER TABLE `send_code` DISABLE KEYS */;
INSERT INTO `send_code` VALUES (1,'997054827','28',1,'2021-07-12 20:08:36'),(2,'997054827','15',1,'2021-07-12 20:08:53'),(3,'997054827','CH-0094',1,'2021-07-12 20:09:39'),(4,'997054827','CH-1918',1,'2021-07-12 20:09:43'),(5,'997054827','CH-8866',1,'2021-07-12 20:26:52'),(6,'997054827','CH-3381',0,'2021-07-15 08:35:07'),(7,'997054827','CH-0932',0,'2021-07-15 08:39:59'),(8,'997054827','CH-6442',0,'2021-07-15 08:48:54'),(9,'995441550','CH-2320',1,'2021-07-16 22:52:27'),(10,'995441554','CH-9857',1,'2021-07-16 22:53:47'),(11,'995441550','CH-2677',0,'2021-07-16 22:53:50');
/*!40000 ALTER TABLE `send_code` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'997054827','997054827','ch-avatar.png',1,'2021-07-15 08:36:56'),(4,'995441550','995441550','ch-avatar.png',1,'2021-07-16 22:55:00');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users_action`
--

LOCK TABLES `users_action` WRITE;
/*!40000 ALTER TABLE `users_action` DISABLE KEYS */;
INSERT INTO `users_action` VALUES (1,'3b4234e01921fadcd8fd55eda0da2bb9',1,'::1',1,'2021-07-15 08:49:23'),(2,'4bb8531a96130e081b5f3c16049dcae3',4,'::1',1,'2021-07-16 22:55:00');
/*!40000 ALTER TABLE `users_action` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'chat'
--

--
-- Dumping routines for database 'chat'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-16 23:15:51
