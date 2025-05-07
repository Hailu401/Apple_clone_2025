//to import images and icon from common resource folder
import apple_tv_logo from "../../../../../commonResource/images/icons/apple-tv-logo.png";
import banker from "../../../../../commonResource/images/home/banker.png";
const AppleTv = () => {
  return (
    <>
      <div className="left-side-wrapper col-sm-12 col-md-6">
        <div className="left-side-container">
          <div className="top-logo-wrapper">
            <div className="logo-wrapper">
              <img src={apple_tv_logo} />
            </div>
          </div>

          <div className="tvshow-logo-wraper">
            <img src={banker} />
          </div>

          <div className="watch-more-wrapper">
            <a href="#">Watch now on the Apple TV App</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppleTv;
