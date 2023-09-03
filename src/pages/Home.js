const Home = () => {
  return (
    <>
      <section className="about section" id="about">
        <p className="heading">
          <span> About</span> Me
        </p>
        <div className="row">
          <div className="image-container">
            <img src="me.jpg" alt="my pic"></img>
            <h3>George Mungai Kariuki</h3>
          </div>
          <div className="content">
            <h3>My Stacks</h3>
            <div className="content-main">
              <div className="content-frame">
                <div className="logo-icon">
                  <img src="laravel.png" alt="Laravel"></img>
                  <div className="logo-icon-info">
                    <p>Laravel</p>
                  </div>
                </div>

                <div className="logo-icon">
                  <img src="react.jpg" alt="Laravel"></img>
                  <div className="logo-icon-info">
                    <p>React</p>
                  </div>
                </div>

                <div className="logo-icon">
                  <img src="flutter.jpeg" alt="Laravel"></img>
                  <div className="logo-icon-info">
                    <p>Flutter</p>
                  </div>
                </div>
              </div>

              <div className="content-language">
                <div className="logo-icon">
                  <img src="php.png" alt="Laravel"></img>
                  <div className="logo-icon-info">
                    <p>PHP</p>
                  </div>
                </div>

                <div className="logo-icon">
                  <img src="javascript.png" alt="Laravel"></img>
                  <div className="logo-icon-info">
                    <p>Javascript</p>
                  </div>
                </div>

                <div className="logo-icon">
                  <img src="dart.jpg" alt="Laravel"></img>
                  <div className="logo-icon-info">
                    <p>Dart</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-other">
                <div className="other">

                <div className="logo-icon">
                  <img src="html.png" alt="Laravel"></img>
                  <div className="logo-icon-info">
                    <p>HTML</p>
                  </div>
                </div>

                <div className="logo-icon">
                  <img src="css.png" alt="Laravel"></img>
                  <div className="logo-icon-info">
                    <p>CSS</p>
                  </div>
                </div>
                     
                </div>
            </div>
          </div>
        </div>
      </section>

      <section className="icons-container section">
      <div class="icon">
            <img src="easy.jpeg" alt="easy"></img>
            <div class="info">
                <h3>Easy Interactions</h3>
                <span>Easy human interactions with the websites,my first priority.</span>
            </div>
        </div>

        <div class="icon">
            <img src="fast.jpeg" alt="fast"></img>
            <div class="info">
                <h3>Fast Reloads</h3>
                <span>Fast load times and lagfree interaction,my second priority.</span>
            </div>
        </div>

        <div class="icon">
            <img src="responisive.jpeg" alt="responsive"></img>
            <div class="info">
                <h3>Responsive</h3>
                <span> My layouts will work on any device, big or small.</span>
            </div>
        </div>

        <div class="icon">
            <img src="dynamic.jpeg" alt="dynamic"></img>
            <div class="info">
                <h3>Dynamic</h3>
                <span>Websites don't have to be static, I love making pages come to life.</span>
            </div>
        </div>

      </section>

      <section></section>
      {/*  <div className="header">
        <div class="context">
          <div class="reveal-container">
            <div class="reveal-text">
              <p className="p">
                Hello, <span class="wave">👋</span>
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
        <div class="area">
          <ul class="circles">
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
