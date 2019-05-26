import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({uri:'/'});


const Apollo = ({children}:{children: React.ReactElement}) => {
    return (<ApolloProvider client={client}>
        {children}
    </ApolloProvider>)
}
export default Apollo;