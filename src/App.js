import './App.scss';
import { ContactSection } from './component/ContactSection';
import { FeatureWorkSection } from './component/FeatureWorkSection';
import { HomePageSection } from './component/HomePageSection';
import { Navbar } from './component/Navbar';
import { Sidebar } from './component/Sidebar';
import { SkillSection } from './component/SkillSection';
import { Parallax } from './component/parallax';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Navbar/>
      <HomePageSection/>
      <Parallax condition="Wedo"/>
      <SkillSection/>
      <Parallax condition="Wedid"/>
      <FeatureWorkSection/>
      <ContactSection/>
    </div>
  );
}

export default App;
