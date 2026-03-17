import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        student: resolve(__dirname, 'student-register.html'),
        tutor: resolve(__dirname, 'tutor-register.html'),
        signup: resolve(__dirname, 'sign-up.html'),
        signin: resolve(__dirname, 'sign-in.html'),
        safeguard: resolve(__dirname, 'safeguarding-consent.html'),
        complete: resolve(__dirname, 'registration-complete.html'),
        terms: resolve(__dirname, 'terms-condition.html'),
        forgetPassword: resolve(__dirname, 'forget-password.html'),
        welcome: resolve(__dirname, 'welcome.html'),

      }
    }
  }
})
