-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 21, 2022 at 06:04 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project`
--

-- --------------------------------------------------------

--
-- Table structure for table `product2`
--

CREATE DATABASE product;
USE product;

CREATE TABLE `product2` (
  `id` int(100) NOT NULL,
  `title` varchar(150) NOT NULL,
  `price` int(100) NOT NULL,
  `image` varchar(150) NOT NULL,
  `description` varchar(250) NOT NULL,
  `ingredients` varchar(250) NOT NULL,
  `diet` varchar(250) NOT NULL,
  `brand` varchar(150) NOT NULL,
  `date_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product2`
--

INSERT INTO `product2` (`id`, `title`, `price`, `image`, `description`, `ingredients`, `diet`, `brand`, `date_at`) VALUES
(1, 'Aero', 200, 'assets/images/foods/aero.jpg', 'Feel the bubbles melt as you bite into Aero Caramel Gold Milk Chocolate Block. Discover delicately light bubbles of caramel choc covered in smooth milk chocolate. Made with 100% certified sustainable cocoa, supplied through the Nestle Cocoa Plan.', 'Ingredients Sugar, Milk Solids, Vegetable Fat [Emulsifier (Soy Lecithin)], Cocoa Butter^, Cocoa Mass^, Emulsifiers (Soy Lecithin, 476), Glucose, Flavors . Contains Milk, Soy. May Contain Tree Nuts, Gluten Containing Ingredients. Milk Chocolate Contai', 'May Contain Gluten, May Contain Tree Nuts, Contains Milk, Contains Soybean', 'Aero', '2022-09-14 16:48:27'),
(2, 'Belgian Dark', 350, 'assets/images/foods/belgiandark.jpg', 'Dark chocolate connoisseurs, enjoy this delicious dark bar with 85 percent of cocoa. ', 'Cocoa mass, Sugar, Emulsifier: Lecithins; Cocoa butter.', 'May contain traces of gluten, milk, nuts and soya.', 'The Belgian', '2022-09-14 16:48:27'),
(3, 'Belgian Milk', 350, 'assets/images/foods/belgianmilk.jpg', 'Seize the day without feeling guilty with these Milk Chocolate Reduced Sugars Bar. Reduced sugars bars are developed for diet-conscious customers.', 'Sweetener: Maltitol 42%; Cocoa butter, Full cream MILK powder, Cocoa mass, Emulsifier: Lecithins; flavour.', 'May contain traces of gluten, soya and nuts.', 'The Belgian', '2022-09-14 16:48:27'),
(4, 'Caramello', 150, 'assets/images/foods/caramello.jpg', 'CARAMELLO Milk Chocolate Bars are made with Cadburys famously rich and creamy milk chocolate and filled with a deliciously smooth caramel center.', 'Full Cream Milk, Sugar, Cocoa Butter, Glucose Syrup, Milk Solids, Cocoa Mass, Sweetened Condensed Milk (Milk, Sugar), Golden Syrup, Invert Sugar, Vegetable Fat, Emulsifiers (Soy Lecithin, 476), Salt, Acidity Regulator (331), Flavours.', 'May Be Present: Tree Nuts, Contains Soy, Peanuts, Milk, Wheat.', 'Cadbury', '2022-09-14 16:48:27'),
(5, 'Caramilk', 150, 'assets/images/foods/caramilkb.jpg', 'A uniquely crafted golden white chocolate made from 100% sustainable cocoa, with a smooth, silky texture and delicious caramel taste.', 'Sugar, cocoa butter, caramelised MILK powder [skimmed MILK powder, whey powder (from MILK), sugar, BUTTER, natural flavouring], whey powder (from MILK), skimmed MILK powder, MILK fat, emulsifier (SOYA lecithins).', 'May contain nuts, wheat.', 'Cadbury', '2022-09-14 16:48:27'),
(6, 'KitKat', 100, 'assets/images/foods/kitkat.jpg', 'Unwrap, break off a finger, snap it in two and savour the crispy wafer finger covered in deliciously smooth milk chocolate, ideal for a break at home or work.', 'Sugar, Wheat Flour (contains Calcium, Iron, Thiamin and Niacin), Milk Powders (Whole and Skimmed), Cocoa Mass, Cocoa Butter, Vegetable Fats (Palm, Shea, Mango Kernel, Sal), Lactose and Proteins from Whey (from Milk), Whey Powder (from Milk), Butterfa', 'Suitable for Vegetarians, Contains Milk, No Artificial Colours, No Artificial Flavours, No Artificial Preservatives.', 'Nestle', '2022-09-14 16:48:27'),
(7, 'KitKat Dark', 120, 'assets/images/foods/kitkatdark.jpg', 'Discover Dark Down Under! Discover the indulgent dark chocolate experience of KitKat Dark with Yorke Peninsula Sea Salt & Caramel. Just unwrap, snap off a finger and savour the delectable combination of caramel, salt & rich dark chocolate.', 'Sugar, Cocoa Mass^, Whea T Flour, Vegetable Fat [Emulsifier (Soy Lecithin)], Milk Solids, Choc Paste (Milk, Wheat, Soy), Caramelised Sugar (0.7%), Emulsifiers (Soy Lecithin, 476), Cocoa^, Cocoa Butter^, Salt (0.2%), Flavour [Colour (150d)]), Raising ', 'May Contain Tree Nuts, Contains Milk, Contains Wheat, Contains Soybean.', 'Nestle', '2022-09-14 16:48:27'),
(8, 'KitKat Gold', 200, 'assets/images/foods/kitkatgold.jpg', 'Caramelise your break! Break into KitKat Gold Choc Block to discover a different way to break. Just unwrap, snap and savour the delicious gold choc. 11 crisp batch baked wafer fingers, smothered in deliciously creamy gold choc with a caramelised tast', 'Sugar, Vegetable Fat [Emulsifier ( Soy Lecithin) Milk Soilds, Wheat Flour, Choc Paste ( Milk , Wheat, Soy ), Emulsifier ( Soy Lecithin, 476), Cocoa, Flavour, Glucose, Yeast, Raising Agent (Sodium Bicarbonate), Salt, Cocoa Butter, Cocoa Mass. Contains', 'May Contain Tree Nuts, Contains Milk, Contains Wheat, Contains Soybean.', 'Nestle', '2022-09-14 16:48:27'),
(9, 'Milkybar', 150, 'assets/images/foods/milkybar.jpg', 'Fall in love with the creamy caramelised taste of Milkybar Gold - deliciously smooth golden white choc that is as good as gold! Enjoy a piece of Milkybar Gold Choc and savour the gold standard in caramelised taste.', 'Sugar, Milk Solids (30%), Vegetable Fat [Emulsifier ( Soy Lecithin)], Emulsifiers ( Soy Lecithin, 476), Glucose, Flavour.', 'Contains Milk and Soy. May Contain Tree Nuts and Gluten Containing Ingredients.', 'Nestle', '2022-09-14 16:48:27');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(100) NOT NULL,
  `title` varchar(150) NOT NULL,
  `price` int(100) NOT NULL,
  `image` varchar(150) NOT NULL,
  `description` varchar(250) NOT NULL,
  `ingredients` varchar(250) NOT NULL,
  `diet` varchar(250) NOT NULL,
  `brand` varchar(150) NOT NULL,
  `date_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `title`, `price`, `image`, `description`, `ingredients`, `diet`, `brand`, `date_at`) VALUES
