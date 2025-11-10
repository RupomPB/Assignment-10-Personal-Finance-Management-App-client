import React from 'react';
import Banner from './Banner';
import OverviewSection from './OverviewSection';
import TipsSection from './TipsSection';
import FinancialPlanning from './FinancialPlanning';

const Home = () => {
    return (
        <>
            <section>

            <Banner></Banner>
            </section>
            <section>

            <OverviewSection></OverviewSection>
            </section>
            <section>
                <TipsSection></TipsSection>
            </section>
            <section>
                <FinancialPlanning></FinancialPlanning>
            </section>
       
        </>
    );
};

export default Home;