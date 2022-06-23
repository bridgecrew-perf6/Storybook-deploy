import {
  faCheckDouble,
  faExclamationTriangle,
  faTimes
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PdvOrderContext } from '../../../contexts/PdvOrderContext'
import { StepNameType } from '../../../contexts/PdvOrderContext/interfaceTypes'
import React, { useContext, useEffect, useState } from 'react'
import { Col, ProgressBar, Row } from 'react-bootstrap'
import { Props, StepsProps } from './interface'
import * as S from './styles'

const MultiStepsPDV: React.FC<Props> = ({
  showNavigation,
  steps,
  permitedNavigation
}) => {
  const [stepNumberActive, setStepNumberActive] = useState<number>(1)
  const { step, handleStep } = useContext(PdvOrderContext)

  const setStep = (numberActive: number, nameActive: StepNameType) => {
    setStepNumberActive(numberActive)
    handleStep(nameActive)
  }

  useEffect(() => {
    steps?.map((item: StepsProps, i: number) => {
      if (step === item.name) {
        setStepNumberActive(i + 1)
      }
    })
  }, [step, steps])

  return (
    <S.Wrapper>
      {showNavigation && (
        <>
          <S.Step>
            {steps?.map((item: StepsProps, i: number) => (
              <>
                <S.StepItem
                  key={i}
                  enableCursor={permitedNavigation}
                  onClick={() => {
                    if (permitedNavigation) {
                      setStep(i + 1, item.name)
                    }
                  }}
                >
                  <Row>
                    <Col
                      className={
                        stepNumberActive >= i + 1
                          ? 'text-center text-primary'
                          : 'text-center text-secondary'
                      }
                    >
                      {item.icon}
                    </Col>
                  </Row>
                  <Row>
                    <Col
                      className={
                        stepNumberActive >= i + 1
                          ? 'text-center text-primary font-weight-bold'
                          : 'text-center text-secondary'
                      }
                    >
                      {item.name}
                    </Col>
                  </Row>
                  <S.StepDivider
                    isActive={stepNumberActive >= i + 1 ? true : false}
                  />
                  {item.status === 'DONE' && (
                    <FontAwesomeIcon
                      icon={faCheckDouble}
                      className="text-primary"
                      size={'1x'}
                    />
                  )}
                  {item.status === 'WARNING' && (
                    <FontAwesomeIcon
                      icon={faExclamationTriangle}
                      className="text-warning"
                      size={'1x'}
                    />
                  )}
                  {item.status === 'ERROR' && (
                    <FontAwesomeIcon
                      icon={faTimes}
                      className="text-danger"
                      size={'1x'}
                    />
                  )}
                </S.StepItem>
              </>
            ))}
          </S.Step>
          <ProgressBar
            animated
            variant="secondary"
            now={(stepNumberActive * 100) / steps.length}
          />
        </>
      )}
      <S.Content>
        {steps?.map(
          (item: any | undefined) =>
            step === item.name && <div>{item.component}</div>
        )}
      </S.Content>
    </S.Wrapper>
  )
}

export default MultiStepsPDV
