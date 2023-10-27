import "./App.css";
import Header from "./components/Header/Header";
import FifthSection from "./components/Main/FifthSection/FifthSection";
import FirstSection from "./components/Main/FirstSection/FirstSection";
import FourthSection from "./components/Main/FourthSection/FourthSection";
import SecondSection from "./components/Main/SecondSection/SecondSection";
import SixthSection from "./components/Main/SixthSection/SixthSection";
import ThirdSection from "./components/Main/ThirdSection/ThirdSection";
import Newsletter from "./components/Newsletter/Newsletter";
import Intro from "./components/Section/Intro";
import Footer from "./components/Footer/Footer";

const headerConstants = {
  header1: "Home",
  header2: "Attorneys",
  header3: "Practice Areas",
  header4: "About Us",
};

function App() {
  return (
    <div className="App">
      <>
        <Header props={headerConstants} />
        <Intro />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
        <Newsletter />
        <Footer props={headerConstants} />
      </>
    </div>
  );
}

export default App;
