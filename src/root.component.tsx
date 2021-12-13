import React, { Fragment } from "react";
import styled from "styled-components";
import { GridLayout } from "./components/gridLayout";
import {
  GRID_BACKGROUND_DEFAULT_COLOR,
  SECTION_DEFAULT_COLOR,
} from "./constants/defaults";
import { License } from "./constants/license";
import { GlobalStyle } from "./styles/globalStyle";
import { resolveGridBuild } from "./helpers/layout-helper";

interface ISectionWithGridProps {
  agileEstimation: License;
}

const SectionWithGrid = styled.section`
  display: flex;
  padding: 1rem;
  height: 2rem;
  width: 100%;
  background-color: ${({ agileEstimation }: ISectionWithGridProps) =>
    agileEstimation
      ? resolveGridBuild(agileEstimation)
      : GRID_BACKGROUND_DEFAULT_COLOR};
  border-bottom: ${() => `1px solid ${SECTION_DEFAULT_COLOR}`};
`;

export default function Root(props) {
  console.log("ROOT COMPONENT PROPS: ", props);
  return (
    <Fragment>
      <GlobalStyle />
      <SectionWithGrid agileEstimation={props.agileEstimation}>
        <h1>{props.name} is mounted!</h1>
        <GridLayout />
      </SectionWithGrid>
    </Fragment>
  );
}
