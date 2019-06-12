import React from 'react';
import { MemoryRouter as Router } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Footer from './Landingpage/Footer'
import { ThemeProvider } from "styled-components"

import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"


const AdapterLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);

const CollisionLink = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref} to="/getting-started/installation/" {...props} />
));

export default function LinkRouter() {
  const socialMediaIconLinks = [
    { icon: faFacebook },
    { icon: faInstagram },
    { icon: faTwitter },
  ]

  const footerPageLinks = [
    { linkText: "About" },
    { linkText: "Contact" },
    { linkText: "Terms of Use" },
    { linkText: "Privacy Policy" },
  ]
  const footerProps = {
    socialMediaIconLinks,
    pageLinks: footerPageLinks,
    copyrightText: "Startup 2019. All Rights Reserved.",
  }
  const theme = { primary: "red" }

  return (
    <Router>
      <main>
      <ThemeProvider theme={theme}>
      <div>
        <Link component={RouterLink} to="./Components/Layouts/Header">
          Simple case
        </Link>
        <br />
        <Link component={AdapterLink} to="/">
          Ref forwarding
        </Link>
        <br />
        <Link component={CollisionLink}>Avoids props collision</Link>
        <br />
        <Footer {...footerProps} />
      </div>
      </ThemeProvider>
      </main>
    </Router>

  );
}