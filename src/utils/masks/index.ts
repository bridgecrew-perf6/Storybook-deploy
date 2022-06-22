import React from 'react'

export function maskPostalCode(e: React.FormEvent<HTMLTextAreaElement>) {
  e.currentTarget.maxLength = 9
  let value = e.currentTarget.value
  value = value.replace(/\D/g, '')
  value = value.replace(/^(\d{5})(\d)/, '$1-$2')
  e.currentTarget.value = value
  return e
}

export function maskDateBRL(e: React.FormEvent<HTMLTextAreaElement>) {
  e.currentTarget.maxLength = 10
  let value = e.currentTarget.value
  value = value.replace(/\D/g, '')
  value = value.replace(/(\d{2})(\d)/, '$1/$2')
  value = value.replace(/(\d{2})(\d)/, '$1/$2')
  e.currentTarget.value = value
  return e
}

export function maskCurrencyBRL(e: React.FormEvent<HTMLTextAreaElement>) {
  let value = e.currentTarget.value
  value = value.replace(/\D/g, '')
  value = value.replace(/(\d)(\d{2})$/, '$1,$2')
  value = value.replace(/(?=(\d{3})+(\D))\B/g, '.')
  e.currentTarget.value = value
  return e
}

export function maskCPF(e: React.FormEvent<HTMLTextAreaElement>) {
  e.currentTarget.maxLength = 14
  let value = e.currentTarget.value
  if (!value.match(/^(\d{3}).(\d{3}).(\d{3})-(\d{2})$/)) {
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{3})(\d)/, '$1.$2')
    value = value.replace(/(\d{3})(\d)/, '$1.$2')
    value = value.replace(/(\d{3})(\d{2})$/, '$1-$2')
    e.currentTarget.value = value
  }
  return e
}

export function maskPhone(e: React.FormEvent<HTMLTextAreaElement>) {
  e.currentTarget.maxLength = 14
  let value = e.currentTarget.value
  value = value.replace(/\D/g, '')
  value = value.replace(/(\d{2})(\d)/, '($1) $2')
  value = value.replace(/(\d{4})(\d)/, '$1-$2')
  e.currentTarget.value = value
  return e
}

export function maskMobile(e: React.FormEvent<HTMLTextAreaElement>) {
  e.currentTarget.maxLength = 15
  let value = e.currentTarget.value
  value = value.replace(/\D/g, '')
  value = value.replace(/(\d{2})(\d)/, '($1) $2')
  value = value.replace(/(\d{5})(\d)/, '$1-$2')
  e.currentTarget.value = value
  return e
}
