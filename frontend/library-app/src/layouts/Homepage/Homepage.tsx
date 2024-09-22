import Caurosel from "./components/Caurosel"
import ExploreTopBooks from "./components/ExploreTopBooks"
import Heros from "./components/Heros"
import LibraryService from "./components/LibraryServices"

const Homepage = ()=>{
    return(
        <>
            <ExploreTopBooks/>
            <Caurosel/>
            <Heros/>
            <LibraryService/>
        </>
    )
}

export default Homepage