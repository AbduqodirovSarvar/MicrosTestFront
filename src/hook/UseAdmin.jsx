import { useContext } from "react"
import { AdminContext } from "../context/AdminContex"


export const UseToken = () => {
    const {adminToken, setAdminToken} = useContext(AdminContext)
    return {adminToken, setAdminToken}
}