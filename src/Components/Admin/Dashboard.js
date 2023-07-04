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
                            </div><br></br>
                            <h6 class="text-uppercase">Users</h6>
                            <h1 class="display-4">134</h1>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 py-2">
                    <div class="card text-white bg-danger h-100">
                        <div class="card-body bg-danger" style={{ backgroundColor: "#89C0D8" }}>
                            <div class="rotate">
                            <svg xmlns="http://www.w3.org/2000/svg" width="4em" viewBox="0 0 512 512" fill='#ffffff'>
                            <path d="M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM160.9 286.2c4.8 1.2 9.9 1.8 15.1 1.8c35.3 0 64-28.7 64-64V160h44.2c12.1 0 23.2 6.8 28.6 17.7L320 192h64c8.8 0 16 7.2 16 16v32c0 44.2-35.8 80-80 80H272v50.7c0 7.3-5.9 13.3-13.3 13.3c-1.8 0-3.6-.4-5.2-1.1l-98.7-42.3c-6.6-2.8-10.8-9.3-10.8-16.4c0-2.8 .6-5.5 1.9-8l15-30zM160 160h40 8v32 32c0 17.7-14.3 32-32 32s-32-14.3-32-32V176c0-8.8 7.2-16 16-16zm128 48a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z"/></svg>
                            </div><br></br>
                            <h6 class="text-uppercase">Dogs</h6>
                            <h1 class="display-4">87</h1>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 py-2">
                    <div class="card text-white bg-info h-100">
                        <div class="card-body bg-info" style={{ backgroundColor: "#BC0A0F" }} >
                            <div class="rotate">
                            <svg xmlns="http://www.w3.org/2000/svg" width="4em" viewBox="0 0 512 512" fill='#ffffff'>
                                <path d="M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM160 154.4c0-5.8 4.7-10.4 10.4-10.4h.2c3.4 0 6.5 1.6 8.5 4.3l40 53.3c3 4 7.8 6.4 12.8 6.4h48c5 0 9.8-2.4 12.8-6.4l40-53.3c2-2.7 5.2-4.3 8.5-4.3h.2c5.8 0 10.4 4.7 10.4 10.4V272c0 53-43 96-96 96s-96-43-96-96V154.4zM216 288a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm96-16a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z"/></svg>
                            </div><br></br>
                            <h6 class="text-uppercase">Cats</h6>
                            <h1 class="display-4">125</h1>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 py-2">
                    <div class="card text-white bg-warning h-100">
                        <div class="card-body" style={{ backgroundColor: "#212A2B" }}>
                            <div class="rotate">
                            <svg xmlns="http://www.w3.org/2000/svg" width="3.5em" viewBox="0 0 448 512" fill='#ffffff'>
                            <path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"/></svg>
                            </div><br></br>
                            <h6 class="text-uppercase">Requests</h6>
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