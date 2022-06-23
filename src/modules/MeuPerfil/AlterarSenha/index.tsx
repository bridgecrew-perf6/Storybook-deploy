import { yupResolver } from '@hookform/resolvers/yup'
import Button from 'components/Button'
import Input from 'components/Forms/Input'
import Text from 'components/Text'
import React, { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Props } from './interface'
import { validatorSchema } from './validatorSchema'

const AlterarSenha = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validatorSchema)
  })

  const [loading, setLoading] = useState<boolean>(false)

  const handleData = async (data: Props) => {
    try {
      setLoading(true)
      console.log(data)
      setLoading(false)
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }
  return (
    <>
      <Form onSubmit={handleSubmit(handleData)}>
        <Row>
          <Col>
            <Text
              className="mb-4"
              label="Recomendamos a atualização da senha periodicamente"
              weight={300}
              size={'medium'}
              color="grey"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Input
              control={control}
              error={errors.oldPassword?.message}
              name="oldPassword"
              type="text"
              label="Senha"
              placeholder="Informe a senha utilizada"
            />
          </Col>
          <Col>
            <Input
              control={control}
              error={errors.password?.message}
              name="password"
              type="password"
              label="Nova senha"
              placeholder="Entre 6 a 12 caracteres"
            />
          </Col>
          <Col>
            <Input
              control={control}
              error={errors.passwordConfirm?.message}
              name="passwordConfirm"
              type="password"
              label="Confirmar nova Senha"
              placeholder=""
            />
          </Col>
        </Row>
        <Button
          id="btn-alterar-senha"
          className="mt-3"
          label="Salvar Alterações"
          variant="primary"
          type="submit"
          loading={loading}
          block={false}
        />
      </Form>
    </>
  )
}

export default AlterarSenha
