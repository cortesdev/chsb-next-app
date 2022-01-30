import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const PageWrapper = styled.div<{ theme?: Theme }>`
    display: block;
    align-items: flex-start;
    justify-content: center;
    background-color: ${(props) => props.theme.palette.background.default};
    width: 100%;

    padding-left: 6rem;
    padding-right: 6rem;

    transition: all 0.2s;

    @media (max-width: 1100px) {
        padding-left: 4rem;
        padding-right: 4rem;
    }
      
    @media (max-width: 600px) {
        padding-left: 2rem;
        padding-right: 2rem;
    }
`;
