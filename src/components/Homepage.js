/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Homepage.css";
import iphone from "../assets/iphone.gif";
import ui from "../assets/ui.gif";
import contact from "../assets/contact.gif";
import features from "../assets/features.gif";
import features2 from "../assets/feature2.gif";
import features3 from "../assets/features3.gif";
import image1 from "../assets/image1.gif";
import image2 from "../assets/image2.gif";
import image3 from "../assets/image3.gif";

const Homepage = () => {
  return (
    <body>
      <header>
      <i class="fab fa-apple">
        <a href="#" class="logo">
          <span> Iphone</span>13
        </a></i>
        <input type="checkbox" id="menu-bar" />
        <label for="menu-bar" class="fas fa-bars"></label>
        <nav class="navbar">
          <a href="#home">home</a>
          <a href="#features">features</a>
          <a href="#about">about</a>
          <a href="#review">review</a>
          <a href="#contact">contact</a>
        </nav>
      </header>

      <section class="home" id="home">
        <div class="content">
          <h3>
            Innovation at its <span>best</span>
          </h3>
          <p>
            A camera system that is significantly more powerful. Every
            interaction feels new again because to a display that is so
            responsive. The fastest smartphone chip in the world. Extremely
            long-lasting. There's also a significant improvement in battery
            life.
          </p>
          <a href="#" class="btn">
            Read more
          </a>
        </div>

        <div class="image">
          <img src={iphone} alt="" />
        </div>
      </section>

      <section class="features" id="features">
        <h1 class="heading">Improved features</h1>

        <div class="box-container">
          <div class="box">
            <img src={ui} alt="" />
            <h3>amazing Design</h3>
            <p>
              It features new and improved designs compared to its predecessors.
            </p>
            <a href="#" class="btn">
              read more
            </a>
          </div>

          <div class="box">
            <img src={features2} alt="" />
            <h3>Improved Technology</h3>
            <p>
            The screen is notably better than last year’s. It’s the first iPhone with Apple’s ProMotion display, a very high refresh-rate screen technology that was introduced on the iPad Pro in 2017.
            </p>
            <a href="#" class="btn">
              read more
            </a>
          </div>

          <div class="box">
            <img src={features3} alt="" />
            <h3>Friendly interactions</h3>
            <p>
            The App Library automatically organizes all of a user’s apps into one simple, easy-to-navigate view, and intelligently surfaces apps that may be helpful in the moment. 
            </p>
            <a href="#" class="btn">
              read more
            </a>
          </div>
        </div>
      </section>

      <section class="about" id="about">
        <h1 class="heading">about the phone</h1>

        <div class="column">
          <div class="image">
            <img src={features} alt="" />
          </div>

          <div class="content">
            <h3>No one does 5G like iPhone.</h3>
            <p>
            The world is quickly moving to 5G. Streaming, downloading — everything happens so much faster. 5G is even fast enough for serious multiplayer gaming, sharing AR videos, and more. With Smart Data mode, iPhone will downshift automatically to save power when you don’t need all that speed.
            </p>
            <p>
            iOS 15 lets you keep the conversation going while sharing movies, music, or whatever’s on your screen right in FaceTime. Stay in the zone by filtering out any notifications that aren’t relevant to the task at hand. And interact with text in images to quickly send email, make calls, get directions, and more.
            </p>
            <p>Check out the stores</p>
            <div class="buttons">
              <a href="#" class="btn">
                {" "}
                <i class="fab fa-apple"></i> apple store{" "}
              </a>
              <a href="#" class="btn">
              <i class="fab fa-amazon"></i> Amazon
              </a>
            </div>
          </div>
        </div>
      </section>

      <div class="newsletter">
        <h3>Subscribe For Updates</h3>
        <p>
          Subscribe with your email to get latest updates and new on the product.
        </p>
        <form action="">
          <input type="email" placeholder="enter your email" />
          <input type="submit" value="Subscribe" />
        </form>
      </div>

      <section class="review" id="review">
        <h1 class="heading">people's review</h1>

        <div class="box-container">
          <div class="box">
            <i class="fas fa-quote-right"></i>
            <div class="user">
              <img src={image1} alt="" />
              <h3>Tashi Norbu</h3>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <div class="comment">
              Back in 2007 that thing was so revolutionary. People were amazed that they could shoot pictures, watch YouTube, text, surf the web and listen to music on something that could not only fit in their pocket, but also had cellular connectivity whilst being anywhere that had cell reception. Oh how the times have changed.
              </div>
            </div>
          </div>

          <div class="box">
            <i class="fas fa-quote-right"></i>
            <div class="user">
              <img src={image2} alt="" />
              <h3>Pramod Tamang</h3>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
              <div class="comment">
              Durability 5 Star, Camera 5 Star, Features top of the world. One of the most advanced device ever made on earth.
              </div>
            </div>
          </div>

          <div class="box">
            <i class="fas fa-quote-right"></i>
            <div class="user">
              <img src={image3} alt="" />
              <h3>Jigme Tobden</h3>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
              <div class="comment">
              All peoples have mobiles. And the mobile are very useful. All works are we do from mobile with the help of network. All internet banking, railway ticket booking and many more are we can do from mobile. There are many companies in mobile. And the best company is APPLE. Because apple mobile is fully secure and safe. No one, cannot hack this mobile.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="contact" id="contact">
        <div class="image">
          <img src={contact} alt="" />
        </div>

        <form action="">
          <h1 class="heading">contact us</h1>

          <div class="inputBox">
            <input type="text" required />
            <label>name</label>
          </div>

          <div class="inputBox">
            <input type="email" required />
            <label>email</label>
          </div>

          <div class="inputBox">
            <textarea required name="" id="" cols="30" rows="10"></textarea>
            <label>message</label>
          </div>

          <input type="submit" class="btn" value="send message" />
        </form>
      </section>

      <div class="footer">
        <div class="box-container">
          <div class="box">
            <h3>about us</h3>
            <p>
            More ways to shop: Find an Apple Store or other retailer near you. Or call 1-800-MY-APPLE.
            </p>
          </div>

          <div class="box">
            <h3>follow us</h3>
            <a href="#">facebook</a>
            <a href="#">instagram</a>
            <a href="#">pinterest</a>
            <a href="#">twitter</a>
          </div>

          <div class="box">
            <h3>contact info</h3>
            <div class="info">
              <i class="fas fa-phone"></i>
              <p>
                  1–800–854–3680 <br />
                800–692–7753
              </p>
            </div>
            <div class="info">
              <i class="fas fa-envelope"></i>
              <p>
                apple@help.com <br />
              </p>
            </div>
            <div class="info">
              <i class="fas fa-map-marker-alt"></i>
              <p>United States</p>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Homepage;
