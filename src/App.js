import { useReducer } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Auth, UserInfo } from './allContext'
import { ProfilePage, LoginPage, RegisterPage, DashboardPage, HomePage } from './pages'
import { authReducer, authState, userReducer, userState } from './reducer'
import ProtectedRoute from './routes/ProtectedRoute'

const App = () => {
    const [stateAuth, dispatchAuth] = useReducer(authReducer, authState)
    const [stateUser, dispatchUser] = useReducer(userReducer, userState)

    return (
        <div>
            <Auth.Provider value={{ stateAuth, dispatchAuth }}>
                <UserInfo.Provider value={{ stateUser, dispatchUser }}>
                    <Router>
                        <Switch>
                            <Route path="/" exact={true} component={HomePage} />
                            <ProtectedRoute path="/dashboard" exact={true} component={DashboardPage} />
                            <ProtectedRoute path="/profile" component={ProfilePage} />
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
