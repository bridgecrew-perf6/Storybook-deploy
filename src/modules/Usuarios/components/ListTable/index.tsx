import Badge from 'components/Badge'
import React from 'react'
import { Pagination, Table } from 'react-bootstrap'
import Switch from 'react-switch'
import { Props } from './interface'

const ListTable: React.FC<Props> = ({ data, onChangeModal }) => {
  const demoTable = (data: any) => {
    return (
      <Table className={`table-default primary`} responsive>
        <thead>
          <tr>
            <th></th>
            <th>USUÁRIO</th>
            <th>E-MAIL</th>
            <th>CELULAR</th>
            <th>SITUAÇÃO</th>
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
                {item.node.nome}
                <div className="d-block">
                  <Badge
                    id={item.node.id}
                    variant={'primary'}
                    label={'ESCREVENTE'}
                  />
                </div>
              </td>
              <td>
                {item.node.email}
                {item.node.id === '2' && (
                  <div className="d-block">
                    <Badge
                      id={item.node.id}
                      variant={'success'}
                      label={'CONVITE ENVIADO'}
                    />
                  </div>
                )}
              </td>
              <td>{item.node.celular}</td>

              <td>
                <Switch
                  onChange={() => console.log('AQUI')}
                  checked={true}
                  id={item.node.id}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    )
  }

  return (
    <>
      {demoTable(data)}
      <hr />
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </>
  )
}

export default ListTable
