import { SmallCloseIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

const Filter = (active: boolean, label: string) => {
  return ({ active } ? <Button>{label}</Button> : <Button>{label}</Button>)
}

export default Filter;