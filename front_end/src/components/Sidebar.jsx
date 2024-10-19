import { CSidebar, CSidebarHeader, CSidebarBrand,CNavTitle,CNavItem,CSidebarNav,CBadge } from '@coreui/react'; 
import { cilSpeedometer, cilCloudDownload } from '@coreui/icons'; 
import { CIcon } from '@coreui/icons-react'

const Sidebar = () => {
    return (
        <CSidebar className="border-end mainSidebar" unfoldable colorScheme="dark">
  <CSidebarHeader className="border-bottom">
    <CSidebarBrand>ResoApp</CSidebarBrand>
  </CSidebarHeader>
  <CSidebarNav>
    <CNavTitle>Nav Title</CNavTitle>
    <CNavItem href="#"><CIcon customClassName="nav-icon" icon={cilSpeedometer} /> Home</CNavItem>
    <CNavItem href="#"><CIcon customClassName="nav-icon" icon={cilSpeedometer} /> Generate QR <CBadge color="primary ms-auto">NEW</CBadge></CNavItem>
   
    <CNavItem href="https://coreui.io"><CIcon customClassName="nav-icon" icon={cilCloudDownload} />Menu List</CNavItem>
  </CSidebarNav>
  
</CSidebar>
    )
}

export default Sidebar;