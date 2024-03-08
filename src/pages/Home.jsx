import { LineChart } from '@mui/x-charts/LineChart';
import { MdOutlineArrowDropDown } from "react-icons/md";
import DonutChart from '../components/charts/piechartOne';
import DonutChart1 from '../components/charts/pi2';

const Home = () => {
  return (
    <div className='mt-1 w-full flex flex-col items-'>
      <h1>Dashboard</h1>
      <div className="flex items-center gap-3 flex-wrap">
        <div style={{width:'24.8%'}} className="flex flex-col border p-2 rounded-lg shadow-2xl pr-2">
          <h3>Total Money Transfer</h3>
          <LineChart

            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
              },
            ]}
            width={300}
            height={280}
          />
          <h2 className='flex items-center'> $ 10.9k span <span className='text-red-600 flex items-center ml-3'> <MdOutlineArrowDropDown />-4.66%</span></h2>
          <p>last week</p>
        </div>
        <div style={{width:'24.8%'}} className="flex flex-col border p-2 rounded-lg shadow-2xl pr-2">
          <h3>Total Commission</h3>
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
              },
            ]}
            width={300}
            height={280}
          />
          <h2 className='flex items-center'> $ 10.9k span <span className='text-red-600 flex items-center ml-3'> <MdOutlineArrowDropDown />-4.66%</span></h2>
          <p>last week</p>
        </div>
        <div style={{width:'24.8%'}} className="flex flex-col border p-2 rounded-lg shadow-2xl pr-2">
          <h3>Total Withdraw</h3>
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
              },
            ]}
            width={300}
            height={280}
          />
          <h2 className='flex items-center'> $ 10.9k span <span className='text-red-600 flex items-center ml-3'> <MdOutlineArrowDropDown />-4.66%</span></h2>
          <p>last week</p>
        </div>
        <div style={{width:'24%'}} className="flex flex-col border p-2 rounded-lg shadow-2xl pr-2">
          <h3>Total Deposits</h3>
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
              },
            ]}
            width={300}
            height={280}
          />
          <h2 className='flex items-center'> $ 10.9k span <span className='text-red-600 flex items-center ml-3'> <MdOutlineArrowDropDown />-4.66%</span></h2>
          <p>last week</p>
        </div>
      </div>
      <div className="flex w-full items-center gap-12 flex-wrap mt-5">
        <div style={{width:'43%'}} className="flex flex-col items- justify-center  border bg-slate-100 shadow-2xl rounded-2xl p-2 h-80">
          <DonutChart />
        </div>
        <div style={{width:'24%'}} className="flex flex-col items-center justify- pt-3 w-80  border bg-slate-100 shadow-2xl rounded-2xl 2 h-80">
          <DonutChart1 />
        </div>
        <div style={{width:'24%'}} className="flex flex-col items-center justify- pt-3 w-80  border bg-slate-100 shadow-2xl rounded-2xl 2 h-80">
          <DonutChart1 />
        </div>
      </div>
      <div className="flex items-center mt-8 gap-1 mb-16 flex-wrap">
        <div className="flex flex-col items- justify-center w-96 border bg-slate-100 shadow-2xl rounded-2xl p-2 h-80">
          <h3>Commission for the month</h3>
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
              },
            ]}
            width={400}
            height={280}
          />
          <h2 className='flex items-center'> $ 10.9k span <span className='text-red-600 flex items-center ml-3'> <MdOutlineArrowDropDown />-4.66%</span></h2>
          <p>last week</p>
        </div>
        <div className="flex flex-col items- justify-center w-96 border bg-slate-100 shadow-2xl rounded-2xl p-2 h-80">
          <h3>New Users</h3>
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
              },
            ]}
            width={400}
            height={280}
          />
          <h2 className='flex items-center'> $ 10.9k span <span className='text-red-600 flex items-center ml-3'> <MdOutlineArrowDropDown />-4.66%</span></h2>
          <p>last week</p>
        </div>
        <div className="flex flex-col items- justify-center w-96 border bg-slate-100 shadow-2xl rounded-2xl p-2 h-80">
          <h3>Total Transfers for the month</h3>
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
              },
            ]}
            width={400}
            height={280}
          />
          <h2 className='flex items-center'> $ 10.9k span <span className='text-red-600 flex items-center ml-3'> <MdOutlineArrowDropDown />-4.66%</span></h2>
          <p>last week</p>
        </div>
      </div>
    </div>
  )
}

export default Home