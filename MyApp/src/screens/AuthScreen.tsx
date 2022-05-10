import React, {FC} from 'react'
import {DefaultLayout} from "../layouts/DefaultLayout";
import {Text} from "react-native";
import {useTypedSelector} from "../hooks/hooks";
import {AuthForm} from "../components/Forms/AuthForm";

interface IProps {
}

export const AuthScreen: FC<IProps> = ({}) => {


    const {isSigned} = useTypedSelector(state => state.auth)

    return <DefaultLayout>
        <Text>
            Auth Page: {JSON.stringify(isSigned)}
        </Text>
        <AuthForm/>
    </DefaultLayout>
}
