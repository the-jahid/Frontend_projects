import React from 'react';

const Stats = () => {
    return (
      <section className='flex justify-center'>
            <div className="stats shadow">
            
            <div className="stat place-items-center">
                <div className="stat-value  text-secondary ">31K</div>
                <div className="stat-title">Professionals</div>
            </div>
            
            <div className="stat place-items-center">
                <div className="stat-value text-secondary  ">10+</div>
                <div className="stat-title">Years Experience</div>
                <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
            </div>
            
            <div className="stat place-items-center">
                <div className="stat-value text-secondary ">12k+</div>
                <div className="stat-title">Services Closed</div>
                <div className="stat-desc">90 (14%)</div>
            </div>
            <div className="stat place-items-center">
                <div className="stat-title">New Registers</div>
                <div className="stat-value text-secondary ">1,200</div>
                <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>
            
            </div>
      </section>
    );
};

export default Stats;