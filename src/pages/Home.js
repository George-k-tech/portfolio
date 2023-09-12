const Home = () => {
  return (
    <>
      <p className="heading">
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
              <div className="logo-icon">
                <img src="laravel.png" alt="laravel"></img>
                <p>Laravel</p>
              </div>

              <div className="logo-icon">
                <img src="react.jpg" alt="react"></img>
                <p>React</p>
              </div>

              <div className="logo-icon">
                <img src="flutter.jpeg" alt="flutter"></img>
                <p>Flutter</p>
              </div>
            </div>

            <div className="content-right">
              <div className="logo-icon">
                <img src="php.png" alt="php"></img>
                <p>PHP</p>
              </div>

              <div className="logo-icon">
                <img src="javascript.png" alt="javascript"></img>
                <p>Javascript</p>
              </div>

              <div className="logo-icon">
                <img src="dart.jpg" alt="dart"></img>
                <p>Dart</p>
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
                  <h3>My Work</h3>
                  <p>
                    Lorem ipsum dolor sit amet, tempor prodesset eos no.
                    Temporibus necessitatibus sea ei, at tantas oporteat nam.
                    Lorem ipsum dolor sit amet, tempor prodesset eos no.
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
                  <h3>My Work</h3>
                  <p>
                    Lorem ipsum dolor sit amet, tempor prodesset eos no.
                    Temporibus necessitatibus sea ei, at tantas oporteat nam.
                    Lorem ipsum dolor sit amet, tempor prodesset eos no.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="project-column">
            <div class="project-contents">
              <div className="project-image">
                <img src="meal.jpeg" alt="Nature"></img>
              </div>
              <div className="project-content">
              <div className="project-content-main">
                  <h3>My Work</h3>
                  <p>
                    Lorem ipsum dolor sit amet, tempor prodesset eos no.
                    Temporibus necessitatibus sea ei, at tantas oporteat nam.
                    Lorem ipsum dolor sit amet, tempor prodesset eos no.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="project-column">
            <div class="project-contents">
              <div className="project-image">
                <img src="expense.jpeg" alt="Mountains"></img>
              </div>
              <div className="project-content">
              <div className="project-content-main">
                  <h3>My Work</h3>
                  <p>
                    Lorem ipsum dolor sit amet, tempor prodesset eos no.
                    Temporibus necessitatibus sea ei, at tantas oporteat nam.
                    Lorem ipsum dolor sit amet, tempor prodesset eos no.
                  </p>
                </div>
              </div>
            </div>
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
