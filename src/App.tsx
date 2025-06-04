import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import InvoicePage from "./components/InvoicePage";
import InvoiceDetailPage from "./components/InvoiceDetailPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate to="invoice-app" />} />
          <Route path="invoice-app" element={<InvoicePage />} />
          <Route
            path="invoice-app/invoiceDetails/:invoiceId"
            element={<InvoiceDetailPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
