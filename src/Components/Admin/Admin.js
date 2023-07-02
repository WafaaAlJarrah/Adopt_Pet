import React from "react";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";

function Admin() {
    return (
        <div>
            <div class="container-fluid" id="main">
                <div class="row row-offcanvas row-offcanvas-left">
                    <Sidebar />
                    <Dashboard />
                </div>
            </div>
        </div>
    );
}

export default Admin;