
import Iphone11 from './Iphone11-section/Iphone11'
import CovidUpdate from './Covid19-section/CovidUpdate'

function ForthSection() {
  return (
    <>
      <section className="fourth-heghlight-wrapper fifth-heghlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <Iphone11 />
            <CovidUpdate />
          </div>
        </div>
      </section>
    </>
  )
}

export default ForthSection
