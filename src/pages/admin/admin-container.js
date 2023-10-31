import styled from 'styled-components';

export const AdminContainer = styled.div`
  margin: 20px;

  .select-and-add {
    display: flex;
    gap: 20px;
    justify-content: end;
  }

  h1 {
    margin-top: 20px;
  }

  ul {
    margin-left: 20px;
  }

  .product-edit {
    margin-top: 20px;
  }

  .product-row {
    padding-top: 2px;
    padding-bottom: 2px;
    border-top: 1px solid ${(props) => props.theme.colors.second};
    display: flex;
    flex: 0 0 auto;
    gap: 10px;

    & > * {
      align-self: center;
    }

    & > p {
      flex: 1;
      max-width: 30%;
    }

    .product-images {
      flex: 2;
      display: flex;
      gap: 20px;
      overflow: auto;
    }

    .product-action {
      flex: 0;
    }
  }

  @media only screen and (max-width: 768px) {
    margin: 10px;
    font-size: 0.8em;

    .product-row {
      display: block;
      position: relative;

      p {
        max-width: max-content;
        font-size: 1.25em;
      }

      .product-images {
        padding: 5px 0;
        max-width: 60%;
        overflow-x: auto;
      }

      .product-action {
        position: absolute;
        right: 0;
        bottom: 10px;
      }
    }
  }
`;
