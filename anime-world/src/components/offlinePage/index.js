import React from 'react';
import styled from 'styled-components'
const OfflinePage = () => {
    return (
        <Disconnect>
            <h2>You are disconnect </h2>
        </Disconnect>
    );
};

export default OfflinePage;

const Disconnect= styled.div`
  display: flex;
  justify-content: center;
  margin: 300px auto;
`