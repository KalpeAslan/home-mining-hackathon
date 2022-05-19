import styled from "@emotion/native"
import { Button } from "react-native-paper"
import { WarningColor } from "../../../styles/themes"

type TButtonType = "primary" | "warning" | "danger"
type TModeType = "text" | "outlined" | "contained"


export const WarningButton = styled(Button)`
  background: ${WarningColor};
  color: black !important;
`

const computeOutlinedButtonTypeStyle = (background: string, color: string, outlined?: boolean) => outlined ? {
    background: color,
    color: background,
  } :
  {
    background,
    color,
  }


const computeButtonTypeStyle = (type: TButtonType, mode: TModeType) => {
  switch (type) {
    case "primary":
      return computeOutlinedButtonTypeStyle('#6231ff', 'white', mode === 'outlined')
    case "warning":
      return computeOutlinedButtonTypeStyle('yellow', 'black', mode === 'outlined')
    case "danger": {
      return computeOutlinedButtonTypeStyle('red', 'white', mode === 'outlined')
    }
  }
}


export const StyledButton = styled(Button)`
  border-radius: 8px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: ${(props: { type?: TButtonType, mode?: TModeType }) => computeButtonTypeStyle(props.type ? props.type : "primary", props.mode ? props.mode : 'contained').background};
  color: ${(props: { type?: TButtonType , mode?: TModeType }) => computeButtonTypeStyle(props.type ? props.type : "primary", props.mode ? props.mode : 'contained').color};
  border: 1px solid ${(props: { type?: TButtonType , mode?: TModeType }) => computeButtonTypeStyle(props.type ? props.type : "primary", props.mode ? props.mode : 'contained').background};
`
