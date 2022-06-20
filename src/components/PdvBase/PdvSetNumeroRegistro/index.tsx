import React, { useState, useCallback } from 'react'
import { faSearch, faSpinner, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Input from 'components/Forms/Input'
import { Button as Btn, Col, Row } from 'react-bootstrap'
import client from 'services/graphQL/index'
import { useToasts } from 'react-toast-notifications'

import {
  GET_EXAME_CALCULO,
  GET_INSCRICAO,
  GET_LIVRO_3,
  GET_LIVRO_CGI,
  GET_MATRICULAS,
  GET_PRENOTACAO,
  GET_TRANSCRICAO
} from './gql'
import { Props, ItemProps } from './interface'
import theme from 'styles/theme'
import * as S from './styles'

const PdvSetNumeroRegistro = ({ label, changeInput, isTrueInput }: Props) => {
  const [textInput, setTextInput] = useState<string>('')
  const [item, setItem] = useState<ItemProps>({})
  const [isTrue, setIsTrue] = useState<boolean>(isTrueInput)
  const [loading, setLoading] = useState<boolean>(false)

  const { addToast } = useToasts()

  const getGQL = (label: string) => {
    switch (label) {
      case 'Matrícula':
        return GET_MATRICULAS
      case 'Transcrição':
        return GET_TRANSCRICAO
      case 'Livro 3':
        return GET_LIVRO_3
      case 'Livro CGI':
        return GET_LIVRO_CGI
      case 'Inscrição':
        return GET_INSCRICAO
      case 'Prenotado':
        return GET_PRENOTACAO
      case 'Exame e Cálculo':
        return GET_EXAME_CALCULO
      default:
        return GET_MATRICULAS
    }
  }

  const getItem = useCallback(
    async (value: string) => {
      if (value.length >= 2) {
        setLoading(true)

        const graphqlQueryExpression = {
          query: getGQL(label),
          variables: {
            id: parseInt(value.replace(/[^0-9]/g, ''))
          }
        }

        const data: any = await new Promise((resolve: any) => {
          return client.query(graphqlQueryExpression).then((response: any) => {
            return resolve(response?.data.data || {})
          })
        })

        if (data && data.id) {
          setIsTrue(true)
          setItem(data)
          changeInput({ ...data, isTrue: true })
          addToast(
            `Registro localizado: ${parseInt(
              value.replace(/[^0-9]/g, '')
            )}, com sucesso!`,
            {
              appearance: 'success',
              autoDismiss: true
            }
          )
          return item
        }
        addToast(
          `Não encontramos o registro "${parseInt(
            value.replace(/[^0-9]/g, '')
          )}", favor informar número válido!`,
          {
            appearance: 'warning',
            autoDismiss: true
          }
        )
        changeInput({ tipo: label, numero: null, isTrue: false })
        setLoading(false)
        return false
      }
    },
    [addToast, changeInput, item, label]
  )

  const handleChange = () => {
    if (textInput.length >= 2) {
      getItem(textInput)
    }
    setLoading(false)
  }

  const handleTrash = () => {
    setIsTrue(false)
    setItem({})
    setLoading(false)
    setTextInput('')
    changeInput({})
    addToast(`Registro escolhido foi removido!`, {
      appearance: 'info',
      autoDismiss: true
    })
  }

  return (
    <S.Wrapper>
      <Row className="d-flex align-items-end">
        <Col xs={8}>
          <Input
            register={() => ''}
            name={label}
            type="text"
            label={label}
            placeholder="..."
            value={textInput}
            className={isTrue ? 'successForm' : 'invalidForm'}
            onChange={(e: any) => setTextInput(e.target.value)}
            disabled={isTrue}
          />
        </Col>
        {isTrue && isTrueInput && (
          <>
            <Col xs={4}>
              <Btn
                variant="outline-light"
                size="lg"
                block
                onClick={() => {
                  handleTrash()
                }}
              >
                <FontAwesomeIcon
                  icon={faTrash}
                  size={'1x'}
                  color={theme.colors.theme.warning}
                />
              </Btn>
            </Col>
          </>
        )}
        {!isTrue && (
          <Col xs={4}>
            <Btn
              variant="outline-light"
              size="lg"
              block
              //disabled={permitedDown ? false : true}
              onClick={() => handleChange()}
            >
              <FontAwesomeIcon
                icon={loading ? faSpinner : faSearch}
                pulse={loading}
                size={'1x'}
                color={theme.colors.theme.primary}
              />
            </Btn>
          </Col>
        )}
      </Row>
    </S.Wrapper>
  )
}

export default PdvSetNumeroRegistro
