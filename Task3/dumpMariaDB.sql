/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `GAS_STATION` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `address` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_gas_station_name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `PRODUCT` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `type` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_product_name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `PUMP` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `gas_station_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `pump_code` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `gas_station_id` (`gas_station_id`),
  KEY `product_id` (`product_id`),
  KEY `idx_pump_code` (`pump_code`),
  CONSTRAINT `PUMP_ibfk_1` FOREIGN KEY (`gas_station_id`) REFERENCES `GAS_STATION` (`id`),
  CONSTRAINT `PUMP_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `PRODUCT` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TRANSACTION` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `gas_station_id` int(11) NOT NULL,
  `pump_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `timestamp` datetime NOT NULL,
  `quantity` float NOT NULL,
  `value` float NOT NULL,
  PRIMARY KEY (`id`),
  KEY `gas_station_id` (`gas_station_id`),
  KEY `pump_id` (`pump_id`),
  KEY `product_id` (`product_id`),
  KEY `idx_transaction_timestamp` (`timestamp`),
  CONSTRAINT `TRANSACTION_ibfk_1` FOREIGN KEY (`gas_station_id`) REFERENCES `GAS_STATION` (`id`),
  CONSTRAINT `TRANSACTION_ibfk_2` FOREIGN KEY (`pump_id`) REFERENCES `PUMP` (`id`),
  CONSTRAINT `TRANSACTION_ibfk_3` FOREIGN KEY (`product_id`) REFERENCES `PRODUCT` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
