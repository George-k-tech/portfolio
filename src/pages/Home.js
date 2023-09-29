const Home = () => {
  return (
    <>
      <section class="wrapper">
          <div id="title">
           <p><span>Hello, I'm George Kariuki.</span></p>
           <p><span>I'm a Fullstack developer.</span></p>

          </div>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <button className="wrapper-button"><a href="#About"><svg class="arrows">
							<path class="a1" d="M0 0 L30 32 L60 0"></path>
							<path class="a2" d="M0 20 L30 52 L60 20"></path>
							<path class="a3" d="M0 40 L30 72 L60 40"></path>
						</svg></a></button>
      </section>

      <p className="heading" id="About">
        <span> About</span>
      </p>

      <section className="icons-container section">
        <p className="heading-web">
          <span>My Web-apps</span>
        </p>
        <div className="icons-container-container">
          <div className="icon">
            <img src="easy.jpeg" alt="easy"></img>
            <div className="info">
              <h3>Easy Interactions</h3>
              <span>
                Easy human interactions with the web-application,my first
                priority.
              </span>
            </div>
          </div>

          <div className="icon">
            <img src="fast.jpeg" alt="fast"></img>
            <div className="info">
              <h3>Fast Reloads</h3>
              <span>
                Fast load times and lag free interaction,my second priority.
              </span>
            </div>
          </div>

          <div className="icon">
            <img src="responisive.jpeg" alt="responsive"></img>
            <div className="info">
              <h3>Responsive</h3>
              <span> My layouts will work on any device, big or small.</span>
            </div>
          </div>

          <div className="icon">
            <img src="dynamic.jpeg" alt="dynamic"></img>
            <div className="info">
              <h3>Dynamic</h3>
              <span>
                Websites don't have to be static, I love making pages come to
                life.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="about section" id="about">
        <p className="heading-me">
          <span>Me</span>
        </p>
        <div className="row">
          <div className="image-container">
            <img src="me.jpg" alt="my pic"></img>
            <h3>George Mungai Kariuki</h3>
          </div>
          <div className="content">
            <h3>My Stacks</h3>

            <div className="content-left">
              <p>HTML</p>
              <div className="skill-container">
                <div class="skills html">90%</div>
              </div>

              <p>CSS</p>
              <div className="skill-container">
                <div class="skills css">80%</div>
              </div>

              <p>PHP</p>
              <div className="skill-container">
                <div class="skills php">75%</div>
              </div>

              <p>Javascript</p>
              <div className="skill-container">
                <div class="skills javascript">55%</div>
              </div>

              <p>Dart</p>
              <div className="skill-container">
                <div class="skills dart">50%</div>
              </div>

              <p>Laravel</p>
              <div className="skill-container">
                <div class="skills laravel">70%</div>
              </div>

              <p>React</p>
              <div className="skill-container">
                <div class="skills react">65%</div>
              </div>

              <p>Flutter</p>
              <div className="skill-container">
                <div class="skills flutter">55%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <p className="heading">
        <span>Projects</span>
      </p>

      <section className="project section">
        <div class="project-row">
          <div class="project-column">
            <div class="project-contents">
              <div className="project-image">
                <img src="expense.jpeg" alt="Mountains"></img>
              </div>
              <div className="project-content">
                <div className="project-content-main">
                  <h3>Personal Expense App</h3>
                  <p>
                    The personal expense application is a mobile application, it
                    is developed using flutter and it's main use is to track
                    down expenses, the application available at the github
                    repository on this{" "}
                    <a href="https://github.com/George-k-tech/expense_app">
                      Link
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="project-column">
            <div class="project-contents">
              <div className="project-image">
                <img src="meal.jpeg" alt="Lights"></img>
              </div>
              <div className="project-content">
                <div className="project-content-main">
                  <h3>Meals App</h3>
                  <p>
                    The meal app is a mobile application that describes how to
                    prepare various food, it has an ingredient list of the food
                    and the time required to prepare. The application is
                    available on github at the repository on this{" "}
                    <a href="https://github.com/George-k-tech/meal_app">Link</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="project-column">
            <div class="project-contents">
              <div className="project-image">
                <img src="1.png" alt="Nature"></img>
                <img src="2.png" alt="Nature"></img>
                <img src="3.png" alt="Nature"></img>
                <img src="4.png" alt="Nature"></img>
                <img src="5.png" alt="Nature"></img>
              </div>
              <div className="project-content">
                <div className="project-content-main">
                  <h3>G-commerce</h3>
                  <p>
                    G-commerce is a web-based ecommerce application developed
                    using the Laravel framework. The primary purpose of this
                    application is to serve as an online platform for the sale
                    of various types of products. G-commerce offers a
                    user-friendly interface designed to facilitate product
                    discovery, selection, and purchase for customers.
                    Additionally, it includes an admin interface, which is
                    likely used for managing product listings, user accounts,
                    orders, and other aspects of the ecommerce platform. It is
                    available at github repository on this{" "}
                    <a href="https://github.com/George-k-tech/app">Link</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="project-column">
            <div class="project-contents">
              <div className="project-image">
                <img src="6.png" alt="Nature"></img>
                <img src="7.png" alt="Nature"></img>
                <img src="8.png" alt="Nature"></img>
                <img src="9.png" alt="Nature"></img>
                <img src="10.png" alt="Nature"></img>
              </div>
              <div className="project-content">
                <div className="project-content-main">
                  <h3>Cvmama</h3>
                  <p>
                    Cvmama is a web-based application developed to simplify the
                    process of creating professional CVs (resumes). It serves as
                    a user-friendly tool for individuals to easily build,
                    customize, and format their CVs, thereby streamlining the
                    often challenging task of resume writing. The application is
                    available online at{" "}
                    <a href="https://cvmama.netlify.app/">CVMAMA</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <p className="heading">
        <span>Contacts</span>
      </p>

      <section className="contact section">
        <div id="contacts-container">
          <div id="cover">
            <h1 class="sign-up">Hello, Friend!</h1>
            <p class="sign-up">
              Want to get in touch with me?<br></br> check out my socials!!!
            </p>
            <a class="button sign-up" href="#cover">
              Socials
            </a>

            <h1 class="sign-in">Hello Friend!</h1>
            <br></br>
            <p class="sign-in">
              Have any inquiry?<br></br> send me a message and i will get back
              to you
            </p>
            <br></br>
            <a class="button sub sign-in" href="#close">
              Message
            </a>
          </div>

          <div id="register">
            <h1>Socials</h1>

            <div class="button-container">
              <div class="glass-btn blue-btn">
                <img src="github.png" alt="Github"></img>
              </div>

              <div class="glass-btn red-btn">
                <img src="insta.png" alt="Instagram"></img>
              </div>

              <div class="glass-btn amber-btn">
                <img src="whatsapp.png" alt="Whatsapp"></img>
              </div>

              <div class="glass-btn black-btn">
                <img src="linkedin.png" alt="LinkedIn"></img>
              </div>
            </div>
          </div>

          <div id="login">
            <h1>Message</h1>
            <a href="/">
              <img class="social-login" src="dot.png" alt="dots"></img>
            </a>
            <a href="/">
              <img class="social-login" src="dot.png" alt="dots1"></img>
            </a>
            <a href="/">
              <img class="social-login" src="dot.png" alt="dots2"></img>
            </a>
            <p>Send me a message:</p>
            <form>
              <input type="text" placeholder="Name eg. kariuki George"></input>
              <br></br>
              <input
                type="email"
                placeholder="Email eg. email@gmail.com"
              ></input>
              <br></br>
              <div className="message-textarea">
                <textarea placeholder="message"></textarea>
                <br></br>
              </div>
              <input
                class="submit-btn"
                type="submit"
                value="Send Message"
              ></input>
            </form>
          </div>
        </div>
      </section>

      {/*  <div className="header">
        <div className="context">
          <div className="reveal-container">
            <div className="reveal-text">
              <p className="p">
                Hello, <span className="wave">👋</span>
              </p>
            </div>
          </div>
          <div>
            <p className="p">
              My Name is <span className="name">George Mungai Kariuki,</span>
            </p>
            <p className="p">I'm a Fullstack Developer.</p>
          </div>
        </div>
        <div className="area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div> 

      <div className="about">
          <p className="about-heading">About</p>
        <div className="row">
            <div className="image-container">
              <img src="responisive.jpeg" alt="my pic"></img>
              <h3>George Mungai Kariuki</h3>
            </div>

            <div className="about-content">
                <h3>My stacks</h3>

                <p>Flutter</p>
                <p>Laravel</p>
                <p>React</p>
                <p>another</p>
            </div>
        </div>
      </div>

      <div className="about-icons">
          <div className="icon">
            <img src="fast.jpeg" alt="fast"></img>
            <div className="info">
            <p>Fast</p>
            <span>i work on them to be fast</span>
            </div>
          </div>

          <div className="icon">
            <img src="responisive.jpeg" alt="responsive"></img>
            <div className="info">
            <p>Responsive</p>
            <span>resposnsive websites are the best</span>
            </div>
           
          </div>

          <div className="icon">
            <img src="dynamic.jpeg" alt="dynamic"></img>
            <div className="info">
            <p>Dynamic websites</p>
            <span>Websites are meant to be interactive</span>
            </div>
           
          </div>

          <div className="icon">
            <img src="easy.jpeg" alt="easy"></img>
            <div className="info">
            <p>Easy to use</p>
            <span>webistes should be easy to use</span>
            </div>
          </div>
        </div> */}
    </>
  );
};

export default Home;
