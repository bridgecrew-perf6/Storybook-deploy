import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Text from 'components/Text'
import React from 'react'
import * as S from './styles'

const TabComments: React.FC = ({ ...rest }) => {
  console.log(rest)
  return (
    <S.Container>
      <S.CommentsHistory>
        {/* BLOCK - ANOTHER PERSON MESSAGE */}
        <S.IncomingMsg>
          <S.IncomingMsgImg>
            <FontAwesomeIcon icon={faUserCircle} size="2x" />
          </S.IncomingMsgImg>
          <S.ReceivedMsg>
            <S.ReceivedWithdMsg>
              <S.InMessage>
                Oi tudo bem? aqui vai a minha primeira mensagem
              </S.InMessage>
              <Text
                label="12:12hrs 16/09/2001"
                color="dark"
                size="xsmall"
                weight={300}
                className="mt-1"
              />
            </S.ReceivedWithdMsg>
          </S.ReceivedMsg>
        </S.IncomingMsg>
        {/* BLOCK - YOU MESSAGE */}
        <S.OutgoingMsg>
          <S.SendMsg>
            <S.OutMessage>
              Opa, assim que terminar a prenotação, estarei realizando sua
              solicitação
            </S.OutMessage>
            <Text
              label="12:18hrs 16/09/2001"
              color="dark"
              size="xsmall"
              weight={300}
              className="mt-1"
            />
          </S.SendMsg>
        </S.OutgoingMsg>
        <S.OutgoingMsg>
          <S.SendMsg>
            <S.OutMessage>
              Opa, assim que terminar a prenotação, estarei realizando sua
              solicitação
            </S.OutMessage>
            <Text
              label="12:18hrs 16/09/2001"
              color="dark"
              size="xsmall"
              weight={300}
              className="mt-1"
            />
          </S.SendMsg>
        </S.OutgoingMsg>
        <S.OutgoingMsg>
          <S.SendMsg>
            <S.OutMessage>
              Opa, assim que terminar a prenotação, estarei realizando sua
              solicitação
            </S.OutMessage>
            <Text
              label="12:18hrs 16/09/2001"
              color="dark"
              size="xsmall"
              weight={300}
              className="mt-1"
            />
          </S.SendMsg>
        </S.OutgoingMsg>
        <S.IncomingMsg>
          <S.IncomingMsgImg>
            <FontAwesomeIcon icon={faUserCircle} size="2x" />
          </S.IncomingMsgImg>
          <S.ReceivedMsg>
            <S.ReceivedWithdMsg>
              <S.InMessage>
                Oi tudo bem? aqui vai a minha primeira mensagem
              </S.InMessage>
              <Text
                label="12:12hrs 16/09/2001"
                color="dark"
                size="xsmall"
                weight={300}
                className="mt-1"
              />
            </S.ReceivedWithdMsg>
          </S.ReceivedMsg>
        </S.IncomingMsg>
      </S.CommentsHistory>
    </S.Container>
  )
}

export default TabComments
