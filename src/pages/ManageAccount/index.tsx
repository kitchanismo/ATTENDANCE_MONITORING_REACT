import { useEffect, useState } from 'react'
import axios from '@/api'
import { User } from '@/types/user.type'
import UserAccountInfo from '@/components/UserAccountInfo'

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

  return (
    <div className="container min-h-[90vh]">
      <h3 className='text-2xl font-bold my-8'>Manage Account</h3>
      {userData &&
        <UserAccountInfo userData={userData} />
      }
    </div>
  )
}

export default ManageAccount