(1, 'Caramilkies', 50, 'assets/images/foods/caramilk.jpg', 'A uniquely crafted golden white chocolate made from 100% sustainable cocoa, with a smooth, silky texture and delicious caramel taste.', 'Sugar, cocoa butter, caramelised MILK powder [skimmed MILK powder, whey powder (from MILK), sugar, BUTTER, natural flavouring], whey powder (from MILK), skimmed MILK powder, MILK fat, emulsifier (SOYA lecithins).', 'MAY CONTAIN NUTS, WHEAT', 'Cadbury', '2022-08-29 13:01:16'),
(2, 'Chokito', 80, 'assets/images/foods/chokito.jpg', 'Say YES to the good stuff. Bite into Chokito Milk Chocolate Bar - chewy caramel fudge centre, crunchy, crispy balls and loads of delicious milk chocolate.', 'Sugar, Sweetened Condensed Milk ( Milk , Sugar), Glucose Syrup, Milk Solids, Vegetable Fat [Emulsifiers (492, Soy Lecithin)], Choc Cereal Balls (5%) [ Wheat Flour, Maize Flour, Sugar, Cocoa, Salt], Cocoa Butter, Cocoa Mass, Humectant (420), Fondant (', 'Contains Gluten, May Be Present Tree Nuts, Contains Soy, Contains Milk, Contains Wheat', 'Nestle', '2022-08-29 13:01:16'),
(3, 'KitKat', 90, 'assets/images/foods/chunky.jpg', 'Break off a piece of the iconic KitKat Chunky Milk Chocolate Bar when you next need a bigger, bolder break. Just unwrap, snap and enjoy the deliciously smooth milk chocolate.', 'Sugar, Full Cream Milk Powder, Wheat Flour, Cocoa Butter, Vegetable Fat [Emusifier ( Soy Lecithin)], Cocoa Mass, Cocoa, Glucose Syrup, Emusifiers ( Soy Lecithin, 476), Yeast, t, Raising Agent (Sodium Bicarbonate), Salt, Flavours. Contains Milk, Soy a', 'Contains Gluten, May Contain Tree Nuts, Contains Milk, Contains Wheat, Contains Soybean', 'Nestle', '2022-08-29 13:01:16'),
(4, 'Crunchie', 80, 'assets/images/foods/crunchie.jpg', 'A chunky, gold bar of delicious honeycomb, smothered in thick Cadbury milk chocolate that shatters into mouth-watering crunchy pieces.', 'Sugar, glucose syrup, cocoa butter, cocoa mass, skimmed MILK powder, whey permeate powder (from MILK), palm oil, MILK fat, emulsifier (E442), flavourings, coconut oil.', 'May Be Present Tree Nuts, Contains Soy, May Be Present Peanuts, Contains Milk, May Be Present Wheat', 'Cadbury', '2022-08-29 13:01:16'),
(5, 'Dairy Milk', 75, 'assets/images/foods/dairymilk.jpg', 'Classic bar of deliciously creamy Cadbury Dairy Milk milk chocolate, made with fresh milk from the British Isles and Ireland. A mouthful of “mmmm” in every piece!', 'Full Cream Milk, Sugar, Cocoa Butter, Cocoa Mass, Milk Solids, Emulsifiers (Soy Lecithin, 476), Flavours.', 'MAY CONTAIN NUTS, WHEAT.', 'Cadbury', '2022-08-29 13:01:16'),
(6, 'Mars', 30, 'assets/images/foods/mars.jpg', 'When you need a big, bold dose of chocolate positivity, reward yourself with a MARS bar. With the legendary taste of soft nougat, slathered in caramel and covered in thick milk chocolate, MARS chocolate bars have enough chocolate to deal with anythin', 'Sugar, Glucose Syrup (Sources include Wheat), Milk Solids, Cocoa Mass, Cocoa Butter, Vegetable Oil, Vegetable Fat, Barley Malt Extract, Emulsifier (Soy Lecithin), Salt, Egg White, Natural Flavour (Vanilla Extract).', 'May Be Present Tree Nuts, Contains Barley, Contains Soy, May Be Present Peanuts, Contains Milk, Contains Egg, Contains Wheat', 'Mars', '2022-08-29 13:01:16'),
(7, 'Perky Nana', 70, 'assets/images/foods/perkynana.jpg', 'Cadbury Perky Nana, a banana flavoured chew bar covered with delicious milk chocolate. ', 'Sugar, Glucose Syrup, invert Sugar, Milk Solids, Cocoa Butter, Cocoa Mass, Maltodextrin, Gelatine, Colour (E100), Hydrolised Milk Protein, Food Acid (E330), Flavours, Emulsifiers (Soy Lecithin, E476), Cornstarch.', 'Contains Milk', 'Cadbury', '2022-08-29 13:01:16'),
(8, 'Pixie', 80, 'assets/images/foods/pixie.jpg', 'The original Pixie Caramel with the longer-lasting chew! Another New Zealand favourite, a gorgeous filling of chewy caramel coated in delicious dark chocolate.', 'Sugar, Vegetable Fat [Emulsifiers (Soy Lecithin, 492)], Cocoa, Glucose Syrup (Derived From Wheat or Corn), Sweetened Condensed Milk (Milk Sugar), Whey Powder (Milk), Cocoa Mass, Cocoa Butter, Emulsifiers (471, 476), Salt, Flavours [Colour (150D)]', 'May Contain Tree Nuts, Contains Soy, Contains Milk, Contains Wheat', 'Nestle', '2022-08-29 13:01:16'),
(9, 'Snickers', 40, 'assets/images/foods/snickers.jpg', 'Game nights. Bush hikes. Long commutes. Threethirtyitis. Youre Not You When Youre Hungry. And youre not hungry if you have a satisfying SNICKERS chocolate snack to hand.', 'Sugar, Peanuts, Glucose Syrup (Sources Include Wheat), Milk Solids, Cocoa Butter, Cocoa Mass, Vegetable Fat, Salt, Emulsifier (Soy Lecithin), Egg White, Flavour.', 'May Be Present Tree Nuts, Contains Soy, Contains Milk, Contains Egg, Contains Peanuts, Contains Wheat', 'Mars', '2022-09-15 19:58:58');

