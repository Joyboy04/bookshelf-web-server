const {
  addBookhandler,
  getBookByIdhandler,
  getAllbookhandler,
  deleteBookbyIdhandler,
  editBookByIdhandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookhandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllbookhandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookByIdhandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookByIdhandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookbyIdhandler,
  },
  {
    method: '*',
    path: '/{any*}',
    handler: () => 'Halaman tidak ditemukan',
  },
];

module.exports = routes;
