"use client";

import { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";

interface Order {
  _id: string;
  orderId: string;
  customerName: string;
  status: string;
}

export default function RecentOrders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const res = await fetch("/api/dashboard/orders");

        if (!res.ok) return;

        const data = await res.json();
        setOrders(data);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    }

    fetchOrders();
  }, []);

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">
          Recent Orders
        </h2>

        <Badge className="bg-blue-600">
          Live
        </Badge>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {orders.map((order) => (
            <TableRow key={order._id}>
              <TableCell>{order.orderId}</TableCell>

              <TableCell>{order.customerName}</TableCell>

              <TableCell>
                <Badge
                  className={
                    order.status === "Delivered"
                      ? "bg-green-600"
                      : order.status === "Pending"
                      ? "bg-red-600"
                      : "bg-orange-500"
                  }
                >
                  {order.status}
                </Badge>
              </TableCell>

              <TableCell>--</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}