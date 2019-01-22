import {combineReducers} from 'redux'

import { user } from '../redux/user.redux'
import { chartUser } from '../redux/chartUser.redux'
import { chat } from '../redux/chat.redux'

export default combineReducers({user,chartUser,chat});