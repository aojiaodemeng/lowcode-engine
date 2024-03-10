import { buttonAttribute } from "./comAttribute/buttonAttribute";
import { iconAttribute } from "./comAttribute/iconAttribute";
import { inputAttribute } from "./comAttribute/inputAttribute";
import { ComAttribute } from "./comAttribute/interface";
interface AttributeMap {
  [key: string]: ComAttribute[];
}

const attributeMap: AttributeMap = {
  Button: buttonAttribute,
  Input: inputAttribute,
  Icon: iconAttribute,
};

export { attributeMap };
