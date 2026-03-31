import React, { useState } from "react";
import { products } from "../data/products";

const MainSection = ({ cart, setCart }) => {
  const [activeTab, setActiveTab] = useState("products");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="max-w-275 mx-auto py-16">

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

      {/* 🔹 PRODUCTS */}
      {activeTab === "products" && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {products.map((p) => (
            <div key={p.id} className="border p-5 rounded-xl">

              <span className="text-xs bg-purple-100 px-2 py-1 rounded">
                {p.tag}
              </span>

              <div className="text-3xl mt-3">{p.icon}</div>

              <h3 className="font-semibold mt-2">{p.name}</h3>
              <p className="text-sm text-gray-500">{p.description}</p>

              <p className="font-bold mt-2">
                ${p.price} / {p.period}
              </p>

              <ul className="text-sm mt-2">
                {p.features.map((f, i) => (
                  <li key={i}>✔ {f}</li>
                ))}
              </ul>

              <button
                onClick={() => addToCart(p)}
                className="mt-4 w-full py-2 bg-purple-600 text-white rounded-full"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      )}

      {/* 🔹 CART */}
      {activeTab === "cart" && (
        <div className="mt-10 border p-6 rounded-xl">

          {cart.length === 0 ? (
            <p className="text-center text-gray-500">Cart is empty</p>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between bg-gray-100 p-4 rounded mb-3">
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
                className="mt-4 w-full py-3 bg-purple-600 text-white rounded-full"
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