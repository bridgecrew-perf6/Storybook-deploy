import AccordionTitleColor from 'components/AccordionTitleColor'
import Badge from 'components/Badge'
import React from 'react'
import { Accordion, Table } from 'react-bootstrap'
import { Props } from './interface'

const ListTable: React.FC<Props> = ({
  data,
  onChangeModal,
  typeList = 'step'
}) => {
  const setClassAccordion = (value: string) => {
    switch (value) {
      case 'OVERDUE':
        return 'danger'
      case 'TODO':
        return 'warning'
      case 'INPROGRESS':
        return 'primary'
      case 'DONE':
        return 'success'
      default:
        return 'primary'
    }
  }

  const demoTable = (value: string, data: any, typeList: string) => {
    return (
      <Table
        className={`table-default ${
          typeList === 'step' ? setClassTable(value) : 'primary'
        }`}
        responsive
      >
        <thead>
          <tr>
            <th></th>
            <th>PROTOCOLO</th>
            <th>DESCRIÇÃO</th>
            <th>TIPO</th>
            <th>APRESENTANTE</th>
            <th>PRAZO</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: any, index: number) => (
            <tr key={index}>
              <td></td>
              <td
                onClick={() => onChangeModal(item)}
                className="cursor-pointer"
              >
                {item.title}
                {typeList === 'step' ? (
                  ''
                ) : (
                  <div className="d-block">
                    <Badge
                      id={item.id}
                      variant={setClassAccordion(item.status)}
                      label={item.status}
                    />
                  </div>
                )}
              </td>
              <td>{item.description}</td>
              <td>{item.type}</td>
              <td>{item.user}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    )
  }

  const setClassTable = (value: string) => {
    switch (value) {
      case 'OVERDUE':
        return 'table-danger'
      case 'TODO':
        return 'table-todo'
      case 'INPROGRESS':
        return 'table-inprogress'
      case 'DONE':
        return 'table-done'
      default:
        return 'table-default'
    }
  }
  return (
    <Accordion defaultActiveKey={'0'}>
      {data.lanes?.map((item: any, index: number) => (
        <div key={index}>
          <Accordion.Toggle eventKey={index.toString()}>
            <AccordionTitleColor
              id={item.id}
              label={item.title}
              color={
                typeList === 'step' ? setClassAccordion(item.step) : 'primary'
              }
              count={item.cards.length || 0}
            />
          </Accordion.Toggle>
          <hr />
          <Accordion.Collapse eventKey={index.toString()}>
            {demoTable(item.step, item.cards, typeList)}
          </Accordion.Collapse>
        </div>
      ))}
    </Accordion>
  )
}

export default ListTable
