import React from "react";
import { BsCartPlusFill } from "react-icons/bs";
import { toast } from "react-toastify";

const CartSection = ({ totalCart, setTotalCart, total, setTotal }) => {
  const handleRemoveSecectedItem = (productData) => {
    setTotalCart(
      totalCart.filter((singleCart) => singleCart.id !== productData.id),
    );
    setTotal(total - productData.price);
    toast("Successfully removed the cart");
  };

  const handleProceedButton = () => {
    setTotalCart([]);
    toast("Your order is successful!");
    setTotal(0);
  };
  return (
    <div>
      {!totalCart.length ? (
        <div className="card card-dash bg-base-400 space-y-28 border container mx-auto p-20 shadow-md mt-10">
          <h2 className="text-2xl font-bold">Your Cart</h2>
          <div className="grid justify-center gap-4">
            <BsCartPlusFill className="text-7xl ml-4 text-gray-400" />
            <p className="text-gray-300 font-semibold">Your cart is empty</p>
          </div>
        </div>
      ) : (
        <div className="card card-dash bg-base-400 border container mx-auto p-8 shadow-md mt-10 space-y-6">
          <h2 className="text-2xl font-bold">Your Cart</h2>

          <div className="grid gap-4">
            {totalCart.map((productData) => (
              <div
                key={productData.id}
                className="flex items-center justify-between rounded-2xl bg-gray-100 p-5 shadow-md"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={productData.icon}
                    alt={productData.name}
                    className="h-10 w-10 border-4 border-white rounded-full object-contain"
                  />
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-[#101727FF]">
                      {productData.name}
                    </h3>
                    <p className="text-xl font-extrabold text-[#101727FF]">
                      ${productData.price}
                    </p>
                  </div>
                </div>

                <button
                  className="text-xl font-extrabold text-red-500 cursor-pointer"
                  onClick={() => handleRemoveSecectedItem(productData)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="flex justify-between">
            <p>total:</p>
            <p className="font-bold text-2xl">${total}</p>
          </div>

          <button
            className="bg-linear-to-r from-[#7504fe] to-[#a139f6] text-white rounded-full px-6 py-3 cursor-pointer font-bold"
            onClick={handleProceedButton}
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartSection;
