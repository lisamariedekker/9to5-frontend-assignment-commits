export interface DetailItem {
  image: string
  title: string
  description: string
}

export interface Feature {
  title: string
  description: string
  image: string
  reversed?: boolean
}

export interface ContactFormResponse {
  inlineMessage?:
    | 'Thanks for submitting the form.'
    | 'Bedankt voor het verzenden van het formulier.'
  error?: string
  status?: string
  correlationId?: string
  errors?: Array<{ errorType: string; message: string }>
  message?: string
}
