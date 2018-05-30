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
    search: false,
    selectItemName: 'btSelectItem',
    showHeader: true,
    showColumns: true,
    showRefresh: true,
    showToggle: false,
    smartDisplay: true,
    minimumCountColumns: 1,
    uniqued: 'device_id',
    idField: 'device_id',
    cardView: false,
    clickToSelect: false,
    singleSelect: false,
    toolbar: '#toolbar',
    checkboxHeader: true,
    sortable: true,
    maintainSelected: false,
    columns: [{
        field: 'device_id',
        title: '设备ID',
        sortable:true
    }, {
        field: 'device_imie',
        title: '设备IMIE号'
    }, {
        field: 'device_name',
        title: '设备名称'
    }, {
        field: 'device_type',
        title: '设备类型', 
    }, {
        field: 'activate_time',
        title: '激活时间',
        sortable:true
    }, {
        field: 'dead_time',
        title: '到期时间'
    }, {
        field: 'sim',
        title: 'SIM卡号',
    }, {
        field: 'user',
        title: '绑定用户',
    }, {
        field: 'setting',
        title: '操作',
        formatter:operateFormatter
    }],
});

function operateFormatter(value,row,index){
        return '<a href="">设备详情</a> <a href="">查看位置</a>';
}
