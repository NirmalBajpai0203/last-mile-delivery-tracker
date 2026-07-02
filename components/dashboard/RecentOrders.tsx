import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";

const orders = [
  {
    id: "#ORD1025",
    customer: "Rahul Sharma",
    status: "Delivered",
    amount: "₹540",
  },
  {
    id: "#ORD1026",
    customer: "Anjali Singh",
    status: "In Transit",
    amount: "₹890",
  },
  {
    id: "#ORD1027",
    customer: "Aman Verma",
    status: "Pending",
    amount: "₹350",
  },
  {
    id: "#ORD1028",
    customer: "Priya Kapoor",
    status: "Delivered",
    amount: "₹1240",
  },
];

export default function RecentOrders() {
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

            <TableRow key={order.id}>

              <TableCell>{order.id}</TableCell>

              <TableCell>{order.customer}</TableCell>

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

              <TableCell>{order.amount}</TableCell>

            </TableRow>

          ))}

        </TableBody>

      </Table>

    </div>
  );
}