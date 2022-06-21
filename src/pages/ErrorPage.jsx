import React from 'react';

const styleErr = {
  color: 'red',
  fontWeight: 'bold'
}

function ErrorPage() {
  return ( <div>
    <h1 style={styleErr}>Страница не найдена!</h1>
  </div> );
}

export default ErrorPage;