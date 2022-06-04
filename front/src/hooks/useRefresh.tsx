import React, { useCallback, useMemo } from "react"
import { RefreshControl } from "react-native"

export const useRefresh = () => {

  const [refreshing, setRefreshing] = React.useState(false)

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
    }, 2000)
  }, [])

  const refreshControl = useMemo(() => {
    return <RefreshControl refreshing={refreshing}
                           onRefresh={onRefresh} />
  }, [refreshing])

  return {
    refreshControl,
    refreshing
  }
}
