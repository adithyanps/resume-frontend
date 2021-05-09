import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import {
  Link as MuiLink,
} from '@material-ui/core';

// eslint-disable-next-line react/display-name
const NextComposed = React.forwardRef((props, ref) => {
  const { as, href, ...other } = props;

  if (!href.startsWith('/')) {
    // eslint-disable-next-line react/jsx-props-no-spreading,jsx-a11y/anchor-has-content
    return <a ref={ref} href={href} {...other} />;
  }

  return (
    <NextLink href={href} as={as}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading,jsx-a11y/anchor-has-content */}
      <a ref={ref} {...other} />
    </NextLink>
  );
});

NextComposed.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  prefetch: PropTypes.bool,
};

NextComposed.defaultProps = {
  as: null,
  prefetch: null,
};

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
const Link = (props) => {
  const {
    href,
    innerRef,
    naked,
    children,
    startIcon,
    endIcon,
    ...other
  } = props;

  return (
    <MuiLink
      component={NextComposed}
      // className={clsx(className,)}
      ref={innerRef}
      href={href}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...other}
    >

      {children}

    </MuiLink>
  );
};

Link.propTypes = {
  ...MuiLink.propTypes,
  activeClassName: PropTypes.string,
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  naked: PropTypes.bool,
  onClick: PropTypes.func,
  prefetch: PropTypes.bool,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
};

Link.defaultProps = {
  activeClassName: null,
  as: null,
  className: null,
  innerRef: null,
  naked: false,
  onClick: null,
  prefetch: null,
  startIcon: null,
  endIcon: null,
};

// eslint-disable-next-line react/jsx-props-no-spreading
export default React.forwardRef((props, ref) => <Link {...props} innerRef={ref} />);
