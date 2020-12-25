import md5Libs from "uview-ui/libs/function/md5";

const install = (Vue, vm) => {
	let login = (data) => vm.$u.post('/user/userLogin', data)
	let wxlogin = (data) => vm.$u.get('/user/getOpenid', data)
	let getUserByToken = (data) => vm.$u.get('/user/getUserByToken')
	let register = (data) => vm.$u.post('/user/saveUserInfo', data)
	let getJobList = () => vm.$u.get('/task/getWorks')
	let createJob = (data) => vm.$u.post('/task/createWorkTemplate', data)
	let taskTplListByType = (data) => vm.$u.get('/task/getAllTaskTemplates', data)
	let getUsers = () => vm.$u.get('/user/getAllUser')
	let getMyJobList = () => vm.$u.get('/task/getMyWorks')
	let getAllMetaInfo = () => vm.$u.get('/task/getAllTaskTemplateTypeMetaInfo')
	let taskTplList = () => vm.$u.get('/task/getAllTaskTemplates')
	let getWorkDetailByWorkId = (data) => vm.$u.get('/task/getWorkDetailByWorkId', data)
	let getTaskInsInfoDetailById = (data) => vm.$u.get('/task/getTaskInsInfoDetailById', data)
	let bossSubmitWork = (data) => vm.$u.get('/task/bossSubmitWork', data)
	let rejectWork = (data) => vm.$u.get('/task/rejectWork', data)
	let getTaskInsInfo = (data) => vm.$u.get('/task/getTaskInsInfo', data)
	let finshTaskIns = (data) => vm.$u.get('/task/finshTaskIns', data)
	let createTaskTemplateTypeMeta = (data) => vm.$u.post('/task/createTaskTemplateTypeMeta', data)
	let createTaskTemplate = (data) => vm.$u.post('/task/createTaskTemplate', data)
	let getMetaById = (taskInsDataCode) => vm.$u.get('/task/getMetaById', {taskInsDataCode})
	let editTaskData = ({data,taskInsDataCode}) => vm.$u.post('/task/editTaskData', {data,taskInsDataCode})
	
	vm.$u.api = {
		login,
		wxlogin,
		register,
		getUserByToken,
		getJobList,
		createJob,
		taskTplListByType,
		getUsers,getMyJobList,
		getAllMetaInfo,taskTplList,
		getWorkDetailByWorkId,
		getTaskInsInfoDetailById,
		bossSubmitWork,
		rejectWork,
		getTaskInsInfo,
		finshTaskIns,
		createTaskTemplateTypeMeta,
		createTaskTemplate,
		getMetaById,
		editTaskData
	};
}

export default {
	install
}