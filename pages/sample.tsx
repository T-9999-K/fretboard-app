import FletBorad from "../components/ui-parts/fletboard";
import {PressFletMarksProvider} from "../components/context/PressFletMarksContext";

const Sample = () => {
    return(
       <>
       <PressFletMarksProvider>
       <FletBorad />
       </PressFletMarksProvider>
       </>
    )
}

export default Sample;