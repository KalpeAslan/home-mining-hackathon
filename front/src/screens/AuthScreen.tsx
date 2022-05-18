import React, {FC} from 'react'
import {DefaultLayout} from '../layouts/DefaultLayout'
import {AuthForm} from '../components/Forms/AuthForm'

interface IProps {}

export const AuthScreen: FC<IProps> = ({}) => {
  return (
    <DefaultLayout>
      <AuthForm />
    </DefaultLayout>
  )
}
