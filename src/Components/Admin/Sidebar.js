import React from 'react'
const Sidebar = () => {
    return (
         <div class="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{backgroundColor:"#43B0F1", textAlign: "start"}}>
            <ul class="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
                <li class="nav-item mb-2 mt-3"><a class="nav-link text-secondary" href="#" ><h5 style={{color: "#f5f5f5"}}>Elie El Kfoury</h5></a></li>
                <li class="nav-item mb-2 "><a class="nav-link text-secondary" href="/Admin"><i class="fas fa-user font-weight-bold" style={{color: "#fff"}}></i> <span className="ml-3" style={{color: "#fff"}}>Overview</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="allAnimals/645f4f8532805d8547894a93"><i class="fas fa-atom font-weight-bold"style={{color: "#fff"}}></i> <span className="ml-3" style={{color: "#fff"}}>All Animals</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="fas fa-file-export font-weight-bold"style={{color: "#fff"}}></i><span className="ml-3" style={{color: "#fff"}}>History</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="far fa-folder font-weight-bold"style={{color: "#fff"}}></i> <span className="ml-3" style={{color: "#fff"}}>Add New</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="/users"><i class="far fa-chart-bar font-weight-bold"style={{color: "#fff"}}></i> <span className="ml-3" style={{color: "#fff"}}>Users</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="/AllRequests"><i class="fas fa-tablet-alt font-weight-bold"style={{color: "#fff"}}></i><span className="ml-3" style={{color: "#fff"}}>Requests</span></a></li>
            </ul>
       </div>
    )
}
 
export default Sidebar;