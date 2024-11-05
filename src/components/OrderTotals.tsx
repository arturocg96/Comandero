import { useMemo } from "react";
import { OrderItem } from "../types/index";
import { formatCurrency } from "../helpers";
type OrderTotalProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void

};
export default function OrderTotals({order, tip, placeOrder}: OrderTotalProps) {

    const subTotalAmount = useMemo(() => order.reduce((acc, orderItem) => acc + orderItem.price * orderItem.quantity, 0), [order]);
    const tipAmount = useMemo(() => subTotalAmount*tip, [tip, order]);
    const totalAmount= useMemo(() => subTotalAmount + tipAmount, [tip, order]);
  return (
    <div>
      <>
        <div className="space-y-3">
          <h2 className="font-black text-2xl">Totales y Propinas</h2>
          <p>
            Subtotal a pagar: {""}
            <span className="font-bold">{formatCurrency(subTotalAmount)}</span>
          </p>
          <p>
            Propina: {""}
            <span className="font-bold">{formatCurrency(tipAmount)}</span>
          </p>
          <p>
            Total a pagar: {""}
            <span className="font-bold">{formatCurrency(totalAmount)}</span>
          </p>
        </div>

        <button

            className="w-full bg-black p-3 uppercase text-white font-bold mt-20 disabled:opacity-10"
            disabled={totalAmount=== 0}
            onClick={placeOrder}
        
        
        >Guardar orden</button>
      </>
    </div>
  );
}

