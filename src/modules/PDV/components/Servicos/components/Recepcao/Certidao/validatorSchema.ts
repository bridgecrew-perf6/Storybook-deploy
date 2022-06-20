import * as yup from 'yup'
import { ptForm } from 'yup-locale-pt'
yup.setLocale(ptForm)

export const validatorSchema = yup.object().shape({
  // SELECTS
  tipo: yup.object().shape({
    label: yup.string().required(),
    value: yup.string().required()
  }),
  custas: yup.object().shape({
    label: yup.string().required(),
    value: yup.string().required()
  }),
  // INPUTS
  prenotacao: yup.string().required(),
  protocoloArisp: yup.string().required(),
  observacao: yup.string().required(),
  // TICKETS
  tickets: yup
    .object()
    .required()
    .shape({
      data: yup
        .array()
        .required()
        .of(
          yup
            .object()
            .required()
            .shape({
              dataRegistro: yup
                .array()
                .required()
                .of(
                  yup
                    .object()
                    .required()
                    .shape({
                      numero: yup.number().min(1).required(),
                      vias: yup.number().min(1).required()
                    })
                )
            })
        )
    })
})
