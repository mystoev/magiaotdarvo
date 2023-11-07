import styled from 'styled-components';

export const EditContainer = styled.div`
  width: 800px;
  margin: auto;
  padding-bottom: 50px;

  .images-container {
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 0.75em;
    width: 100%;

    h1,
    h2 {
      padding: 5px;
    }

    input,
    textarea {
      width: calc(100% - 14px);
      margin-left: 5px;
      padding: 2px;
    }

    .parent {
      width: calc(100% - 10px);
      margin-left: 5px;
      font-size: 1.25em;

      .file-upload {
        padding: 0.5em;
      }
    }

    .images-container {
      margin-left: 5px;

      > div {
        height: 100px;
      }
    }

    button {
      font-size: 1.25em;
      padding: 10px;
      margin-left: 5px;
    }
  }
`;
