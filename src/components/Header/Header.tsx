import styled from 'styled-components';

const MainHeader = styled.header`
height: 42px;
background: #222222ed;
align-items: center;
display: flex;
justify-content: center;
font-family: 'Fredoka One', cursive;
letter-spacing: 0.2rem;
font-size: 1.2rem;
color: #fff;
`;

export default function HeaderComponent() {
    return (
        <MainHeader>
            NEXT  Music <span className="material-icons header-logo">headphones</span>
        </MainHeader>
    );
}