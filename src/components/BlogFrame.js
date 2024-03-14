import "./BlogFrame.css";

const BlogFrame = () => {
  return (
    <div className="blog-frame">
      <div className="logo-box">
        <div className="nav-bar-frames" />
      </div>
      <div className="content-frames">
        <div className="self-care-tips-frames1" />
        <img
          className="features-frame-icon"
          loading="lazy"
          alt=""
          src="/features-frame@2x.png"
        />
      </div>
      <div className="liteblog-frame">
        <h2 className="litebites-blog">Litebite’s blog</h2>
      </div>
      <div className="scroll-down-text">
        <div className="food-for-thought-text">
          <div className="self-care-tips-box">
            <div className="easy-tips-text">
              <div className="rectangle-parent">
                <div className="frame-child" />
                <div className="rectangle-frame" />
              </div>
              
            </div>
          </div>
          <h1 className="food-for-thought">FOOD FOR THOUGHT</h1>
        </div>
      </div>
    </div>
  );
};

export default BlogFrame;
