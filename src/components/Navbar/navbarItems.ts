import { Home, ChartBar, ArrowsLeftRight, Star, CurrencyDollar } from "tabler-icons-react"

import { NavbarItemProps } from "../NavbarItem/NavbarItem"

const navbarItems : NavbarItemProps[] = [

    {
        path:'/',
        text:'Home',
        iconColor: '#727273',
        Icon: Home 
    },
    {
        path:'/transactions',
        text:'Transactions',
        iconColor: '#727273',
        Icon: ArrowsLeftRight 
    },
    {
        path:'/statistics',
        text:'Statistics',
        iconColor: '#727273',
        Icon: ChartBar 
    },
    {
        path:'/goals',
        text:'Goals',
        iconColor: '#727273',
        Icon: Star 
    },
    {
        path:'/savings',
        text:'Savings',
        iconColor: '#727273',
        Icon: CurrencyDollar
    },




]

export default navbarItems