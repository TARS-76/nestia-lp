declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_LINE_URL: string
      NEXT_PUBLIC_BOOKING_URL: string
    }
  }
}

export {}
