import { object, string } from 'yup'

export interface Intent {
  name: string
  action: (arg: any) => void
}

export const intentSchema = object().shape({
  name: string()
    .trim()
    .required(),
  action: object()
})
