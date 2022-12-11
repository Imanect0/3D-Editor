import { Icon } from "@chakra-ui/react"
import { MeshDataItemType } from "photon-babylon"
import {
  BsSun,
  BsCamera,
  BsBox,
  BsChevronRight,
  BsDiamond,
} from "react-icons/bs"
import { MdShowChart } from "react-icons/md"

const InspectorPanelIcon = (props: {
  meshType?: MeshDataItemType
}): JSX.Element => {
  const type = props.meshType

  const ObjectTypeIcon = {
    MESH: <Icon as={BsBox} />,
    CAMERA: <Icon as={BsCamera} />,
    NODE: <Icon as={BsDiamond} />,
    LIGHT: <Icon as={BsSun} />,
    LINE_MESH: <Icon as={MdShowChart} />,
    NONE: <></>,
  }

  return <>{type ? ObjectTypeIcon[type] : <></>}</>
}

export default InspectorPanelIcon
