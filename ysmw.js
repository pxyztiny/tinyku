const $ = new Env('云扫码自动阅读');
let status;
status = (status = ($.getval("ysmstatus") || "1")) > 1 ? `${status}` : ""; // 账号扩展字符
let ysmurlArr = [], ysmhdArr = [], ysmbodyArr = [], ysm2bodyArr = [], ysmtxArr = [], ysmcount = ''
let ysmurl = $.getdata('ysmurl')
let ysmhd = $.getdata('ysmhd')
let ysmbody = $.getdata('ysmbody')
let ysm2body = $.getdata('ysm2body')
let ysmtx = $.getdata('ysmtx')
let ysmkey = ''


!(async () => {
  if (typeof $request !== "undefined") {
    await ysmck()

  } else {
    ysmurlArr.push($.getdata('ysmurl'))
    ysmhdArr.push($.getdata('ysmhd'))
    ysmbodyArr.push($.getdata('ysmbody'))
    ysm2bodyArr.push($.getdata('ysm2body'))
    ysmtxArr.push($.getdata('ysmtx'))
    let ysmcount = ($.getval('ysmcount') || '1');
    for (let i = 2; i <= ysmcount; i++) {
      ysmurlArr.push($.getdata(`ysmurl${i}`))
      ysmhdArr.push($.getdata(`ysmhd${i}`))
      ysmbodyArr.push($.getdata(`ysmbody${i}`))
      ysm2bodyArr.push($.getdata(`ysm2body${i}`))
      ysmtxArr.push($.getdata(`ysmtx${i}`))
    }
    ysmurlArr = ['http://erd.lizsb.bar/yunonline/v1/task']
    ysmhdArr = ['{"Host":"erd.lizsb.bar","Connection":"keep-alive","Content-Length":"613","Accept":"application/json, text/javascript, */*; q=0.01","Origin":"http://erd.lizsb.bar","X-Requested-With":"XMLHttpRequest","User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36 QBCore/4.0.1316.400 QQBrowser/9.0.2524.400 Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2875.116 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","Referer":"http://erd.lizsb.bar/yunonline/v1/redirect/eyJpdiI6Im5FNWxwWTRSM3Erb0hXWEcwYWl1SWc9PSIsInZhbHVlIjoibHNnNkdYYzFsSmpQSis1XC80Y1NsdTg0V2M3akdWVzdSQmRPakFJaGM0dkoxUHAzdVhWN01ZcVhONEQ3OVFhT1pIenE1VnJ1Rk5PeFpMeHhIWXFPbFJONXdtQ3ZQazdUeVVQRkRZZ1o5bDNrWis0V2RreTN6c1pDM21SM3BSY1J0VkpaeTI0Wk1KZzMwanltM1RXVVY5bDV5TXkwZ3Q3cWlYTmZadXJZVUpZT1pxTlRBWGpTRThCR1g2dGhGd1RFSGdqUXR2K09qdW45akFtQVFXUmhjUlE9PSIsIm1hYyI6IjRjMmNiZDg5Y2IwMmUzYTU0MzkzN2QwNjZhNjE1NzEyODVkMWRjMTk1MjhjNmEzZjYxYWExYjk0M2Q2NDU3NTIifQ%3D%3D?openid=oksnzwYIDZpDaM7flQvAscI-VN6w","Accept-Encoding":"gzip, deflate","Accept-Language":"zh-CN,zh;q=0.8,en-US;q=0.6,en;q=0.5;q=0.4"}']
    ysm2bodyArr = ['openid=oksnzwYIDZpDaM7flQvAscI-VN6w&time=168']
    ysmbodyArr = ['secret=eyJpdiI6InFVcGRSMjFteDNRUUlFZUZIM1FVV1E9PSIsInZhbHVlIjoiUmdkQmluV3NDaFpZSjBHeXJsRTZFU3VcL2Iwb01LWlhJeFlsNERJQllXMG8rNHlFSkoxSkppMmZ1TE5kSWQ4dkc4K0RJVjV6MURJVlZmQzdDbSt2QTZ1RERuWXh6SldCQkNZaDh4V0lSMFdlTEdTaGxsZnYyUWtVdnJpbUtcL0dOY0lDelwvQ1psMmhzOU9OQ3lyM1RSZzBlQ2gwb0ZuNElkaGgwMngwdCtxV2tYWUpxZlZLYXdvWTdFbTJsSlJ6emtwdGxXMm9iSVkwU3YwZUdBWGxIc2R1Y0JFNHlKeXZDa24zQkJQSUJ1TjFzOXlleDFmWFE2bVpMK2VUMUxvWElOZmtQS3FJSGRtamZEQUVkVDlZRlwvNGpqRW5NYzVZQ3E2c1pHeElrUFVUZE9cL1wvejlwd1Exa0krR1ZUcFZxcVhadWEiLCJtYWMiOiI4M2FkNjJmNmNmMGQ4NGJkZTY1MWM2ZGUzZDk1NmMzZTMyNGY5YTk2ODQ0YzBlMTI5NGRhNWFkOTAxYThiNjE4In0%253D&type=read']
    ysmtxArr = ['openid=oksnzwYIDZpDaM7flQvAscI-VN6w&request_id=ec19809c7d2e8a0cde820f103c0d3f9c&ua=0']
    console.log(`------------- 共${ysmhdArr.length}个账号-------------\n`)
    for (let i = 0; i < ysmhdArr.length; i++) {
      if (ysmhdArr[i]) {

        ysmurl = ysmurlArr[i];
        ysmhd = ysmhdArr[i];
        ysmbody = ysmbodyArr[i];
        ysm2body = ysm2bodyArr[i];
        ysmtx = ysmtxArr[i];
        $.index = i + 1;
        console.log(`\n开始【云扫码${$.index}】`)
        await ysm1();

      }
      //await ysmtx();
    }
  }

})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
//云扫码数据获取


