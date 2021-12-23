import React, { useState, useEffect, useMemo, useRef } from "react";
import { useTable } from "react-table";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import CategoryDataService from "../services/category.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const CategoryList = (props) => {
  const [categories, setCategories] = useState([]);
  const [searchCategory, setSearchCategory] = useState("");
  const categoryRef = useRef();

  categoryRef.current = categories;

  useEffect(() => {
    retrieveCategory();
  }, []);

  const retrieveCategory = () => {
    CategoryDataService.getAll()
      .then((response) => {
        setCategories(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onChangeSearchCategory = (e) => {
    const searchCategory = e.target.value;
    setSearchCategory(searchCategory);
  };

  const refreshList = () => {
    retrieveCategory();
  };

  const removeAllCategories = () => {
    CategoryDataService.removeAll()
      .then((response) => {
        console.log(response.data);
        refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const findByCategory = () => {
    CategoryDataService.findByTitle(searchCategory)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteCategory = (rowIndex) => {
    const id = categoryRef.current[rowIndex].id;

    CategoryDataService.remove(id)
      .then((response) => {
        refreshList();

        let newCategories = [...categoryRef.current];
        newCategories.splice(rowIndex, 1);

        setCategories(newCategories);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Actions",
        accessor: "actions",
        Cell: (props) => {
          const rowIdx = props.row.id;
          return (
            <div>
              <LinkContainer to={"/category/" + categoryRef.current[rowIdx].id}>
                <FontAwesomeIcon icon={faEdit} className="action mr-2">
                  <Nav.Item>
                    <Nav.Link href="/" />
                  </Nav.Item>
                </FontAwesomeIcon>
              </LinkContainer>
              <span onClick={() => deleteCategory(rowIdx)}>
                <FontAwesomeIcon
                  icon={faTrash}
                  className="action"
                ></FontAwesomeIcon>
              </span>
            </div>
          );
        },
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: categories,
    });

  return (
    <div className="list row">
      {/* <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Category"
            value={searchCategory}
            onChange={onChangeSearchCategory}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByCategory}
            >
              Search
            </button>
          </div>
        </div>
      </div> */}
      <div className="col-md-12 list">
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
        <button className="btn btn-sm btn-danger" onClick={removeAllCategories}>
          Remove All
        </button>
      </div>
    </div>
  );
};

export default CategoryList;
