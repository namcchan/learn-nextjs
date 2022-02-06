import React from 'react';

export interface headerProps {}

export default function Header({}: headerProps) {
  console.log('Render header');

  return <div className="header">Header</div>;
}
