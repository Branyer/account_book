import { Home, ChartBar } from "tabler-icons-react"

import { NavbarItemProps } from "../NavbarItem/NavbarItem"

const navbarItems : NavbarItemProps[] = [

    {
        path:'/',
        text:'Home',
        iconColor: 'indigo',
        Icon: Home 
    },
    {
        path:'/statistics',
        text:'Statistics',
        iconColor: 'orange',
        Icon: ChartBar 
    },




]

export default navbarItems