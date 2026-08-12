import { Compare } from '@/widgets/compare';
import { Cta } from '@/widgets/cta';
import { DemoForm } from '@/widgets/demo-form';
import { Faq } from '@/widgets/faq';
import { Features } from '@/widgets/features';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { Hero } from '@/widgets/hero';
import { Logos } from '@/widgets/logos';
import { Onboarding } from '@/widgets/onboarding';
import { Pricing } from '@/widgets/pricing';
import { Process } from '@/widgets/process';
import { Roadmap } from '@/widgets/roadmap';
import { Roles } from '@/widgets/roles';
import { Testimonials } from '@/widgets/testimonials';
import { UseCases } from '@/widgets/use-cases';
import { ToastContainer } from 'react-toastify';

export function App() {
  return (
    <div className="dds-page">
      <Header />
      <main>
        <Hero />
        <Logos />
        <Process />
        <UseCases />
        <Roles />
        <Compare />
        <Pricing />
        <Testimonials />
        <Features />
        <Onboarding />
        <Roadmap />
        <Faq />
        <DemoForm />
        <Cta />
      </main>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3800}
        hideProgressBar
        closeButton={false}
        newestOnTop
        limit={2}
      />
    </div>
  );
}
