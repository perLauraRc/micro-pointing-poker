import React, { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./gridLayout.scss";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export interface IGridLayoutProps {
  content?: HTMLElement | any;
}

export const GridLayout = ({ content }: IGridLayoutProps) => {
  const onLayoutModifyHandler = () => {};

  return (
    <ResponsiveReactGridLayout
      className="gridLayout"
      onLayoutChange={onLayoutModifyHandler}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 8, md: 8, sm: 4, xs: 2, xxs: 2 }}
    >
      {content}
    </ResponsiveReactGridLayout>
  );
};
