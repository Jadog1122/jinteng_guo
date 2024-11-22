// src/pages/SubPage2.jsx
import React from "react";

const Blog = () => {
  return (
    <div style={styles.subPage}>
      <h1>Blog</h1>
      <p>This is the content of Sub Page 2.</p>
    </div>
  );
};

const styles = {
  subPage: { textAlign: "center", padding: "2rem" },
};

export default Blog;
