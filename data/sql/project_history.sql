-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 09, 2020 at 07:24 PM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `metricmodeller`
--

-- --------------------------------------------------------

--
-- Table structure for table `project_history`
--

DROP TABLE IF EXISTS `project_history`;
CREATE TABLE IF NOT EXISTS `project_history` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `project_number` int(11) NOT NULL,
  `project_name` varchar(24) NOT NULL,
  `project_description` varchar(49) NOT NULL,
  `project_type` int(11) NOT NULL,
  `start_date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  `est_duration` int(11) NOT NULL,
  `est_project_cost` int(11) NOT NULL,
  `act_project_cost` int(11) NOT NULL,
  `est_effort` int(11) NOT NULL,
  `act_effort` int(11) NOT NULL,
  `est_loc` int(11) NOT NULL,
  `act_loc` int(11) NOT NULL,
  `est_fp` int(11) NOT NULL,
  `act_fp` int(11) NOT NULL,
  `expected_error_rate` int(11) NOT NULL,
  `avg_cost_per_person_hour` int(11) NOT NULL,
  `avg_staffing_level` int(11) NOT NULL,
  `design_review_hours` int(11) NOT NULL,
  `errors_found` int(11) NOT NULL,
  `defects_reported` int(11) NOT NULL,
  `dev_lang` varchar(14) NOT NULL,
  `language_productivity_factor` int(11) NOT NULL,
  `cpm_tasks_defined` int(11) NOT NULL,
  `change_orders_issued` int(11) NOT NULL,
  `doc_pages` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `project_history`
--

INSERT INTO `project_history` (`id`, `project_number`, `project_name`, `project_description`, `project_type`, `start_date`, `end_date`, `est_duration`, `est_project_cost`, `act_project_cost`, `est_effort`, `act_effort`, `est_loc`, `act_loc`, `est_fp`, `act_fp`, `expected_error_rate`, `avg_cost_per_person_hour`, `avg_staffing_level`, `design_review_hours`, `errors_found`, `defects_reported`, `dev_lang`, `language_productivity_factor`, `cpm_tasks_defined`, `change_orders_issued`, `doc_pages`) VALUES
(1, 1290, 'General Ledger', 'Consolidates two different GL systems', 1, '1996-04-16 00:00:00', '1996-09-02 00:00:00', 15, 105300, 140500, 1350, 1800, 15000, 16500, 117, 129, 5, 60, 3, 200, 120, 35, 'COBOL', 3, 100, 12, 220),
(2, 1340, 'Workforce Administration', 'Human resource change information', 1, '1996-06-12 00:00:00', '1996-08-14 00:00:00', 12, 102960, 78000, 1440, 1080, 15840, 11880, 151, 146, 5, 55, 4, 140, 80, 22, 'RPG400', 4, 130, 4, 190),
(3, 1353, 'Microcontrollers System', 'Embedded system for semi-automated assembly', 3, '1996-03-02 00:00:00', '1996-04-30 00:00:00', 6, 23400, 35000, 360, 540, 12960, 17200, 648, 860, 5, 50, 2, 75, 450, 8, 'ApBuilder', 12, 315, 1, 35),
(4, 1379, 'Fixed Asset', 'Accounting for Fixed assets and their maintenance', 2, '1996-02-13 00:00:00', '1996-07-24 00:00:00', 20, 280800, 322920, 3600, 4140, 151200, 170100, 4120, 4200, 5, 60, 6, 375, 1850, 95, 'VB', 14, 567, 30, 252),
(5, 1402, 'Order Easy', 'Web-based catalog and order system', 3, '1997-03-05 00:00:00', '1997-06-18 00:00:00', 16, 349440, 327600, 3840, 3600, 126720, 117000, 128, 105, 5, 70, 8, 120, 790, 12, 'C++, Java', 11, 135, 2, 130),
(6, 1436, 'EWIBS', 'Enterprise Wide Integrated Business System', 3, '1997-06-25 00:00:00', '1998-08-15 00:00:00', 53, 1033500, 1150500, 11130, 12390, 667800, 710250, 44520, 47350, 5, 50, 7, 1200, 2243, 250, 'Developer 2000', 20, 532, 5, 850),
(7, 1590, 'CT Correction', 'Image processor system', 3, '1997-04-04 00:00:00', '1997-12-13 00:00:00', 34, 198900, 210900, 3060, 3245, 119340, 126000, 4078, 4350, 5, 50, 3, 165, 500, 40, 'Visual C++', 13, 282, 10, 185),
(8, 1607, 'Update Proc Control', 'Major upgrade to process control legacy system', 2, '1997-01-20 00:00:00', '1998-02-16 00:00:00', 48, 760032, 870870, 10080, 11550, 30240, 34525, 95, 109, 7, 58, 7, 860, 418, 24, 'Asembler', 1, 56, 4, 90),
(9, 1688, 'DND FSM', 'Flight Systems management', 3, '1997-11-10 00:00:00', '1998-06-16 00:00:00', 31, 816075, 816075, 8370, 8370, 125550, 125000, 1793, 1740, 1, 75, 9, 700, 600, 0, 'Ada', 6, 68, 0, 1200);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
