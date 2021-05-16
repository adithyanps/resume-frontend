import PropTypes from 'prop-types';

const linkPropTypes = PropTypes.shape({
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
});

const getLinkData = () => ([
  {
    url: '/portfolio',
    text: 'PORTFOLIO',
  },
  {
    url: '/blog',
    text: 'BLOG',
  },
  {
    url: '/contact',
    text: 'CONTACT',
  },
]);

export default getLinkData;

export {
  linkPropTypes,
};
