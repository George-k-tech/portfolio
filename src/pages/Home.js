const Home = () => {
  return (
    <section>
      <div className="home">
        <div className="home-left">
          <h2>Full-Stack Developer </h2>

          <div className="home-left-head">
            <div className="home-left-head-desc">
              <h3>My Stacks:</h3>
            </div>

            <div className="home-left-head-gif">

              <div className="home-left-head-gif-gif" id="gif1">
                <h4>Laravel</h4>
              </div>

              <div className="home-left-head-gif-gif" id="gif2">
                <h4>React</h4>
              </div>

              <div className="home-left-head-gif-gif" id="gif3">
                <h4>Flutter</h4>
              </div>

              <div className="home-left-head-gif-gif" id="gif4">
                <h4>Angular</h4>
              </div>

            </div>
          </div>

          <div className="home-left-body"></div>
        </div>

        <div className="home-right">
          <p>Image</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
