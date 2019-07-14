import React from 'react'
import { printTerm } from './util/formulas'
import { TreeNode } from './typings/TruthTree'
import Check from '@material-ui/icons/Check'

export default function NodeView(node: TreeNode) {
  return (
    <div className="node">
      {printTerm(node.term)} {node.resolved ? <Check /> : ''}
    </div>
  )
}
