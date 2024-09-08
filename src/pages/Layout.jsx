import { Route, Routes } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Dashboard from "./Dashboard"
import Customers from "./Customers"
import Leads from "./Leads"
import Sales from "./Sales"
import Interaction from "./Interaction"
import Support from "./Support"
import { useContext } from "react"
import { CRMContext } from "../context/CRMcontext"

const Layout = () => {

    const { isOpen } = useContext(CRMContext)

    return(
        <section className={`my-4 flex ${isOpen ? 'gap-0 md:gap-4': 'gap-4'}`}>
            <Sidebar />
            <div className="flex-1">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/customers" element={<Customers />} />
                    <Route path="/leads" element={<Leads />} />
                    <Route path="/sales" element={<Sales />} />
                    <Route path="/interactions" element={<Interaction />} />
                    <Route path="/support-ticket" element={<Support />} />
                </Routes>
            </div>
        </section>
    )
}

export default Layout