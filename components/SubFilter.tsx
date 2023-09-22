import React from "react";
import { Button, Card, CardBody, CardHeader, Checkbox, Collapse, Grid, Stack } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon, RepeatIcon, SearchIcon } from "@chakra-ui/icons";
import { useAppDispatch, useAppSelector } from "../hooks";
import { mapByODD, resetProjects } from "../redux/reducers/projects";

const subFilters: Array<object> = [
  {
    type: "environmental",
    odds: [
      "Clean Water and Sanitation",
      "Affordable and Clean Energy",
      "Responsible Consumption and Production",
      "Climate Action",
      "Life Below Water",
      "Life on Land",
    ],
  },
  {
    type: "social",
    odds: [
      "No Poverty",
      "Zero Hunger",
      "Good Health and Well-being",
      "Quality Education",
      "Gender Equality",
      "Reduced Inequality",
      "Sustainable Cities and Communities",
      "Peace, Justice, and Strong Institutions",
    ],
  },
  {
    type: "economic",
    odds: ["Decent Work and Economic Growth", "Industry, Innovation, and Infrastructure"],
  },
  {
    type: "charity",
    odds: ["Partnerships for the Goals"],
  },
];

const SubFilter: React.FC = () => {
  const [subfiltersArray, setSubfiltersArray] = React.useState<string[]>([]);
  const [isDisplayed, setIsDisplayed] = React.useState<boolean>(false);

  const filter = useAppSelector((state) => state.filters);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (filter.type) {
      subFilters.forEach((subfilter: any) => {
        if (subfilter.type === filter.type) {
          setSubfiltersArray(subfilter.odds);
          setCheckState([]); // Reset check state
        }
      });
    }
  }, [filter.type]);

  const [checkState, setCheckState] = React.useState<string[]>([]);

  const handleChange = (e: any) => {
    let name: string = e.target.name;
    name = name.replace(/[\s+-,]/g, "_").toLowerCase();
    if (e.target.checked) {
      setCheckState([...checkState, name]);
    } else {
      setCheckState(checkState.filter((filterName) => filterName !== name));
    }
  };

  const handleSubFilters: any = () => {
    setIsDisplayed(!isDisplayed);
  };

  const handleReset: any = () => {
    setCheckState([]);
    dispatch; // Reset check state
  };

  return (
    <Grid className="subfilters">
      <Stack direction="row" align="center">
        <Button
          colorScheme="gray"
          onClick={handleSubFilters}
          rightIcon={isDisplayed ? <ChevronUpIcon /> : <ChevronDownIcon />}
        >
          Filters
        </Button>
      </Stack>
      <Collapse in={isDisplayed}>
        <Card colorScheme="blue" style={{ marginTop: 20 }}>
          <CardBody>
            <Stack direction="column" align="left">
              {subfiltersArray.map((subfilter: any) => (
                <Checkbox
                  key={subfilter}
                  name={subfilter}
                  isChecked={checkState.includes(subfilter.replace(/\s+/g, "_").toLowerCase())}
                  onChange={handleChange}
                >
                  {subfilter}
                </Checkbox>
              ))}
            </Stack>
            <Stack style={{ marginTop: 20 }} direction="row" align="left">
              <Button
                variant="outline"
                onClick={() => {
                  dispatch(mapByODD(checkState));
                }}
              >
                <SearchIcon />
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setCheckState([]);
                  dispatch(mapByODD([]));
                }}
              >
                <RepeatIcon />
              </Button>
            </Stack>
          </CardBody>
        </Card>
      </Collapse>
    </Grid>
  );
};

export default SubFilter;
