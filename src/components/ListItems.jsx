import CategoryItem  from "./CategortyItem";
import styles from "./ListItems.module.css"

const ListItems = () =>{
    return(
        <div className={styles.card_items}>
            <CategoryItem title="Electronics" url="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"></CategoryItem>
            <CategoryItem title="Appliances" url="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"></CategoryItem>
            <CategoryItem title="Grocery" url="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"></CategoryItem>
            <CategoryItem title="Fashion" url="https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100"></CategoryItem>
            <CategoryItem title="Travel" url="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100"></CategoryItem>

        </div>
    )
}


export default ListItems;