import styles from "./CategoryItem.module.css"

const CategoryItem = ({url,title}) => {
    return(
        <div className={styles.card}>
            <img src = {url} alt = {title}></img>
            <h6>{title}</h6>
        </div>
    )
}

export default CategoryItem;