import React from 'react'
import propTypes from 'prop-types'
import styled from '@emotion/styled'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Row, RowOrder, RowOrderHeader } from '..'

const ListContainer = styled('div')`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: 0 ${(props) => props.theme.layout.paddingSmall} 0 0;
`

const RowContainer = styled('div')`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const List = ({
  orders = [],
  itemTypes = [],
  doneOnPrint = false,
  hideDelay = false,
  warningMinutes = 5,
  alertMinutes = 10,
  actions = {},
}) => {
  return (
    <ListContainer>
      <TransitionGroup component={null}>
        {orders.map((order) => {
          return (
            <CSSTransition
              key={order.order_uuid}
              classNames="fade-up"
              timeout={250}
            >
              <Row
                key={order.order_uuid}
                header={<RowOrderHeader order={order} {...actions} />}
              >
                <RowContainer>
                  <RowOrder
                    order={order}
                    itemTypes={itemTypes}
                    doneOnPrint={doneOnPrint}
                    hideDelay={hideDelay}
                    warningMinutes={warningMinutes}
                    alertMinutes={alertMinutes}
                    {...actions}
                  />
                </RowContainer>
              </Row>
            </CSSTransition>
          )
        })}
      </TransitionGroup>
    </ListContainer>
  )
}

List.displayName = 'List'
List.propTypes = {
  orders: propTypes.array,
  itemTypes: propTypes.array,
  doneOnPrint: propTypes.bool,
  hideDelay: propTypes.bool,
  warningMinutes: propTypes.number,
  alertMinutes: propTypes.number,
  actions: propTypes.object,
}

export default List
