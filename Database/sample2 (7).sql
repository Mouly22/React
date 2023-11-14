-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Nov 14, 2023 at 07:33 PM
-- Server version: 8.1.0
-- PHP Version: 8.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sample2`
--

-- --------------------------------------------------------

--
-- Table structure for table `all_login_credentials`
--

CREATE TABLE `all_login_credentials` (
  `id` bigint NOT NULL,
  `userid` varchar(30) NOT NULL,
  `password` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `address` varchar(200) NOT NULL,
  `nid` int NOT NULL,
  `user_type` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `all_login_credentials`
--

INSERT INTO `all_login_credentials` (`id`, `userid`, `password`, `email`, `address`, `nid`, `user_type`) VALUES
(1, 'kamal', '12345', 'kamal@gmail.com', 'Sylhet City, Country', 12325, 'field_officer'),
(3, 'macorov', '12345', 'mac@gmail.com', 'Bronx', 4342432, 'admin'),
(4, 'Michael', '12345', 'michael@yahoo.com', 'Jamalpur', 21343234, 'admin'),
(5, 'Mugdho', '12345', 'mugdho@yahoo.com', 'Bogura', 21243, 'field_officer'),
(7, 'Mouly', '12345', 'abira@taylorswift.com', 'Rangpur', 12345, 'admin'),
(8, 'Didar', '12345', 'didar@gmail.com', 'Nowakhali', 21213, 'admin'),
(9, 'ashik', '12345', 'ashikbanaya@gmail.com', 'Sherpur', 12341, 'field_officer'),
(10, 'linux12', '12345', 'linux@linux.com', 'Rampura', 13245, 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `authentication_react`
--

CREATE TABLE `authentication_react` (
  `id` bigint NOT NULL,
  `employee` varchar(30) NOT NULL,
  `department` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `authentication_react`
--

INSERT INTO `authentication_react` (`id`, `employee`, `department`) VALUES
(1, 'fahad', 'Cse'),
(2, 'Mo', 'CSe'),
(3, 'Choto Cato', 'EEe'),
(4, 'John Wick', 'CS'),
(5, 'Mahi', 'MNS'),
(6, 'Mahi', 'MNS'),
(7, 'John Wick', 'CS'),
(8, 'John Wick', 'CS'),
(9, 'John Wick', 'CS'),
(10, 'John Wick', 'CS'),
(11, 'John Wick', 'CS'),
(12, 'John Wick', 'CS'),
(13, 'Didar', 'BBA'),
(14, 'Didar', 'BBA'),
(15, 'Didar', 'BBA');

-- --------------------------------------------------------

--
-- Table structure for table `auth_group`
--

CREATE TABLE `auth_group` (
  `id` int NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `auth_group_permissions`
--

CREATE TABLE `auth_group_permissions` (
  `id` bigint NOT NULL,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `auth_permission`
--

CREATE TABLE `auth_permission` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can view log entry', 1, 'view_logentry'),
(5, 'Can add permission', 2, 'add_permission'),
(6, 'Can change permission', 2, 'change_permission'),
(7, 'Can delete permission', 2, 'delete_permission'),
(8, 'Can view permission', 2, 'view_permission'),
(9, 'Can add group', 3, 'add_group'),
(10, 'Can change group', 3, 'change_group'),
(11, 'Can delete group', 3, 'delete_group'),
(12, 'Can view group', 3, 'view_group'),
(13, 'Can add user', 4, 'add_user'),
(14, 'Can change user', 4, 'change_user'),
(15, 'Can delete user', 4, 'delete_user'),
(16, 'Can view user', 4, 'view_user'),
(17, 'Can add content type', 5, 'add_contenttype'),
(18, 'Can change content type', 5, 'change_contenttype'),
(19, 'Can delete content type', 5, 'delete_contenttype'),
(20, 'Can view content type', 5, 'view_contenttype'),
(21, 'Can add session', 6, 'add_session'),
(22, 'Can change session', 6, 'change_session'),
(23, 'Can delete session', 6, 'delete_session'),
(24, 'Can view session', 6, 'view_session'),
(25, 'Can add react', 7, 'add_react'),
(26, 'Can change react', 7, 'change_react'),
(27, 'Can delete react', 7, 'delete_react'),
(28, 'Can view react', 7, 'view_react'),
(29, 'Can add react', 8, 'add_react'),
(30, 'Can change react', 8, 'change_react'),
(31, 'Can delete react', 8, 'delete_react'),
(32, 'Can view react', 8, 'view_react'),
(33, 'Can add react', 9, 'add_react'),
(34, 'Can change react', 9, 'change_react'),
(35, 'Can delete react', 9, 'delete_react'),
(36, 'Can view react', 9, 'view_react'),
(37, 'Can add react', 10, 'add_react'),
(38, 'Can change react', 10, 'change_react'),
(39, 'Can delete react', 10, 'delete_react'),
(40, 'Can view react', 10, 'view_react'),
(41, 'Can add react', 11, 'add_react'),
(42, 'Can change react', 11, 'change_react'),
(43, 'Can delete react', 11, 'delete_react'),
(44, 'Can view react', 11, 'view_react'),
(45, 'Can add comment', 12, 'add_comment'),
(46, 'Can change comment', 12, 'change_comment'),
(47, 'Can delete comment', 12, 'delete_comment'),
(48, 'Can view comment', 12, 'view_comment'),
(49, 'Can add react', 13, 'add_react'),
(50, 'Can change react', 13, 'change_react'),
(51, 'Can delete react', 13, 'delete_react'),
(52, 'Can view react', 13, 'view_react'),
(53, 'Can add react', 14, 'add_react'),
(54, 'Can change react', 14, 'change_react'),
(55, 'Can delete react', 14, 'delete_react'),
(56, 'Can view react', 14, 'view_react');

-- --------------------------------------------------------

--
-- Table structure for table `auth_user`
--

CREATE TABLE `auth_user` (
  `id` int NOT NULL,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `auth_user`
--

INSERT INTO `auth_user` (`id`, `password`, `last_login`, `is_superuser`, `username`, `first_name`, `last_name`, `email`, `is_staff`, `is_active`, `date_joined`) VALUES
(1, 'pbkdf2_sha256$600000$4nIWWh2Mxx2hGZCbkQVhEa$CDmI3J5taSPOUjGwmsPgIjT557ZbjvR7hI58lgeTQ3o=', NULL, 1, 'macorov', '', '', 'macorov@gmail.com', 1, 1, '2023-10-23 17:28:46.910653');

-- --------------------------------------------------------

--
-- Table structure for table `auth_user_groups`
--

CREATE TABLE `auth_user_groups` (
  `id` bigint NOT NULL,
  `user_id` int NOT NULL,
  `group_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `auth_user_user_permissions`
