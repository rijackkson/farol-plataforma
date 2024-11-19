import React, { useState } from "react";
import Logo from "../screens/ui/logo.png";



function Sidebar(){
    
    const [nav, setNav] = useState([
        {label: "Home", slug: "/", icon: "icon-home"},
        {label: "Discover", slug: "discover", icon: "icon-search"},
        {label: "Categories", slug: "cates", icon: "icon-list"},
        {label: "My Courses", slug: "my-courses", icon: "icon-briefcase"}

    ])

    const [currentPage, setCurrentPage] = useState("/");


    var navigation = [];
    for(let i = 0; i < nav.length; i++){
        navigation.push(
            <li key={"nav-" + i + "-" + nav[i].slug}>
            <a href={nav[i].slug} className={"link noul flex c333" + (currentPage == nav[i].slug ? " on " : "")}>
                <div className={"ico s20 " + nav[i].icon} />                        
                <h2 className="lbl s20">{nav[i].label}</h2>

            </a>
        </li>
        );
    }

    return (
        <div className="sidebar fixed">
            <a href="#" className="logo bl">
                <img src={Logo} className="bl" />
            </a>

            <ul className="nav">
                {navigation}
            </ul>

            <div className="updated-course">
                <div className="icon-lamp-bright ico" />
                <div className="lbl s15 fontb c333"> 
                    Updated Courses
                    <h2 className="outhor s13 c777">by Farol Assessoria</h2>
                </div>
            </div>


        </div>
    )
}

export default Sidebar;