import HeroSection from './components/HeroSection';
import InnovationSection from './components/InnovationSection';
import PartnerSystem from './components/PartnerSystem';
import ClientSystem from './components/ClientSystem';
import GeointelligenceSection from './components/GeointelligenceSection';
import PlatformCapabilities from './components/PlatformCapabilities';

function App() {
  return (
    <main className="bg-[#030303] min-h-screen font-sans selection:bg-indigo-500/30 selection:text-indigo-200 overflow-hidden">
      <HeroSection />
      <InnovationSection />
      <PartnerSystem />
      <ClientSystem />
      <GeointelligenceSection />
      <PlatformCapabilities />
    </main>
  );
}

export default App;