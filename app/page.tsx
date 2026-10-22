import { Header, Hero, Strip, Features, HowItWorks, Faq, FinalCta, Footer } from "@/components/Sections";
import Ticker from "@/components/Ticker";
export default function Page() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero /><Strip /><Features /><Ticker /><HowItWorks /><Faq /><FinalCta />
      </main>
      <Footer />
    </>
  );
}
