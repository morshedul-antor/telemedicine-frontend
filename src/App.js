import { useReducer } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Auth, UserInfo } from './allContext'
import SchedulePage from './pages/SchedulePage'
import {
    ProfilePage,
    LoginPage,
    RegisterPage,
    DashboardPage,
    SettingsPage,
    HomePage,
    DashboardPage2,
} from './pages/index'
import { authReducer, authState, userReducer, userState } from './reducer'
import ProtectedRoute from './routes/ProtectedRoute'

const App = () => {
    const [stateAuth, dispatchAuth] = useReducer(authReducer, authState)
    const [stateUser, dispatchUser] = useReducer(userReducer, userState)

    const hx = 'hxds100000'
    const array = hx.split('s')

    const [prefix, id] = array
    const idInt = parseInt(id) + stateUser.info?.id

    const url = prefix + idInt
    // console.log(url)

    return (
        <div>
            <Auth.Provider value={{ stateAuth, dispatchAuth }}>
                <UserInfo.Provider value={{ stateUser, dispatchUser }}>
                    <Router>
                        <Switch>
                            <Route path="/" exact={true} component={HomePage} />
                            <ProtectedRoute path="/home" exact={true} component={DashboardPage2} />
                            <ProtectedRoute path="/profile" component={ProfilePage} />
                            <ProtectedRoute path="/settings" component={SettingsPage} />
                            <ProtectedRoute path="/schedule" component={SchedulePage} />
                            <Route path="/login" component={LoginPage} />
                            <Route path="/register" component={RegisterPage} />
                        </Switch>
                    </Router>
                </UserInfo.Provider>
            </Auth.Provider>
        </div>
    )
}

export default App
