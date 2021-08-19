import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  interface Services {
    title: string
    description: string
  }

  interface State {
    services: Services | Services[]
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}