import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const DonutChart1 = () => {
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
            data: [12,  5],
            backgroundColor: ['brown', 'blue'],
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
<div className='flex items-center justify-between'>
<h2 className="text-xl">Total users</h2>
<p>$545.45K</p>
</div>
      <div className='flex flex-col ' style={{ position: 'relative', width: '150px', height: '150px' }}>
        <canvas ref={chartContainer} />
        <div className='flex flex-col items-center w-full p-2 justify-center gap-4'>
          <div className='flex items-center w-full justify-between'>
            <p className='flex items-center w-full gap-2'>
              <p className='w-5 h-5 bg-red-600 rounded-lg'></p>
              <p className='text-slate-800'>Personal Account</p>
            </p>
            <p className='text-slate-800 ml-14'>00.00</p>
          </div>
          <div className='flex items-center w-full justify-between'>
            <p className='flex items-center gap-2'>
              <p className='w-5 h-5 bg-blue-600 rounded-lg'></p>
              <p className='text-slate-800'>Business Account</p>
            </p>
            <p className='text-slate-800 ml-14'>00.00</p>
          </div>

        </div>
      </div>
      </>
      );
      };

      export default DonutChart1;

