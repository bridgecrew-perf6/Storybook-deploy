import {
  faEdit,
  faExchangeAlt,
  faPlus,
  faUser
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Text from 'components/Text'
import { maskBr } from 'js-brasil'
import React, { useState } from 'react'
import {
  Button as Btn,
  Col,
  Row,
  OverlayTrigger,
  Tooltip
} from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { components } from 'react-select'
import AsyncSelect from 'react-select/async'
import client from '../../../services/graphQL/index'
import Cadastro from './components/Cadastro'
import {
  GET_CUSTOMERS_SEARCH_BY_CPF,
  GET_CUSTOMERS_SEARCH_BY_NOME
} from './gql'
import { Props, UserProps } from './interface'
import * as S from './styles'
const Register = ({ label, changeUser }: Props) => {
  const { control } = useForm({})

  const [modalShow, setModalShow] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const [user, setUser] = useState<UserProps>({})

  const NoOptionsMessage = (props: any | unknown) => {
    return (
      <components.NoOptionsMessage {...props}>
        <>
          <Text
            label={'😔 Nenhum registro encontrado! 👎'}
            color="textDefault"
            size="medium"
            weight={700}
            className="p-3 d-inline"
          />
          <hr />
          <Btn
            onClick={() => {
              clearUser()
              setModalShow(true)
            }}
            variant="outline-primary"
            className="d-inline m-3"
          >
            <FontAwesomeIcon icon={faPlus} size="1x" /> Novo {label}
          </Btn>
        </>
      </components.NoOptionsMessage>
    )
  }

  const loadOptions: any = async (inputValue: string) => {
    let searchFieldTag = 'NAME'

    if (inputValue.match(/^[0-9]+$/) != null) {
      searchFieldTag = 'CPF'
    }

    if (
      searchFieldTag === 'CPF'
        ? inputValue.replace(/[^0-9]/g, '').length <= 2
        : inputValue.length <= 3
    )
      return []

    const graphqlQueryExpression = {
      query:
        searchFieldTag === 'CPF'
          ? GET_CUSTOMERS_SEARCH_BY_CPF
          : GET_CUSTOMERS_SEARCH_BY_NOME,
      variables: {
        search:
          searchFieldTag === 'CPF'
            ? `%${inputValue.replace(/[^0-9]/g, '')}%`
            : `%${inputValue}%`
      }
    }

    const transformDataIntoValueLabel = (data: any) => {
      if (data?.clientes?.edges.lenght === 0) return []
      return data?.clientes?.edges?.map((ix: any) => {
        return {
          value: ix.node.id,
          label: `${ix.node.nome} - CPF:  ${maskBr.cpf(ix.node.cpf)}`
        }
      })
    }

    return new Promise((resolve: any) => {
      client.query(graphqlQueryExpression).then((response: any) => {
        return resolve(transformDataIntoValueLabel(response?.data) || [])
      })
    })
  }

  const handleOnChange = (value: any, actionMeta: any) => {
    switch (actionMeta.action) {
      case 'select-option':
        console.group('Value Changed - AQUI')
        console.log(value)
        console.log(`action: ${actionMeta.action}`)
        console.groupEnd()
        // eslint-disable-next-line no-case-declarations
        const i: any = value?.label?.split(' - CPF: ')

        handleChange({
          id: value.value,
          nome: i[0],
          cpf: i[1]
        })
        break
      case 'remove-value':
        console.group('Value Remove')
        console.log(value)
        console.log(`action: ${actionMeta.action}`)
        console.groupEnd()
        setUser({})
        setShowEdit(false)
        break
      case 'pop-value':
        console.group('Value Pop')
        console.log(value)
        console.log(`action: ${actionMeta.action}`)
        console.groupEnd()
        setUser({})
        setShowEdit(false)
        break
      case 'clear':
        console.group('Value Clear')
        console.log(value)
        console.log(`action: ${actionMeta.action}`)
        console.groupEnd()
        setUser({})
        setShowEdit(false)
        break
    }
  }

  const clearUser = () => {
    setUser({})
    setShowEdit(false)
  }

  const handleChange = (data: UserProps) => {
    setUser(data)
    changeUser(data)
    setShowEdit(true)
    setModalShow(false)
  }

  return (
    <S.Wrapper>
      <Row className="d-flex align-items-end">
        <Col>
          {!showEdit && (
            <>
              <Text
                label={label}
                color="textDefault"
                size="small"
                weight={700}
                className="mb-2"
              />
              <AsyncSelect
                className="custom-react-select"
                control={control}
                cacheOptions
                defaultOptions
                loadOptions={loadOptions}
                debounceTimeout={300}
                onChange={handleOnChange}
                placeholder={`Informe o Nome ou CPF`}
                components={{ NoOptionsMessage }}
              />
            </>
          )}
          {showEdit && (
            <>
              <Text
                label={label}
                color="primary"
                size="small"
                weight={500}
                className="mb-0"
              />
              <Row>
                <Col xs={10}>
                  <S.ListUser>
                    <S.ListUserItem className="mt-2">
                      <FontAwesomeIcon
                        icon={faUser}
                        size="2x"
                        className="text-secondary float-left mr-3 mt-2"
                      />
                    </S.ListUserItem>
                    <S.ListUserItem className="mt-2">
                      <Text
                        label={`${user?.nome}`}
                        color="primary"
                        size="large"
                        weight={700}
                      />
                      <Text
                        label={`CPF: ${user?.cpf}`}
                        color="primary"
                        size="regular"
                        weight={400}
                      />
                    </S.ListUserItem>
                  </S.ListUser>
                </Col>
                <Col xs={2}>
                  <S.ListUser>
                    <S.ListUserItem className="border-left ml-1">
                      <ul className="ml-2">
                        <li className="list-unstyled pb-2 text-center cursor-pointer">
                          <OverlayTrigger
                            placement="right"
                            overlay={
                              <Tooltip id="closed">Trocar {label}</Tooltip>
                            }
                          >
                            <FontAwesomeIcon
                              icon={faExchangeAlt}
                              size="1x"
                              className="text-secondary float-left mr-3 mt-2"
                              onClick={() => {
                                clearUser()
                                changeUser()
                              }}
                            />
                          </OverlayTrigger>
                        </li>
                        <li className="list-unstyled pt-2 text-center cursor-pointer">
                          <OverlayTrigger
                            placement="right"
                            overlay={
                              <Tooltip id="closed">Editar {label}</Tooltip>
                            }
                          >
                            <FontAwesomeIcon
                              icon={faEdit}
                              size="1x"
                              className="text-secondary float-left mr-3 mt-2"
                              onClick={() => {
                                setModalShow(true)
                              }}
                            />
                          </OverlayTrigger>
                        </li>
                      </ul>
                    </S.ListUserItem>
                  </S.ListUser>
                </Col>
              </Row>
            </>
          )}
        </Col>
      </Row>
      <Cadastro
        label={label}
        show={modalShow}
        onHide={() => setModalShow(false)}
        isAddMode={!showEdit}
        userId={user && user.id ? user.id : null}
        onChange={handleChange}
      />
    </S.Wrapper>
  )
}

export default Register
