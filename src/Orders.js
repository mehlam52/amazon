import React, { useEffect, useState } from "react";
import { db } from "./firbase";
import Order from "./Order";
import "./Orders.css";
import { useStateValue } from "./StateProvider";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    if (state.user) {
      db.collection("users")
        .doc(state.user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, []);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
