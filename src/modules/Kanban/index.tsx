import { faColumns, faListUl } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Header } from 'navigation/Header'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Board from 'react-trello'
import ListTable from './components/ListTable'
import ModalFull from './components/ModalFull'
import { Props } from './interface'

const Kanban: React.FC<Props> = ({ data, title, typeList = 'step' }) => {
  const router = useRouter()
  const [viewer, setViewer] = useState('kanban')
  const [showModal, setShowModal] = useState(false)
  const [card, setCard] = useState({})

  const setEventModal = (data: any) => {
    setCard(data || data.lanes[0].cards)
    setShowModal(!showModal)
  }

  const handlePushRouter = () => {
    router.push('/kanban')
  }

  return (
    <>
      <Header title={title}>
        <>
          <ul className="list-inline ">
            <li
              className="list-inline-item border-right  pr-3 pt-2 pb-2 cursor-pointer"
              onClick={() => setViewer('listing')}
            >
              <FontAwesomeIcon icon={faListUl} className="mr-2" />
              Listagem
            </li>
            <li
              className="list-inline-item pl-2 pt-2 pb-2 cursor-pointer"
              onClick={() => setViewer('kanban')}
            >
              <FontAwesomeIcon icon={faColumns} className="mr-1" />
              Kankan
            </li>
          </ul>
        </>
      </Header>
      <ModalFull card={card} visible={showModal} />
      {viewer === 'kanban' && (
        <Board
          data={data}
          style={{ backgroundColor: 'white', overflowX: 'scroll' }}
          handleDragEnd={setEventModal}
          onCardClick={setEventModal}
          onLaneClick={handlePushRouter}
        />
      )}
      {viewer === 'listing' && (
        <ListTable
          data={data}
          onChangeModal={setEventModal}
          typeList={typeList}
        />
      )}
    </>
  )
}

export default Kanban
