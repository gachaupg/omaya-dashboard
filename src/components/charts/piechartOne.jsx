import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { orange } from '@mui/material/colors';

const DonutChart = () => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current !== null) {
      chartInstance.current.destroy();
    }

    if (chartContainer && chartContainer.current) {
      const ctx = chartContainer.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'doughnut',
        data: {
          // labels: ['Deposits', 'Withdrawal', 'In progress', 'P2p'],
          datasets: [{
            label: 'Dataset 1',
            data: [12, 10, 3, 5 ,9, 4,6,2],
            backgroundColor: ['red', 'blue', 'yellow', 'green','pink','black' ,'orange','brown'],
            borderColor: 'rgba(255, 255, 255, 0.2)',
            borderWidth: 1
          }]
        },
        options: {
          cutout: '80%', // Adjust this to control the size of the center hole
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: 'bottom'
            }
          }
        }
      });
    }

    // Cleanup function to destroy the chart instance
    return () => {
      if (chartInstance.current !== null) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <>
    <h2 className="text-xl">Become a brocker</h2><div className='flex gap-16' style={{ position: 'relative', width: '200px', height: '200px' }}>

      <canvas ref={chartContainer} />
      {/* <p className='absolute bottom-44 right-32'>00.00USDT</p> */}
      <div className='flex items-center w-full p-2 justify-center gap-4'>
        <div>
          <div className='flex items-center w-full justify-between'>
            <p className='flex items-center gap-2'>
              <p className='w-5 h-5 bg-red-600 rounded-lg'></p>
              <div>
                <p className='text-slate-400'>FXPRIMUS</p>
                <h3 className='text-xl'>65.324K</h3>
              </div>
            </p>
          </div>
          <div className='flex items-center w-full justify-between'>
            <p className='flex items-center gap-2'>
              <p className='w-5 h-5 bg-slate-600 rounded-lg'></p>
              <div>
                <p className='text-slate-400'>FXPRIMUS</p>
                <h3 className='text-xl'>65.324K</h3>
              </div>
            </p>
          </div>
          <div className='flex items-center w-full justify-between'>
            <p className='flex items-center gap-2'>
              <p className='w-5 h-5 bg-orange-600 rounded-lg'></p>
              <div>
                <p className='text-slate-400'>FXPRIMUS</p>
                <h3 className='text-xl'>65.324K</h3>
              </div>
            </p>
          </div>
        </div>
        <div>
          <div className='flex items-center w-full justify-between'>
            <p className='flex items-center gap-2'>
              <p className='w-5 h-5 bg-blue-600 rounded-lg'></p>
              <div>
                <p className='text-slate-400'>FXPRIMUS</p>
                <h3 className='text-xl'>65.324K</h3>
              </div>
            </p>
          </div>
          <div className='flex items-center w-full justify-between'>
            <p className='flex items-center gap-2'>
              <p className='w-5 h-5 bg-red-300 rounded-lg'></p>
              <div>
                <p className='text-slate-400'>FXPRIMUS</p>
                <h3 className='text-xl'>65.324K</h3>
              </div>
            </p>
          </div>
          <div className='flex items-center w-full justify-between'>
            <p className='flex items-center gap-2'>
              <p className='w-5 h-5 bg-yellow-600 rounded-lg'></p>
              <div>
                <p className='text-slate-400'>FXPRIMUS</p>
                <h3 className='text-xl'>65.324K</h3>
              </div>
            </p>
          </div>
        </div>


      </div>
    </div></>
  );
};

export default DonutChart;
