import { useState } from "react";
import { Filter } from "@mui/icons-material";
import TransactionTables from "../../components/TransactionTable";

const AllTransactions = () => {
  const [activeButton, setActiveButton] = useState("All"); // Initially set to "All"

  return (
    <div className='w-full gap-5 flex flex-col items-'>
      <div className='flex w-full p-3 items-center justify-between'>
        <div className="mb-3 gap-5">
          <button
            className={`p-2 m-2 rounded-2xl ${activeButton === "All" ? 'bg-green-500' : 'bg-white border'}`}
            onClick={() => setActiveButton("All")}
          >
            All Transactions
          </button>
          <button
            className={`p-2 m-2 rounded-2xl ${activeButton === "Personal" ? 'bg-green-500' : 'bg-white border'}`}
            onClick={() => setActiveButton("Personal")}
          >
            Personal
          </button>
          <button
            className={`p-2 m-2 rounded-2xl ${activeButton === "Business" ? 'bg-green-500' : 'bg-white border'}`}
            onClick={() => setActiveButton("Business")}
          >
            Business
          </button>
          <button
            className={`p-2 m-2 rounded-2xl ${activeButton === "Assigned" ? 'bg-green-500' : 'bg-white border'}`}
            onClick={() => setActiveButton("Assigned")}
          >
            Assigned to me
          </button>
        </div>
        <div className='flex items-center gap-5'>
          <input className='border h-9 rounded-lg w-52' type="text" placeholder='search' />
          <div className='border h-9 rounded-lg w-52 bg-slate-300 flex items-center justify-between'>
            <p>filter</p>
            <Filter />
          </div>
        </div>
      </div>
      
      <TransactionTables />
    </div>
  )
}

export default AllTransactions;
