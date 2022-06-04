import React, { FC, Fragment, useCallback, useState } from "react"
import { FormBuilder } from "react-native-paper-form-builder"
import { NestedValue, useForm } from "react-hook-form"
import { LogicProps } from "react-native-paper-form-builder/dist/Types/Types"
import { Button, TextInput } from "react-native-paper"
import {
  TouchableWithoutFeedback,
  View,
} from "react-native"
import { UseFormReset } from "react-hook-form/dist/types/form"
import { StyledH3 } from "../UI/Typography/Typography"

interface IProps {
  isActive: boolean
  onPress?: () => void
}

interface IForm {
  ipAddress: string
  minerDns: string
  poolInformation: NestedValue<IPoolInformation>
  workMode: "normal" | "high"
}

interface IPoolInformation {
  username: string
  password: string
  pooladdr: string
  worker: string
  workerpasswd: string
}

export const DeviceForm: FC<IProps> = ({ isActive, onPress }) => {
  const { control, setFocus, handleSubmit, reset } = useForm<IForm>({
    defaultValues: {
      workMode: "normal",
      minerDns: "SSS",
      ipAddress: "",
      //@ts-ignore
      poolInformation: {
        username: "Aslan",
        password: "",
        pooladdr: "",
        worker: "",
        workerpasswd: "",
      },
    },
  })
  const _formValues = control._formValues as IForm

  const formConfigArray: Array<Omit<LogicProps, "control"> | Array<Omit<LogicProps, "control">>> = [
    {
      name: "ipAddress",
      type: "text",
      textInputProps: {
        label: "Ip Address",
        editable: isActive,
      },
    },
    {
      name: "minerDns",
      type: "text",
      textInputProps: {
        label: "Miner DNS",
        editable: isActive,
      },
    },
    {
      name: "poolInformation",
      type: "custom",
      JSX: () => (
        <PoolInformation
          isActive={isActive}
          values={_formValues}
          reset={reset}
        />
      ),
    },
  ]

  return (
    <>
      <TouchableWithoutFeedback onPress={onPress}>
        <View>
          <FormBuilder
            formConfigArray={formConfigArray}
            control={control}
            setFocus={setFocus}
          />
        </View>
      </TouchableWithoutFeedback>
      {isActive && (
        <Button
          mode={"contained"}
          onPress={handleSubmit(data => console.log(data))}>
          Submit
        </Button>
      )}
    </>
  )
}

interface IPropsPoolInformation {
  values: IForm
  reset: UseFormReset<IForm>
  isActive: boolean
}

const PoolInformation: FC<IPropsPoolInformation> = ({
                                                      values,
                                                      reset,
                                                      isActive,
                                                    }) => {
  const handleChange = useCallback(
    (key: keyof IForm | keyof IPoolInformation) => {
      return (value: any) => {
        const defaultValues = {
          ...values,
        }
        if (key in defaultValues.poolInformation) {
          //@ts-ignore
          defaultValues.poolInformation[key] = value
        } else {
          //@ts-ignore
          defaultValues[key] = value
        }
        reset(defaultValues)
      }
    },
    [values],
  )

  const computeLabel = useCallback((key: keyof IPoolInformation) => {
    switch (key) {
      case "password":
        return "Password"
      case "pooladdr":
        return "Pool Address"
      case "username":
        return "Username"
      case "worker":
        return "Worker Name"
      case "workerpasswd":
        return "Worker Password"
    }
  }, [])

  return (
    <View>
      <StyledH3 style={{marginBottom: 10}} children={"Информация о пуле"} />
      {Object.entries(values.poolInformation).map(
        ([key, value]: Array<keyof IPoolInformation>) => (
          <Fragment key={key}>
            <TextInput
              editable={isActive}
              mode={"outlined"}
              label={computeLabel(key)}
              value={value}
              onChangeText={handleChange(key)}
            />
          </Fragment>
        ),
      )}
    </View>
  )
}
