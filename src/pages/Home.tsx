import Hero from '../components/Hero';
import Features from '../components/Features';
import Process from '../components/Process';
import About from '../components/About';
import DashboardShowcase from '../components/DashboardShowcase';

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Features />
      <Process />
      <About />
      <DashboardShowcase />
    </div>
  );
}