-- --------------------------------------------------------

--
-- Table structure for table `products3`
--

CREATE TABLE `products3` (
  `id` int(100) NOT NULL,
  `title` varchar(150) NOT NULL,
  `price` int(100) NOT NULL,
  `image` varchar(150) NOT NULL,
  `description` varchar(250) NOT NULL,
  `ingredients` varchar(250) NOT NULL,
  `diet` varchar(250) NOT NULL,
  `brand` varchar(150) NOT NULL,
  `date_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products3`
--

INSERT INTO `products3` (`id`, `title`, `price`, `image`, `description`, `ingredients`, `diet`, `brand`, `date_at`) VALUES
(1, 'Celebrations', 550, 'assets/images/foods/celeb.jpg', 'Mars Celebrations are the first mixed box of chocolates to bring together branded confectioneries as: Mars, Bounty, Snickers, Dove / Galaxy, Dove Caramel / Galaxy Caramel, Twix, Maltesers, and Milky Way,', 'Sugar, Glucose Syrup, Cocoa Butter, Skimmed Milk Powder, Cocoa Mass, Milk Fat, Lactose, Palm Fat, Peanuts, Desiccated Coconut, Whey Powder (from Milk), Wheat Flour, Sunflower Oil, Full Cream Milk Powder, Emulsifiers (Soya Lecithin, E471), Barley Malt', 'Kosher, Suitable for Vegetarians, May Contain Almonds, Contains Barley, Contains Eggs, May Contain Hazelnuts, Contains Milk, May Contain Oats, Contains Peanuts, Contains Soya, Contains Wheat.', 'Mars', '2022-09-14 17:20:57'),
(2, 'Favourites', 500, 'assets/images/foods/favourits.jpg', 'Cadbury Favourites brings together all your favourite Cadbury products so that Everyone Gets Their Favourites! Cadbury Favourites contains: Cadbury Dairy Milk, Cadbury Dairy Milk Caramello, Cadbury Dream, Cadbury Old Gold, Cadbury Flake, Cadbury Crun', 'Sugar, glucose syrup, cocoa butter, milk solids, full cream milk, cocoa mass, sweetened condensed milk, vegetable fat, peanuts pieces, invert sugar, wheat flour, biscuit (contains wheat flour), golden syrup, cocoa powder, emulsifiers (soy lecithin, 4', 'Kosher, Suitable for Vegetarians, May Contain Almonds, Contains Barley, Contains Eggs, May Contain Hazelnuts, Contains Milk, May Contain Oats, Contains Peanuts, Contains Soya, Contains Wheat.', 'Cadbury', '2022-09-14 17:20:57'),
(3, 'Ferrero Rocher', 600, 'assets/images/foods/ferrero.jpg', 'Whole hazelnut in milk chocolate and nut croquante, a perfect gift to share with your loved ones. Ferrero Rocher offers a delicious taste experience due to its unique combination of layers and textures. A whole hazelnut surrounded by delicious layers', 'Milk Chocolate 30% (Sugar, Cocoa Butter, Cocoa Mass, Skimmed Milk Powder, Concentrated Butter, Emulsifier: Lecithins (Soya), Vanillin), Hazelnuts (28.5%), Sugar, Palm Oil, Wheat Flour, Whey Powder (Milk), Fat-Reduced Cocoa, Emulsifier: Lecithins (Soy', 'Suitable for Vegetarians, Contains Hazelnuts, Contains Milk, Contains Soya, Contains Wheat.', 'Ferrero', '2022-09-14 17:20:57'),
(4, 'Kisses Milk Chocolate', 450, 'assets/images/foods/kisses.jpg', 'The iconic shape, festive foil wrappers and classic taste of HERSHEYS KISSES Milk Chocolate make them perfect for sharing and savoring. Use HERSHEYS KISSES Milk Chocolates in your favorite recipes, in your everyday candy dish and at your next party o', 'Milk Chocolate (Sugar, Milk, Chocolate, Cocoa Butter, Milk Fat, Lecithin, Natural Flavor).', 'Contains: Soy, Milk', 'Hershey', '2022-09-14 17:20:57'),
(5, 'Maltesers', 550, 'assets/images/foods/maltesers.jpg', 'Now you can share the lighter way to enjoy EVEN MORE chocolate with this medium share bag of melt-in-the-mouth MALTESERS, featuring crisp malt centres covered with LOTS MORE delicious milk chocolate. Perfect for movie nights and get-togethers!', 'Sugar, Skimmed Milk Powder, Cocoa Butter, Glucose Syrup, Barley Malt Extract, Cocoa Mass, Palm Fat, Lactose and Protein from Whey (from Milk), Emulsifiers (Soya Lecithin, E492), Wheat Flour, Palm Kernel Fat, Palm Kernel Oil, Raising Agents (E341, E50', 'Kosher, Suitable for Vegetarians, Contains Barley, Contains Milk, Contains Soya, Contains Wheat.', 'Mars', '2022-09-14 17:20:57'),
(6, 'MatchMakers', 450, 'assets/images/foods/matchmakers.jpg', 'Now you can share the lighter way to enjoy EVEN MORE chocolate with this medium share bag of melt-in-the-mouth MALTESERS, featuring crisp malt centres covered with LOTS MORE delicious milk chocolate. Perfect for movie nights and get-togethers!', 'Sugar, Cocoa Mass, Glucose Syrup, Cocoa Butter, Skimmed Milk Powder, Lactose and Proteins from Whey (from Milk), Whey Powder (from Milk), Vegetable Fats (Mango Kernel, Palm, Sal, Shea), Emulsifier (Lecithins), Natural Peppermint Flavourings.', 'Suitable for Vegetarians, Contains Milk, No Artificial Colours, No Artificial Flavours, No Artificial Preservatives.', 'Nestle', '2022-09-14 17:20:57'),
(7, 'Pergale', 650, 'assets/images/foods/pergale.jpg', 'Perfect MILK chocolates for coffee, tea or own its own to experience the real luxury flavor of this chocolate delicacy. HIGH QUALITY chocolates bought and loved by lovers of luxury chocolate snacks.', 'Contains milk, soya, hazelnuts. May contain almonds, pistachios, cashew nuts, peanuts, wheat, eggs and their products., Milk Chocolate (Sugar, Cocoa Butter, Whole-Milk Powder, Cocoa Mass, Skimmed Milk Powder, Emulsifiers: Soy Lecithins, Polyglycerol ', 'Kosher, Suitable for Vegetarians, May Contain Almonds, Contains Barley, Contains Eggs, May Contain Hazelnuts, Contains Milk, May Contain Oats, Contains Peanuts, Contains Soya, Contains Wheat.', 'Pergale', '2022-09-14 17:20:57'),
(8, 'Roses', 590, 'assets/images/foods/roses.jpg', 'Cadbury Roses are a perfect way to say Thank You to family and friends. Featuring a delicious variety of popular flavours covered in our famous Cadbury chocolate. An assortment of Classic Milk, Hazelnut Creme Crisp, Vanilla Nougat, White Raspberry, C', 'Sugar, milk solids, glucose syrup, cocoa mass, cocoa butter, vegetable fat, sweetened condensed milk, invert sugar, cocoa powder, malt extract (from barley), humectant (422), caramelized hazelnuts (contains dextrose (from wheat)), golden syrup, rice ', 'Contains milk, hazelnuts, wheat, barley, soy, peanuts. May contain other tree nuts.', 'Cadbury', '2022-09-14 17:20:57'),
(9, 'Royal Thins', 700, 'assets/images/foods/royal.jpg', 'The delicious Royal Thins Mango are filled with an irresistible mango cream covered with the finest dark chocolate.', 'Sugar, cocoa mass, glucose syrup, cocoa butter, water, natural flavour, invert sugar syrup, colouring food: carrot juice concentrate; Emulsifier: lecithin (sunflower); Humectant: Invertase; Acidulant: citric acid; Gelling agent: agar-agar; Salt', 'May contain nuts, peanuts, soya, dairy and grain', 'Royal Chocolates', '2022-09-14 17:20:57'),
(10, 'Waikato', 700, 'assets/images/foods/waikato.jpg', 'This packet of Scorched Almonds are brought to you from the lush green pastures of the Waikato plains.', 'Dark Chocolate (87%) (Sugar, Cocoa Mass, Cocoa Butter, Emulsifiers (Soy Lecithin, 476), Flavour, Milk Solids), Roasted Almonds (13%), Glazing Agent (304)', 'May contain Wheat, Peanuts and Other Tree Nuts, Contains Milk, Soy and Almonds', 'Waikato', '2022-09-15 19:04:49');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(100) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `gender` varchar(50) NOT NULL,
  `contactNum` varchar(50) NOT NULL,
  `adrs` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `pwd` varchar(50) NOT NULL,
  `role` varchar(100) NOT NULL,
  `verified` varchar(100) NOT NULL,
  `money` int(100) NOT NULL,
  `createDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `gender`, `contactNum`, `adrs`, `email`, `pwd`, `role`, `verified`, `money`, `createDate`) VALUES
(1, 'Admin', 'User', 'Male', '09563215896', '43 Donea St., Santa Paula, Quezon City', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'Admin', 'Verify', 530, '2022-08-22 05:39:56'),
(85, 'jc', 'pesssss', 'Male', '0999', 'dona aurora', 'jc@gmail.com', '202cb962ac59075b964b07152d234b70', 'Admin', 'No', 0, '2022-09-08 21:57:38'),
(88, 'gol', 'roger', 'Male', '09999', 'one piece', 'goldroger@gmail.com', '202cb962ac59075b964b07152d234b70', 'Registered', 'Verify', 10000, '2022-09-12 09:24:35'),
(89, 'JC', 'Pesquera', 'Male', '0921219988', 'Lala Land', 'jcpesquera123@gmail.com', '202cb962ac59075b964b07152d234b70', 'Staff', 'Verify', 50, '2022-09-12 10:35:08'),
(91, 'Namimi', 'Nomi', 'Female', '4555', '343', 'nami@gmail.com', '202cb962ac59075b964b07152d234b70', 'Registered', 'Verify', 0, '2022-09-14 09:32:42'),
(92, 'luffy', 'roger', 'Male', '0999', 'ererere', 'lu@gmail.com', '202cb962ac59075b964b07152d234b70', 'Registered', 'Verify', 160, '2022-09-14 09:33:38'),
(94, 'new', 'User', 'Male', '', '', 'new@gmail.com', '202cb962ac59075b964b07152d234b70', 'Registered', 'No', 0, '2022-09-14 11:31:27'),
(95, 'staff', 'staff', 'Male', '1234567890', '', 'staff', '1253208465b1efa876f982d8a9e73eef', 'Staff', 'Unverified User', 0, '2022-09-14 21:32:36'),
(96, 'Monnie', 'Cruz', 'Male', '09453687415', '12 Rizal St., Brgy San Jose, Quezon City', 'mon@gmail.com', '202cb962ac59075b964b07152d234b70', 'Registered', 'Verify', 3860, '2022-09-15 21:29:53'),
(97, 'Lois', 'Macapanas', 'Male', '09283746172', '13 Sumalangit St. Brgy. San Juan, Quezon City', 'ron@gmail.com', '202cb962ac59075b964b07152d234b70', 'Registered', 'Pending', 0, '2022-09-19 02:02:30'),
(98, 'Aeron', 'Macapanas', 'Male', '09128475862', '14 Sampaguita St. Brgy San Juan Quezon City', 'aeron@gmail.com', '202cb962ac59075b964b07152d234b70', 'Registered', 'No', 0, '2022-09-19 09:13:04'),
(99, 'Stef', 'Salvador', 'Female', '09546321575', '13 Malaya St., Brgy Cruz, Quezon City', 'stef@gmail.com', '202cb962ac59075b964b07152d234b70', 'Registered', 'Verify', 1000, '2022-09-21 10:30:19');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product2`
--
ALTER TABLE `product2`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products3`
--
ALTER TABLE `products3`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product2`
--
ALTER TABLE `product2`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=164;

--
-- AUTO_INCREMENT for table `products3`
--
ALTER TABLE `products3`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
