import * as images from "./product-images/saber-stand/saber-stand-images";

export const SABER_STAND = {
    id: "0104",
    name: "Saber Stand",
    description:
        "A novel way to display your most valued light swords!",
    features: [
        "Displays your light swords",
        "Easily attaches and detaches from the wall",
        "Light swords can effortlessly be hung up and brought down",
    ],
    preview_image: images.img1,
    images: [
        {
            url: images.img1,
            title: "The most loyal & helpful coworker you will ever have",
            alt: "mounted on a wall",
        },
        {
            url: images.img2,
            title: "No matter how big the bug, ducky is there for you",
            alt: "showing how the light sword is mounted",
        },
        {
            url: images.img3,
            alt: "shows how the product is mounted to the wall",
        },
    ],
    reviews: [
        { rating: 5, text: "So impressed!", date: new Date(2023, 6, 13).valueOf() },
        { rating: 5, date: new Date(2023, 4, 10).valueOf() },
        {
            rating: 4,
            text: "Pretty good duck. I just wish it came with sunglasses.",
            date: new Date(2023, 1, 1).valueOf(),
        },
        {
            rating: 1,
            text: "Useless. Did not fix my bug :(",
            date: new Date(2022, 12, 15).valueOf(),
        },
        { rating: 4, date: new Date(2022, 11, 11).valueOf() },
        {
            rating: 3,
            text: "Meh, ok I guess",
            date: new Date(2022, 10, 30).valueOf(),
        },
    ],
    price: 29.95,
    sizes: ["S", "M", "L", "XL"],
    colors: ["black", "white", "orange", "pink"],
};