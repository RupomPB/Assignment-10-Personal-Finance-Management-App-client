import React from 'react';
import Banner from './Banner';
import OverviewSection from './OverviewSection';
import TipsSection from './TipsSection';
import FinancialPlanning from './FinancialPlanning';
import Features from './Features';
import Services from './Services';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import Newsletter from './Newsletter';
import CTASection from './CTASection';
import FAQ from './FAQ';

const Home = () => {
    return (
        <>
            <section >

            <Banner></Banner>
            </section>
            <section>

            <OverviewSection></OverviewSection>
            </section>
            <section>
                <TipsSection></TipsSection>
            </section>
            <section>
                <Features></Features>
            </section>
            <section>
                <FinancialPlanning></FinancialPlanning>
            </section>
             <section>
                <Services></Services>
            </section>
            <section>
                <Highlights></Highlights>
            </section>
              <section>
              <Testimonials></Testimonials>
            </section>
            <section>
              <Newsletter></Newsletter>
            </section>
            <section>
             <FAQ></FAQ>
            </section>
            <section>
             <CTASection></CTASection>
            </section>
            
        </>
    );
};

export default Home;