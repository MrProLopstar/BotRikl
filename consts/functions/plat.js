module.exports = function plat(platform) {
	if(platform == 'win32') return `Windows`
	else if(platform == 'linux') return `Linux (Ubuntu 18.04)`
	else if(platform == 'aix') return `AIX`
	else if(platform == 'darwin') return `Darwin (Unix)`
	else if(platform == 'freebsd') return `FreeBSD`
	else if(platform == 'openbsd') return `OpenBSD`
	else if(platform == 'sunos') return `SunOS`
	else if(platform == 'android') return `Android`
}