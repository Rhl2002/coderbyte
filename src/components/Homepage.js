import React from "react";
import Slider01 from "./Slider";
import "./homepage.css";
import Contact from "./Contact";

const HomePage = () => {

  const handleclick =()=>{
    <Contact/>
    return{
      
    }
  }
  return (
    <>

      <div class="container">
        <div class="top-image"></div>
        <div class="b">
          <div class="content-top">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>

          <div class="content-below">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </div>

      <div class="app">
            <div class="appstore"></div>
          <div class="playstore"></div>
      </div>
          
        </div>

        <div class="right-side">
          <img class="image"></img>
          <ul>
            <li>
              <div class="about">About</div>
            </li>
            <li>
              <div class="blog">Blog</div>
            </li>
            <li>
              <div class="carrer">Carrers</div>
            </li>
            <li>
              {/* <button onClick ={handleclick}class="contact">Contact</button> */}
              <div class="contact">Contact</div>
            </li>
          </ul>

          <div class="text"> 
            <div >Type Text</div>

            <div class="text-below">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>

          <div class="link">
            <div class="facebook"></div>
            <div class="linkedin"></div>
            <div class="twitter"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
