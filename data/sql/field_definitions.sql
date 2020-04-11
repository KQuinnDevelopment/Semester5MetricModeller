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
-- Database: `metric_modeller`
--

-- --------------------------------------------------------

--
-- Table structure for table `field_definitions`
--

DROP TABLE IF EXISTS `field_definitions`;
CREATE TABLE IF NOT EXISTS `field_definitions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `project_number` varchar(200) NOT NULL,
  `project_name` varchar(200) NOT NULL,
  `project_description` varchar(200) NOT NULL,
  `project_type`varchar(200) NOT NULL,
  `start_date` varchar(200) NOT NULL,
  `end_date` varchar(200) NOT NULL,
  `est_duration` varchar(200) NOT NULL,
  `est_project_cost` varchar(200) NOT NULL,
  `act_project_cost` varchar(200) NOT NULL,
  `est_effort` varchar(200) NOT NULL,
  `act_effort` varchar(200) NOT NULL,
  `est_loc` varchar(200) NOT NULL,
  `act_loc` varchar(200) NOT NULL,
  `est_fp` varchar(200) NOT NULL,
  `act_fp` varchar(200) NOT NULL,
  `expected_error_rate` varchar(200) NOT NULL,
  `avg_cost_per_person_hour` varchar(200) NOT NULL,
  `avg_staffing_level` varchar(200) NOT NULL,
  `design_review_hours` varchar(200) NOT NULL,
  `errors_found` varchar(200) NOT NULL,
  `defects_reported` varchar(200) NOT NULL,
  `dev_lang` varchar(200) NOT NULL,
  `language_productivity_factor` varchar(200) NOT NULL,
  `cpm_tasks_defined` varchar(200) NOT NULL,
  `change_orders_issued` varchar(200) NOT NULL,
  `doc_pages` varchar(200) NOT NULL,
  `language_level` varchar(200) NOT NULL,
  `avg_stmts_per_fp` varchar(200) NOT NULL,
  
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `field_definitions`
--

INSERT INTO `field_definitions`(`id`, `project_number`, `project_name`, `project_description`, `project_type`, `start_date`, `end_date`,
 `est_duration`, `est_project_cost`, `act_project_cost`, `est_effort`, `act_effort`, `est_loc`, `act_loc`, `est_fp`, `act_fp`, `expected_error_rate`,
 `avg_cost_per_person_hour`, `avg_staffing_level`, `design_review_hours`, `errors_found`, `defects_reported`, `dev_lang`, `language_productivity_factor`,
 `cpm_tasks_defined`, `change_orders_issued`, `doc_pages`, `language_level`, `avg_stmts_per_fp`) VALUES
(1, 'The project number' , 'Name of the project', 'Short description of the project that highlights its purpose', 
'Type of programming the project focuses on 1: Procedural programming, 2: Functional Programming", 3: Object oriented programming', 
'The date the project started', 'The date the project ended', 'Estimated length of duration of the project','Estimated total cost of the project','Actual total cost of the project',
'Estimated effort required to complete the project, calculated as E = scaling coefficient * coefficient based on 15 parameters * ( KLOC ** scaling process factor ) ',
'Actual effort required to complete the project','Estimated lines of code required for the project', 'Actual lines of code required for the project', 'Estimated number of function points used to express the measurement of business functionality the project provides to a user.',
'The actual amount of function points the project provided to a user. See Estimated function points.','expected rate of errors in %','Average cost of salary per person per hour.','Average level of employment: Junior, Intermediate, Senior levels','The number of hours spent for reviewing development designs',
'The number of errors found throughout the project','The number of defects reported throughout the project','The primary language used in development',
'The productivity factor of the language.','The number of critical path method tasks defined in the project','The number of changed orders that affect the scope of the project that may or may not affect the completion date.',
'The number of pages for documentation','The measurement of efficiency of the language that allows a programmer to accomplish tasks. The higher the level, the less code required to accomplish the same task.','The average amount of statements per function point.');


COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
