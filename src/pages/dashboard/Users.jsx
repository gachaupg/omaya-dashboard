import { Filter } from '@mui/icons-material'
import Table from '../../components/Table'

const Users = () => {
  return (
    <div className='  w-full gap-5 flex flex-col items-'>
      <div className='flex w-full p-3 items-center justify-between'>
      <div className="w-96 mb-3 gap-5" >
      <button className=" bg-green-500 p-2 m-2 rounded-2xl">All users</button>
      <button className=" bg-white border p-2 m-2 rounded-2xl">Personal </button>
      <button className=" bg-white border p-2 m-2 rounded-2xl">Business</button>
      </div>
      <div className='flex items-center gap-5'>
        <input className='border h-9 rounded-lg w-52' type="text" placeholder='search' />
        <div className='border h-9 rounded-lg w-52 bg-slate-300 flex items-center justify-between'>
          <p>filter</p>
          <Filter/>

        </div>
      </div>
      </div>
    <h1 className='text-2xl'>User  Management</h1>
    <p className="text-green-500">All users</p>
        <Table/>
    </div>
  )
}

export default Users