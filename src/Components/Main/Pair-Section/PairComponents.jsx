
import ForthSection from './Forth-section/ForthSection';
import FifthSection from './Fifth-section/FifthSection';
import SixthSection from './Sixth-section/SixthSection';
// this component contain component have flex(pair) view on desktop size
function PairComponents() {
  return (
    <>
      <ForthSection/>
      <FifthSection/>
      <SixthSection/>
    </>
  );
}

export default PairComponents;
