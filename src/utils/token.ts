type Config = {
  headers: {
    Authorization: null | string
  }
}

export let config: Config = {
  headers: { Authorization: null }
}

export const setToken = (newToken: string) => {
  config = {
    headers: { Authorization: `Bearer ${newToken}`}
  }
}
