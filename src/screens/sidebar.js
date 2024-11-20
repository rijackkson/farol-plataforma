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
            <a href={nav[i].slug} className={"aic link noul flex c333" + (currentPage == nav[i].slug ? " on " : "")}>
                <div className={"ico s20 " + nav[i].icon} />                        
                <h2 className="lbl s20">{nav[i].label}</h2>

            </a>
        </li>
        );
    }

    return (
        <div className="sidebar rel">
            <a href="#" className="logo bl">
                <img src={Logo} className="bl" />
            </a>

            <ul className="nav">
                {navigation}
            </ul>

            <div className="updated-course flex aic">
                <div className="icon-fire cfff fs24 ico" />
                <div className="lbl s15 fontb c333"> 
                    Updated Courses
                    <h2 className="outhor s13 c777">by Farol Assessoria</h2>
                </div>
            </div>

            <div className="stats aic flex">

                <div className="stats-box flex aic">
                    <div className="ico ico-points s24 icon-shield" />
                    <h2 className="val s15 fontn">1800</h2>
                    <h2 className="lbl s13 c777">Points</h2>
                </div>

                <div className="stats-box flex aic">
                    <div className="ico ico-power s24 icon-power" />
                    <h2 className="val s15 fontn">45.3%</h2>
                    <h2 className="lbl s13 c777">Complete</h2>
                </div>
            </div>


            <div className="me flex aic">
                <div className="photo cfff fs24">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpA6Aeg0CYaaTXAKiUUu7A44g_DLYkQ8XTGQ&s" className="bl"/>
                    </div>
                <div className="lbl s15 fontb c333"> 
                    RijackDev
                    <h2 className="uname s13 c777">@rijackk</h2>                   
                </div>
            </div>


        </div>
    )
}

export default Sidebar;