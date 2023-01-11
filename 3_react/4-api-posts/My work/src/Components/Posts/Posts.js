import React from "react";

function Posts(props) {
  const { posts, deleteButtonHandler } = props;
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Post Id</th>
          <th>Title</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {posts.length > 0 &&
          posts.map((singlePost, index) => {
            return (
              <tr key={index}>
                <td>{singlePost.id}</td>
                <td>{singlePost.title}</td>
                <td>
                  <button className="btn btn-primary">Edit</button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={deleteButtonHandler}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default Posts;
