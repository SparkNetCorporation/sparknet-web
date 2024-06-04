"use client"
import TabsCustomAnimation from './TabsCustomAnimation';

const Portfolio = () => {
    return (
        <div className="bg-[#13072E] text-white lg:px-24 px-5 py-12">
            <h1 className='font-semibold text-xl text-center text-[#8B3EE2] mb-2'>
                OUR PORTFOLIO
            </h1>

            <p className='text-white text-center text-md mb-5 lg:px-56 px-5' >
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release            </p>
            <TabsCustomAnimation />
        </div>
    );
};

export default Portfolio;