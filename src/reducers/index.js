import {combineReducers} from 'redux'

import {user} from '../redux/user.redux'
import {chartUser} from '../redux/chartUser.redux'

export default combineReducers({user,chartUser});