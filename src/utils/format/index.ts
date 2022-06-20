export function formatPostalCode(value: string) {
  value = value.replace(/\D/g, '')
  return value.replace(/^(\d{5})(\d)/, '$1-$2')
}

export function formatDateBRL(value: string) {
  value = value.replace(/\D/g, '')
  value = value.replace(/(\d{2})(\d)/, '$1/$2')
  return value.replace(/(\d{2})(\d)/, '$1/$2')
}

export function formatCurrencyBRL(value: string) {
  value = value.replace(/\D/g, '')
  value = value.replace(/(\d)(\d{2})$/, '$1,$2')
  return value.replace(/(?=(\d{3})+(\D))\B/g, '.')
}

export function formatCPF(value: string) {
  value = value.replace(/\D/g, '')
  value = value.replace(/(\d{3})(\d)/, '$1.$2')
  value = value.replace(/(\d{3})(\d)/, '$1.$2')
  return value.replace(/(\d{3})(\d{2})$/, '$1-$2')
}

export function formatPhone(value: string) {
  value = value.replace(/\D/g, '')
  value = value.replace(/(\d{2})(\d)/, '($1) $2')
  return value.replace(/(\d{4})(\d)/, '$1-$2')
}

export function formatMobile(value: string) {
  value = value.replace(/\D/g, '')
  value = value.replace(/(\d{2})(\d)/, '($1) $2')
  return value.replace(/(\d{5})(\d)/, '$1-$2')
}
