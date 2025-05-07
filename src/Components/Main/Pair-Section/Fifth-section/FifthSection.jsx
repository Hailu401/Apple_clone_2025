
import AppleTv from './AppleTv-section/AppleTv';
import Watch from './Watch-5-section/Watch';

function FifthSection() {
  return (
    <>
    {/* wrap two component file in one section to share same styles */}
      <section className=" fifth-heghlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <AppleTv />
            <Watch />
          </div>
        </div>
      </section>
    </>
  );
}

export default FifthSection;
