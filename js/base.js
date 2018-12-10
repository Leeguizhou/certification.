// 用户设置-业务系统绑定
var sysBindBtn = $("#sysBindBtn");
var sysBindPopup = $("#sysBindPopup");
var closeSysBindBtn = $("#closeSysBindBtn");

sysBindBtn.on('click', function (e) {
    sysBindPopup.toggle();
});

closeSysBindBtn.on('click', function (e) {
    sysBindPopup.toggle();
});

$('.functionDiv li a').on('click', function () {
    console.log(this)
});


// 用户查询-详情
var detailBtn = $(".card li .showDetail");
var detailPopup = $("#detailPopup");
var closeDetailPopup = $("#closeDetailPopup");
detailBtn.on('click', function () {
    detailPopup.toggle();
});
closeDetailPopup.on('click', function () {
    detailPopup.toggle();
});


// 策略管理-弹窗
// 策略模版管理-弹窗
var addStrategyBtn = $("#addStrategyBtn");
var editStrategyBtn = $("#editStrategyBtn");
var addStrategyPopup = $("#addStrategyPopup");
var editStrategyPopup = $("#editStrategyPopup");
var closeAddStrategyPopup = $("#closeAddStrategyPopup");
var closeEditStrategyPopup = $("#closeEditStrategyPopup");
addStrategyBtn.on('click', function () {
    addStrategyPopup.toggle();
});
closeAddStrategyPopup.on('click', function () {
    addStrategyPopup.toggle();
});
editStrategyBtn.on('click', function () {
    editStrategyPopup.toggle();
});
closeEditStrategyPopup.on('click', function () {
    editStrategyPopup.toggle();
});


// 角色管理-添加&修改
var addRoleBtn = $("#addRoleBtn");
var editRoleBtn = $("#editRoleBtn");
var addRolePopup = $("#addRolePopup");
var editRolePopup = $("#editRolePopup");
var closeAddRolePopup = $("#closeAddRolePopup");
var closeEditRolePopup = $("#closeEditRolePopup");
addRoleBtn.on('click', function () {
    addRolePopup.toggle()
});
closeAddRolePopup.on('click', function () {
    addRolePopup.toggle()
});
editRoleBtn.on('click', function () {
    editRolePopup.toggle()
});
closeEditRolePopup.on('click', function () {
    editRolePopup.toggle()
});


// 角色管理-分配权限
var showPrivilegesBtn = $("#showPrivilegesBtn");
var privilegesPopup = $("#privilegesPopup");
var closePrivilegesPopup = $("#closePrivilegesPopup");
showPrivilegesBtn.on('click', function () {
    privilegesPopup.toggle()
});
closePrivilegesPopup.on('click', function () {
    privilegesPopup.toggle()
});


// 角色管理-分配权限-展开收缩
// 组织架构管理-查看结构-展开收缩
$(".privilegesDiv .absToggle").on('click', function(){
    $(this).parent().next().slideToggle(250);
    $(this).toggleClass('show');
});

//  数据字典-添加字典
var addDictBtn = $("#addDictBtn");
var editDictBtn = $("#editDictBtn");
var addDictPopup = $("#addDictPopup");
var editDictPopup = $("#editDictPopup");
var closeAddDictPopup = $("#closeAddDictPopup");
var closeEditDictPopup = $("#closeEditDictPopup");
addDictBtn.on('click', function () {
    addDictPopup.toggle()
});
closeAddDictPopup.on('click', function () {
    addDictPopup.toggle()
});
editDictBtn.on('click', function () {
    editDictPopup.toggle()
});
closeEditDictPopup.on('click', function () {
    editDictPopup.toggle()
});


//  所有用户列表-添加&修改
var addUserBtn = $("#addUserBtn");
var editUserBtn = $("#editUserBtn");
var closeAddUserPopup = $("#closeAddUserPopup");
var closeEditUserPopup = $("#closeEditUserPopup");
var addUserPopup = $("#addUserPopup");
var editUserPopup = $("#editUserPopup");
addUserBtn.on('click', function () {
    addUserPopup.toggle()
});
editUserBtn.on('click', function () {
    editUserPopup.toggle()
});
closeAddUserPopup.on('click', function () {
    addUserPopup.toggle()
});
closeEditUserPopup.on('click', function () {
    editUserPopup.toggle()
});


//  系统权限管理-添加&修改
var addAuthorityBtn = $("#addAuthorityBtn");
var editAuthorityBtn = $("#editAuthorityBtn");
var addAuthorityPopup = $("#addAuthorityPopup");
var editauthorityPopup = $("#editauthorityPopup");
var closeAddAuthorityPopup = $("#closeAddAuthorityPopup");
var closeEditAuthorityPopup = $("#closeEditAuthorityPopup");
addAuthorityBtn.on('click', function () {
    addAuthorityPopup.toggle()
});
editAuthorityBtn.on('click', function () {
    editauthorityPopup.toggle()
});
closeAddAuthorityPopup.on('click', function () {
    addAuthorityPopup.toggle()
});
closeEditAuthorityPopup.on('click', function () {
    editauthorityPopup.toggle()
});


// 业务系统管理-添加&修改
var addAppBtn = $("#addAppBtn");
var editAppBtn = $("#editAppBtn");
var addAppPopup = $("#addAppPopup");
var closeAddAppPopup = $("#closeAddAppPopup");
var editAppPopup = $("#editAppPopup");
var closeEditAppPopup = $("#closeEditAppPopup");
addAppBtn.on('click', function () {
    addAppPopup.toggle()
});
closeAddAppPopup.on('click', function () {
    addAppPopup.toggle()
});
editAppBtn.on('click', function () {
    editAppPopup.toggle()
});
closeEditAppPopup.on('click', function () {
    editAppPopup.toggle()
});

// 业务系统管理-定制策略
var dzStrategy = $("#dzStrategy");
var dzStrategyPopup = $("#dzStrategyPopup");
var closeDzStrategy = $("#closeDzStrategy");
dzStrategy.on('click', function () {
    dzStrategyPopup.toggle()
});
closeDzStrategy.on('click', function () {
    dzStrategyPopup.toggle()
});


// 业务系统管理-分配角色
var allocateBtn = $("#allocateBtn");
var allocatePopup = $("#allocatePopup");
var closeAllocatePopup = $("#closeAllocatePopup");
allocateBtn.on('click', function () {
    allocatePopup.toggle()
});
closeAllocatePopup.on('click', function () {
    allocatePopup.toggle()
});


// 组织架构管理-查看结构
var showDescTableBtn = $("#showDescTableBtn");
var descTable = $("#descTable");
var closeDescTable = $("#closeDescTable");
showDescTableBtn.on('click', function () {
    descTable.toggle()
});
closeDescTable.on('click', function () {
    descTable.toggle()
});

// 组织架构管理-添加&修改
var addOrganizBtn = $("#addOrganizBtn");
var editOrganizBtn = $("#editOrganizBtn");
var addOrganizPopup = $("#addOrganizPopup");
var editOrganizPopup = $("#editOrganizPopup");
var closeAddOrganizPopup = $("#closeAddOrganizPopup");
var closeEditOrganizPopup = $("#closeEditOrganizPopup");
addOrganizBtn.on('click', function () {
    addOrganizPopup.toggle()
});
closeAddOrganizPopup.on('click', function () {
    addOrganizPopup.toggle()
});
editOrganizBtn.on('click', function () {
    editOrganizPopup.toggle()
});
closeEditOrganizPopup.on('click', function () {
    editOrganizPopup.toggle()
});









