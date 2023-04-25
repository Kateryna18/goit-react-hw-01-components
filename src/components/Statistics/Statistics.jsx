import PropTypes from 'prop-types';

export const Statistics = ({ title, dataStats }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <ul className="stat-list">
        {dataStats.map(data => 
          <li className="item" key={data.id}>
            <span className="label">{data.label}</span>
            <span className="percentage">{data.percentage}%</span>
          </li>
        )}
      </ul>
    </section>
  );
};


Statistics.propTypes = {
    title: PropTypes.string,
    dataStats: PropTypes.arrayOf(PropTypes.shape),
}