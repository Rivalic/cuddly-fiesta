import React, { createContext } from 'react';

export const TestContext = createContext();

export const TestProvider = ({ children }) => {
    console.log("TestProvider rendering...");
    return (
        <TestContext.Provider value={{}}>
            {children}
        </TestContext.Provider>
    );
};
