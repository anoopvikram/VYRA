import React, { useMemo, useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";




export default function Cart() {
  const [voucher, setVoucher] = useState('');
  const [voucherApplied, setVoucherApplied] = useState(false);
  
const { cartItems, removeFromCart, changeQty, clearCart } = useCart();
const { showToast } = useToast();


const handleCheckout = () => {
  showToast({
    message: "Order placed successfully.",
    type: "success",
  });

  clearCart();
  setVoucher("");
  setVoucherApplied(false);
};


const subtotal = useMemo(() => {
  return cartItems.reduce((s, it) => s + it.price * it.qty, 0);
}, [cartItems]);


  const discount = useMemo(() => {
    if (voucherApplied && voucher.trim().toUpperCase() === 'DISCOUNT10') {
      return Math.round(subtotal * 0.1);
    }
    return 0;
  }, [voucherApplied, voucher, subtotal]);

  const delivery = subtotal > 0 ? 50 : 0;
  const total = subtotal - discount + delivery;


  const applyVoucher = () => {
    if (!voucher) return;
    if (voucher.trim().toUpperCase() === 'DISCOUNT10') {
      setVoucherApplied(true);
    } else {
      setVoucherApplied(false);
      // you can show a toast / message here
    }
  };

  return (
    <main className="min-h-screen w-full bg-gradient-to-b pt-20 xl:pt-10 from-gray-900 to-gray-800 p-8 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-2xl font-extrabold mb-6">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left - Cart Items (span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="rounded-xl bg-gray-900 border border-white/10 p-4 overflow-x-auto">
                <table className="w-full border-collapse">
                {/* Table Head */}
                <thead className="text-sm text-white/60">
                    <tr className="border-b border-white/10">
                    <th className="py-3 text-left">Product Name</th>
                    <th className="py-3 text-center">Quantity</th>
                    <th className="py-3 text-right">Total</th>
                    <th className="py-3 text-right">Action</th>
                    </tr>
                </thead>

                {/* Table Body */}
                <tbody className="divide-y divide-white/10">
                    {cartItems.length === 0 && (

                    <tr>
                        <td
                        colSpan={4}
                        className="py-8 text-center text-white/60"
                        >
                        Your cart is empty.
                        </td>
                    </tr>
                    )}

                    {cartItems.map((item) => (

                    <tr key={item.id} className="align-middle">
                        {/* Product */}
                        <td className="py-4">
                        <div className="flex items-center gap-4">
                            <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 rounded-lg object-cover border bg-gray-600/50 border-white/5"
                            />
                            <div>
                            <div className="font-semibold">{item.name}</div>
                            <div className="text-sm text-white/60">
                                {item.desc}
                            </div>
                            </div>
                        </div>
                        </td>

                        {/* Quantity */}
                        <td className="py-4 text-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1">
                            <button
                            onClick={() => changeQty(item.id, item.qty - 1)}
                            className="p-1 hover:bg-white/5 rounded-full"
                            >
                            <FiMinus />
                            </button>

                            <span className="min-w-[24px] text-center">
                            {item.qty}
                            </span>

                            <button
                            onClick={() => changeQty(item.id, item.qty + 1)}
                            className="p-1 hover:bg-white/5 rounded-full"
                            >
                            <FiPlus />
                            </button>
                        </div>
                        </td>

                        {/* Total */}
                        <td className="py-4 text-right font-semibold">
                        ₹{item.price * item.qty}
                        </td>

                        {/* Action */}
                        <td className="py-4 text-right">
                            <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-2 hover:bg-white/5 rounded-md"
                            >
                            <MdDelete className="text-xl" />
                            </button>

                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>

            {/* Warranty / Info */}
            <div className="rounded-xl bg-gray-900 border border-white/10 p-4 text-sm text-white/60">
                <div className="flex items-center justify-between">
                <span>
                    90 Day Limited Warranty against manufacturer's defects
                </span>
                <details className="text-white/70">
                    <summary className="cursor-pointer">Details</summary>
                    <div className="mt-2 text-sm text-white/60">
                    Warranty details go here.
                    </div>
                </details>
                </div>
            </div>
            </div>


          {/* Right - Order Summary */}
          <aside className="rounded-xl bg-gray-900 border border-white/10 p-6 flex flex-col gap-4">
            <div>
              <label className="text-sm text-white/60">Discount voucher</label>
              <div className="mt-2 flex gap-2">
                <input
                  value={voucher}
                  onChange={(e) => setVoucher(e.target.value)}
                  className="flex-1 rounded-full bg-black/20 px-4 py-2 text-white placeholder-white/50 border border-white/10 outline-none"
                  placeholder="Enter voucher code"
                />
                <button
                  onClick={applyVoucher}
                  className="rounded-full bg-black px-4 py-2 text-sm font-semibold border border-white/10"
                >
                  Apply
                </button>
              </div>
            </div>

            <div className="border-t border-white/5 pt-4 text-sm text-white/70 space-y-2">
              <div className="flex justify-between">
                <span>Sub Total</span>
                <span>₹{subtotal}</span>
              </div>

              <div className="flex justify-between">
                <span>Discount{voucherApplied ? ' (10%)' : ''}</span>
                <span>-₹{discount}</span>
              </div>

              <div className="flex justify-between">
                <span>Delivery fee</span>
                <span>₹{delivery}</span>
              </div>

              <div className="flex justify-between text-lg font-extrabold pt-2">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>

            <button
            disabled={cartItems.length === 0}
            onClick={handleCheckout}
            className="mt-4 w-full rounded-full bg-white text-black py-3 font-semibold disabled:opacity-50"
            >
            Checkout Now
            </button>

          </aside>
        </div>
      </div>
    </main>
  );
}
