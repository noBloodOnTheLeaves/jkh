import {Tooltip, tooltipClasses, TooltipProps} from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { useEffect, useRef, useState } from "react";
import {styled} from "@mui/material/styles";

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[1],
    ...theme.typography.body2
  },
}));

const GridCellExpand = (props: GridRenderCellParams) => {
  const [isOverflowed, setIsOverflow] = useState(false);
  const { value } = props;

  const textElementRef = useRef<HTMLSpanElement | null>(null);

  const checkOverflow = () => {
    // Using getBoundingClientRect, instead of scrollWidth and clientWidth, to get width with fractional accuracy
    const clientWidth = textElementRef.current!.getBoundingClientRect().width;

    textElementRef.current!.style.overflow = "visible";
    const contentWidth = textElementRef.current!.getBoundingClientRect().width;
    textElementRef.current!.style.overflow = "hidden";

    setIsOverflow(contentWidth > clientWidth);
  };

  useEffect(() => {
    checkOverflow();
    window.addEventListener("resize", checkOverflow);

    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);

  return (
    <LightTooltip title={value} disableHoverListener={!isOverflowed}>
      <span
        ref={textElementRef}
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis"
        }}
      >
        {value}
      </span>
    </LightTooltip>
  );
};

export default GridCellExpand;
