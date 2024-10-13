import { useEffect, useState } from 'react'
import axios from '@/api'
import { User } from '@/types/user.type'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import ChangePasswordForm from '@/components/ChangePasswordForm'

const ManageAccount = () => {
  const [userData, setUserData] = useState<User | null>(null)
  useEffect(() => {
    fetchUserData()
  }, [])

  const fetchUserData = async () => {
    try {
      const response = await axios.get('/api/users/me')
      setUserData(response.data)

    } catch (error) {
      console.log(error)
    }
  }

  const avatarFallbackText = () => {
    if (userData) {
      return (userData?.firstName.charAt(0) + userData?.lastName.charAt(0)).toUpperCase()
    }
    return ''
  }

  return (
    <div className="container flex">
      <Avatar className='w-24 h-24 mr-10'>
        <AvatarImage></AvatarImage>
        <AvatarFallback className='text-3xl'>{avatarFallbackText()}</AvatarFallback>
      </Avatar>
      {userData &&
        <>
          <div>
            <p>Username: {userData?.username}</p>
            <p>First Name: {userData?.firstName}</p>
            <p>Middle Name: {userData?.middleName}</p>
            <p>Last Name: {userData?.lastName}</p>
          </div>
          <ChangePasswordForm userData={userData} />
        </>
      }
    </div>
  )
}

export default ManageAccount
