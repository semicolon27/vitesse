import { acceptHMRUpdate, defineStore } from 'pinia'
import http from '~/plugins/axios'

export const useAuthStore = defineStore('auth', () => {
  /**
   * Current named of the user.
   */
  const userid = ref('')
  const password = ref('')
  const formData = ref({})

  /**
   * Changes the current name of the user and saves the one that was used
   * before.
   *
   * @param name - new name to set
   */
  function login() {
    const body = {
      userid: userid.value,
      password: password.value,
    }
    console.log(userid.value)
    console.log(password.value)
    console.log(formData.value)

    http.post('/api/login', body)
  }

  return {
    login,
    userid,
    password,
    formData,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
