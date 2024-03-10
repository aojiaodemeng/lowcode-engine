import { buttonAttribute } from "./comAttribute/buttonAttribute";
import { iconAttribute } from "./comAttribute/iconAttribute";
import { inputAttribute } from "./comAttribute/inputAttribute";
import { checkboxAttribute } from "./comAttribute/checkboxAttribute";
import { radioAttribute } from "./comAttribute/radioAttribute";
import { ComAttribute } from "./comAttribute/interface";
import { rateAttribute } from "./comAttribute/rateAttribute";
import { switchAttribute } from "./comAttribute/switchAttribute";
import { cardAttribute } from "./comAttribute/cardAttribute";
import { formAttribute } from "./comAttribute/formAttribute";
interface AttributeMap {
  [key: string]: ComAttribute[];
}

const attributeMap: AttributeMap = {
  Button: buttonAttribute,
  Input: inputAttribute,
  Icon: iconAttribute,
  Checkbox: checkboxAttribute,
  Radio: radioAttribute,
  Rate: rateAttribute,
  Switch: switchAttribute,
  Card: cardAttribute,
  Form: formAttribute,
};

export { attributeMap };
