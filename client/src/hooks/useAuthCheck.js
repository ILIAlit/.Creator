import { useContext, useEffect } from "react"
import { Context } from "../context"
import tokenService from "../service/tokenService"

export function useAuthCheck() {
  const {userStore, alertStore} = useContext(Context)
  useEffect(() => {
    if(tokenService.getAccessToken()) {
      userStore.authCheck()
        .then((res) => {
          if(res.error) {
            alertStore.alertOpen(res.error, 'info')
          }
        })
    } else {
      alertStore.alertOpen("Авторизуйтесь для доступа ко всем функциям", 'info')
    }
  }, [])
}