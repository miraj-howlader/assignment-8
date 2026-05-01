'use client'

import { UpdateUser } from '@/components/UpdateUser'
import { authClient } from '@/lib/auth-client'
import { Avatar, Card } from '@heroui/react'
import React from 'react'
import { motion } from 'framer-motion'

const ProfilePage = () => {
    const userData = authClient.useSession()
    const user = userData.data?.user
    

  return (
    <motion.div
    initial={{opacity:0,y:-20}}
    animate={{opacity:1,y:0}}
    transition={{duration:0.5}}
    
     className=' mt-6'>
        <Card className='max-w-96 mx-auto flex flex-col items-center border'>
            <Avatar className=' h-30 w-30'>
                <Avatar.Image src={user?.image} alt='user' referrerPolicy='no-referrer'/>
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
            </Avatar>
            <h2 className='text-xl font-bold'>{user?.name}</h2>
            <p className=' text-muted'>{user?.email}</p>
            <UpdateUser/>
        </Card>
    </motion.div>
  )
}

export default ProfilePage