import "./About.css";

import React from 'react';

const About = () => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap"
          rel="stylesheet"
        />
        <title>Vite + React</title>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Montserrat:wght@200&display=swap');
            h1 {
              text-align: center; 
              color: white; 
              font-size: 55px;
              font-family: Inter; 
              font-weight: 600;
            }
            @media all and (max-width: 750px) {
              h1 {
                font-size: 42px;
              }
            }
          `}
        </style>
      </head>
      <body style={{ background: '#041424' }}>
        <h1>ABOUT US</h1>
        <div id="root"></div>
        <script type="module" src="/src/components/About/About.jsx"></script>
      </body>
    </html>
  );
};
export default About;
