const ArticleB = ({ title, body }) => (
  
    <div className="col-md-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{body}</p>
        </div>
      </div>
      <br />
    </div>
  
);

export default ArticleB;
