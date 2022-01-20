import React from "react";
import Navigation from '../component/Navigation'
import '../assets/css/Login.css'
import Collage from '../assets/img/carlos-aranda-IYMceGutrbQ-unsplash.jpg'
import axios from 'axios'


function Login() {

  function hendleClick(e) {
    e.preventDefault();
    window.location.href = "/"

  }

  function SendData(e) {
    e.preventDefault();
    console.log(e);
    console.log(e.target['0'].value);
    console.log(e.target['1'].value);

    const formData = new FormData();
    const email = e
      .target['0']
      .value;
    const pwd = e
      .target['1']
      .value;

    formData.append("email", email);
    formData.append("pwd", pwd);

    axios({ url: 'http://localhost:8080/???', method: 'post', data: formData }).then(
      function (res) {
        console.log(res.data);

      }
    )
  }


  return (

    <> < Navigation />
      <div id="ls-1">
        <div class="background_1">

          {/* <img src={Collage}></img> */}
          <div className="container">
            <div className="L-1">
              <div className="card">
                <div className="cardform">
                  <h1 className="title">Welcome to Cookub!!</h1>
                  <p className="subtitle">Happy Cooking!!</p>
                  <br />
                  <form onSubmit={SendData}>

                    {/* Email  */}
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">Email</label>
                      <input type="email" class="form-control" id="email" aria-describedby="emailHelp"></input>

                    </div>
                    <br />

                    {/* Password */}
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">Password</label>
                      <input type="password" class="form-control" id="passwd"></input>
                    </div>
                    <br />


                    <button type="submit" class="btn btn-primary">Submit</button>
                    <button type="submit" class="btn btn-primary" onClick={hendleClick} >SignUp</button>
                  </form>
                </div>


              </div>


            </div>



          </div>

        </div>

      </div>

    </>

  );
}

export default Login;