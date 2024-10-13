
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import ChangePasswordForm from '@/components/ChangePasswordForm'
import { User } from '@/types/user.type'

interface UserAccountInfoProps {
  userData: User
}

const UserAccountInfo = ({ userData }: UserAccountInfoProps) => {

  const avatarFallbackText = () => {
    if (userData) {
      return (userData?.firstName.charAt(0) + userData?.lastName.charAt(0)).toUpperCase()
    }
    return ''
  }


  return (
    <div className='flex items-start justify-center bg-accent p-10 rounded-xl mx-auto sm:max-w-[40rem] md:max-w-[50rem] '>
      <Avatar className='w-40 h-40 mr-10 md:w-60 md:h-60 md:mr-20'>
        <AvatarImage></AvatarImage>
        <AvatarFallback className='text-5xl'>{avatarFallbackText()}</AvatarFallback>
      </Avatar>
      <div >
        {userData &&
          <>
            <div className='text-md font-bold space-y-4'>
              <div>
                <p>Username:</p>
                <p className='font-medium'>{userData?.username}</p>
              </div>
              <div>
                <p>First Name:</p>
                <p className='font-medium'>{userData?.firstName}</p>
              </div>
              <div>
                <p>Middle Name:</p>
                <p className='font-medium'>{userData?.middleName}</p>
              </div>
              <div>
                <p>Last Name:</p>
                <p className='font-medium'>{userData?.lastName}</p>
              </div>
              <ChangePasswordForm userData={userData} />
            </div>
          </>
        }
      </div>
    </div>
  )
}

export default UserAccountInfo
