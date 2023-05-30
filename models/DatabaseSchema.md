# Database Schema

CREATE TABLE `Address` (
	`address_id` varchar(10) NOT NULL,
	`customer_id` varchar(10),
	`address_line1` varchar(255),
	`address_line2` varchar(255),
	`city` varchar(255),
	`state` varchar(255),
	`zip_code` varchar(10),
	PRIMARY KEY (`address_id`)
)

CREATE TABLE `Admin` (
	`admin_id` varchar(10) NOT NULL,
	`name` varchar(255),
	`email` varchar(255),
	`password` varchar(255),
	PRIMARY KEY (`admin_id`)
) 

CREATE TABLE `Cart` (
	`cart_id` varchar(10) NOT NULL,
	`customer_id` varchar(10),
	PRIMARY KEY (`cart_id`)
) 

CREATE TABLE `CartProduct` (
	`cart_product_id` varchar(10) NOT NULL,
	`cart_id` varchar(10),
	`product_id` varchar(10),
	`quantity` int,
	PRIMARY KEY (`cart_product_id`)
)

CREATE TABLE `Category` (
	`category_id` varchar(10) NOT NULL,
	`name` varchar(255),
	PRIMARY KEY (`category_id`)
)

CREATE TABLE `Customer` (
	`customer_id` varchar(10) NOT NULL,
	`name` varchar(255),
	`email` varchar(255),
	`password` varchar(255),
	`address_id` varchar(10),
	PRIMARY KEY (`customer_id`)
)

CREATE TABLE `IdSequence` (
	`table_name` varchar(255) NOT NULL,
	`last_inserted_id` varchar(10),
	PRIMARY KEY (`table_name`)
) 

CREATE TABLE `IdSequence` (
	`table_name` varchar(255) NOT NULL,
	`last_inserted_id` varchar(10),
	PRIMARY KEY (`table_name`)
) 

CREATE TABLE `Order` (
	`order_id` varchar(10) NOT NULL,
	`customer_id` varchar(10),
	`order_date` date,
	`total_amount` decimal(10,2),
	PRIMARY KEY (`order_id`)
)

CREATE TABLE `OrderItem` (
	`order_item_id` varchar(10) NOT NULL,
	`order_id` varchar(10),
	`product_id` varchar(10),
	`quantity` int,
	`price` decimal(10,2),
	PRIMARY KEY (`order_item_id`)
)

CREATE TABLE `Product` (
	`product_id` varchar(10) NOT NULL,
	`name` varchar(255),
	`price` decimal(10,2),
	`category_id` int,
	`tags` varchar(255),
	PRIMARY KEY (`product_id`)
)

## Type of ID to be inserted

table_name				last_inserted_id

Address					ADD001
Admin					ADM001
Cart					CAR001
CartProduct				CARP001
Category				CAT001
Customer				CUS001
Inventory				INV001
Order					ORD001
OrderItem				ODI001
Product					PRD001
