// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import axios from "axios";
// import { backendUrl, currency } from "../App";
// import { toast } from "react-toastify";
// import { assets } from "../assets/assets";
// const Orders = ({ token }) => {
//   const [orders, setOrders] = useState([]);
//   const fetchAllOrders = async () => {
//     if (!token) {
//       return null;
//     }
//     try {
//       const response = await axios.post(
//         backendUrl + "/api/order/list",
//         {},
//         { headers: { token } }
//       );
//       if (response.data.success) {
//         setOrders(response.data.orders);
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   const statusHandler = async (event, orderId) => {
//     try {
//       const response = await axios.post(
//         backendUrl + "/api/order/status",
//         { orderId, status: event.target.value },
//         { headers: { token } }
//       );
//       if (response.data.success) {
//         await fetchAllOrders();
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(response.data.message);
//     }
//   };

//   useEffect(() => {
//     fetchAllOrders();
//   }, [token]);
//   return (
//     <div>
//       <h3>Order Page</h3>
//       <div>
//         {orders.map((order, index) => (
//           <div
//             className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700"
//             key={index}
//           >
//             <img
//               className="w-12"
//               src={order.items?.[0]?.image?.[0] || assets.parcel_icon}
//               alt={order.items?.[0]?.name || "Product"}
//             />

//             <div>
//               <div>
//                 {order.items.map((item, index) => {
//                   if (index === order.items.length - 1) {
//                     return (
//                       <p className="py-0.5" key={index}>
//                         {item.name} x {item.quantity} <span>{item.size}</span>
//                       </p>
//                     );
//                   } else {
//                     return (
//                       <p className="py-0.5" key={index}>
//                         {item.name} x {item.quantity} <span>{item.size}</span>,
//                       </p>
//                     );
//                   }
//                 })}
//               </div>
//               <p className="mt-3 mb-2 font-medium">
//                 {" "}
//                 {order.address.firstName + " " + order.address.lastName}
//               </p>
//               <div>
//                 <p>{order.address.street + ", "}</p>
//                 <p>
//                   {order.address.street +
//                     ", " +
//                     order.address.state +
//                     ", " +
//                     order.address.country +
//                     ", " +
//                     order.address.zip}
//                 </p>
//               </div>
//               <p>{order.address.phone}</p>
//             </div>
//             <div>
//               <p className="text-sm sm:text-[15px]">
//                 Items:{order.items.length}
//               </p>
//               <p className="mt-3">Method:{order.paymentMethod}</p>
//               <p>Payment:{order.payment ? "Done" : "Pending"}</p>

//               <p>Date:{new Date(order.date).toLocaleDateString()}</p>
//             </div>
//             <p className="text-sm sm:text-[15px]">
//               {currency}
//               {order.amount}
//             </p>
//             <select
//               onChange={(event) => statusHandler(event, order._id)}
//               value={order.status}
//               className="p-2 font-semibold"
//             >
//               <option value="Order Placed">Order Placed</option>
//               <option value="Packing">Packing</option>
//               <option value="Shipped">Shipped</option>
//               <option value="Out for delivery">Out for delivery</option>
//               <option value="Delivered">Delivered</option>
//             </select>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Orders;

//////////////////////////////////////////////////

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { backendUrl, currency } from "../App";
// import { toast } from "react-toastify";
// import { assets } from "../assets/assets";

// const Orders = ({ token }) => {
//   const [orders, setOrders] = useState([]);

//   const fetchAllOrders = async () => {
//     if (!token) return;
//     try {
//       const response = await axios.post(
//         backendUrl + "/api/order/list",
//         {},
//         { headers: { token } }
//       );
//       if (response.data.success) {
//         setOrders(response.data.orders);
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   const statusHandler = async (event, orderId) => {
//     try {
//       const response = await axios.post(
//         backendUrl + "/api/order/status",
//         { orderId, status: event.target.value },
//         { headers: { token } }
//       );
//       if (response.data.success) {
//         await fetchAllOrders();
//       }
//     } catch (error) {
//       toast.error("Failed to update status");
//     }
//   };

//   useEffect(() => {
//     fetchAllOrders();
//   }, [token]);

//   return (
//     <div className="p-4">
//       <h3 className="text-xl font-semibold mb-4">Order Page</h3>
//       <div>
//         {orders.map((order, index) => (
//           <div
//             key={index}
//             className="flex flex-col gap-4 border-2 border-gray-200 p-5 md:p-8 my-3 text-sm text-gray-700 rounded-lg shadow-sm bg-white"
//           >
//             {/* Images Row */}
//             <div className="flex gap-2 flex-wrap">
//               {order.items.map((item, i) => (
//                 <div key={i} className="flex flex-col items-center w-16">
//                   <img
//                     src={item.image?.[0] || assets.parcel_icon}
//                     alt={item.name}
//                     className="w-16 h-16 object-cover rounded"
//                   />
//                   <p className="text-[10px] mt-1 text-center truncate"></p>
//                 </div>
//               ))}
//             </div>

//             {/* Details Row */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               {/* Address & Items */}
//               <div>
//                 {order.items.map((item, i) => (
//                   <p key={i}>
//                     {item.name} x {item.quantity} <span>({item.size})</span>
//                   </p>
//                 ))}
//                 <p className="mt-3 font-semibold">
//                   {order.address.firstName} {order.address.lastName}
//                 </p>
//                 <p>{order.address.street}</p>
//                 <p>
//                   {order.address.state}, {order.address.country},{" "}
//                   {order.address.zip}
//                 </p>
//                 <p>{order.address.phone}</p>
//               </div>

//               {/* Order Info */}
//               <div>
//                 <p>Items: {order.items.length}</p>
//                 <p>Method: {order.paymentMethod}</p>
//                 <p>Payment: {order.payment ? "Done" : "Pending"}</p>
//                 <p>Date: {new Date(order.date).toLocaleDateString()}</p>
//               </div>

//               {/* Amount & Status */}
//               <div className="flex flex-col justify-between items-start">
//                 <p className="font-semibold text-lg">
//                   {currency}
//                   {order.amount}
//                 </p>
//                 <select
//                   onChange={(event) => statusHandler(event, order._id)}
//                   value={order.status}
//                   className="p-2 border rounded mt-2"
//                 >
//                   <option value="Order Placed">Order Placed</option>
//                   <option value="Packing">Packing</option>
//                   <option value="Shipped">Shipped</option>
//                   <option value="Out for delivery">Out for delivery</option>
//                   <option value="Delivered">Delivered</option>
//                 </select>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Orders;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) return;
    try {
      const response = await axios.post(
        `${backendUrl}/api/order/list`,
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/order/status`,
        { orderId, status: event.target.value },
        { headers: { token } }
      );
      if (response.data.success) {
        await fetchAllOrders();
      }
    } catch (error) {
      toast.error("Failed to update status");
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  const statusColors = {
    "Order Placed": "bg-gray-200 text-gray-700",
    Packing: "bg-yellow-100 text-yellow-800",
    Shipped: "bg-blue-100 text-blue-800",
    "Out for delivery": "bg-orange-100 text-orange-800",
    Delivered: "bg-green-100 text-green-800",
  };

  return (
    <div className="px-4 py-6 md:px-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">📦 Your Orders</h1>

      <div className="space-y-8">
        {orders.map((order, index) => (
          <div
            key={index}
            className="border rounded-xl shadow-md bg-white transition hover:shadow-lg"
          >
            {/* Top: Images */}
            <div className="flex flex-wrap gap-4 p-4 border-b">
              {order.items.map((item, i) => (
                <div key={i} className="w-16 flex flex-col items-center">
                  <img
                    src={item.image?.[0] || assets.parcel_icon}
                    alt={item.name}
                    className="w-16 h-16 rounded object-cover"
                  />
                  <p className="text-[11px] text-center mt-1 truncate w-full">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom: Order Info */}
            <div className="p-4 grid md:grid-cols-3 gap-6 text-gray-700 text-sm">
              {/* Address + Items */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Items & Address
                </h4>
                {order.items.map((item, i) => (
                  <p key={i} className="text-sm mb-1">
                    {item.name} × {item.quantity}{" "}
                    <span className="text-xs text-gray-500">({item.size})</span>
                  </p>
                ))}
                <div className="mt-3 space-y-1 text-sm">
                  <p className="font-medium">
                    {order.address.firstName} {order.address.lastName}
                  </p>
                  <p>{order.address.street}</p>
                  <p>
                    {order.address.state}, {order.address.country},{" "}
                    {order.address.zip}
                  </p>
                  <p>{order.address.phone}</p>
                </div>
              </div>

              {/* Payment & Meta */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Payment Info
                </h4>
                <p>Method: {order.paymentMethod}</p>
                <p>
                  Status:{" "}
                  <span
                    className={`font-semibold ${
                      order.payment ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {order.payment ? "Paid" : "Pending"}
                  </span>
                </p>
                <p>Date: {new Date(order.date).toLocaleDateString()}</p>
                <p>Total Items: {order.items.length}</p>
              </div>

              {/* Amount & Status */}
              <div className="flex flex-col justify-between">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Total & Status
                  </h4>
                  <p className="text-lg font-bold mb-3">
                    {currency}
                    {order.amount}
                  </p>
                  <div
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      statusColors[order.status]
                    }`}
                  >
                    {order.status}
                  </div>
                </div>
                <select
                  onChange={(event) => statusHandler(event, order._id)}
                  value={order.status}
                  className="mt-4 p-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
                >
                  <option value="Order Placed">Order Placed</option>
                  <option value="Packing">Packing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Out for delivery">Out for delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            </div>
          </div>
        ))}

        {orders.length === 0 && (
          <p className="text-center text-gray-500 text-sm">
            No orders to show yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default Orders;
