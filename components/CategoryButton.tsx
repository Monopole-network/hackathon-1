import { Button } from "@chakra-ui/react";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { CloseIcon } from "@chakra-ui/icons";
import { changeType, resetFilters } from "../redux/reducers/filters";
import { resetProjects, mapByType } from "../redux/reducers/projects";

export type CategoryButtonProps = {
  props: CategoryButtonInfos;
};

export type CategoryButtonInfos = {
  color: string;
  type: string;
};

const CategoryButton: FC<CategoryButtonProps> = ({ props }) => {
  const { color, type } = props;
  const filter = useAppSelector((state) => state.filters);
  const dispatch = useAppDispatch();

  if (!filter.type || type !== filter.type) {
    return (
      <Button
        colorScheme={color}
        onClick={() => {
          dispatch(resetProjects());
          dispatch(resetFilters());
          dispatch(changeType(type));
          dispatch(mapByType(type));
        }}
      >
        {type.replaceAll("_", "").toLocaleUpperCase()}
      </Button>
    );
  }

  return (
    <Button
      colorScheme={color}
      rightIcon={<CloseIcon w={2} h={2} />}
      onClick={() => {
        dispatch(resetFilters());
        dispatch(resetProjects());
      }}
    >
      {type.replaceAll("_", "").toLocaleUpperCase()}
    </Button>
  );
};

export default CategoryButton;
