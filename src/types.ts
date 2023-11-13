import React from "react";

export type CartItem = {
	product: Product;
	size: string;
	quantity: number;
};

export type Cart = CartItem[];

export type User = {
	name: string;
};

export interface Product {
	id: string;
	name: string;
	summary: string;
	description: string;
	features: string[];
	preview: React.ReactElement;
	images: React.ReactElement[];
	reviews: Review[];
	price: number;
	sizes: string[];
	colors: string[];
}

export type Review = {
	rating: number;
	date: number;
	text?: string;
};

export type NerdBird = {
	name: string;
	bio: string;
	picture: React.ReactElement;
	socials?: string[];
};
