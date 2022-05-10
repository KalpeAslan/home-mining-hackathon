import {FC} from 'react'
import {DefaultLayout} from "../layouts/DefaultLayout";
import {Text} from "react-native";

interface IProps {
}

export const Device: FC<IProps> = ({}) => {
    return <DefaultLayout>
        <Text>
            Device Page
        </Text>
    </DefaultLayout>
}
