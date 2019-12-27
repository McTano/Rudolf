import React, { useState, useReducer } from 'react'

import { parsePremises } from '../util/nodes'
import NodeView from './NodeView'
import PremiseInput from './PremiseInput'
import PremisesSelector from './PremisesSelector'
import { IconButton } from '@material-ui/core'
import { Undo, Redo } from '@material-ui/icons'
import { JSONView } from './JSONView'
import { initialState, rudolfReducer, rudolfActions } from '../RudolfReducer'

const initialPremises = 'P->Q,P,~Q'

const App: React.FC = (): JSX.Element => {
  const [premises, setPremises] = useState(initialPremises)
  const [state, dispatch] = useReducer(rudolfReducer, initialState)

  const handleSubmitPremises = (rawInput: string) => {
    setPremises(rawInput)
    const premiseArray = premises.split(',')
    dispatch(rudolfActions.setTree(parsePremises(premiseArray, '', 1)))
    dispatch(rudolfActions.setRow(premiseArray.length))
  }

  return (
    <main className="App">
      <PremisesSelector onChange={handleSubmitPremises} />
      <PremiseInput
        premises={premises}
        onSubmit={handleSubmitPremises}
        setPremises={setPremises}
      />
      <span className="tree-buttons">
        <IconButton className="undo-button" disabled={true}>
          <Undo />
        </IconButton>
        <IconButton className="redo-button" disabled={true}>
          <Redo />
        </IconButton>
      </span>
      <NodeView
        node={state.tree}
        nextRow={state.nextRow}
        selectedNodeId={state.selectedNodeId}
        dispatch={dispatch}
      />
      <JSONView {...state} />
    </main>
  )
}

export default App
