export const  LOGIN_USER_INFO = "LOGIN_USER_INFO"
export const  LOGOUT_USER_INFO = "LOGOUT_USER_INFO"

export const loginUserInfo = (payload) => ({
    type: LOGIN_USER_INFO,
    payload
})
export const logoutUserInfo = (payload) => ({
    type: LOGOUT_USER_INFO,
    payload
})
 