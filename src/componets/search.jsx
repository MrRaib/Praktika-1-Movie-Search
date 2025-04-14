import React from "react";

// Константы для типов фильтрации
const FILTER_TYPES = {
  ALL: "all",
  MOVIE: "movie",
  SERIES: "series",
};

/**
 * Компонент поиска фильмов с фильтрацией по типу.
 * @param {Object} props - Пропсы компонента.
 * @param {Function} props.searchMovies - Функция поиска фильмов.
 */
class Search extends React.Component {
  state = {
    search: "",
    type: FILTER_TYPES.ALL,
  };

  /**
   * Обработчик нажатия клавиши Enter в поле поиска.
   * @param {React.KeyboardEvent} event - Событие клавиатуры.
   */
  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.triggerSearch();
    }
  };

  /**
   * Обработчик изменения фильтра.
   * @param {React.ChangeEvent<HTMLInputElement>} event - Событие изменения.
   */
  handleFilterChange = (event) => {
    const { type } = event.target.dataset;
    this.setState({ type }, this.triggerSearch);
  };

  /**
   * Запуск поиска с текущими параметрами.
   */
  triggerSearch = () => {
    const { search, type } = this.state;
    this.props.searchMovies(search, type);
  };

  render() {
    const { search, type } = this.state;

    return (
      <div className="row">
        <div className="col s12">
          {/* Поле поиска */}
          <div className="input-field">
            <input
              className="validate"
              placeholder="Search movies..."
              type="search"
              value={search}
              onChange={(e) => this.setState({ search: e.target.value })}
              onKeyDown={this.handleKeyPress}
            />
            <button
              className="btn search-btn deep-purple accent-1"
              onClick={this.triggerSearch}
            >
              Search
            </button>
          </div>

          {/* Фильтры */}
          <div className="filter-controls">
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                data-type={FILTER_TYPES.ALL}
                onChange={this.handleFilterChange}
                checked={type === FILTER_TYPES.ALL}
              />
              <span>All</span>
            </label>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                data-type={FILTER_TYPES.MOVIE}
                onChange={this.handleFilterChange}
                checked={type === FILTER_TYPES.MOVIE}
              />
              <span>Movies only</span>
            </label>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                data-type={FILTER_TYPES.SERIES}
                onChange={this.handleFilterChange}
                checked={type === FILTER_TYPES.SERIES}
              />
              <span>Series only</span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export { Search };