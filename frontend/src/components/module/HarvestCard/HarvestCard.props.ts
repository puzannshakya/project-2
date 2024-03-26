import { CircleProgressProps } from "../../base/CircleProgress/CircleProgress.props";

export interface HarvestCardProps extends CircleProgressProps {
  cropId: string;
  cropName: string;
  datePlanted: string;
  estYield: string;
  height: number;
  width: number;
  mobile?: boolean;
  handleOpenCard: (id: string) => void;
}
