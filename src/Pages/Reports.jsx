import React from 'react';
import MonthlyChart from '../Components/MonthlyChart';
import CategoryChart from '../Components/CategoryChart';

const Reports = () => {
    return (
       <section className='py-20 px-10 my-5'>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
        
         <div>
        <CategoryChart></CategoryChart>
        </div>
        
        <div>
            <MonthlyChart></MonthlyChart>
        </div>
        

        </div>
            
       
       </section>
    );
};

export default Reports;