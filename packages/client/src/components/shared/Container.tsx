import React, { ReactNode } from 'react'

type Props = {
  children:ReactNode;
}

const Container = ({children}:Props) => {
  return (
    <div className='px-40 pt-32'>{children}</div>
  )
}

export default Container