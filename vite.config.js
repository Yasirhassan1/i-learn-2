import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        student: resolve(__dirname, 'student-register.html'),
        tutor: resolve(__dirname, 'tutor-register.html')
        
      }
    }
  }
})
