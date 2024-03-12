import './Singlebottle.css'

const Singlebottle = ({bottle, handleAddToCart}) => {
    const {color, img, price} = bottle;
    // console.log(bottle)
    return (
        <div className="Single-Bottle">
            <h3>Separate Bottle: {color}</h3>
           <img src={img} alt="" />
           <p>Price: ${price}</p>
           <button onClick={()=>handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

export default Singlebottle;