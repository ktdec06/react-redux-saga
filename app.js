import { userFetchRequested } from './redux/user/user.actions'
import store from './redux/store'

(async () => {
  const sleep = (second) => new Promise(resolve => {
    console.log(`[Log] [File: app.js] [Note: ${second}秒間Sleep]`)
    setTimeout(resolve, second * 1000)
  })
  console.log()

  console.log('############ state(初期値) ############')
  console.log(`[State] ${JSON.stringify(store.getState())}`)
  console.log()

  console.log('############ 動作確認1 (userFetchRequested Success) ############')
  store.dispatch(userFetchRequested(1, 'xxx'))
  console.log(`[State] ${JSON.stringify(store.getState())}`)
//   sleep(1)
  await sleep(1)
  console.log(`[State] ${JSON.stringify(store.getState())}`)
  console.log()

  console.log('############ 動作確認2 (userFetchRequested Error) ############')
  store.dispatch(userFetchRequested(1, 'yyy'))
  console.log(`[State] ${JSON.stringify(store.getState())}`)
  await sleep(1)
  console.log(`[State] ${JSON.stringify(store.getState())}`)
})()