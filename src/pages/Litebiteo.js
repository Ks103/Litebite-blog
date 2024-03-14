import SelfCareTipsFrames from "../components/SelfCareTipsFrames";
import BlogFrame from "../components/BlogFrame";
import "./Litebiteo.css";

const Litebiteo = () => {
  return (
    <div className="litebiteo">
      <div className="litebiteo-child" />
      <section className="home-frame">
        <div className="wrapper-vector-line">
          <img className="vector-line-icon" alt="" />
        </div>
        <div className="ellipse-group" />
        <div className="ellipse-group1" />
        <div className="ellipse-group2" />
        <div className="ellipse-group3" />
      </section>
      <div className="hero-right-bg" />
      <div className="fill-btn">
        <div className="fill-btn1">
          <div className="get-started">Download App</div>
        </div>
      </div>
      <div className="link-btn">
        <img className="link-btn-child" alt="" src="/vector-1.svg" />
        <div className="view-more">View More</div>
      </div>
      <div className="navbar">
        <div className="navbar-child" />
        <div className="home">home</div>
        <div className="plans">Plans</div>
        <div className="features">Features</div>
        <div className="screenshot">Screenshot</div>
        <div className="blog">Blog</div>
        <div className="testimonials">testimonials</div>
      </div>
      <div className="fill-btn2">
        <div className="fill-btn3">
          <div className="get-started1">Download App</div>
        </div>
      </div>
      <div className="navbar1">
        <div className="navbar-item" />
      </div>
      <section className="content-section">
        <div className="call-to-action">
          <SelfCareTipsFrames />
          <BlogFrame />
        </div>
        <div className="logo-container">
          <div className="all-categories-frame-parent">
            <div className="all-categories-frame">
              <div className="nutrition-section">
                <div className="content-area">
                  <div className="contact-text">
                    <div className="all">All</div>
                  </div>
                  <div className="nutrition">Nutrition</div>
                  <div className="fitness-wellness">{`Fitness & Wellness`}</div>
                  <div className="weight-management">Weight Management</div>
                </div>
              </div>
              <img
                className="vector-line-icon1"
                loading="lazy"
                alt=""
                src="/vector-243.svg"
              />
            </div>
            <div className="footer-section">
              <div className="header-with-title">
                <div className="copyright-text">
                  <img
                    className="scroll-up-button-instance"
                    loading="lazy"
                    alt=""
                    src="/rectangle-1325@2x.png"
                  />
                  <div className="logo-frame">
                    <div className="logo-frame-child" />
                    <div className="this-is-my">This is my WHY</div>
                  </div>
                </div>
                <div className="your-post-summer-frame">
                  <img
                    className="your-post-summer-frame-child"
                    loading="lazy"
                    alt=""
                    src="/rectangle-1327@2x.png"
                  />
                  <div className="your-post-summer-guide-to-rebo-wrapper">
                    <div className="your-post-summer-guide">
                      Your Post-Summer Guide to rebooting your wellness routine
                    </div>
                  </div>
                </div>
                <div className="your-post-summer-frame">
                  <img
                    className="your-post-summer-frame-child"
                    loading="lazy"
                    alt=""
                    src="/rectangle-1327@2x.png"
                  />
                  <div className="your-post-summer-guide-to-rebo-wrapper">
                    <div className="your-post-summer-guide">
                      Your Post-Summer Guide to rebooting your wellness routine
                    </div>
                  </div>
                </div>
                <div className="your-post-summer-frame">
                  <img
                    className="your-post-summer-frame-child"
                    loading="lazy"
                    alt=""
                    src="/rectangle-1327@2x.png"
                  />
                  <div className="your-post-summer-guide-to-rebo-wrapper">
                    <div className="your-post-summer-guide">
                      Your Post-Summer Guide to rebooting your wellness routine
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer-frame">
        <div className="footer-frame-child" />
        <img className="logo-white-3-icon" alt="" src="/logo-white-3@2x.png" />
        <div className="social-media-frames">
          <div className="about">about</div>
          <div className="contact-frame">
            <div className="terms-privacy">
              <div className="terms-conditions">{`Terms & Conditions`}</div>
              <div className="privacy-policy">Privacy Policy</div>
            </div>
            <div className="logowhite-rectangle">
              <div className="copyright-2024-litebite">
                Copyright ©2024 LiteBite
              </div>
            </div>
          </div>
          <div className="contact">Contact</div>
        </div>
        <div className="social-media-frames1">
          <div className="social-media-icons">
            <img className="fb-ic-icon" loading="lazy" alt="" src="/fbic.svg" />
            <img
              className="tweet-ic-icon"
              loading="lazy"
              alt=""
              src="/tweetic.svg"
            />
            <img
              className="insta-ic-icon"
              loading="lazy"
              alt=""
              src="/instaic.svg"
            />
            <img
              className="google-ic-icon"
              loading="lazy"
              alt=""
              src="/googleic.svg"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Litebiteo;
