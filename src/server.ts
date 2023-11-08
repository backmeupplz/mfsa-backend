import 'module-alias/register'
import 'source-map-support/register'

import runApp from '@/helpers/runApp'

void (async () => {
  console.log('Starting the app')
  await runApp()
  console.log('App started')
})()
