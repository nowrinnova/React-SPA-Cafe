import React, { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
import { Navigate } from 'react-router-dom'

export default function PrivateRoutes({children}) {
  const {user,loading}= useContext(AuthContext)
  if(loading){
    return <span className="loading loading-spinner loading-lg"></span>

  }
  if(user){
    return children
  }
  return (
   <Navigate to={'/login'}></Navigate>
  )
}
