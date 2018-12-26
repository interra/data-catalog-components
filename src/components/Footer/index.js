import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from '../A';
import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Wrapper>
      <section>
        <FormattedMessage {...messages.licenseMessage} />
      </section>
      <section>
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author: <A href="https://github.com/interra">Interra</A>,
          }}
        />
      </section>
    </Wrapper>
  );
}

export default Footer;
