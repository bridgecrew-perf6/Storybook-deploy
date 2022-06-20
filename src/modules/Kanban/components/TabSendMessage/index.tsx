import { yupResolver } from '@hookform/resolvers/yup'
import Button from 'components/Button'
import Input from 'components/Forms/Input'
import React, { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Props } from './interface'
import { validatorSchema } from './validatorSchema'

const TabSendMessage: React.FC = ({ ...rest }) => {
  console.log(rest)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validatorSchema)
  })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_loading, setLoading] = useState<boolean>(false)

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
    <Form onSubmit={handleSubmit(handleData)}>
      <Row>
        <Col xs={9}>
          <Input
            register={register}
            error={errors.phase?.message}
            name="phase"
            type="text"
            label=""
            placeholder="Mensagem"
          />
        </Col>
        <Col xs={3} className="mt-4">
          <Button
            id="send-message"
            variant="primary"
            type="submit"
            label="Enviar"
            block
          />
        </Col>
      </Row>
    </Form>
  )
}

export default TabSendMessage
