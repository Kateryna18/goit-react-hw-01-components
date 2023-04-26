import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.module.css';

export const Statistics = ({ title, dataStats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {dataStats.map(data => 
          <li className={css.item} key={data.id}>
            <span className={css.label}>{data.label}</span>
            <span className={css.percentage}>{data.percentage}%</span>
          </li>
        )}
      </ul>
    </section>
  );
};


Statistics.propTypes = {
    title: PropTypes.string,
    dataStats: PropTypes.arrayOf(PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })).isRequired,
}