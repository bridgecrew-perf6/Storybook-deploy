import { listErrors } from './data'
import { Props } from './interface'

export default function getTranslateError(err: string) {
  const errorFound: Props[] = listErrors?.filter((item) => item.name === err)

  const stringError: string =
    errorFound && errorFound[0] ? errorFound[0].translatePtBr : ''
  return stringError
}
