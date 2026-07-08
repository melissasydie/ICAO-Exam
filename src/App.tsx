/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import WhyIcao from './components/WhyIcao';
import Instructor from './components/Instructor';
import Audience from './components/Audience';
import CourseOptions from './components/CourseOptions';
import Curriculum from './components/Curriculum';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import FooterCta from './components/FooterCta';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-navy selection:bg-accent selection:text-navy">
      <Hero />
      <TrustBar />
      <WhyIcao />
      <Instructor />
      <Audience />
      <CourseOptions />
      <Curriculum />
      <Testimonials />
      <Faq />
      <FooterCta />
    </div>
  );
}
