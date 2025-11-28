import React from "react";
import MuiGrid, { type GridProps } from "@mui/material/Grid";
import styled from "../../utils/styled";

type VariantType = "item" | "container";

export type CustomGridProps = GridProps & {
  variant?: VariantType;
};

const CustomGridBase = React.forwardRef<HTMLDivElement, CustomGridProps>(
  ({ variant, ...props }, ref) => {
    const extraProps =
      variant === "item"
        ? { item: true }
        : variant === "container"
        ? { container: true }
        : {};

    return <MuiGrid ref={ref} {...extraProps} {...props} />;
  }
);

CustomGridBase.displayName = "CustomGrid";

// Estilização com styled (para usar futuramente)
const CustomGrid = styled(CustomGridBase)(() => ({}));

export default CustomGrid;
