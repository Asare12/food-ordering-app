import React, { useState, useEffect, useMemo, useRef } from "react";
import ProductDataService from "../services/product.service";
import Pagination from "@material-ui/lab/Pagination";
import { useTable } from "react-table";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const ProductList = (props) => {
  const [products, setProducts] = useState([]);
  const productRef = useRef();

  productRef.current = products;
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [pageSize, setPageSize] = useState(3);

  const pageSizes = [3, 6, 9];

  useEffect(() => {
    retrieveProducts();
  }, [page, pageSize]);

  const getRequestParams = (page, pageSize) => {
    let params = {};

    // if (searchTitle) {
    //   params["title"] = searchTitle;
    // }

    if (page) {
      params["page"] = page - 1;
    }

    if (pageSize) {
      params["size"] = pageSize;
    }

    return params;
  };

  const retrieveProducts = () => {
    const params = getRequestParams(page, pageSize);

    ProductDataService.getProductsByCategoryId(props.match.params.id, params)
      .then((response) => {
        console.log("response.data", response.data);
        const { products, totalPages } = response.data;

        setProducts(products);
        setCount(totalPages);

        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handlePageSizeChange = (event) => {
    setPageSize(event.target.value);
    setPage(1);
  };

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Description",
        accessor: "desciption",
      },

      {
        Header: "Price",
        accessor: "price",
      },
      {
        Header: "Name",
        accessor: "productName",
      },
      {
        Header: "Actions",
        accessor: "actions",
        Cell: (props) => {
        console.log("propsss",props);
          const rowIdx = props.row.id;
          return (
            <div>
              <LinkContainer to={"/product/" + productRef.current[rowIdx].id}>
                <FontAwesomeIcon icon={faEdit} className="action mr-2">
                  <Nav.Item>
                    <Nav.Link href="/" />
                  </Nav.Item>
                </FontAwesomeIcon>
              </LinkContainer>
              {/* <span onClick={() => deleteCategory(rowIdx)}>
                <FontAwesomeIcon
                  icon={faTrash}
                  className="action"
                ></FontAwesomeIcon>
              </span> */}
              {/* <LinkContainer to={"/category/" + productRef.current[rowIdx].id + "/product"}>
                  <LinkContainer to={productRef.current[rowIdx].id + "/products"}>
                  <button onClick={viewProductList(rowIdx)} className="btn btn-md btn-primary">View product </button>
                  </LinkContainer> */}
            </div>
          );
        },
      },
    ],
    []
  );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({
        columns,
        data: products,
      });
      console.log("useTable",useTable);
      console.log("prepareRow",prepareRow);

  return (
    <div className="list row">
      <div className="col-md-12 list">
        <h4>Products List</h4>

        <div className="mt-3">
          {"Items per Page: "}
          <select onChange={handlePageSizeChange} value={pageSize}>
            {pageSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>

          <Pagination
            className="my-3"
            count={count}
            page={page}
            siblingCount={1}
            boundaryCount={1}
            variant="outlined"
            shape="rounded"
            onChange={handlePageChange}
          />
        </div>
        <table
          className="table table-striped table-bordered"
          {...getTableProps()}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="col-md-8">
        {/* <button className="btn btn-sm btn-danger" onClick={removeAllCategories}>
          Remove All
        </button> */}
      </div>
    </div>
  );
};


export default ProductList;