--

CREATE TABLE `auth_user_user_permissions` (
  `id` bigint NOT NULL,
  `user_id` int NOT NULL,
  `permission_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `bloglist_comments`
--

CREATE TABLE `bloglist_comments` (
  `comment_id` int NOT NULL,
  `userid` varchar(30) NOT NULL,
  `comment_content` longtext NOT NULL,
  `post_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `bloglist_comments`
--

INSERT INTO `bloglist_comments` (`comment_id`, `userid`, `comment_content`, `post_id`) VALUES
(2, 'john_doe', 'Are You sure about it?', 1),
(3, 'Mouly', 'Bhalo hoy nai dhur', 1),
(4, 'BRACU', 'Where is my campus?', 2),
(5, 'Mo', 'How you doin?', 2),
(6, 'Kamal', 'Very bad', 2);

-- --------------------------------------------------------

--
-- Table structure for table `blog_images_react`
--

CREATE TABLE `blog_images_react` (
  `id` bigint NOT NULL,
  `post_id` int NOT NULL,
  `image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `blog_images_react`
--

INSERT INTO `blog_images_react` (`id`, `post_id`, `image`) VALUES
(1, 1, 'images/2-fertilization-using-drones-scaled.jpeg'),
(2, 2, 'images/960d33c6-026e-4c6b-bf7c-00549286c366.png'),
(4, 3, 'images/cutecat.jpg'),
(5, 4, 'images/fungal-smut-crop-disese.jpg'),
(6, 5, 'images/Rust_leaves_MAIN-996x567.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `blog_list`
--

CREATE TABLE `blog_list` (
  `post_id` int NOT NULL,
  `userid` varchar(30) NOT NULL,
  `user_type` varchar(20) NOT NULL,
  `post_title` varchar(255) NOT NULL,
  `post_content` longtext NOT NULL,
  `post_uploaded` datetime(6) NOT NULL,
  `post_image` longtext
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `blog_list`
--

INSERT INTO `blog_list` (`post_id`, `userid`, `user_type`, `post_title`, `post_content`, `post_uploaded`, `post_image`) VALUES
(1, 'john_doe', 'admin', 'Exciting News', 'This is a fascinating post about...', '2023-11-13 11:17:01.661279', 'base64_encoded_image_data'),
(2, 'macorov', 'admin', 'Whats up Danger', 'This is one of the fascinating article about how spiderman got into agriculture..', '2023-11-13 11:18:27.425414', 'base64_encoded_image_data'),
(3, 'macorov', 'admin', 'What is this?', 'Do you know where I can find this?', '2023-11-14 19:21:42.377413', 'kaka'),
(4, 'macorov', 'admin', 'What is this?', 'What should I do?', '2023-11-14 19:24:44.156833', 'kaka'),
(5, 'macorov', 'admin', 'Can anyone help me with this?', 'This is happening and I have no idea what to do', '2023-11-14 19:25:59.682730', 'kaka');

-- --------------------------------------------------------

--
-- Table structure for table `blog_list_comments`
--

CREATE TABLE `blog_list_comments` (
  `id` bigint NOT NULL,
  `react_id` int NOT NULL,
  `comment_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `blog_list_comments`
--

INSERT INTO `blog_list_comments` (`id`, `react_id`, `comment_id`) VALUES
(2, 1, 2),
(3, 1, 3),
(4, 2, 4),
(5, 2, 5),
(6, 2, 6);

-- --------------------------------------------------------

--
-- Table structure for table `django_admin_log`
--

CREATE TABLE `django_admin_log` (
  `id` int NOT NULL,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint UNSIGNED NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `django_content_type`
--

CREATE TABLE `django_content_type` (
  `id` int NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(1, 'admin', 'logentry'),
(11, 'all_login_credentials', 'react'),
(3, 'auth', 'group'),
(2, 'auth', 'permission'),
(4, 'auth', 'user'),
(7, 'authentication', 'react'),
(14, 'blog_images', 'react'),
(12, 'bloglist', 'comment'),
(13, 'bloglist', 'react'),
(5, 'contenttypes', 'contenttype'),
(9, 'field_officer_login', 'react'),
(10, 'incoming_request', 'react'),
(8, 'login_stuffs', 'react'),
(6, 'sessions', 'session');

-- --------------------------------------------------------

--
-- Table structure for table `django_migrations`
--

CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'contenttypes', '0001_initial', '2023-10-23 16:32:31.266091'),
(2, 'auth', '0001_initial', '2023-10-23 16:32:32.777312'),
(3, 'admin', '0001_initial', '2023-10-23 16:32:33.132437'),
(4, 'admin', '0002_logentry_remove_auto_add', '2023-10-23 16:32:33.184793'),
(5, 'admin', '0003_logentry_add_action_flag_choices', '2023-10-23 16:32:33.217934'),
(6, 'contenttypes', '0002_remove_content_type_name', '2023-10-23 16:32:33.457136'),
(7, 'auth', '0002_alter_permission_name_max_length', '2023-10-23 16:32:33.613182'),
(8, 'auth', '0003_alter_user_email_max_length', '2023-10-23 16:32:33.683513'),
(9, 'auth', '0004_alter_user_username_opts', '2023-10-23 16:32:33.700542'),
(10, 'auth', '0005_alter_user_last_login_null', '2023-10-23 16:32:33.828808'),
(11, 'auth', '0006_require_contenttypes_0002', '2023-10-23 16:32:33.842076'),
(12, 'auth', '0007_alter_validators_add_error_messages', '2023-10-23 16:32:33.866033'),
(13, 'auth', '0008_alter_user_username_max_length', '2023-10-23 16:32:34.018598'),
(14, 'auth', '0009_alter_user_last_name_max_length', '2023-10-23 16:32:34.169059'),
(15, 'auth', '0010_alter_group_name_max_length', '2023-10-23 16:32:34.232976'),
(16, 'auth', '0011_update_proxy_permissions', '2023-10-23 16:32:34.260195'),
(17, 'auth', '0012_alter_user_first_name_max_length', '2023-10-23 16:32:34.418557'),
(18, 'sessions', '0001_initial', '2023-10-23 16:32:34.523160'),
(19, 'authentication', '0001_initial', '2023-10-23 17:09:46.835254'),
(20, 'login_stuffs', '0001_initial', '2023-10-24 06:22:41.322974'),
(21, 'field_officer_login', '0001_initial', '2023-10-24 10:00:40.206191'),
(22, 'incoming_request', '0001_initial', '2023-10-27 13:52:41.652120'),
(23, 'all_login_credentials', '0001_initial', '2023-11-09 06:23:58.868098'),
(24, 'bloglist', '0001_initial', '2023-11-13 11:12:22.446765'),
(25, 'blog_images', '0001_initial', '2023-11-14 16:37:36.786632');

-- --------------------------------------------------------

--
-- Table structure for table `django_session`
--

CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `field_officer_credentials`
--

CREATE TABLE `field_officer_credentials` (
  `id` bigint NOT NULL,
  `userid` varchar(30) NOT NULL,
  `password` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `address` varchar(200) NOT NULL,
  `nid` int NOT NULL,
  `user_type` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `field_officer_credentials`
--

INSERT INTO `field_officer_credentials` (`id`, `userid`, `password`, `email`, `address`, `nid`, `user_type`) VALUES
(1, 'kamal', '12345', 'kamal@gmail.com', 'Sylhet City, Country', 12325, 'field_officer'),
(15, 'Mugdho', '12345', 'mugdho@yahoo.com', 'Bogura', 21243, 'field_officer'),
(17, 'ashik', '12345', 'ashikbanaya@gmail.com', 'Sherpur', 12341, 'field_officer');

-- --------------------------------------------------------

--
-- Table structure for table `incoming_requests`
--

CREATE TABLE `incoming_requests` (
  `id` bigint NOT NULL,
  `userid` varchar(30) NOT NULL,
  `password` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `address` varchar(200) NOT NULL,
  `nid` int NOT NULL,
  `user_type` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `incoming_requests`
--

INSERT INTO `incoming_requests` (`id`, `userid`, `password`, `email`, `address`, `nid`, `user_type`) VALUES
(24, 'Mukto', '12345', 'muktobb@gmail.com', 'Pabna', 21312, 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `user_credentials`
--

CREATE TABLE `user_credentials` (
  `id` bigint NOT NULL,
  `userid` varchar(30) NOT NULL,
  `password` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `address` varchar(200) NOT NULL,
  `nid` int NOT NULL,
  `user_type` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user_credentials`
--

INSERT INTO `user_credentials` (`id`, `userid`, `password`, `email`, `address`, `nid`, `user_type`) VALUES
(11, 'macorov', '12345', 'mac@gmail.com', 'Bronx', 4342432, 'admin'),
(24, 'Michael', '12345', 'michael@yahoo.com', 'Jamalpur', 21343234, 'admin'),
(25, 'Mouly', '12345', 'abira@taylorswift.com', 'Rangpur', 12345, 'admin'),
(26, 'Didar', '12345', 'didar@gmail.com', 'Nowakhali', 21213, 'admin'),
(27, 'linux12', '12345', 'linux@linux.com', 'Rampura', 13245, 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `all_login_credentials`
--
ALTER TABLE `all_login_credentials`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `authentication_react`
--
ALTER TABLE `authentication_react`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `auth_group`
--
ALTER TABLE `auth_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  ADD KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`);

--
-- Indexes for table `auth_user`
--
ALTER TABLE `auth_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  ADD KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`);

--
-- Indexes for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  ADD KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `bloglist_comments`
--
ALTER TABLE `bloglist_comments`
  ADD PRIMARY KEY (`comment_id`);

--
-- Indexes for table `blog_images_react`
--
ALTER TABLE `blog_images_react`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blog_list`
--
ALTER TABLE `blog_list`
  ADD PRIMARY KEY (`post_id`);

--
-- Indexes for table `blog_list_comments`
--
ALTER TABLE `blog_list_comments`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `blog_list_comments_react_id_comment_id_1ca9c11a_uniq` (`react_id`,`comment_id`),
  ADD KEY `blog_list_comments_comment_id_a4bf910f_fk_bloglist_` (`comment_id`);

--
-- Indexes for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  ADD KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`);

--
-- Indexes for table `django_content_type`
--
ALTER TABLE `django_content_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`);

--
-- Indexes for table `django_migrations`
--
ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `django_session`
--
ALTER TABLE `django_session`
  ADD PRIMARY KEY (`session_key`),
  ADD KEY `django_session_expire_date_a5c62663` (`expire_date`);

--
-- Indexes for table `field_officer_credentials`
--
ALTER TABLE `field_officer_credentials`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `incoming_requests`
--
ALTER TABLE `incoming_requests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_credentials`
--
ALTER TABLE `user_credentials`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `all_login_credentials`
--
ALTER TABLE `all_login_credentials`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `authentication_react`
--
ALTER TABLE `authentication_react`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `auth_group`
--
ALTER TABLE `auth_group`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_permission`
--
ALTER TABLE `auth_permission`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT for table `auth_user`
--
ALTER TABLE `auth_user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `bloglist_comments`
--
ALTER TABLE `bloglist_comments`
  MODIFY `comment_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `blog_images_react`
--
ALTER TABLE `blog_images_react`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `blog_list`
--
ALTER TABLE `blog_list`
  MODIFY `post_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `blog_list_comments`
--
ALTER TABLE `blog_list_comments`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `field_officer_credentials`
--
ALTER TABLE `field_officer_credentials`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `incoming_requests`
--
ALTER TABLE `incoming_requests`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `user_credentials`
--
ALTER TABLE `user_credentials`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Constraints for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

--
-- Constraints for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  ADD CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `blog_list_comments`
--
ALTER TABLE `blog_list_comments`
  ADD CONSTRAINT `blog_list_comments_comment_id_a4bf910f_fk_bloglist_` FOREIGN KEY (`comment_id`) REFERENCES `bloglist_comments` (`comment_id`),
  ADD CONSTRAINT `blog_list_comments_react_id_b7ee339b_fk_blog_list_post_id` FOREIGN KEY (`react_id`) REFERENCES `blog_list` (`post_id`);

--
-- Constraints for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  ADD CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
