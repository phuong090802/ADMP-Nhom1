// class handle search, sort, pagination, filter
class QueryAPI {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  search() {
    const { keyword, search } = this.queryString;
    let keywordSearch = {};
    if (keyword && search && Array.isArray(search) && search.length) {
      const orConditions = search.map((field) => ({
        [field]: { $regex: keyword, $options: 'i' },
      }));
      keywordSearch = { $or: orConditions };
    }
    this.query = this.query.find({ ...keywordSearch });
    return this;
  }

  filter() {
    const { filter } = this.queryString;
    if (
      filter &&
      typeof filter === 'object' &&
      Object.keys(filter).length > 0
    ) {
      this.query = this.query.find(filter);
    }
    return this;
  }

  sort() {
    const { sort } = this.queryString;
    if (sort && typeof sort === 'object' && Object.keys(sort).length > 0) {
      const normalizedSort = {};
      Object.entries(sort).forEach(([key, value]) => {
        normalizedSort[key] = +value;
      });
      this.query = this.query.sort(normalizedSort);
    }
    return this;
  }

  pagination() {
    const { page, size } = this.queryString;
    const currentPage = Number(page);
    const skip = size * (currentPage - 1);
    this.query = this.query.limit(size).skip(skip);
    return this;
  }

  skipAndLimit() {
    const { size, skip } = this.queryString;
    this.query = this.query.limit(size).skip(skip);
    return this;
  }
}

export default QueryAPI;
