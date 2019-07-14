import { TreeNode } from '../typings/TreeNode'

/**
 *
 * @param root
 * @param selectedNode
 * @param newNodes
 * 1. Mark the currently selected node as resolved.
 * 2. Append the new nodes to the bottom of all open branches.
 *  (For now, this can just be all branches, since we don't have
 *  a way of marking branches as open/closed yet.)
 */
export const decomposeNode = (
  root: TreeNode,
  selectedNode: TreeNode,
  newNodes: TreeNode[]
): TreeNode =>
  root === selectedNode
    ? appendChildren(markResolved(selectedNode), newNodes)
    : {
        ...root,
        children: root.children.map((child) =>
          decomposeNode(child, selectedNode, newNodes)
        ),
      }

export const makeNode = (
  formula: string,
  children: TreeNode[] = []
): TreeNode => ({
  formula: formula,
  children: children,
  resolved: false,
})

/**
 *
 * @param root The root of a subTree
 * @param newNodes nodes to append, as-is, to the bottom of all open branches.
 */
export const appendChildren = (
  root: TreeNode,
  newNodes: TreeNode[]
): TreeNode =>
  root.children.length === 0
    ? { ...root, children: newNodes }
    : {
        ...root,
        children: root.children.map<TreeNode>((child: TreeNode) =>
          appendChildren(child, newNodes)
        ),
      }
/**
 *
 * @param root - The node to mark as resolved.
 * Mark the currently selected node as resolved.
 */
export const markResolved = (root: TreeNode) => ({ ...root, resolved: true })

export class FormulaParseError extends Error {}

/**
 *
 * @param formulas a comma-separated list of formulas, as a string.
 */
export const parseBranch = (inputString: string): TreeNode | null => {
  const formulas = inputString.split(',').filter((formula) => formula) // filter out empty strings.
  if (formulas.length) {
    return formulas
      .map((formula: string) => makeNode(formula))
      .reduceRight((prev: TreeNode, curr: TreeNode) => ({
        ...curr,
        children: [prev],
      }))
  } else {
    return null
  }
}
