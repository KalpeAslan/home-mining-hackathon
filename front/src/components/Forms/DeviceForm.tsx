import React, {FC, Fragment, useCallback, useState} from 'react'
import {FormBuilder} from "react-native-paper-form-builder";
import {NestedValue, useForm} from "react-hook-form";
import {LogicProps} from "react-native-paper-form-builder/dist/Types/Types";
import {Button, Switch, Text, TextInput} from "react-native-paper";
import {ScrollView, View} from "react-native";
import {UseFormReset} from "react-hook-form/dist/types/form";
import {Checkbox} from "../UI/Inputs/Checkbox";

interface IProps {
}

interface IForm {
    ipAddress: string
    minerDns: string
    poolInformation: NestedValue<IPoolInformation>
    workMode: 'normal' | 'high'
}

interface IPoolInformation {
    username: string
    password: string
    pooladdr: string
    worker: string
    workerpasswd: string
}


export const DeviceForm: FC<IProps> = ({}) => {

    const {control, setFocus, setValue, handleSubmit, reset} = useForm<IForm>({
        defaultValues: {
            workMode: 'normal',
            minerDns: 'SSS',
            ipAddress: '',
            //@ts-ignore
            poolInformation: {
                username: 'Aslan',
                password: '',
                pooladdr: '',
                worker: '',
                workerpasswd: ''
            }
        }
    })
    const _formValues = control._formValues as IForm


    const formConfigArray: Array<Omit<LogicProps, 'control'> | Array<Omit<LogicProps, 'control'>>> = [
        {
            name: 'workMode',
            type: 'custom',
            JSX: () => <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Checkbox isActive={_formValues.workMode === 'normal'} label={'Work Mode'} value={'normal'}
                          onPress={() => setValue('workMode', 'normal')}/>
                <Checkbox isActive={_formValues.workMode === 'high'} label={'Work Mode'} value={'high'}
                          onPress={() => setValue('workMode', 'high')}/>
            </View>
            // JSX: () => <View style={{flexDirection: 'row'}}>
            //     <Text>
            //         Work Mode: {_formValues.workMode}
            //     </Text>
            //     <Switch value={workModeSwitcher} onValueChange={(value) => {
            //         setWorkModeSwitcher(value)
            //         setValue('workMode', value ? 'high' : 'normal')
            //     }}/>
            // </View>
        },
        {
            name: 'ipAddress',
            type: 'text',
            textInputProps: {
                label: 'Ip Address'
            }
        },
        {
            name: 'minerDns',
            type: 'text',
            textInputProps: {
                label: 'Miner DNS'
            },
        },
        {
            name: 'poolInformation',
            type: 'custom',
            JSX: () => <PoolInformation values={_formValues} reset={reset}/>
        },

    ]


    return <ScrollView style={{marginBottom: 100}}>
        <Text>
            {
                _formValues.poolInformation.username
            }
        </Text>

        <Text>
            {
                _formValues.minerDns
            }
        </Text>

        <FormBuilder formConfigArray={formConfigArray} control={control} setFocus={setFocus}/>
        <Button mode={'contained'}
                onPress={handleSubmit(data => console.log(data))}>
            Submit
        </Button>
    </ScrollView>
}


interface IPropsPoolInformation {
    values: IForm
    reset: UseFormReset<IForm>
}

const PoolInformation: FC<IPropsPoolInformation> = ({values, reset}) => {

    const handleChange = useCallback((key: keyof IForm | keyof IPoolInformation) => {
        return (value: any) => {
            const defaultValues = {
                ...values
            }
            //@ts-ignore
            if (key in defaultValues.poolInformation) defaultValues.poolInformation[key] = value
            //@ts-ignore
            else defaultValues[key] = value
            reset(defaultValues)
        }
    }, [values])


    const computeLabel = useCallback((key: keyof IPoolInformation) => {
        switch (key) {
            case "password":
                return 'Password'
            case "pooladdr":
                return 'Pool Address'
            case "username":
                return 'Username'
            case "worker":
                return 'Worker Name'
            case 'workerpasswd':
                return 'Worker Password'
        }
    }, [])

    return <View>
        <Text children={'Pool Information'}/>
        {
            Object.entries(values.poolInformation).map(([key, value]: Array<keyof IPoolInformation>) => <Fragment
                key={key}>
                <TextInput editable={true} mode={'outlined'} label={computeLabel(key)} value={value}
                           onChangeText={handleChange(key)}/>
            </Fragment>)
        }
    </View>
}
