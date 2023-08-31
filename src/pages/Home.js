const Home = () => {
  return (
    <section>
      <div className="header">
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
        <div className="about-head">
          <p>About</p>
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
        </div>
      </div>
    </section>
  );
};

export default Home;
