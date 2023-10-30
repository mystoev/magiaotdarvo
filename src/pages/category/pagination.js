import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

const PaginationContainer = styled.div`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin: 30px auto;

  .pagination {
    display: flex;
    flex-direction: row;
    gap: 20px;
    flex-wrap: nowrap;
    justify-content: center;

    li {
      list-style-type: none;
      border: 1px solid ${(props) => props.theme.colors.second};
      border-radius: 5px;

      &.disabled {
        opacity: 0.5;

        a {
          cursor: default;
        }
      }

      a {
        color: ${(props) => props.theme.colors.second};
        cursor: pointer;
        padding: 20px;
        line-height: 40px;
      }
    }
  }

  .active-page {
    background-color: ${(props) => props.theme.colors.accent};

    a {
      cursor: default !important;
      font-weight: bold;
    }
  }
`;

export const Pagination = ({ pageCount, onPageClick }) => {
  return (
    pageCount > 1 && (
      <PaginationContainer>
        <ReactPaginate
          className="pagination"
          activeClassName="active-page"
          breakLabel="..."
          nextLabel=">"
          previousLabel="<"
          pageCount={pageCount}
          onPageChange={onPageClick}
        />
      </PaginationContainer>
    )
  );
};

Pagination.propTypes = {
  pageCount: PropTypes.number,
  onPageClick: PropTypes.func
};