function ysmck() {
  if ($request.url.indexOf("v1/task") > -1) {
    const ysmurl = $request.url
    if (ysmurl) $.setdata(ysmurl, `ysmurl${status}`)
    $.log(ysmurl)
    const ysmhd = JSON.stringify($request.headers)
    if (ysmhd) $.setdata(ysmhd, `ysmhd${status}`)
    $.log(ysmhd)
    const ysmbody = JSON.stringify($request.body)
    if (ysmbody) $.setdata(ysmbody, `ysmbody${status}`)
    $.log(ysmbody)
    $.msg($.name, "", '云扫码' + `${status}` + '获取任务数据获取成功！')
  }
  if ($request.url.indexOf("add_gold") > -1) {
    const ysm2body = $request.body
    if (ysm2body) $.setdata(ysm2body, `ysm2body${status}`)
    $.log(ysm2body)
    $.msg($.name, "", '云扫码' + `${status}` + '提交任务数据获取成功！')
  }
  if ($request.url.indexOf("withdraw") > -1) {
    const ysmtx = $request.body
    if (ysmtx) $.setdata(ysmtx, `ysmtx${status}`)
    $.log(ysmtx)
    $.msg($.name, "", '云扫码' + `${status}` + '微信提现数据获取成功！')
  }
}


//云扫码领取
function ysm3(timeout = 0) {
  return new Promise((resolve) => {
    let url = {
      url: "http:" + ysmurl.match(/http:(.*?)yunonline/)[1] + "yunonline/v1/add_gold",
      headers: JSON.parse(ysmhd),
      body: ysm2body,
    }
    $.post(url, async (err, resp, data) => {
      try {

        const result = JSON.parse(data)
        if (result.errcode == 0) {
          console.log('\n云扫码领取阅读奖励回执:成功🌝 ' + result.data.gold + '\n今日阅读次数: ' + result.data.day_read + ' 今日阅读奖励: ' + result.data.day_gold + ' 当前余额' + result.data.last_gold + '\n')
          if (result.data.last_gold >= 3000) {
            console.log('\n检测到当前金额可提现，前去执行提现,请去抓取提现的数据，如果没有提现数据脚本会自行终止!')
            await ysmdh();
          } await $.wait(2000);
          await ysm1();

        } else {
          if (result.errcode == 405) {
            console.log('\n🧼来自肥皂的提示:' + result.msg + '尝试继续执行任务')
            await ysm1();
          }
          console.log(result.errcode)
          console.log('\n云扫码领取阅读奖励回执:失败🚫 ' + result.msg)
        }

      } catch (e) {
        //$.logErr(e, resp);
      } finally {
        resolve()
      }
    }, timeout)
  })
}

