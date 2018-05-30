$('#table').bootstrapTable({
    data: [],
    method: 'post',
    url: '/',
    cache: true,
    contentType: 'application/json',
    queryParams: function (params) {
        var param = {
            limit: params.pageSize,
            pageNo: params.pageNumber
        }
        return param;
    },
    queryParamsType: 'limit', // undefined
    responseHandler: function (res) {return res;},
    pagination: true,
    sidePagination: 'server', // client or server
    totalRows: 0, // server side need to set
    pageNumber: 1,
    pageSize: 20,
    pageList: [10, 25, 50, 100],
    search: true,
    selectItemName: 'btSelectItem',
    showHeader: true,
    showColumns: true,
    showRefresh: true,
    showToggle: false,
    smartDisplay: true,
    minimumCountColumns: 1,
    uniqued: 'no',
    idField: 'no',
    cardView: false,
    clickToSelect: false,
    singleSelect: false,
    toolbar: '#toolbar',
    checkboxHeader: true,
    sortable: true,
    maintainSelected: false,
    columns: [{
        field: 'id',
        title: 'Item ID'
    }, {
        field: 'name',
        title: 'Item Name'
    }, {
        field: 'price',
        title: 'Item Price'
    }],
    data: [{
        id: 1,
        name: 'Item 1',
        price: '$1'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }]
});