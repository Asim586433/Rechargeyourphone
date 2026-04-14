import { createBrowserRouter } from "react-router";
import CarrierSelection from "./screens/CarrierSelection";
import SelectPlan from "./screens/SelectPlan";
import Payment from "./screens/Payment";
import ThankYou from "./screens/ThankYou";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: CarrierSelection,
  },
  {
    path: "/plan/:carrier",
    Component: SelectPlan,
  },
  {
    path: "/payment",
    Component: Payment,
  },
  {
    path: "/thank-you",
    Component: ThankYou,
  },
]);
