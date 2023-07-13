import React from 'react';
import 'src/styles/App.css';

function Dashboard(props: any) {
  const { children } = props
  return (
    <div className="Dashboard">
      {children}
    </div>
  );
}

export default Dashboard;
