const ap = new APlayer({
    container: document.getElementById('aplayer'),
	volume: 0.5,
    fixed: true,
	autoplay: true, //自动播放
    audio: [
	{},
	]
});
//具体参数学习请看APlayer官方文档（已在学习链接中）
//简述一下关键：url填音乐的真实外部链接。cover就是封面图片真实链接。