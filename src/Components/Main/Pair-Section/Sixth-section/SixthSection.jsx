
import Arcade from './Arcade-section/Arcade';
import AppleCard from './AppleCard-section/AppleCard';

function SixthSection() {
  return (
    <>
      <section className="sixth-heghlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <Arcade />
            <AppleCard />
          </div>
        </div>
      </section>
    </>
  );
}

export default SixthSection;
