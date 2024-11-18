interface CategoryIconFCProps extends React.SVGAttributes<SVGElement> {
  color: "primary" | "grey" | "white";
}
/**
 *
 *
 * SPACE
 *
 *
 */

//region: Category Icon Type
export type CategoryIconType = {
  FC: (_props: CategoryIconFCProps) => JSX.Element;
  Props: CategoryIconFCProps;
};
