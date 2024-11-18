interface FooterIconFCProps extends React.SVGAttributes<SVGElement> {
  selected: boolean;
}
/**
 *
 *
 * SPACE
 *
 *
 */

//region: Category Icon Type
export type FooterIconType = {
  FC: (_props: FooterIconFCProps) => JSX.Element;
  Props: FooterIconFCProps;
};
