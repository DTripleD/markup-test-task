const Pagination = () => {
  return (
    <div className="pagination__wrapper">
      <p className="shown-results">Showing data 1 to 8 of 256K entries</p>
      <div>
        <ul className="pagination__list">
          <li className="pagination__item">&lt;</li>
          <li className="pagination__item pagination__item--active">1</li>
          <li className="pagination__item">2</li>
          <li className="pagination__item">3</li>
          <li className="pagination__item">4</li>
          <li className="pagination__item">...</li>
          <li className="pagination__item">40</li>
          <li className="pagination__item">&gt;</li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
