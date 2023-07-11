const AddToCart = ({addToCartImg})=>{
    return(
        <div className="add-to-cart-wrapper">
            <div className="add-to-cart-item">
                <img src={addToCartImg}  alt="" />
                <h6>Item name</h6>
            </div>
        </div>
    )
}

export default AddToCart;