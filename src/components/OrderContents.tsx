import { MenuItem, OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderContentsProps = {
  order: OrderItem[];
  removeItem: (id: MenuItem["id"]) => void;
};

export default function OrderContents({
  order,
  removeItem,
}: OrderContentsProps) {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>
      <div className="space-y-3 mt-10">
        {order.map((orderItem) => (
          <div
            key={orderItem.id}
            className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"
          >
            <div>
              <p>
                {orderItem.name} - {formatCurrency(orderItem.price)}
              </p>
              <p className="font-black">
                Cantidad: {orderItem.quantity} - Total:{" "}
                {formatCurrency(orderItem.price * orderItem.quantity)}
              </p>
            </div>

            <button
              className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
              onClick={() => removeItem(orderItem.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
