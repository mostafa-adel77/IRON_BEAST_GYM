import { BrowserRouter } from "react-router-dom";
import RouteComponent from "./RouteComponent";
import { Toaster } from "react-hot-toast";

export default function RoutesPage() {
  return (
    <BrowserRouter>
      <Toaster />
      <RouteComponent />
    </BrowserRouter>
  );
}
