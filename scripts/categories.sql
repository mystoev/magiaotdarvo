-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 23, 2023 at 11:51 AM
-- Server version: 10.6.15-MariaDB-log
-- PHP Version: 8.1.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `magiaotd_prod`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `title` varchar(256) NOT NULL,
  `description` varchar(256) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `title`, `description`) VALUES
(1, 'jewery', 'Бижута', 'Обеци, колиета, украшение'),
(3, 'kids', 'За децата', 'Играчки, пъзели, поставки'),
(2, 'eco', 'Еко изделия', 'Гривни, мартеници, макраме'),
(5, 'books', 'Книги и тефтери', 'Албуми, рецепти, ритуали'),
(4, 'icons', 'Икони и кръстове', 'За стена или настолни'),
(6, 'art', 'Пана', 'Фигури, арт инсталации'),
(7, 'candles', 'Свещници', 'Единични, в чаша, тематични'),
(8, 'signs', 'Табели', 'За къщи, стайни'),
(9, 'boxes', 'Кутии', 'За бижута, карти, подаръчни'),
(10, 'keyholders', 'Ключодържатели', 'Стенни, с бележки'),
(11, 'photoframes', 'Рамки за снимки', 'За стена или настолни'),
(12, 'other', 'Други', 'Родословни дървета, дъски за рязане');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
