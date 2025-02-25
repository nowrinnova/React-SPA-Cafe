import { Navigate, useLoaderData, useNavigate } from 'react-router-dom'
// import SingleUserDetails from './SingleUserDetails'

export default function UserDetails() {
  const userDetails= useLoaderData()
  console.log(userDetails)
  const{name,username,email,address}=userDetails
  const navigate= useNavigate()
  console.log(navigate)
  const handleBack=()=>{
    navigate('/users')
  }
  return (
    <div className='text-center border border-yellow-300 max-w-lg mx-auto p-10 my-10'>
        {/* <h1>user Details</h1> */}
      <h1 className='text-xl'><span className='font-bold'>Name:</span> {name}</h1>
      <h1 className='text-xl'><span className='font-bold'>User Name:</span> {username}</h1>
      <h1 className='text-xl'><span className='font-bold'>Email:</span> {email}</h1>
      <h1 className='text-xl'><span className='font-bold'>Address:</span> {address.city}</h1>
      <button className='btn mt-5' onClick={handleBack}>Go Back</button>
    </div>
  )
}
