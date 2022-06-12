/**
 * Component for a quick experiment
 */

import { PropTypes } from "~/libs";

import type { HTMLElementProps } from "~/types";

interface ComponentProps extends HTMLElementProps {}

export const Component = ({ children }: ComponentProps) => {
  return (
    <div className="my-5 bg-primary-500">
      <h1>Component</h1>
      {children}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
};

Component.defaultProps = {
  children: <p>Component Children</p>,
};
