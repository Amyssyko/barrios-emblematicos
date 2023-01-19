CREATE DATABASE  IF NOT EXISTS `project_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `project_db`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: project_db
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Table structure for table `actividad`
--

DROP TABLE IF EXISTS `actividad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `actividad` (
  `id_actividad` varchar(4) NOT NULL,
  `descripcion_actividad` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `id_parroquia` varchar(4) DEFAULT NULL,
  PRIMARY KEY (`id_actividad`),
  KEY `FK_actividad_parroquia` (`id_parroquia`),
  CONSTRAINT `FK_actividad_parroquia` FOREIGN KEY (`id_parroquia`) REFERENCES `parroquia` (`id_parroquia`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actividad`
--

LOCK TABLES `actividad` WRITE;
/*!40000 ALTER TABLE `actividad` DISABLE KEYS */;
INSERT INTO `actividad` VALUES ('A001','Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró una de las palabras más oscuras de la lengua del latín, \"consecteur\", en un pasaje de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de \"de Finnibus Bonorum et Malorum\" (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera linea del Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", viene de una linea en la sección 1.10.32','P001'),('A002','Suspendisse ullamcorper lacinia turpis, et pretium metus molestie cursus. Nam facilisis nisl et nunc hendrerit dignissim. In id iaculis urna. Donec at nisl pharetra, viverra augue quis, malesuada urna. Morbi pulvinar, lacus ut ullamcorper commodo, urna dolor consequat orci, sit amet tempor leo orci sed eros. Morbi lacinia, dui quis congue porttitor, lorem sem vestibulum felis, in ullamcorper mi ex efficitur urna. Praesent sapien sem, efficitur a ipsum a, bibendum venenatis lorem. Cras eros urna, rhoncus et purus sit amet, tincidunt tempor metus. Nulla maximus commodo porta. Donec scelerisque augue enim, vitae elementum velit mattis nec. Ut congue magna fermentum, consequat metus sed, cursus massa.','P001');
/*!40000 ALTER TABLE `actividad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `barrio`
--

DROP TABLE IF EXISTS `barrio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `barrio` (
  `id_barrio` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `nombre_barrio` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `id_parroquia` varchar(4) NOT NULL DEFAULT '',
  PRIMARY KEY (`id_barrio`),
  KEY `FK_barrio_parroquia` (`id_parroquia`),
  CONSTRAINT `FK_barrio_parroquia` FOREIGN KEY (`id_parroquia`) REFERENCES `parroquia` (`id_parroquia`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `barrio`
--

LOCK TABLES `barrio` WRITE;
/*!40000 ALTER TABLE `barrio` DISABLE KEYS */;
INSERT INTO `barrio` VALUES ('B001','La Merced','P001'),('B002','12 de Noviembre','P001');
/*!40000 ALTER TABLE `barrio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `foto`
--

DROP TABLE IF EXISTS `foto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `foto` (
  `id_foto` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `url` varchar(200) DEFAULT NULL,
  `cod` varchar(4) DEFAULT NULL,
  PRIMARY KEY (`id_foto`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `foto`
--

LOCK TABLES `foto` WRITE;
/*!40000 ALTER TABLE `foto` DISABLE KEYS */;
/*!40000 ALTER TABLE `foto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gastronomia`
--

DROP TABLE IF EXISTS `gastronomia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gastronomia` (
  `id_gastronomia` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `nombre_plato` varchar(30) DEFAULT NULL,
  `descripcion_plato` text,
  `id_parroquia` varchar(4) DEFAULT NULL,
  PRIMARY KEY (`id_gastronomia`) USING BTREE,
  KEY `FK_gastronomia_parroquia` (`id_parroquia`),
  CONSTRAINT `FK_gastronomia_parroquia` FOREIGN KEY (`id_parroquia`) REFERENCES `parroquia` (`id_parroquia`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gastronomia`
--

LOCK TABLES `gastronomia` WRITE;
/*!40000 ALTER TABLE `gastronomia` DISABLE KEYS */;
INSERT INTO `gastronomia` VALUES ('G001','Carnes','Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis rutrum purus sed tincidunt. Curabitur urna justo, sollicitudin quis elit varius, facilisis lacinia est. Duis id risus et nulla efficitur condimentum. Sed leo leo, lacinia ac urna vel, finibus condimentum urna. Nunc luctus est sed dignissim mattis. Nulla enim orci, vulputate non lectus non, vulputate egestas diam. Mauris quis varius ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus risus tortor, maximus fermentum sagittis et, consectetur pellentesque est. Aliquam ornare ultricies ex non fermentum. Maecenas efficitur ex at accumsan luctus. In facilisis, dolor eu consectetur sodales, orci felis consequat est, ut feugiat dui urna eu odio. Vestibulum eros felis, ultricies vel arcu finibus, mollis imperdiet ante. Mauris pharetra hendrerit rhoncus.','P001'),('G002','Otra comida','Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis rutrum purus sed tincidunt. Curabitur urna justo, sollicitudin quis elit ','P002');
/*!40000 ALTER TABLE `gastronomia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `historia_barrio`
--

DROP TABLE IF EXISTS `historia_barrio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `historia_barrio` (
  `id_historia_barrio` varchar(4) NOT NULL,
  `descripcion_barrio` text,
  `id_barrio` varchar(4) DEFAULT NULL,
  PRIMARY KEY (`id_historia_barrio`),
  KEY `id_barr` (`id_barrio`),
  CONSTRAINT `historia_barrio_ibfk_1` FOREIGN KEY (`id_barrio`) REFERENCES `barrio` (`id_barrio`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historia_barrio`
--

LOCK TABLES `historia_barrio` WRITE;
/*!40000 ALTER TABLE `historia_barrio` DISABLE KEYS */;
INSERT INTO `historia_barrio` VALUES ('H001','Suspendisse ullamcorper lacinia turpis, et pretium metus molestie cursus. Nam facilisis nisl et nunc hendrerit dignissim. In id iaculis urna. Donec at nisl pharetra, viverra augue quis, malesuada urna. Morbi pulvinar, lacus ut ullamcorper commodo, urna dolor consequat orci, sit amet tempor leo orci sed eros. Morbi lacinia, dui quis congue porttitor, lorem sem vestibulum felis, in ullamcorper mi ex efficitur urna. Praesent sapien sem, efficitur a ipsum a, bibendum venenatis lorem. Cras eros urna, rhoncus et purus sit amet, tincidunt tempor metus. Nulla maximus commodo porta. Donec scelerisque augue enim, vitae elementum velit mattis nec. Ut congue magna fermentum, consequat metus sed, cursus massa.\n\n','B001');
/*!40000 ALTER TABLE `historia_barrio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `historia_parroquia`
--

DROP TABLE IF EXISTS `historia_parroquia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `historia_parroquia` (
  `id_historia_parroquia` varchar(4) NOT NULL,
  `descripcion_parroquia` text,
  `id_parroquia` varchar(4) DEFAULT NULL,
  PRIMARY KEY (`id_historia_parroquia`),
  KEY `id_parro` (`id_parroquia`),
  CONSTRAINT `historia_parroquia_ibfk_1` FOREIGN KEY (`id_parroquia`) REFERENCES `parroquia` (`id_parroquia`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historia_parroquia`
--

LOCK TABLES `historia_parroquia` WRITE;
/*!40000 ALTER TABLE `historia_parroquia` DISABLE KEYS */;
INSERT INTO `historia_parroquia` VALUES ('H001','Es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas \"Letraset\", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.','P002'),('H002','Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo \"Contenido aquí, contenido aquí\". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de \"Lorem Ipsum\" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).','P001');
/*!40000 ALTER TABLE `historia_parroquia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `historia_recinto`
--

DROP TABLE IF EXISTS `historia_recinto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `historia_recinto` (
  `id_historia_recinto` varchar(4) NOT NULL,
  `descripcion_recinto` text,
  `id_recinto` varchar(4) DEFAULT NULL,
  PRIMARY KEY (`id_historia_recinto`),
  KEY `id_recin` (`id_recinto`),
  CONSTRAINT `historia_recinto_ibfk_1` FOREIGN KEY (`id_recinto`) REFERENCES `recinto` (`id_recinto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historia_recinto`
--

LOCK TABLES `historia_recinto` WRITE;
/*!40000 ALTER TABLE `historia_recinto` DISABLE KEYS */;
INSERT INTO `historia_recinto` VALUES ('H001','It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).','R001'),('H003','Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.','R002');
/*!40000 ALTER TABLE `historia_recinto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parroquia`
--

DROP TABLE IF EXISTS `parroquia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `parroquia` (
  `id_parroquia` varchar(4) NOT NULL,
  `nombre_parroquia` varchar(50) DEFAULT NULL,
  `unidad_educativa` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_parroquia`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parroquia`
--

LOCK TABLES `parroquia` WRITE;
/*!40000 ALTER TABLE `parroquia` DISABLE KEYS */;
INSERT INTO `parroquia` VALUES ('P001','La Mana','Unidad Educativa'),('P002','El Carmen','Unidad Educativa Federación');
/*!40000 ALTER TABLE `parroquia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recinto`
--

DROP TABLE IF EXISTS `recinto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recinto` (
  `id_recinto` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `nombre_recinto` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `id_parroquia` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id_recinto`),
  KEY `id_parro` (`id_parroquia`),
  CONSTRAINT `recinto_ibfk_1` FOREIGN KEY (`id_parroquia`) REFERENCES `parroquia` (`id_parroquia`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recinto`
--

LOCK TABLES `recinto` WRITE;
/*!40000 ALTER TABLE `recinto` DISABLE KEYS */;
INSERT INTO `recinto` VALUES ('R001','Habia 2','P001'),('R002','San Pedro','P002');
/*!40000 ALTER TABLE `recinto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `pass` blob,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `video`
--

DROP TABLE IF EXISTS `video`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `video` (
  `id_videos` varchar(4) NOT NULL,
  `url` varchar(200) DEFAULT NULL,
  `cod` varchar(4) DEFAULT NULL,
  PRIMARY KEY (`id_videos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `video`
--

LOCK TABLES `video` WRITE;
/*!40000 ALTER TABLE `video` DISABLE KEYS */;
/*!40000 ALTER TABLE `video` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'project_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-02 23:03:54
