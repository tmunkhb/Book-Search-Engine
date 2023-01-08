import { gql } from '@apollo/client';

export const GET_ME = gql`
    {
        me {
            _id
            username
            email
            savedBooks {
                authors
                bookId
                description
                image
                link
                title
            }
        }
    }
`;