//云扫码提交     
function ysm2(timeout = 0) {
  return new Promise((resolve) => {
    let url = {
      url: ysmkey,
      headers: JSON.parse(ysmhd),

    }
    $.get(url, async (err, resp, data) => {
      try {
        //console.log('\n开始重定向跳转，跳转返回结果：'+data)
        if (err) {
          console.log(`\n${$.name} 🧼来自肥皂的提示:key请求提交失败,尝试重新执行任务`)
          await ysm1();
        } else {

          //const result = JSON.parse(data)
          console.log('\n云扫码key提交成功,10秒后开始领取阅读奖励')

          await $.wait(9000);
          await ysm3();

        }
      } catch (e) {
        //$.logErr(e, resp);
      } finally {
        resolve()
      }
    }, timeout)
  })
}


//云扫码key
function ysm1(timeout = 0) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // if (typeof $.getdata('ysmhd') === "undefined") {
      //   $.msg($.name,"",'请先获取云扫码数据!😓',)
      //   $.done()
      // }

      let url = {
        url: "http:" + ysmurl.match(/http:(.*?)yunonline/)[1] + "yunonline/v1/task",
        headers: JSON.parse(ysmhd),
        body: 'secret=' + ysmbody.match(/secret=(.*?)&/)[1] + '&type=read',
      }
      $.post(url, async (err, resp, data) => {
        try {
          if (data == '{"errcode":0,"msg":"success"}') {
            console.log('\n🧼来自肥皂的提示:当前没有任务啊,手动进云扫码看看是不是一直显示更新中,别问肥皂什么原因啦～')
          }
          //console.log(data)
          const result = JSON.parse(data)
          if (result.errcode == 0) {
            //console.log(data)
            console.log('\n云扫码获取key回执:成功🌝 开始 循环观看💦')
            if (result.data.link === undefined) {
              console.log('\n🧼来自肥皂的提示:没有匹配到key' + result.data.msg)
            } else {
              ysmkey = result.data.link.match(/redirect_uri=(.*?)#wechat/)[1]
              ysmkey = unescape(ysmkey)
              //$.log(unescape(ysmkey))
              await $.wait(1000);
              await ysm2();

            }

          } else {
            console.log('云扫码获取key回执:失败🚫 ' + result.msg + ' 已停止当前账号运行!')
          }
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    }, timeout)
  })
}


//云扫码兑换
function ysmdh(timeout = 0) {
  return new Promise((resolve) => {

    let url = {
      url: "http:" + ysmurl.match(/http:(.*?)yunonline/)[1] + "yunonline/v1/user_gold",
      headers: JSON.parse(ysmhd),
      body: 'openid=' + ysmtx.match(/openid=(.*?)ua/)[1] + 'gold=3000',
    }
    $.post(url, async (err, resp, data) => {
      try {

        const result = JSON.parse(data)
        if (result.errcode == 0) {
          console.log('\n云扫码提现兑换:成功🌝 兑换金额' + result.data.money + '元，前去微信提现')
          await $.wait(1000);
          await ysmwx();
        } else {
          console.log('\n云扫码提现兑换:失败🚫 ' + result.msg)
        }

      } catch (e) {
        //$.logErr(e, resp);
      } finally {
        resolve()
      }
    }, timeout)
  })
}


//云扫码提现
function ysmwx(timeout = 0) {
  return new Promise((resolve) => {
    let url = {
      url: "http:" + ysmurl.match(/http:(.*?)yunonline/)[1] + "yunonline/v1/withdraw",
      headers: JSON.parse(ysmhd),
      body: ysmtx,
    }
    $.post(url, async (err, resp, data) => {
      try {

        const result = JSON.parse(data)
        if (result.errcode == 0) {
          console.log('\n云扫码微信提现回执:成功🌝 ' + result.msg)
          $.msg($.name, "", '云扫码已成功提现至微信0.3元')
          await ysm1();
        } else {
          console.log('\n云扫码微信提现回执:失败🚫 ' + result.msg)
        }

      } catch (e) {
        //$.logErr(e, resp);
      } finally {
        resolve()
      }
    }, timeout)
  })
}



function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), a = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(a, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t) { let e = { "M+": (new Date).getMonth() + 1, "d+": (new Date).getDate(), "H+": (new Date).getHours(), "m+": (new Date).getMinutes(), "s+": (new Date).getSeconds(), "q+": Math.floor(((new Date).getMonth() + 3) / 3), S: (new Date).getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length))); for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))); let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h) } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
