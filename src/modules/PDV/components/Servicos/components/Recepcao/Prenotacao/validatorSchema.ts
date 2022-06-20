import * as yup from 'yup'
import { ptForm } from 'yup-locale-pt'
yup.setLocale(ptForm)

export const validatorSchema = yup.object().shape({
  // SELECTS
  // tipo: yup.object().shape({
  //   label: yup.string().required(),
  //   value: yup.string().required()
  // }),
  tabela: yup.object().shape({
    label: yup.string().required(),
    value: yup.string().required()
  }),
  custas: yup.object().shape({
    label: yup.string().required(),
    value: yup.string().required()
  }),
  vcQuitacaoPacto: yup.object().shape({
    label: yup.string().required(),
    value: yup.string().required()
  }),
  valorInformado: yup.object().shape({
    label: yup.string().required(),
    value: yup.string().required()
  }),
  // INPUTS
  outorgado: yup.string(), // TODO
  outorgante: yup.string(), // TODO
  protocoloArisp: yup.string(),
  protocoloIndisponibilidade: yup.string(),
  coligadoCom: yup.string(),
  coligacaoNumero: yup.string(),
  prazoRegistro: yup.string().required(),
  prazoDevolucao: yup.string().required(),
  prazoValidadePrenotacao: yup.string().required(),
  prazoNotificacao: yup.string(),
  viasAdicionais: yup.number().min(0).required(),
  observacao: yup.string()
  // TICKETS
  // tickets: yup
  //   .object()
  //   // .required() // TODO
  //   .shape({
  //     data: yup
  //       .array()
  //       // .required()
  //       .of(
  //         yup
  //           .object()
  //           // .required()
  //           .shape({
  //             dataRegistro: yup
  //               .array()
  //               //  .required()
  //               .of(
  //                 yup
  //                   .object()
  //                   // .required()
  //                   .shape({
  //                     numero: yup.number().min(1).required(),
  //                     vias: yup.number().min(1).required()
  //                   })
  //               )
  //           })
  //       )
  //   })
})
