import "./framework/core/_core.scss";
import "./framework/vendor/_vendor.scss";
import { graphql, useStaticQuery } from "gatsby";
import Header from "./header";
import PropTypes from "prop-types";
import React from "react";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <React.Fragment>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <footer>
          &copy; {new Date().getFullYear()}
        </footer>
      </div>
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
