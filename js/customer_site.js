const CUSTOMER_SITES = {
    ruyi: {
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: '如意资源',
    },
    tiantang: {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
        name: '天堂资源',
    },
    hongniu: {
        api: 'http://hongniuzy2.com/api.php/provide/vod/from/hnm3u8',
        name: '紅牛資源',
    },
    kaifang: {
    api: 'http://vod-demo.onrender.com/pubdovod.php',
    name: '開放電影',
    },
    youzhi: {
        api: 'http://api.1080zyku.com/inc/api.php/provide/vod',
        name: '优质资源库',
    },
    sanshijiu: {
        api: 'http://39kan.com/api.php/provide/vod',
        name: '39影視',
    },
    lehuo: {
        api: 'http://lehootv.com/api.php/provide/vod',
        name: '乐活影视',
    },
    tangrenjie1: {
        api: 'http://tangrenjie.tv/api.php/provide/vod',
        name: '唐人街',
    },
    kudian1: {
        api: 'http://api.kuapi.cc/api.php/provide/vod',
        name: '酷点资源',
    },
    wolong1: {
        api: 'http://collect.wolongzyw.com/api.php/provide/vod',
        name: '卧龙资源',
    },
    kudian2: {
        api: 'http://kudian10.com/api.php/provide/vod',
        name: '酷点资源',
    },
    tangrenjie2: {
        api: 'http://tangrenjie.tv/api.php/provide/vod/at/xm',
        name: '唐人街',
    },
    senlin: {
        api: 'http://slapibf.com/api.php/provide/vod',
        name: '森林资源',
    },
    yingku: {
        api: 'http://api.ykapi.net/api.php/provide/vod',
        name: '影库资源网',
    },
    kuache1: {
        api: 'http://caiji.kczyapi.com/api.php/provide/vod/from/kcm3u8',
        name: '快车资源',
    },
    tantan: {
        api: 'http://apittzy.com/api.php/provide/vod',
        name: '探探资源',
    },
    shandian1: {
        api: 'http://sdzyapi.com/api.php/provide/vod/from/sdm3u8',
        name: '閃電資源',
    },
    jinying: {
        api: 'http://jyzyapi.com/provide/vod/from/jinyingm3u8',
        name: '金鹰资源',
    },
    guangsu: {
        api: 'http://api.guangsuapi.com/api.php/provide/vod/from/gsm3u8',
        name: '光速资源',
    },
    aosika: {
        api: 'http://aosikazy.com/api.php/provide/vod',
        name: '奥斯卡资源网',
    },
    laoya: {
        api: 'http://api.apilyzy.com/api.php/provide/vod',
        name: '老鸭资源采集',
    },
    uku1: {
        api: 'http://api.ukuapi.com/api.php/provide/vod',
        name: 'U酷资源',
    },
    beidouxing: {
        api: 'http://m3u8.bdxzyapi.com/api.php/provide/vod',
        name: '北斗星资源',
    },
    yinghua1: {
        api: 'http://m3u8.apiyhzy.com/api.php/provide/vod',
        name: '樱花资源网',
    },
    kudian3: {
        api: 'http://api.kuapi.cc/api.php/provide/vod',
        name: '酷点资源',
    },
    shandian2: {
        api: 'http://sdzyapi.com/api.php/provide/vod',
        name: '闪电资源',
    },
    feisu1: {
        api: 'http://feisuzy.com/api.php/provide/vod',
        name: '飞速资源',
    },
    kuaibo: {
        api: 'http://www.kuaibozy.com/api.php/provide/vod',
        name: '快播资源',
    },
    baidu1: {
        api: 'http://api.apibdzy.com/api.php/provide/vod',
        name: '百度资源',
    },
    aidan: {
        api: 'http://lovedan.net/api.php/provide/vod',
        name: '艾旦影视',
    },
    piaohua1: {
        api: 'http://www.zzrhgg.com/api.php/provide/vod',
        name: '飘花电影',
    },
    wangmin: {
        api: 'http://prinevillesda.org/api.php/provide/vod',
        name: '网民电影',
    },
    siwa: {
        api: 'http://siwazyw.cc/api.php/provide/vod',
        name: '丝袜资源',
    },
    tiankong: {
        api: 'http://m3u8.tiankongapi.com/api.php/provide/vod/from/tkm3u8',
        name: '天空資源',
    },
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
