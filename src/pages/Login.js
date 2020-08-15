import React from 'react'
import { observer } from 'mobx-react'
import { useStores } from '../stores'
import { observe } from 'mobx'
const ComponentLogin = observe(() => {
  const { AuthStore } = useStores()
  return (
    <>
      <h1>Login</h1>
    </>
  )
})
export default ComponentLogin