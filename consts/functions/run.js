module.exports = async function run(){
	password = rand(100,999);
	evals = false;
    await vk.updates.startPolling();
	try{ 
		await vk.api.call("groups.enableOnline", { group_id: group });
		await status();
	} catch (e) {};
	fs.writeFile(way, "[][--Logs--][]", function(err){});
	let color = ['\x1b[31m%s\x1b[0m', '\x1b[32m%s\x1b[0m', '\x1b[34m%s\x1b[0m', '\x1b[36m%s\x1b[0m'].random();
	let green = '\x1b[32m%s\x1b[0m'
	let red = '\x1b[31m%s\x1b[0m'
	let cyan = '\x1b[36m%s\x1b[0m'
	let magen = '\x1b[35m%s\x1b[0m'
    let date = new Date();
    let month = date.getMonth();
    console.log(color, `       _(._.)_`);
    console.log(`- -Bot Rikl actived- -`);
	if(month == 11 || month == 12 || month == 1){
	    console.log(green, `          *\n         **`);
	    console.log(cyan, `        ****`);
	    console.log(green, `       ******`);
	    console.log(magen, `         ||`);
	}
	int();
	tops();
	reserv();
	logback();
	restart();
	updatewidget();
}