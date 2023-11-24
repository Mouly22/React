-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Nov 24, 2023 at 04:43 PM
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
(9, 'ashik', '12345', 'ashik@yahoo.com', 'Sherpur', 123331, 'field_officer'),
(10, 'linux12', '12345', 'linux@yahoo.com', 'Rampura', 123441, 'admin'),
(11, 'Mughal', '12345', 'mughal@yahoo.com', 'Kisharganj', 213143, 'field_officer'),
(12, 'DrJahangir', '12345', 'jahangir@yahoo.com', 'Baridhara', 2123433, 'expert'),
(14, 'Mukto', '12345', 'muktobb@gmail.com', 'Pabna', 21312, 'admin'),
(15, 'Azam Khan', '12345', 'azamkhan@gmail.com', 'Kalshi, Dhaka', 214564, 'businessman');

-- --------------------------------------------------------

--
-- Table structure for table `auction_images_react`
--

CREATE TABLE `auction_images_react` (
  `id` bigint NOT NULL,
  `post_id` int NOT NULL,
  `image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `auction_images_react`
--

INSERT INTO `auction_images_react` (`id`, `post_id`, `image`) VALUES
(1, 1, 'auction_images/potato.jpg'),
(4, 2, 'auction_images/tomato.jpeg'),
(5, 3, 'auction_images/broccoli-1238250_640.jpg'),
(6, 4, 'auction_images/featured-6.jpg'),
(7, 5, 'auction_images/potato_vqfG5KE.jpg'),
(9, 5, 'auction_images/carrot_iRl2kgX.jpg'),
(10, 6, 'auction_images/carrot_wBCJE50.jpg'),
(11, 7, 'auction_images/rice.jpg'),
(12, 9, 'auction_images/1639724957419.jpeg'),
(13, 11, 'auction_images/1639724957419_3mJi58m.jpeg'),
(14, 12, 'auction_images/chickpeas-garbanzos.jpg.webp'),
(15, 13, 'auction_images/carrot_A6U2T35.jpg'),
(16, 14, 'auction_images/chickpeas-garbanzos.jpg_FvMgtdX.webp'),
(17, 15, 'auction_images/1639724957419_XfKoQ0g.jpeg'),
(18, 16, 'auction_images/51UYy7tiE3L.jpg'),
(19, 17, 'auction_images/observerbd.com_1639847404.jpg'),
(21, 22, 'auction_images/1.jpeg'),
(22, 23, 'auction_images/1.jpg'),
(23, 24, 'auction_images/tomato_Hy7CVnr.jpeg'),
(24, 34, 'auction_images/tomato_JEjsps4.jpeg'),
(25, 35, 'auction_images/green-capsicum-15-gm-300-gm.jpeg'),
(26, 36, 'auction_images/broccoli-1238250_640_zJSejQD.jpg'),
(27, 37, 'auction_images/A1QAAV.png');

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
(56, 'Can view react', 14, 'view_react'),
(57, 'Can add food item', 15, 'add_fooditem'),
(58, 'Can change food item', 15, 'change_fooditem'),
(59, 'Can delete food item', 15, 'delete_fooditem'),
(60, 'Can view food item', 15, 'view_fooditem'),
(61, 'Can add food inventory', 16, 'add_foodinventory'),
(62, 'Can change food inventory', 16, 'change_foodinventory'),
(63, 'Can delete food inventory', 16, 'delete_foodinventory'),
(64, 'Can view food inventory', 16, 'view_foodinventory'),
(65, 'Can add react', 17, 'add_react'),
(66, 'Can change react', 17, 'change_react'),
(67, 'Can delete react', 17, 'delete_react'),
(68, 'Can view react', 17, 'view_react'),
(69, 'Can add food item', 18, 'add_fooditem'),
(70, 'Can change food item', 18, 'change_fooditem'),
(71, 'Can delete food item', 18, 'delete_fooditem'),
(72, 'Can view food item', 18, 'view_fooditem'),
(73, 'Can add food inventory', 19, 'add_foodinventory'),
(74, 'Can change food inventory', 19, 'change_foodinventory'),
(75, 'Can delete food inventory', 19, 'delete_foodinventory'),
(76, 'Can view food inventory', 19, 'view_foodinventory'),
(77, 'Can add react', 20, 'add_react'),
(78, 'Can change react', 20, 'change_react'),
(79, 'Can delete react', 20, 'delete_react'),
(80, 'Can view react', 20, 'view_react'),
(81, 'Can add auctions inventory', 21, 'add_auctionsinventory'),
(82, 'Can change auctions inventory', 21, 'change_auctionsinventory'),
(83, 'Can delete auctions inventory', 21, 'delete_auctionsinventory'),
(84, 'Can view auctions inventory', 21, 'view_auctionsinventory'),
(85, 'Can add react', 22, 'add_react'),
(86, 'Can change react', 22, 'change_react'),
(87, 'Can delete react', 22, 'delete_react'),
(88, 'Can view react', 22, 'view_react'),
(89, 'Can add react', 23, 'add_react'),
(90, 'Can change react', 23, 'change_react'),
(91, 'Can delete react', 23, 'delete_react'),
(92, 'Can view react', 23, 'view_react'),
(93, 'Can add auctions inventory', 24, 'add_auctionsinventory'),
(94, 'Can change auctions inventory', 24, 'change_auctionsinventory'),
(95, 'Can delete auctions inventory', 24, 'delete_auctionsinventory'),
(96, 'Can view auctions inventory', 24, 'view_auctionsinventory'),
(97, 'Can add react', 25, 'add_react'),
(98, 'Can change react', 25, 'change_react'),
(99, 'Can delete react', 25, 'delete_react'),
(100, 'Can view react', 25, 'view_react');

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
(7, 'macorov', 'what can I say', 2),
(8, 'macorov', 'what can I say!', 2),
(13, 'Mouly', 'We were the inspiration of my childhood.', 2),
(14, 'Mouly', 'I was just kidding. It is a good work indeed!', 1),
(23, 'Didar', 'Jayga Jomi kinar time eshe gese dekhtesi', 7),
(26, 'macorov', 'Contact me if you need any help!', 11),
(27, 'Azam Khan', 'Nice work!', 2);

-- --------------------------------------------------------

--
-- Table structure for table `bloglist_fooditems`
--

CREATE TABLE `bloglist_fooditems` (
  `id` bigint NOT NULL,
  `type` varchar(255) NOT NULL,
  `quantity` int NOT NULL,
  `quality` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `bloglist_fooditems`
--

INSERT INTO `bloglist_fooditems` (`id`, `type`, `quantity`, `quality`) VALUES
(1, 'rice', 2, 3),
(2, 'wheat', 1, 1),
(3, 'maize', 3, 2),
(4, 'potato', 5, 3),
(5, 'rice', 10, 3),
(6, 'wheat', 13, 2),
(7, 'maize', 30, 3),
(8, 'potato', 50, 1);

-- --------------------------------------------------------

--
-- Table structure for table `bloglist_inventory`
--

CREATE TABLE `bloglist_inventory` (
  `id` bigint NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `district` varchar(255) NOT NULL,
  `division` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `bloglist_inventory`
--

INSERT INTO `bloglist_inventory` (`id`, `user_id`, `district`, `division`) VALUES
(1, 'user123', 'Dhaka', 'Dhaka'),
(2, 'user123', 'Dhaka', 'Dhaka'),
(3, 'Mugdho', 'Bogura', 'Rajsahi');

-- --------------------------------------------------------

--
-- Table structure for table `bloglist_inventory_items`
--

CREATE TABLE `bloglist_inventory_items` (
  `id` bigint NOT NULL,
  `foodinventory_id` bigint NOT NULL,
  `fooditem_id` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `bloglist_inventory_items`
--

INSERT INTO `bloglist_inventory_items` (`id`, `foodinventory_id`, `fooditem_id`) VALUES
(1, 2, 1),
(2, 2, 2),
(3, 2, 3),
(4, 2, 4),
(5, 3, 5),
(6, 3, 6),
(7, 3, 7),
(8, 3, 8);

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
(6, 5, 'images/Rust_leaves_MAIN-996x567.jpg'),
(7, 6, 'images/agriservices_country_bangladesh_full_width_8486.jpg'),
(8, 7, 'images/image15.jpg'),
(9, 8, 'images/List-of-fertilizers-and-pesticides-approved-by-the-Government-of-Bangladesh.png'),
(10, 9, 'images/image-1-for-amino-acid.jpg'),
(11, 10, 'images/List-of-fertilizers-and-pesticides-approved-by-the-Government-of-Bangladesh_6Pckwhc.png'),
(12, 11, 'images/bangladesh-banner-photo.jpg'),
(13, 12, 'images/featured-6.jpg');

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
(1, 'john_doe\n', 'admin', 'Hi I am new', 'This is my first post', '2023-11-13 11:17:01.661279', 'kaka'),
(2, 'macorov', 'admin', 'Whats up Danger', '\r\nAfter years of swinging through the concrete jungle and battling super villains, Peter Parker, the Amazing Spider-Man, found himself yearning for a change of pace. His senses, once attuned to the rhythm of the city, now craved the tranquility of nature. His webs, once used to capture criminals, now yearned to nurture life.\r\n\r\nDrawn by a newfound appreciation for the simple things, Peter found himself drawn to the world of agriculture. He envisioned himself tending to fields of vibrant crops, cultivating fertile soil, and nurturing the delicate balance of nature.\r\n\r\nWith a newfound enthusiasm, Peter embarked on a journey of agricultural enlightenment. He enrolled in courses, sought guidance from experienced farmers, and immersed himself in the wisdom of ancient farming practices. He learned the intricacies of irrigation systems, the delicate science of soil composition, and the art of nurturing a diverse ecosystem.\r\n\r\nAs Peter delved deeper into the world of agriculture, he discovered a profound connection between his powers and the natural world. His spider-like agility allowed him to navigate effortlessly through fields, his web-shooters transformed into tools for precision pollination, and his heightened senses enabled him to detect subtle changes in the environment, ensuring the optimal growth of his crops.\r\n\r\nWith each passing day, Peter\'s identity as Spider-Man intertwined with his newfound passion for agriculture. He became the \'Eco-Spider,\' a protector of the environment, using his powers to combat deforestation, promote sustainable farming practices, and educate others about the importance of preserving the delicate balance of nature.\r\n\r\nIn the tranquil fields, far from the clamor of the city, Peter Parker found a new purpose, a new identity, and a new way to use his extraordinary abilities for the betterment of the world. He traded the thrill of urban adventures for the satisfaction of nurturing life, the adrenaline rush of battles for the serenity of a harvest. And in the process, he discovered that the true power of a hero lies not just in their physical strength or superhuman abilities, but in their ability to connect with the world around them and make a positive impact on the lives of others.', '2023-11-13 11:18:27.425414', 'base64_encoded_image_data'),
(7, 'macorov', 'admin', 'Farming in Sonargaon', 'As the first rays of dawn paint the sky with hues of gold and crimson, the farmers of Sonargaon rise to greet the day. Their hands, gnarled and weathered by years of toil, carry the tools of their trade – hoes, ploughs, and baskets – as they head towards their fields. The air is filled with the sweet scent of freshly tilled earth, a symphony of sounds – the chirping of birds, the rustling of leaves, and the distant murmur of the village – harmonizing with the gentle breeze.\n\nThe fields of Sonargaon stretch out like a patchwork quilt, each plot a testament to the hard work and dedication of its caretaker. Rice seedlings, their delicate green shoots reaching towards the sun, sway gently in the breeze, their promise of a bountiful harvest filling the hearts of the farmers with hope. The sun climbs higher in the sky, casting long shadows across the fields, as the farmers work tirelessly, their movements a graceful dance of labor and love.\n\nThe women of Sonargaon play an equally vital role in the agricultural tapestry of their community. Their nimble fingers weave baskets from locally sourced materials, their hands deftly transplanting seedlings and harvesting crops. Their laughter, like the tinkling of bells, fills the air, a melody that mingles with the sounds of nature, creating a harmonious symphony of life.', '2023-11-16 21:10:24.272162', 'kaka'),
(9, 'macorov', 'admin', 'Using advance fertilizers', 'Advanced fertilizers are a type of fertilizer that is designed to release nutrients to plants slowly over time. This helps to improve nutrient use efficiency and reduce nutrient losses to the environment. Advanced fertilizers can also help to improve soil health and water retention.\n\nThere are several types of advanced fertilizers available, including:\n\nSlow-release fertilizers: These fertilizers release nutrients to plants slowly over time, which helps to improve nutrient use efficiency and reduce nutrient losses to the environment.\nControlled-release fertilizers: These fertilizers release nutrients to plants at a predetermined rate, which helps to provide plants with the nutrients they need at the time they need them.\nNitrification inhibitors: These inhibitors slow the conversion of ammonium to nitrate in the soil, which helps to reduce nitrogen losses to the environment.\nThe use of advanced fertilizers in Bangladesh has the potential to improve the productivity of agriculture in the country. It can also help to reduce the environmental impact of agriculture.\n\nHere are some of the benefits of using advanced fertilizers in Bangladesh:\n\nImproved nutrient use efficiency: Advanced fertilizers release nutrients to plants slowly over time, which helps to improve nutrient use efficiency. This can lead to increased crop yields and reduced fertilizer costs.\nReduced nutrient losses to the environment: Advanced fertilizers help to reduce nutrient losses to the environment by releasing nutrients to plants slowly over time. This can help to improve water quality and reduce the risk of eutrophication.\nImproved soil health: Advanced fertilizers can help to improve soil health by increasing organic matter in the soil. This can lead to increased water retention and nutrient availability.', '2023-11-16 21:22:53.360917', 'kaka'),
(11, 'macorov', 'admin', 'From Humble Beginnings to Thriving Farm', 'In the lush, emerald expanse of Bangladesh\'s countryside, amidst verdant paddy fields and sprawling rivers, lived a young farmer named Rashid. With nothing but a worn pair of sandals, a weathered bamboo hat, and an unwavering determination, Rashid embarked on his journey to transform a barren plot of land into a thriving farm.\n\nThe road ahead was far from easy. The land, once fertile and productive, had been ravaged by floods and soil erosion, leaving behind a desolate expanse of cracked earth and stunted crops. Rashid\'s hands, calloused and rough from years of toil, bore the brunt of the work. He tirelessly tilled the soil, planted seeds, and nurtured the crops, his spirit unwavering in the face of adversity.\n\nAs the seasons turned and the monsoon rains brought life-giving water to the parched land, Rashid\'s perseverance began to bear fruit. The once barren fields sprouted with life, the paddy swaying in the gentle breeze, their golden grains promising a bountiful harvest. Rashid\'s crops flourished, their resilience a testament to his dedication and passion.\n\nWord of Rashid\'s success spread throughout the village, attracting curious visitors to his once-desolate farm. They marveled at the transformation, their eyes wide with wonder as they witnessed the verdant fields and the abundant harvests. Rashid, once a solitary figure working tirelessly in his fields, found himself surrounded by a community eager to learn from his wisdom and expertise.\n\nWith open arms and a heart full of generosity, Rashid shared his knowledge, teaching others the secrets of sustainable farming and the power of hard work and determination. He established a thriving cooperative, connecting local farmers with buyers, ensuring that fresh, wholesome produce reached the tables of families across the region.\n\nAs the years passed, Rashid\'s farm became a beacon of hope and inspiration, a symbol of what can be achieved through hard work, perseverance, and a deep connection to the land. His story echoed through the generations, reminding all who heard it that even from humble beginnings, extraordinary dreams can take root and flourish.\n\nRashid\'s tale is a testament to the resilience and ingenuity of the Bangladeshi people, their ability to transform adversity into opportunity, their unwavering spirit that has carried them through countless challenges. His legacy lives on in the thriving farms that dot the Bangladeshi landscape, each one a symbol of hope and a promise of a brighter future.\n\n\n                                                                                                                       \n\nTags: Business, Green', '2023-11-17 08:06:44.263034', 'kaka'),
(12, 'macorov', 'admin', 'From Humble Beginnings to Poultry Success: The Story of Amira', 'The road ahead was far from easy. The poultry industry was competitive, and Amira\'s resources were limited. But she was undeterred. She tirelessly studied poultry care, researching the best practices for raising healthy and productive chickens. She spent countless hours cleaning her poultry house, ensuring a safe and comfortable environment for her feathered friends.\n\nAs the weeks turned into months, Amira\'s dedication began to pay off. Her chickens thrived under her care, their numbers growing steadily. She carefully monitored their growth, ensuring they received the proper nutrition and care. Her passion for poultry farming shone through in her attentive demeanor and her gentle touch.\n\nWord of Amira\'s success spread throughout the village, attracting curious visitors to her poultry house. They marveled at her healthy chickens, their eyes wide with admiration as they witnessed the fruits of her labor. Amira, once a quiet and unassuming woman, found herself surrounded by a community eager to learn from her expertise.\n\nWith open arms and a heart full of generosity, Amira shared her knowledge, teaching others the secrets of successful poultry farming. She emphasized the importance of cleanliness, proper nutrition, and attentive care. She encouraged her fellow villagers to embrace poultry farming as a means of livelihood, empowering them to achieve economic independence.\n\nAs the years passed, Amira\'s poultry farm became a beacon of hope and inspiration, a symbol of what can be achieved through hard work, perseverance, and a deep connection to her feathered friends. Her story echoed through the generations, reminding all who heard it that even from humble beginnings, extraordinary dreams can take flight. Tags: Business, Agrotech, Green', '2023-11-18 05:59:08.342471', 'kaka');

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
(4, 2, 4),
(5, 2, 5),
(7, 2, 7),
(8, 2, 8),
(13, 2, 13),
(27, 2, 27),
(23, 7, 23),
(26, 11, 26);

-- --------------------------------------------------------

--
-- Table structure for table `businessmen_credentials`
--

CREATE TABLE `businessmen_credentials` (
  `id` bigint NOT NULL,
  `userid` varchar(30) NOT NULL,
  `password` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `address` varchar(200) NOT NULL,
  `nid` int NOT NULL,
  `user_type` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `businessmen_credentials`
--

INSERT INTO `businessmen_credentials` (`id`, `userid`, `password`, `email`, `address`, `nid`, `user_type`) VALUES
(1, 'Azam Khan', '12345', 'azamkhan@gmail.com', 'Kalshi, Dhaka', 214564, 'businessman');

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
(20, 'auction_images', 'react'),
(21, 'auction_posts_datas', 'auctionsinventory'),
(19, 'auction_product_datas', 'foodinventory'),
(18, 'auction_product_datas', 'fooditem'),
(3, 'auth', 'group'),
(2, 'auth', 'permission'),
(4, 'auth', 'user'),
(7, 'authentication', 'react'),
(14, 'blog_images', 'react'),
(12, 'bloglist', 'comment'),
(13, 'bloglist', 'react'),
(22, 'businessmen', 'react'),
(5, 'contenttypes', 'contenttype'),
(16, 'dataforfoods', 'foodinventory'),
(15, 'dataforfoods', 'fooditem'),
(17, 'expert', 'react'),
(9, 'field_officer_login', 'react'),
(25, 'incoming_auction_images', 'react'),
(24, 'incoming_auction_request', 'auctionsinventory'),
(10, 'incoming_request', 'react'),
(23, 'latest_bidding', 'react'),
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
(25, 'blog_images', '0001_initial', '2023-11-14 16:37:36.786632'),
(26, 'dataforfoods', '0001_initial', '2023-11-18 05:37:00.399915'),
(27, 'dataforfoods', '0002_alter_foodinventory_items_alter_fooditem_quality_and_more', '2023-11-18 05:48:51.182973'),
(28, 'expert', '0001_initial', '2023-11-18 07:10:47.798581'),
(29, 'auction_product_datas', '0001_initial', '2023-11-20 20:58:30.709779'),
(30, 'auction_images', '0001_initial', '2023-11-21 06:50:04.888429'),
(31, 'auction_posts_datas', '0001_initial', '2023-11-22 11:42:46.868187'),
(32, 'auction_posts_datas', '0002_alter_foodinventory_table', '2023-11-22 11:42:46.917680'),
(33, 'auction_posts_datas', '0003_alter_foodinventory_table', '2023-11-22 11:42:46.969511'),
(34, 'auction_posts_datas', '0004_alter_foodinventory_table', '2023-11-22 11:42:47.017014'),
(35, 'auction_posts_datas', '0005_rename_foodinventory_auctionsinventory', '2023-11-22 11:42:47.057192'),
(36, 'auction_posts_datas', '0006_rename_items_auctionsinventory_description', '2023-11-22 11:42:47.095873'),
(37, 'auction_posts_datas', '0007_auctionsinventory_posted_by', '2023-11-23 08:50:44.300330'),
(38, 'businessmen', '0001_initial', '2023-11-23 11:19:34.157173'),
(39, 'latest_bidding', '0001_initial', '2023-11-23 18:57:36.796774'),
(40, 'incoming_auction_request', '0001_initial', '2023-11-24 06:13:44.829873'),
(41, 'incoming_auction_images', '0001_initial', '2023-11-24 06:41:22.240732');

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
-- Table structure for table `expert_credentials`
--

CREATE TABLE `expert_credentials` (
  `id` bigint NOT NULL,
  `userid` varchar(30) NOT NULL,
  `password` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `address` varchar(200) NOT NULL,
  `nid` int NOT NULL,
  `user_type` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `expert_credentials`
--

INSERT INTO `expert_credentials` (`id`, `userid`, `password`, `email`, `address`, `nid`, `user_type`) VALUES
(3, 'DrJahangir', '12345', 'jahangir@yahoo.com', 'Baridhara', 2123433, 'expert');

-- --------------------------------------------------------

--
-- Table structure for table `farmer_auction_posts_inventory_list`
--

CREATE TABLE `farmer_auction_posts_inventory_list` (
  `post_id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `total_bidding_placed` int UNSIGNED NOT NULL,
  `start_time` datetime(6) NOT NULL,
  `end_time` datetime(6) NOT NULL,
  `current_time` datetime(6) NOT NULL,
  `description` longtext NOT NULL,
  `posted_by` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `farmer_auction_posts_inventory_list`
--

INSERT INTO `farmer_auction_posts_inventory_list` (`post_id`, `name`, `amount`, `price`, `total_bidding_placed`, `start_time`, `end_time`, `current_time`, `description`, `posted_by`) VALUES
(1, 'Potato', 100.50, 745.00, 7, '2023-11-22 11:48:28.074218', '2023-12-31 23:59:59.000000', '2023-11-22 11:48:28.074258', 'Origin: Bagerhatt\r\nColor: Red', ''),
(2, 'Tomato', 10.99, 6000.00, 0, '2023-11-22 12:21:29.329482', '2023-11-24 18:20:00.000000', '2023-11-22 12:21:29.329633', 'Origin: Kamalpur\r\nColor: Bright Red', ''),
(3, 'Brocoli', 10.99, 54000.00, 0, '2023-11-22 12:32:58.444580', '2023-11-24 18:32:00.000000', '2023-11-22 12:32:58.444752', 'Origin: Dhaka\r\nColor: Red', ''),
(4, 'Rooster', 500.00, 49000.00, 0, '2023-11-22 12:44:44.250932', '2023-11-30 20:44:00.000000', '2023-11-22 12:44:44.250985', 'Origin:  Gopal Ganj\r\nColor: Colorful\r\nSize: Big', ''),
(6, 'carrot', 4.00, 500.00, 0, '2023-11-22 14:00:35.680225', '2023-11-24 20:00:00.000000', '2023-11-22 14:00:35.680378', 'fresh', ''),
(7, 'Aman Rice', 500.00, 300.00, 0, '2023-11-22 14:01:31.551855', '2023-11-25 20:01:00.000000', '2023-11-22 14:01:31.551951', 'good quality', ''),
(15, 'Eggplant', 200.00, 5000.00, 0, '2023-11-22 14:28:04.596645', '2023-11-27 20:28:00.000000', '2023-11-22 14:28:04.596709', 'fresh, healthy', ''),
(22, 'Red Onion', 20.00, 2000.00, 0, '2023-11-22 14:47:30.786867', '2023-11-25 20:47:00.000000', '2023-11-22 14:47:30.786978', 'fresh', ''),
(23, 'Cauliflower', 2.00, 200.00, 0, '2023-11-22 14:53:39.092569', '2023-11-25 20:53:00.000000', '2023-11-22 14:53:39.092690', 'fresh', ''),
(34, 'Tomato', 99.00, 58000.00, 1, '2023-11-24 10:24:47.402114', '2023-11-26 16:22:00.000000', '2023-11-24 10:24:47.402214', 'Type: Vegetable\r\nOrigin: India', 'Didar'),
(35, 'Capcicum', 40.00, 10000.00, 0, '2023-11-24 10:35:16.782193', '2023-11-25 16:35:00.000000', '2023-11-24 10:35:16.782365', 'Type: vegetable\r\nOrigin: India', 'Didar'),
(36, 'Deshi Brocoli', 35.00, 21000.00, 1, '2023-11-24 10:48:12.310999', '2023-11-24 20:47:00.000000', '2023-11-24 10:48:12.311052', 'Type: Vegetables\r\nOrigin: Pabna', 'Didar'),
(37, 'Rui Mach', 50.00, 13000.00, 0, '2023-11-24 16:39:56.220990', '2023-11-25 22:39:00.000000', '2023-11-24 16:39:56.221122', 'Type: Fish\r\nOrigin: Podda', 'Didar');

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
(17, 'ashik', '12345', 'ashik@yahoo.com', 'Sherpur', 123331, 'field_officer'),
(18, 'Mughal', '12345', 'mughal@yahoo.com', 'Kisharganj', 213143, 'field_officer');

-- --------------------------------------------------------

--
-- Table structure for table `incoming_auction_images`
--

CREATE TABLE `incoming_auction_images` (
  `id` bigint NOT NULL,
  `post_id` int NOT NULL,
  `image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `incoming_auction_images`
--

INSERT INTO `incoming_auction_images` (`id`, `post_id`, `image`) VALUES
(2, 2, 'incoming_auction_images/tomato.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `incoming_auction_request`
--

CREATE TABLE `incoming_auction_request` (
  `post_id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `total_bidding_placed` int UNSIGNED NOT NULL,
  `start_time` datetime(6) NOT NULL,
  `end_time` datetime(6) NOT NULL,
  `current_time` datetime(6) NOT NULL,
  `posted_by` varchar(255) NOT NULL,
  `description` longtext NOT NULL
) ;

--
-- Dumping data for table `incoming_auction_request`
--

INSERT INTO `incoming_auction_request` (`post_id`, `name`, `amount`, `price`, `total_bidding_placed`, `start_time`, `end_time`, `current_time`, `posted_by`, `description`) VALUES
(2, 'Deshi Lal Tomato', 500.00, 5000.00, 0, '2023-11-24 07:10:48.419683', '2023-11-26 15:10:00.000000', '2023-11-24 07:10:48.419844', 'Didar', 'Type: Vegetable\r\nOrigin: Bangladesh');

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

-- --------------------------------------------------------

--
-- Table structure for table `latest_bidding`
--

CREATE TABLE `latest_bidding` (
  `id` bigint NOT NULL,
  `post_id` int NOT NULL,
  `max_price` decimal(10,2) NOT NULL,
  `current_price` decimal(10,2) NOT NULL,
  `last_bidder` varchar(255) DEFAULT NULL,
  `bidding_ended` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `latest_bidding`
--

INSERT INTO `latest_bidding` (`id`, `post_id`, `max_price`, `current_price`, `last_bidder`, `bidding_ended`) VALUES
(1, 1, 1200.00, 745.00, 'Didar', 0),
(2, 2, 8000.00, 6000.00, '', 0),
(3, 3, 65000.00, 54000.00, '', 0),
(4, 4, 70000.00, 49000.00, '', 0),
(5, 6, 2000.00, 500.00, '', 0),
(6, 7, 1000.00, 300.00, '', 0),
(8, 15, 10000.00, 5000.00, '', 0),
(10, 22, 50000.00, 2000.00, '', 0),
(11, 23, 500.00, 200.00, '', 0),
(15, 34, 70000.00, 58000.00, 'Didar', 0),
(16, 35, 99999999.00, 10000.00, '', 0),
(17, 36, 30000.00, 21000.00, 'Didar', 0),
(18, 37, 99999999.00, 13000.00, '', 0);

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
(27, 'linux12', '12345', 'linux@yahoo.com', 'Rampura', 123441, 'admin'),
(28, 'Mukto', '12345', 'muktobb@gmail.com', 'Pabna', 21312, 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `all_login_credentials`
--
ALTER TABLE `all_login_credentials`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `auction_images_react`
--
ALTER TABLE `auction_images_react`
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
-- Indexes for table `bloglist_fooditems`
--
ALTER TABLE `bloglist_fooditems`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bloglist_inventory`
--
ALTER TABLE `bloglist_inventory`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bloglist_inventory_items`
--
ALTER TABLE `bloglist_inventory_items`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `bloglist_inventory_items_foodinventory_id_foodite_19e10ef5_uniq` (`foodinventory_id`,`fooditem_id`),
  ADD KEY `bloglist_inventory_i_fooditem_id_78188814_fk_bloglist_` (`fooditem_id`);

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
-- Indexes for table `businessmen_credentials`
--
ALTER TABLE `businessmen_credentials`
  ADD PRIMARY KEY (`id`);

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
-- Indexes for table `expert_credentials`
--
ALTER TABLE `expert_credentials`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `farmer_auction_posts_inventory_list`
--
ALTER TABLE `farmer_auction_posts_inventory_list`
  ADD PRIMARY KEY (`post_id`);

--
-- Indexes for table `field_officer_credentials`
--
ALTER TABLE `field_officer_credentials`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `incoming_auction_images`
--
ALTER TABLE `incoming_auction_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `incoming_auction_request`
--
ALTER TABLE `incoming_auction_request`
  ADD PRIMARY KEY (`post_id`);

--
-- Indexes for table `incoming_requests`
--
ALTER TABLE `incoming_requests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `latest_bidding`
--
ALTER TABLE `latest_bidding`
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
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `auction_images_react`
--
ALTER TABLE `auction_images_react`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

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
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

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
  MODIFY `comment_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `bloglist_fooditems`
--
ALTER TABLE `bloglist_fooditems`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `bloglist_inventory`
--
ALTER TABLE `bloglist_inventory`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `bloglist_inventory_items`
--
ALTER TABLE `bloglist_inventory_items`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `blog_images_react`
--
ALTER TABLE `blog_images_react`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `blog_list`
--
ALTER TABLE `blog_list`
  MODIFY `post_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `blog_list_comments`
--
ALTER TABLE `blog_list_comments`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `businessmen_credentials`
--
ALTER TABLE `businessmen_credentials`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `expert_credentials`
--
ALTER TABLE `expert_credentials`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `farmer_auction_posts_inventory_list`
--
ALTER TABLE `farmer_auction_posts_inventory_list`
  MODIFY `post_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `field_officer_credentials`
--
ALTER TABLE `field_officer_credentials`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `incoming_auction_images`
--
ALTER TABLE `incoming_auction_images`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `incoming_auction_request`
--
ALTER TABLE `incoming_auction_request`
  MODIFY `post_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `incoming_requests`
--
ALTER TABLE `incoming_requests`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `latest_bidding`
--
ALTER TABLE `latest_bidding`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `user_credentials`
--
ALTER TABLE `user_credentials`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

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
-- Constraints for table `bloglist_inventory_items`
--
ALTER TABLE `bloglist_inventory_items`
  ADD CONSTRAINT `bloglist_inventory_i_foodinventory_id_fad37989_fk_bloglist_` FOREIGN KEY (`foodinventory_id`) REFERENCES `bloglist_inventory` (`id`),
  ADD CONSTRAINT `bloglist_inventory_i_fooditem_id_78188814_fk_bloglist_` FOREIGN KEY (`fooditem_id`) REFERENCES `bloglist_fooditems` (`id`);

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
