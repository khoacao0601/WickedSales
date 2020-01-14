DROP TABLE `cartItems`;
DROP TABLE `carts`;
DROP TABLE `orders`;
DROP TABLE `products`;
-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 13, 2020 at 12:45 PM
-- Server version: 5.7.27-0ubuntu0.18.04.1
-- PHP Version: 7.2.24-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wickedSales`
--

-- --------------------------------------------------------

--
-- Table structure for table `cartItems`
--

CREATE TABLE `cartItems` (
  `cartItemId` int(11) NOT NULL,
  `cartId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `cartId` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `orderId` int(11) NOT NULL,
  `cartId` int(11) NOT NULL,
  `name` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `creditCard` varchar(24) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `shippingAddress` varchar(128) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `productId` int(11) NOT NULL,
  `name` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(11) NOT NULL,
  `image` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shortDescription` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `longDescription` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`productId`, `name`, `price`, `image`, `shortDescription`, `longDescription`) VALUES
(1, 'Orange (2-Lb)', 999, '/images/orange.jpg', 'Delicious and Sweet Sun Drenched Fresh Navel Oranges. They will be delighted.', 'Organic Mountain Orchards Gift Oranges World Class Grade \'A\' Navel Oranges from Organic Mountain Orchards set the standard for the world\'s finest oranges. We hand select each of our oranges for their freshness, beauty and delicious citrus flavor. This product is as close to perfection as you can find in nature. Eating an Organic Mountain Orchards Gift World Class Grade \'A\' Orange is like eating an orange that you picked off the tree yourself. Our Gift Navel Oranges are hand selected at the peak of ripeness, and meticulously hand packed, so what arrives at your door is a delightful box of fresh World Class Grade \'A\' Oranges, bursting with sweet juice and tangy flavor! We absolutely guarantee our World Class Grade \'A\' Oranges to be of the highest quality you can find anywhere! Our goal is, that when you order Organic Mountain Orchards World Class Grade \'A\' Oranges, you will be treated to the \"Ultimate Orange Experience\". Want a few good reasons to enjoy World Class Grade \'A\' Oranges? Consider a few of the health benefits associated with eating World Class Grade \'A\' Oranges and other citrus products: World Class Grade \'A\' Oranges?\r\n\r\n'),
(2, 'Apple (1-Lb)', 599, '/images/apple.jpg', 'These apples are grown without the use of harmful pesticides, fertilizers', ' Now the delicious apples that everyone has grown up loving is available in organic. These apples are grown without the use of harmful pesticides, fertilizers, or preservatives. Melissa\'s Organic label reads: \"Melissa\'s Certified Organic Produce is free of artificial or synthetic fertilizers and full of unforgettable, great tasting flavor. '),
(3, 'Banana (1-Lb)', 399, '/images/bananas.jpg', 'Organic means grown without the use of chemicals, additives, pesticides etc..', 'Organic bananas differ from regular or supermarket bought ones in that organic ones are grown naturally without pesticides and insecticides etc . Organic bananas are usually easily bruised and ripen very quickly once it is cut compared to supermarket ones. Supermarket ones look prettier and the skin is slightly thicker and the fruit is slightly less sweet.'),
(4, 'Used Bike', 7999, '/images/bike.jpg', 'Typically $1,799.99 - now is almost 95% off!', 'This is for cyclists on the go every single day. Go! brings Argon 18\'s road race geometry and performance to everyone. Race it, commute with it, take it out on weekend rides or even coffee runs. Comfortable, light, nimble, and not to mention Argon 18’s legendary head-turning looks, Go! will get you where you want to go in no time flat.'),
(5, 'Used Couch', 10099, '/images/couch.jpg', 'Made with 100% Polyester Upholstery Microfiber Material', 'Your personal and work life collide sometimes. This multi-functional three piece Sofa Set with beautiful curved arm is de-signed for the busy person with a huge to-do list and a great need to just relax! Jump into your beautiful, busy life with the Hartford. No time like the present. Studio Living feature premium sourced foams that provide maximum comfort for sitting & sleeping. The foam construction is thoughtfully designed with responsive foam layering that is constructed to \'bounce back\' and contour to your body for long lasting support. Sit, sleep, relax and recline effortlessly!'),
(6, 'Used Grill', 5099, '/images/grill.jpg', 'Griddle top is easily removable.MADE IN THE USA.', 'This rugged, charcoal hibachi-style grill is perfect for picnics, tailgating, camping, or patio. The Lodge Cast Iron Sportsman\'s Grill features a draft door that regulates heat. Coals are accessible behind a flip-down door. Grill has two adjustable heights. With over 120 years of experience, their cast iron is known for its high quality design, lifetime durability, and cooking versatility.'),
(7, 'Lemon ', 499, '/images/lemon.jpg', 'Organic Lemons, 1 lb bag. an excellent source of the antioxidant vitamin C', 'Organic Lemons are free of artificial or synthetic fertilizers and are full of unforgettable, great tasting flavor. These lemons are perfect for marinades, sauces, and fruit salads (their juice is great for preserving cut fruits). Melissa\'s Organic Produce, is a choice made closer to nature.'),
(8, 'Rosemary', 699, '/images/rosemary.jpg', 'The fresh taste of Simply Organic Rosemary, 1 lb pack', 'Try rosemary in soups, stews and sauces, with apples and other fruits. Enjoy its balsamic tone in herb vinegars and salad dressings as well as breads (rosemary and olive oil focaccia, for example). It makes a refreshing tea and interesting addition to lemonade. You\'ll find rosemary in recipes for marinades, baked fish, rice, eggs, and dumplings. You\'ll also find it in liqueurs like benedictine, summer wines and fruit cordials and in the blends bouquet garni and herbes de Provence. Unlike many seasonings, rosemary doesn\'t lose any of its potent flavor or aroma during cooking.'),
(9, 'Tomato', 1199, '/images/tomatoes.jpg', 'Tomatoes are the major dietary source of the antioxidant lycopene', 'The fruit is highly nutritious. Tomatoes contain a significant amount of the antioxidant carotenoid, lycopene, found to be protective against several types of cancers. Another reason to grow organic: organic tomatoes have been shown to contain higher levels of lycopene than their non-organic counterparts.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cartItems`
--
ALTER TABLE `cartItems`
  ADD PRIMARY KEY (`cartItemId`);

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`cartId`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`orderId`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`productId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cartItems`
--
ALTER TABLE `cartItems`
  MODIFY `cartItemId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `cartId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `orderId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `productId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
