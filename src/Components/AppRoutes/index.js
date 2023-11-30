import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "../../Pages/Dashboard"
import Inventory from "../../Pages/Inventory"
import Orders from "../../Pages/Orders"
import Customers from "../../Pages/Customers"
import NewCustomers from "../../Pages/Customers/create"

function AppRoutes(params) {
    return (

        <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/inventory" element={<Inventory />}/>
            <Route path="/orders" element={<Orders />}/>
            <Route path="customers/" element={<Customers />}/>
            <Route path="/newCustomers" element={<NewCustomers/>}/>
        </Routes>

    )

}
export default AppRoutes