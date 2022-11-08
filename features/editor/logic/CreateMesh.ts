import { MeshBuilder, Scene, Vector3 } from "@babylonjs/core"

const addCube = (
  scene: Scene | undefined,
  position: Vector3 = new Vector3(0, 0, 0),
  boxSize: number = 1
) => {
  const mesh = MeshBuilder.CreateBox("cube", { size: boxSize }, scene)
  mesh.position = position
}

const addCapsule = (
  scene: Scene,
  position: Vector3 = new Vector3(0, 0, 0),
  capsuleHeight: number = 1
) => {
  const mesh = MeshBuilder.CreateCapsule(
    "capsule",
    { height: capsuleHeight },
    scene
  )
  mesh.position = position
}

const addGround = (
  scene: Scene,
  position: Vector3 = new Vector3(0, 0, 0),
  groundWidth: number = 1,
  groundHeight: number = 1
) => {
  const mesh = MeshBuilder.CreateGround(
    "ground",
    { width: groundWidth, height: groundHeight },
    scene
  )
  mesh.position = position
}

export { addCube, addCapsule, addGround }
