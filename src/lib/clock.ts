interface ClockArgsType {
  locale: string
}

interface ClockResultType {
  display: string
}

export function clock({locale}: ClockArgsType): ClockResultType {
  return {
    display: locale
  }
}