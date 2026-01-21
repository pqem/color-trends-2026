import HeroImmersive from '../components/HeroImmersive';
import ColorIntro from '../components/ColorIntro';
import PalettesExplorer from '../components/PalettesExplorer';
import DownloadCTA from '../components/DownloadCTA';
import ClaudeReveal from '../components/ClaudeReveal';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <HeroImmersive />
      <ColorIntro />
      <PalettesExplorer />
      <DownloadCTA />
      <div id="claude-reveal">
        <ClaudeReveal />
      </div>
      <Footer />
    </div>
  );
}
