import React from 'react';
import MonthlyChart from '../Components/MonthlyChart';

const Reports = () => {
    return (
       <section className='py-20 '>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div>
            <MonthlyChart></MonthlyChart>
        </div>
        <div>
            
        </div>

        </div>
       </section>
    );
};

export default Reports;