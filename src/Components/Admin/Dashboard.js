import { useEffect, useState } from 'react';
import PieChart from "./PieChart";
import Users from "./Users";
import Angora from '../../Images/Angora.png';
import Husky from '../../Images/Husky.png';
import Golden from '../../Images/Golden.png';
import Ango from '../../Images/Angora.png';
import Child from '../../Images/childdog.png';
import Girl from '../../Images/girldog.png';
import Thanks from '../../Images/thanks.png';

const Dashboard = () => {

    const [record, setRecord] = useState([])

    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resposne => resposne.json())
            .then(res => setRecord(res))
    }

    useEffect(() => {
        getData();
    },)


    return (
        <div class="col main pt-5 mt-3">

            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Admin</a></li>
                    <li class="breadcrumb-item"><a href="#">Dashboard</a></li>

                </ol>
            </nav>

            <div class="alert alert-warning fade collapse" role="alert" id="myAlert">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">×</span>
                    <span class="sr-only">Close</span>
                </button>
                <strong>Data and Records</strong> Learn more about employee
            </div>
            <div class="row mb-3">
                <div class="col-xl-3 col-sm-6 py-2">
                    <div class="card bg-success text-white h-100">
                        <div class="card-body bg-success" style={{ backgroundColor: "#DCE3EC" }}>
                            <div class="rotate">
                                <i class="fa fa-user fa-4x"></i>
                            </div>
                            <h6 class="text-uppercase">Users</h6>
                            <h1 class="display-4">134</h1>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 py-2">
                    <div class="card text-white bg-danger h-100">
                        <div class="card-body bg-danger" style={{ backgroundColor: "#89C0D8" }}>
                            <div class="rotate">
                                <i class="fa fa-list fa-4x"></i>
                            </div>
                            <h6 class="text-uppercase">Posts</h6>
                            <h1 class="display-4">87</h1>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 py-2">
                    <div class="card text-white bg-info h-100">
                        <div class="card-body bg-info" style={{ backgroundColor: "#BC0A0F" }} >
                            <div class="rotate">
                                <i class="fab fa-twitter fa-4x"></i>
                            </div>
                            <h6 class="text-uppercase">Tweets</h6>
                            <h1 class="display-4">125</h1>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 py-2">
                    <div class="card text-white bg-warning h-100">
                        <div class="card-body" style={{ backgroundColor: "#212A2B" }}>
                            <div class="rotate">
                                <i class="fa fa-share fa-4x"></i>
                            </div>
                            <h6 class="text-uppercase">Shares</h6>
                            <h1 class="display-4">36</h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div class="row "> */}
                <div >
                    <Users />
                </div><br></br>
                {/* <div className="col-lg-5 col-md-6 col-sm-12 col-sm-offset-5">
                    <PieChart /> </div> */}
            {/* </div><br></br> */}

            <div class="card-columns mb-3">
                <div class="card">
                    <img class="card-img-top img-fluid" src={Ango} alt="Card image cap" />
                    <div class="card-body">
                        <h4 class="card-title">Elie requested Angora</h4>
                        <p class="card-text"> I wanted to bring to your attention that there is a user requesting an Angora cat. Kindly review their request and provide appropriate guidance or assistance. Thank you for your attention to this matter</p>
                    </div>
                </div>
                <div class="card card-body">
                    <blockquote class="card-blockquote">
                        <p> I couldn't find any dog at Beirut district!</p>
                        <footer>
                            <small class="text-muted">
                                Johnny Ghantous from <cite title="Source Title"> Zalka</cite>
                            </small>
                        </footer>
                    </blockquote>
                </div>
                <div class="card">
                    <img class="card-img-top img-fluid" src={Husky} alt="Card image cap" />
                    <div class="card-body">
                        <h4 class="card-title">Wafaa requested Husky</h4>
                        <p class="card-text">Hello Admin, I am writing to request information on acquiring a Husky dog</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card card-body text-right">
                    <blockquote class="card-blockquote">
                        <p> Can I please know if this site is verified for the government of Lebanon ?</p>
                        <footer>
                            <small class="text-muted">
                                Someone from <cite title="Source Title">Tripoli</cite>
                            </small>
                        </footer>
                    </blockquote>
                </div>
                <div class="card">
                    <img class="card-img img-fluid" src={Child} alt="Card image" />
                </div>
                <div class="card card-body text-center">
                    <h4 class="card-title"> Reminder</h4>
                    <p class="card-text"> John has been waiting for your respond 3 days ago requesting golden retreiver!</p>
                    <p class="card-text"><small class="text-muted">Last updated 5 mins ago</small></p>
                </div>
                <div class="card">
                    <img class="card-img img-fluid" src={Golden} alt="Card image" />
                </div>
                <div class="card card-body text-right">
                    <blockquote class="card-blockquote">
                        <p> Lina has been searching for the same dog for the past few weeks. Any respond?</p>
                        <footer>
                            <small class="text-muted">
                                Lina Chamoun from <cite title="Source Title">Zgharta</cite>
                            </small>
                        </footer>
                    </blockquote>
                </div>
                <div class="card">
                    <img class="card-img img-fluid" src={Girl} alt="Card image" />
                </div>
                <div class="card card-body text-right">
                    <blockquote class="card-blockquote">
                        <p> Juliana and Rock have been connected and now the dog is in a safe place!</p>
                        <footer>
                            <small class="text-muted">
                                Meeted at <cite title="Source Title">Dar Al Amar</cite>
                            </small>
                        </footer>
                    </blockquote>
                </div>

                <div class="card card-body">
                    <h4 class="card-title">Hana is waiting...</h4>
                    <p class="card-text">Hana is waiting for your approve to her request for more than 3 days. Please check it now before shi gets upset</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
                <div class="card">
                    <img class="card-img img-fluid" src={Thanks} alt="Card image" />
                </div>
                <div class="card card-body">
                    <h4 class="card-title">New Update</h4>
                    <p class="card-text">A reminder to send a notification to your users informing them about the latest version of our site </p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;