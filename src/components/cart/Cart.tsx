"use client";

import { syncCartWithUser } from "@/actions/cart-actions";
import { useCartStore } from "@/stores/cart-store";
import React, { use, useEffect } from "react";

const Cart = () => {
  const { close, isOpen, syncWithUser, setLoaded } = useCartStore((state) => ({
    close: state.close,
    isOpen: state.isOpen,
    syncWithUser: state.syncWithUser,
    setLoaded: state.setLoaded,
  }));

  useEffect(() => {
    const initCart = async () => {
      await useCartStore.persist.rehydrate();
      await syncWithUser();
      setLoaded(true);
    };
    initCart();
  }, []);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity backdrop-blur-sm"
          onClick={close}
        />
      )}

      {/* Cart Drawer */}
      <div
        className={`
                    fixed right-0 top-0 h-full w-full sm:w-[400px] bg-white shadow-2xl
                    transform transition-transform duration-300 ease-in-out z-50
                    ${isOpen ? "translate-x-0" : "translate-x-full"}
                `}
      ></div>

      
    </>
  );
};

export default Cart;
