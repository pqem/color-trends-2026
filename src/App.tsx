import Hero from './components/Hero';
import ColorIntro from './components/ColorIntro';
import PaletteGallery from './components/PaletteGallery';
import DownloadCTA from './components/DownloadCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-100">
      <Hero />
      <ColorIntro />
      <PaletteGallery />
      <DownloadCTA />
      <Footer />
    </div>
  );
}

export default App;
