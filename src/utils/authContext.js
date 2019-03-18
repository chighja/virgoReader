import {createContext} from 'react'

import Auth from '../Auth/Auth'

export const auth = new Auth()

const { Provider, Consumer } = createContext(auth)

export default { Provider, Consumer }
