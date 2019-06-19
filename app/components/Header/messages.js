/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  homepage: {
    id: `${scope}.Homepage`,
    defaultMessage: 'Home',
  },
  claims: {
    id: `${scope}.claims`,
    defaultMessage: 'Claims',
  },
  about: {
    id: `${scope}.about`,
    defaultMessage: 'About Us',
  },
  contact: {
    id: `${scope}.contact`,
    defaultMessage: 'Contact Us',
  },
});
