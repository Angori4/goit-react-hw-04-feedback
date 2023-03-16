import styled from 'styled-components';

export const Feedback = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
`;
export const ButtonFeedback = styled.button`
  padding: 10px 23px;
  margin: 0;
  text-transform: capitalize;
  width: 150px;
  font-size: 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: white;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: ${key => {
      switch (key.children) {
        case 'good':
          return 'green';
        case 'neutral':
          return 'orange';
        case 'bad':
          return 'red';
        default:
          return 'transparent';
      }
    }};
    color: white;
  }
`;
