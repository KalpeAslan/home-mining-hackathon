import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux'
import {AppDispatch, RootState} from '../store/store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
