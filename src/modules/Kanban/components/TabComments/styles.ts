import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100%;
  img {
    max-width: 100%;
  }
`

export const CommentsHistory = styled.div`
  max-height: 450px;
  overflow-y: auto;
  padding: 20px 20px 0px 0px;
`

export const OutgoingMsg = styled.div`
  overflow: hidden;
  margin: 26px 0 26px;
`
export const SendMsg = styled.div`
  float: right;
  width: 70%;
`

export const OutMessage = styled.div`
  background: ${(props) => props.theme.colors.primary} none repeat scroll 0 0;
  border-radius: 3px;
  font-size: 14px;
  margin: 0;
  color: ${(props) => props.theme.colors.white};
  padding: 5px 10px 5px 12px;
  width: 100%;
`
export const IncomingMsg = styled.div``

export const IncomingMsgImg = styled.div`
  display: inline-block;
  width: 10%;
  color: ${(props) => props.theme.colors.grey};
`

export const ReceivedMsg = styled.div`
  display: inline-block;
  padding: 0 0 0 10px;
  vertical-align: top;
  width: 90%;
`

export const ReceivedWithdMsg = styled.div``

export const InMessage = styled.div`
  background: ${(props) => props.theme.colors.grey} none repeat scroll 0 0;
  border-radius: 3px;
  color: ${(props) => props.theme.colors.grey};
  font-size: 14px;
  margin: 0;
  padding: 5px 10px 5px 12px;
  width: 100%;
`
