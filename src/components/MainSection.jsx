import React, { useState } from "react";
import { toast } from "react-toastify";

const MainSection = ({ cart, setCart, products }) => {
  const [activeTab, setActiveTab] = useState("products");

  // ✅ Add to Cart
  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      toast.warning("Item already in cart ⚠️");
      return;
    }

    setCart([...cart, product]);
    toast.success(`${product.name} added to cart 🛒`);
  };

  // ✅ Remove from Cart
  const removeFromCart = (id) => {
    const item = cart.find((i) => i.id === id);
    setCart(cart.filter((item) => item.id !== id));
    toast.error(`${item.name} removed from cart ❌`);
  };

  // ✅ Checkout
  const clearCart = () => {
    if (cart.length === 0) {
      toast.info("Cart is already empty ⚠️");
      return;
    }

    setCart([]);
    toast.success("Order placed successfully 🎉");
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="max-w-275 mx-auto py-16">

      {/* 🔹 Heading */}
      <div className="text-center max-w-2xl mx-auto px-4 py-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Premium Digital Tools
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-6">
          Choose from our curated collection of premium digital products designed
          to boost your productivity and creativity.
        </p>

        {/* 🔹 Toggle */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setActiveTab("products")}
            className={`px-5 py-2 rounded-full ${
              activeTab === "products"
                ? "bg-purple-600 text-white"
                : "bg-gray-200"
            }`}
          >
            Products
          </button>

          <button
            onClick={() => setActiveTab("cart")}
            className={`px-5 py-2 rounded-full ${
              activeTab === "cart"
                ? "bg-purple-600 text-white"
                : "bg-gray-200"
            }`}
          >
            Cart ({cart.length})
          </button>
        </div>
      </div>

      {/* 🔹 PRODUCTS */}
      {activeTab === "products" && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {products.map((p) => {
            const isInCart = cart.some((item) => item.id === p.id);

            return (
              <div key={p.id} className="border border-[#F2F2F2] p-5 rounded-xl">
                <div className="flex items-center justify-between">
                  <div className="text-3xl">{p.icon}</div>
                  <span className="text-xs bg-purple-100 px-2 py-1 rounded">
                    {p.tag}
                  </span>
                </div>

                <h3 className="font-semibold mt-3">{p.name}</h3>
                <p className="text-sm text-gray-500">{p.description}</p>

                <p className="font-bold mt-2">
                  ${p.price} / {p.period}
                </p>

                <ul className="text-sm mt-2 space-y-1">
                  {p.features.map((f, i) => (
                    <li key={i}>✔ {f}</li>
                  ))}
                </ul>

                {/* ✅ Button */}
                <button
                  onClick={() => addToCart(p)}
                  disabled={isInCart}
                  className={`mt-4 w-full py-2 rounded-full transition-all duration-300 ${
                    isInCart
                      ? "bg-green-500 text-white cursor-not-allowed"
                      : "bg-purple-600 text-white hover:bg-purple-700"
                  }`}
                >
                  {isInCart ? "Added to Cart!" : "Buy Now"}
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* 🔹 CART */}
      {activeTab === "cart" && (
        <div className="mt-10 border border-[#F2F2F2] p-6 rounded-xl max-w-2xl mx-auto">
          <h2 className="text-[#101727] font-bold mb-4">Your Cart</h2>

          {cart.length === 0 ? (
            <p className="text-center text-gray-500">Cart is empty</p>
          ) : (
            <>
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between bg-gray-100 p-4 rounded mb-3"
                >
                  <div className="flex gap-3">
                    <span>{item.icon}</span>
                    <div>
                      <p>{item.name}</p>
                      <p className="text-sm">${item.price}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500"
                  >
                    Remove
                  </button>
                </div>
              ))}

              <div className="flex justify-between mt-4 font-semibold">
                <span>Total:</span>
                <span>${total}</span>
              </div>

              <button
                onClick={clearCart}
                className="mt-4 w-full py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700"
              >
                Proceed to Checkout
              </button>
            </>
          )}
        </div>
      )}
    </section>
  );
};

export default MainSection;