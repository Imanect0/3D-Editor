import { Camera, Light, LinesMesh, Mesh, Node } from "@babylonjs/core"
import { MeshDataItem, MeshDataItemType, SceneMeshData } from "photon-babylon"
import { photonConst } from "../../../const/const"

const MeshDataFactory = (
  name: string,
  id: number,
  type: MeshDataItemType,
  isInspectorVisible?: boolean
): MeshDataItem => {
  return {
    name,
    uid: id,
    type,
    isInspectorVisible: isInspectorVisible
      ? isInspectorVisible
      : !["GIZMOS", "GRID"].includes(type),
  }
}

const checkMeshDataItemType = (item: Node): MeshDataItemType => {
  return item.name.includes(photonConst.Prefix.PREFIX_3DUI_GIZMO)
    ? "GIZMOS"
    : item.name.includes(photonConst.Prefix.PREFIX_3DUI_GRID)
    ? "GRID"
    : item instanceof LinesMesh
    ? "LINE_MESH"
    : item instanceof Camera
    ? "CAMERA"
    : item instanceof Light
    ? "LIGHT"
    : item instanceof Mesh
    ? "MESH"
    : "NONE"
}

let nodes: SceneMeshData = {}
const getMeshData = (rootNodes: Node[]): {} => {
  let childNode: MeshDataItem[] = []

  rootNodes.forEach((item) => {
    const child = item.getChildren()
    const key = item.parent?.name ? item.parent?.name : "__root__"

    if (child[0] == undefined) {
      childNode.push(
        MeshDataFactory(item.name, item.uniqueId, checkMeshDataItemType(item))
      )
      nodes[key] = {
        name: key,
        uid: item.parent?.uniqueId ? item.parent?.uniqueId : item.uniqueId,
        child: childNode,
        isInspectorVisible: !key.includes(
          photonConst.Prefix.PREFIX_PHOTON_3DUI_ITEM
        ),
      }
    } else {
      nodes[key] = {
        name: key,
        child: childNode,
        uid: item.parent?.uniqueId ? item.parent?.uniqueId : item.uniqueId,
        isInspectorVisible: !key.includes(
          photonConst.Prefix.PREFIX_PHOTON_3DUI_ITEM
        ),
      }
      getMeshData(child)
    }
  })

  console.log(nodes)

  return nodes
}

export default getMeshData
