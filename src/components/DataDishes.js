import greekSalad from '../assets/greek-salad.webp';
import bruchetta from '../assets/bruchetta.webp';
import lemonDessert from '../assets/lemon dessert.webp';
 const dishes = [
    {
        nom: "Greek salad",
        price: 12.99,
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        image: greekSalad
    },
    {
        nom: "Bruschetta",
        price: 5.99,
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        image: bruchetta
    },
    {
        nom:"Lemon Dessert",
        price: 5.00,
        description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        image: lemonDessert
    }
]
export default dishes;