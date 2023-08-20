const Cart = ({ price, color, total }) => {
  return (
    <div className="cart">
      <p>
        {(price === 0 && color === 0 && (total = 90700)) ||
          (price === 0 && color === 1 && (total = 91700)) ||
          (price === 1 && color === 0 && (total = 106700)) ||
          (price === 1 && color === 1 && (total = 107700))}
        <span> €</span>{" "}
      </p>

      <button
        onClick={() => {
          alert("Thank you for your purchase");
        }}
      >
        Buy !
      </button>
    </div>
  );
};

export default Cart;
