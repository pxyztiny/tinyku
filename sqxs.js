const $ = Env('书旗小说')
let ReadTimes = 0;
let vediogold = 0;
let drawgold = 0;

//签到 /api/activity/xapi/signin/v5/signInAction
let sqxssigninhd={"Host":"ocean.shuqireader.com","content-length":"2099","accept":"application/json, text/plain, */*","user-agent":"Mozilla/5.0 (Linux; Android 10; GLK-AL00 Build/HUAWEIGLK-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/78.0.3904.108 Mobile Safari/537.36 AliApp(shuqi_android/11.3.4.132) TTID/src1077 WindVane/8.5.0","content-type":"application/x-www-form-urlencoded","origin":"https://render-web.shuqireader.com","x-requested-with":"com.shuqi.controller","sec-fetch-site":"same-site","sec-fetch-mode":"cors","referer":"https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?appfunction=an_bmk,1_clo,1_smjs,1&soft_id=1&ver=210308&subVer=sqrelease&appVer=11.3.4.132&platform=an&placeid=1077&sqDevId=MTYxNTIxODc3NDE3ODA1Nw==&oaid=&sdk=29&wh=1080x2208&msv=3&enc=909131615219827438&sn=1615218774178057&vc=1c19&mod=GLK-AL00&manufacturer=HUAWEI&brand=HUAWEI&net_type=wifi&first_placeid=src1077&aak=dc92f5&user_id=36270036&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzNjI3MDAzNiIsInV0ZGlkIjoiWUJsdXk1SWxaK3dEQUdNNDlTbDdZK3ZPIiwiaW1laSI6IjE2MTUyMTg3NzQxNzgwNTciLCJzbiI6IjE2MTUyMTg3NzQxNzgwNTciLCJleHAiOjE2MTU3MzczNzAsInVzZXJJZCI6IjM2MjcwMDM2IiwiaWF0IjoxNjE1MjE4OTcwLCJvYWlkIjpudWxsLCJwbGF0Zm9ybSI6ImFuIn0.LpSrqr5NU0VuRQzR_IdjHTu-zK5Cmsp-kbqOasSpOYgi6_IRxZLUuKA1PRQ0nLImldWgdVnVIUu7PLaoc-gjTQ&utype=vip&net=4&net_env=4&coreType=0&rom=10&skinId=999&skinVersion=1.0&skinVersionPrefix=1&imagetype=0&utdid=WUJsdXk1SWxaK3dEQUdNNDlTbDdZK3ZP&umidtoken=AVhLYpFLOqwV8TV4EmGC9uj1ipqxE49/&permissionType=3&writer_switch=1&serviceWorkerOn=1&stopPullRefresh=1&upf=20581&from=ShuqiTab&spm=a2oun.12850617","accept-encoding":"gzip, deflate","accept-language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"}
let sqxssigninbd='clientTimestamp=1615219848&position=501&userId=36270036&signInType=1&wua=UOX3_b%2B%2BDWdfx0noASYEnU5BQFZhp4OOQDsUXomPChbi6dJ1gIaztJF0oW%2Bx8%2BTIQG8ovTZBMB2LQBQVxrnjLchqTXG6QNXS4hmWJmlFfXA%2FAZINhac5cVuYWqs0%2FixP4u2p3lHrRVQo8FMTgzxjRcqCgWYKOqIgFAzuc1wlpam%2FE0exQSqVibgDTLiO%2F8WxaRi8wHdZNnieQCc%2B1bBpHHQ%2F1jPpYRzWtU8qPLCHfFGAlS1R2AjcSgGWv8qEf8LHuNTvp0A5scA075ffEkxcLMO3qf8f94oJAKVrQ%2FCMTJGnMwwV9rCPbjRwnKN4El2OloIwiJIidgdmM19RaEx9Sjmx6bUgKETOCqiRVmEgQTAnzbFFZ8GQ2zesSxalYEKLpGk%2BC8srLrX12WhP7yWqgdZNKSN7WLvsOkypq1KPTnQoc%2FJ%2FZnjl1iAW2tcORthcuz0wXcAavus3w%2FsbvZHhHvk1eAg%3D%3D&ua=&miniWua=HHnB_pMR8TrL6%2B8FQRnWDp9S4wXvYoatN1U1%2F884%2FBpSYV85GwKi6wPdnwLEK%2BgyJoMVxirCtmTY68%2BnzSvfikvPjw1bqUgGKLeYy87HuxYBoVCvSRdh%2FyviI4WW2noqRkqe7&umidtoken=AVhLYpFLOqwV8TV4EmGC9uj1ipqxE49%2F&secureDeviceType=android&secureAppName=wenxue-activity-proxy&sign=ba0330cd69d37f5320d3f5619ff2db06&key=sq_h5_gateway&_public=appfunction%3Dan_bmk%252C1_clo%252C1_smjs%252C1%26soft_id%3D1%26ver%3D210308%26subVer%3Dsqrelease%26appVer%3D11.3.4.132%26platform%3D2%26placeid%3D1077%26sqDevId%3DMTYxNTIxODc3NDE3ODA1Nw%253D%253D%26oaid%3D%26sdk%3D29%26wh%3D1080x2208%26msv%3D3%26enc%3D909131615219827438%26sn%3D1615218774178057%26vc%3D1c19%26mod%3DGLK-AL00%26manufacturer%3DHUAWEI%26brand%3DHUAWEI%26net_type%3Dwifi%26first_placeid%3Dsrc1077%26aak%3Ddc92f5%26user_id%3D36270036%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzNjI3MDAzNiIsInV0ZGlkIjoiWUJsdXk1SWxaK3dEQUdNNDlTbDdZK3ZPIiwiaW1laSI6IjE2MTUyMTg3NzQxNzgwNTciLCJzbiI6IjE2MTUyMTg3NzQxNzgwNTciLCJleHAiOjE2MTU3MzczNzAsInVzZXJJZCI6IjM2MjcwMDM2IiwiaWF0IjoxNjE1MjE4OTcwLCJvYWlkIjpudWxsLCJwbGF0Zm9ybSI6ImFuIn0.LpSrqr5NU0VuRQzR_IdjHTu-zK5Cmsp-kbqOasSpOYgi6_IRxZLUuKA1PRQ0nLImldWgdVnVIUu7PLaoc-gjTQ%26utype%3Dvip%26net%3D4%26net_env%3D4%26coreType%3D0%26rom%3D10%26skinId%3D999%26skinVersion%3D1.0%26skinVersionPrefix%3D1%26imagetype%3D0%26utdid%3DWUJsdXk1SWxaK3dEQUdNNDlTbDdZK3ZP%26umidtoken%3DAVhLYpFLOqwV8TV4EmGC9uj1ipqxE49%252F%26permissionType%3D3%26writer_switch%3D1%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26upf%3D20581%26from%3DShuqiTab%26spm%3Da2oun.12850617'
//去看书  /ad/v1/api/prize/readpage/pendant/lottery 
let sqxsckhd = [{ "Content-Type": "application/x-www-form-urlencoded", "Content-Length": "1930", "Host": "ocean.shuqireader.com", "Connection": "Keep-Alive", "Accept-Encoding": "gzip", "User-Agent": "okhttp/3.7.0" }]
let sqxsckbd = ['userId=36270036&resourceId=679&requestSrc=shuqi&deliveryId=706&wua=UOX3_%2FUSipBnOwo6wSkecc%2F2LBWLIOUIBWwLxby7XoSZWw0aWRWV7Lw79Zs8rG6GSJRI1hKg1pkPhBz6OQCUUkK2BEAGL5uLjCBONchn%2BKSo1D3Ro6ifnhAR6kCK50pQ7tTf%2BjmoeLInQ8CymZGuqoIN4rfNSKc5W%2BOn%2Feg3ISccVshfznbs35OYyba5O%2BGtaKrCpc1UR3EPbvyIQnJ4X9VVye9gedPsqcVatAQDv7Qmv1AhR6a2L%2FJu7eemnbpwRSzu6RX8B3%2FuveyNkHtWbuCyAor%2FCW9PpC9F6A9oCLqANJaYGffDtFBi3ItY0xv9hkRMZOYdwIRWoaoL5VkOw5sDne8TSpYUiRUSXZXmVpKV4l7uTrauFfSmyaSeJWi7YjVZUTcWk7p064%2BOpBPPognaObzYtF%2BvHgkbUS2bT6Ho%2BIOnmt9fWpn9lYn1K3X1GXKqgC2q2pF8bEJTC5FXd%2FqRQtw%3D%3D&miniWua=HHnB_Oy2M2eAIp1I5cjJOvCughTEHHFaNMg5h5yV9rsc9PNfaIloU56Ks0lhi%2F1vSNOXIJVOOv%2FhktP1RfdhMt%2BYPUytUeWqFwz%2F%2BHGMNqTLXNHYkeN3qlZsA8LaHruESDUSy&platform=an&timestamp=1615185429&key=sq_app_ad&sign=C9550DA5655ACA648272EBB70EC1EF13&_public=soft_id%253D1%2526ver%253D210308%2526subVer%253Dsqrelease%2526appVer%253D11.3.4.132%2526platform%253Dan%2526placeid%253D1077%2526sqDevId%253DMTYxNTEyODc4NzEyNjI0MQ%253D%253D%2526oaid%253D6e85025e-f87c-46b3-adea-5cde20865bac%2526sdk%253D29%2526wh%253D1080x2208%2526msv%253D3%2526enc%253D800251615185429470%2526sn%253D1615128787126241%2526vc%253D75fa%2526mod%253DGLK-AL00%2526manufacturer%253DHUAWEI%2526brand%253DHUAWEI%2526net_type%253Dwifi%2526first_placeid%253Dsrc1077%2526aak%253Dc77ac1%2526user_id%253D36270036%2526session%253DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzNjI3MDAzNiIsInV0ZGlkIjoiWFNpSjcrbkp3MjBEQUp0VElKajc0eFFMIiwiaW1laSI6IjE2MTUxMjg3ODcxMjYyNDEiLCJzbiI6IjE2MTUxMjg3ODcxMjYyNDEiLCJleHAiOjE2MTU3MDM3NDQsInVzZXJJZCI6IjM2MjcwMDM2IiwiaWF0IjoxNjE1MTg1MzQ0LCJvYWlkIjoiNmU4NTAyNWUtZjg3Yy00NmIzLWFkZWEtNWNkZTIwODY1YmFjIiwicGxhdGZvcm0iOiJhbiJ9.9KR1Y66BNZtpDV8Xw6dLmYCZI4CCLgg2YBQaYQMbTzqR1V3PGcNBhYgovhNzHmpAD-sStmJfgkgYBgNL-qFr1g%2526utype%253Dvip%2526net%253D4%2526net_env%253D4%2526utdid%253DWFNpSjcrbkp3MjBEQUp0VElKajc0eFFM%2526umidtoken%253Df4VLcKxLOspcPTV4Dd6j8HZ%252FLYIHMJEe%2526permissionType%253D3']
//看视频 /ad/v1/api/prize/lottery 视频
let vediogoldprizehd = { "Host": "ocean.shuqireader.com", "content-type": "application/x-www-form-urlencoded", "content-length": "1957", "accept-encoding": "gzip", "user-agent": "okhttp/3.7.0" }
let vediogoldprizebd = 'userId=36270036&resourceId=625&requestSrc=%E4%BB%BB%E5%8A%A1&deliveryId=803&wua=UOX3_gwCVWobm2Sv3OleWu%2Bdko4TJKb4h%2FBRrAYlz3V2gpbBbXXXZPpBc3wGtp689qBLQaRO9aVFnHqpmyuAqp9McVp6zkl2MxLuCjCdcqmjIPvtKvJ%2BkH2w%2BIfNnZ8f3XtWmqsv0pJWzWempEULLEXbNGY83RbG9PNWLOy70uoZrgoXSNx1fD9e4fMgBZco0TcZepMXIYE53jwO5d1o2%2BakVrOOPdl%2B4sthjWsUmKrCjqpR63jpOTYKoRqjzPoVhQ0Qr6SpquKNS2RJWUU6w9N%2F6h5cFk5f6XdxBxxtSPQxJxx%2Bb%2ByLHXg3AmxS51axRdFDg%2BFzdQFsV9YVhaPP8CG5EKG%2BIrSnq2ejjSZwdkVe3bLwrNPGe64XT3k1LJ6R2R0PHvgdm4fcH3IV61JWZQg%2BGcmlVjcY%2FSo2r9h0lcZ4UxrXlzhk1NCw%2FnSi%2BZVMQL8Tj4cUcnYQSIbnluio93A4i6EFkDPmR4sX6zSAN4248nBw%3D&miniWua=HHnB_yp5gjfUzKwMGEc%2Fcsl6rg6EkIJkJewECWmpTqowUVwbT2DEcE8A%2Fdzb2E8QStnvKXJwAvY3HoUtWKQxBHpGbSq2QqMMmxbvwSvA9zUF26E1CixwplHMHvCGu2jlu3als&platform=an&timestamp=1615128914&key=sq_app_ad&sign=BE06303540F38FF3247190A2AB275C11&_public=soft_id%253D1%2526ver%253D210308%2526subVer%253Dsqrelease%2526appVer%253D11.3.4.132%2526platform%253Dan%2526placeid%253D1077%2526sqDevId%253DMTYxNTEyODc4NzEyNjI0MQ%253D%253D%2526oaid%253D6e85025e-f87c-46b3-adea-5cde20865bac%2526sdk%253D29%2526wh%253D1080x2208%2526msv%253D3%2526enc%253D889461615128914580%2526sn%253D1615128787126241%2526vc%253D75fa%2526mod%253DGLK-AL00%2526manufacturer%253DHUAWEI%2526brand%253DHUAWEI%2526net_type%253Dwifi%2526first_placeid%253Dsrc1077%2526aak%253Dc77ac1%2526user_id%253D36270036%2526session%253DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzNjI3MDAzNiIsInV0ZGlkIjoiWFNpSjcrbkp3MjBEQUp0VElKajc0eFFMIiwiaW1laSI6IjE2MTUxMjg3ODcxMjYyNDEiLCJzbiI6IjE2MTUxMjg3ODcxMjYyNDEiLCJleHAiOjE2MTU2NDcyMDYsInVzZXJJZCI6IjM2MjcwMDM2IiwiaWF0IjoxNjE1MTI4ODA2LCJvYWlkIjoiNmU4NTAyNWUtZjg3Yy00NmIzLWFkZWEtNWNkZTIwODY1YmFjIiwicGxhdGZvcm0iOiJhbiJ9.rAmMxL6IMdZwLhqUo897wcDAU34XqEEvO4bLEE0flvvbt1lOaM7wX9UnFr-9xiUDeyyh0WJA7CYojHAcmt4Yyw%2526utype%253Dvip%2526net%253D4%2526net_env%253D4%2526utdid%253DWFNpSjcrbkp3MjBEQUp0VElKajc0eFFM%2526umidtoken%253Df4VLcKxLOspcPTV4Dd6j8HZ%252FLYIHMJEe%2526permissionType%253D3'
//收集金币 /prizecenter/xapi/prize/manual/receive  
let receivecoinckhd = { "Host": "ocean.shuqireader.com", "content-length": "1366", "accept": "application/json, text/plain, */*", "user-agent": "Mozilla/5.0 (Linux; Android 10; GLK-AL00 Build/HUAWEIGLK-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/78.0.3904.108 Mobile Safari/537.36 AliApp(shuqi_android/11.3.4.132) TTID/src1077 WindVane/8.5.0 Shuqi (HUAWEI-GLK-AL00__shuqi__11.3.4.132__1077) AliApp(SQREADER/11.3.4.132)", "content-type": "application/x-www-form-urlencoded", "origin": "https://render-web.shuqireader.com", "x-requested-with": "com.shuqi.controller", "sec-fetch-site": "same-site", "sec-fetch-mode": "cors", "referer": "https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?appfunction=an_bmk,1_clo,1_smjs,1&soft_id=1&ver=210308&subVer=sqrelease&appVer=11.3.4.132&platform=an&placeid=1077&sqDevId=MTYxNTIxODc3NDE3ODA1Nw==&oaid=&sdk=29&wh=1080x2208&msv=3&enc=509171615221260189&sn=1615218774178057&vc=1c19&mod=GLK-AL00&manufacturer=HUAWEI&brand=HUAWEI&net_type=wifi&first_placeid=src1077&aak=dc92f5&user_id=36270036&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzNjI3MDAzNiIsInV0ZGlkIjoiWUJsdXk1SWxaK3dEQUdNNDlTbDdZK3ZPIiwiaW1laSI6IjE2MTUyMTg3NzQxNzgwNTciLCJzbiI6IjE2MTUyMTg3NzQxNzgwNTciLCJleHAiOjE2MTU3MzkxODEsInVzZXJJZCI6IjM2MjcwMDM2IiwiaWF0IjoxNjE1MjIwNzgxLCJvYWlkIjpudWxsLCJwbGF0Zm9ybSI6ImFuIn0.Z40l_8RrVXuXOZjV3ArcUXfkVPUHB2zZAySmjD_Q8dWmES5-bndLgDjPBS8l_hGmow7LqidbRQaYbfgW13SwUg&utype=vip&net=4&net_env=4&coreType=1&rom=10&skinId=999&skinVersion=1.0&skinVersionPrefix=1&imagetype=1&utdid=WUJsdXk1SWxaK3dEQUdNNDlTbDdZK3ZP&umidtoken=AVhLYpFLOqwV8TV4EmGC9uj1ipqxE49/&permissionType=3&writer_switch=1&serviceWorkerOn=1&stopPullRefresh=1&upf=20581&from=ShuqiTab&spm=a2oun.page_render_sq_bookshop_selected_v2", "accept-encoding": "gzip, deflate", "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7" }
let receivecoinckbd = 'platform=2&src=&timestamp=1615221272&userId=36270036&sqSv=1.0&appVer=11.3.4.132&placeId=&sign=f0572ad8de3f0001706e26fb9369028b&key=sq_h5_gateway&_public=appfunction%3Dan_bmk%252C1_clo%252C1_smjs%252C1%26soft_id%3D1%26ver%3D210308%26subVer%3Dsqrelease%26appVer%3D11.3.4.132%26platform%3D2%26placeid%3D1077%26sqDevId%3DMTYxNTIxODc3NDE3ODA1Nw%253D%253D%26oaid%3D%26sdk%3D29%26wh%3D1080x2208%26msv%3D3%26enc%3D509171615221260189%26sn%3D1615218774178057%26vc%3D1c19%26mod%3DGLK-AL00%26manufacturer%3DHUAWEI%26brand%3DHUAWEI%26net_type%3Dwifi%26first_placeid%3Dsrc1077%26aak%3Ddc92f5%26user_id%3D36270036%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzNjI3MDAzNiIsInV0ZGlkIjoiWUJsdXk1SWxaK3dEQUdNNDlTbDdZK3ZPIiwiaW1laSI6IjE2MTUyMTg3NzQxNzgwNTciLCJzbiI6IjE2MTUyMTg3NzQxNzgwNTciLCJleHAiOjE2MTU3MzkxODEsInVzZXJJZCI6IjM2MjcwMDM2IiwiaWF0IjoxNjE1MjIwNzgxLCJvYWlkIjpudWxsLCJwbGF0Zm9ybSI6ImFuIn0.Z40l_8RrVXuXOZjV3ArcUXfkVPUHB2zZAySmjD_Q8dWmES5-bndLgDjPBS8l_hGmow7LqidbRQaYbfgW13SwUg%26utype%3Dvip%26net%3D4%26net_env%3D4%26coreType%3D1%26rom%3D10%26skinId%3D999%26skinVersion%3D1.0%26skinVersionPrefix%3D1%26imagetype%3D1%26utdid%3DWUJsdXk1SWxaK3dEQUdNNDlTbDdZK3ZP%26umidtoken%3DAVhLYpFLOqwV8TV4EmGC9uj1ipqxE49%252F%26permissionType%3D3%26writer_switch%3D1%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26upf%3D20581%26from%3DShuqiTab%26spm%3Da2oun.page_render_sq_bookshop_selected_v2'
//视频获取抽奖 /api/ad/v1/api/prize/lottery
let vediodrawprizeckhd = { "Host": "ocean.shuqireader.com", "content-type": "application/x-www-form-urlencoded", "content-length": "1887", "accept-encoding": "gzip", "user-agent": "okhttp/3.7.0" }
let vediodrawprizeckbd = 'userId=36270036&resourceId=701&requestSrc=page_render_sq_welfare_lottery_page&deliveryId=774&wua=UOX3_VXLj%2Be6a%2FIsZN9CSVFg5F5bZHhLLFYRPEuF2db2ujTugxvGKqAXH7HtoEYjrvP%2BN1ZefRTgwX4bBBod%2F7xpDTdIoeoHe3eibhtSQ6G5FYFaRcC%2BNTxx4UylZpY3H0erykfhkRFfOrmWQR1mncuIndAMUZAywhDwc8%2BzFIlVrlCCclijnVafJZ57UvDuvv6Die2OTZ3xphxFTw1BgCkJOy7lrszsYVFQFH7ISMrSwEv%2BFBcHPHgLaqU7G0sph%2FTINIyq4341c7NoKnX5q37zOu5QILbL%2FZ5YrbdHiFa1C3ezJ35cgsyIBuypAET5ZJCxARUNqWiNJuiWO4uRGQAQ5CZl6XXB7gIYV65QAnmtNu4uz40gZC85GeRqS9Tcs4WnDtu7oFEpSr9q27KGazbV1Z9RE5IISuQ3CHkoZ8QKHZSQYTm0LsDkEZ8%2FhZnK%2FuxOcGHTyKfAapaTH%2BPbCdDKuG2bFlIwU8yeMs1dbtMt1GFw%3D&miniWua=HHnB_DS9VvBmm8l5RxeCoVFltM0F7fI%2Fy9dlX%2Bs0378tXueMpJvH7rx1w2mUa7XhJY0Rd90XUQgOnKIUye78ImHWLhWFi752DptdEdxJQ3I2u9ImGLKTbidyIsePyOf7VvLIG&platform=an&timestamp=1615220198&key=sq_app_ad&sign=3AC69AB3E03C713144645E2F79C466ED&_public=soft_id%253D1%2526ver%253D210308%2526subVer%253Dsqrelease%2526appVer%253D11.3.4.132%2526platform%253Dan%2526placeid%253D1077%2526sqDevId%253DMTYxNTIxODc3NDE3ODA1Nw%253D%253D%2526oaid%253D%2526sdk%253D29%2526wh%253D1080x2208%2526msv%253D3%2526enc%253D671301615220198774%2526sn%253D1615218774178057%2526vc%253D1c19%2526mod%253DGLK-AL00%2526manufacturer%253DHUAWEI%2526brand%253DHUAWEI%2526net_type%253Dwifi%2526first_placeid%253Dsrc1077%2526aak%253Ddc92f5%2526user_id%253D36270036%2526session%253DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzNjI3MDAzNiIsInV0ZGlkIjoiWUJsdXk1SWxaK3dEQUdNNDlTbDdZK3ZPIiwiaW1laSI6IjE2MTUyMTg3NzQxNzgwNTciLCJzbiI6IjE2MTUyMTg3NzQxNzgwNTciLCJleHAiOjE2MTU3MzczNzAsInVzZXJJZCI6IjM2MjcwMDM2IiwiaWF0IjoxNjE1MjE4OTcwLCJvYWlkIjpudWxsLCJwbGF0Zm9ybSI6ImFuIn0.LpSrqr5NU0VuRQzR_IdjHTu-zK5Cmsp-kbqOasSpOYgi6_IRxZLUuKA1PRQ0nLImldWgdVnVIUu7PLaoc-gjTQ%2526utype%253Dvip%2526net%253D4%2526net_env%253D4%2526utdid%253DWUJsdXk1SWxaK3dEQUdNNDlTbDdZK3ZP%2526umidtoken%253DAVhLYpFLOqwV8TV4EmGC9uj1ipqxE49%252F%2526permissionType%253D3'
//转盘抽奖 /api/activity/activity/v1/lottery/draw
let drawckhd = { "Host": "ocean.shuqireader.com", "content-length": "2020", "accept": "application/json, text/plain, */*", "user-agent": "Mozilla/5.0 (Linux; Android 10; GLK-AL00 Build/HUAWEIGLK-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/78.0.3904.108 Mobile Safari/537.36 AliApp(shuqi_android/11.3.4.132) TTID/src1077 WindVane/8.5.0 Shuqi (HUAWEI-GLK-AL00__shuqi__11.3.4.132__1077) AliApp(SQREADER/11.3.4.132)", "content-type": "application/x-www-form-urlencoded", "origin": "https://render-web.shuqireader.com", "x-requested-with": "com.shuqi.controller", "sec-fetch-site": "same-site", "sec-fetch-mode": "cors", "referer": "https://render-web.shuqireader.com/render/sq-welfare/page/lottery_page/?appfunction=an_bmk,1_clo,1_smjs,1&soft_id=1&ver=210308&subVer=sqrelease&appVer=11.3.4.132&platform=an&placeid=1077&sqDevId=MTYxNTIxODc3NDE3ODA1Nw==&oaid=&sdk=29&wh=1080x2208&msv=3&enc=262201615220560055&sn=1615218774178057&vc=1c19&mod=GLK-AL00&manufacturer=HUAWEI&brand=HUAWEI&net_type=wifi&first_placeid=src1077&aak=dc92f5&user_id=36270036&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzNjI3MDAzNiIsInV0ZGlkIjoiWUJsdXk1SWxaK3dEQUdNNDlTbDdZK3ZPIiwiaW1laSI6IjE2MTUyMTg3NzQxNzgwNTciLCJzbiI6IjE2MTUyMTg3NzQxNzgwNTciLCJleHAiOjE2MTU3MzczNzAsInVzZXJJZCI6IjM2MjcwMDM2IiwiaWF0IjoxNjE1MjE4OTcwLCJvYWlkIjpudWxsLCJwbGF0Zm9ybSI6ImFuIn0.LpSrqr5NU0VuRQzR_IdjHTu-zK5Cmsp-kbqOasSpOYgi6_IRxZLUuKA1PRQ0nLImldWgdVnVIUu7PLaoc-gjTQ&utype=vip&net=4&net_env=4&coreType=1&rom=10&skinId=999&skinVersion=1.0&skinVersionPrefix=1&imagetype=1&utdid=WUJsdXk1SWxaK3dEQUdNNDlTbDdZK3ZP&umidtoken=AVhLYpFLOqwV8TV4EmGC9uj1ipqxE49/&permissionType=3&writer_switch=1&serviceWorkerOn=1&asac=2A20C07RJ9F51AOEFSNHDR&spm=a2oun.13804299", "accept-encoding": "gzip, deflate", "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7" }
let drawckbd = 'wua=UOX3_cWXNNGhXsHwq3%2FUUEcpsqvbX5JB3w05ts0J%2FnD868itmQd6isT1IR8dVmHuK9VxVd5rR1Tveu7DGt080Z22L5VfTplDo%2BGx%2FeG6eFFHqvOPeQ2osuj9gXxR7d%2FuFu632ECQGpveXwQrZ%2FL8Vw3SGuPGVL0t1teKcCA9taOulv3Qg1Td0T0xxKXN7d503U9Sp5UbMQTlilAXGpGcFa9XhWOYHShxeSkbNU9P%2FsAZRjkJnP%2FkMdYMXfpgyGi7jooi%2B0XcbM5w1j91OyqrcEugc40LZZhL8M1MCGTPyFvfh3djbM8BFwFUEl7q%2F2AjZ5lOJN5FLGYVTKihKhqvBo7vjVleyFzv690KVkt1orLPzedNdr3LN4wmcmhFpin5vXX0QDMeXUZjuIc1Qe264Ohj%2BTgaJpWIHOINV8FKkqNaTMJ1zVjLpNpW2ZESM%2FdTxloIMiR2ZvTlKWIIExB2XRI1V0OQ3oSqsA9bNbAP7%2Fi4FULy%2BBhW3PLRlG17bSmnyahdz&ua=&userId=36270036&umidtoken=AVhLYpFLOqwV8TV4EmGC9uj1ipqxE49%2F&secureDeviceType=android&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1615220575&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=2f240051a9d106200b5a923aea47a9f1&key=sq_h5_gateway&_public=appfunction%3Dan_bmk%252C1_clo%252C1_smjs%252C1%26soft_id%3D1%26ver%3D210308%26subVer%3Dsqrelease%26appVer%3D11.3.4.132%26platform%3D2%26placeid%3D1077%26sqDevId%3DMTYxNTIxODc3NDE3ODA1Nw%253D%253D%26oaid%3D%26sdk%3D29%26wh%3D1080x2208%26msv%3D3%26enc%3D262201615220560055%26sn%3D1615218774178057%26vc%3D1c19%26mod%3DGLK-AL00%26manufacturer%3DHUAWEI%26brand%3DHUAWEI%26net_type%3Dwifi%26first_placeid%3Dsrc1077%26aak%3Ddc92f5%26user_id%3D36270036%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzNjI3MDAzNiIsInV0ZGlkIjoiWUJsdXk1SWxaK3dEQUdNNDlTbDdZK3ZPIiwiaW1laSI6IjE2MTUyMTg3NzQxNzgwNTciLCJzbiI6IjE2MTUyMTg3NzQxNzgwNTciLCJleHAiOjE2MTU3MzczNzAsInVzZXJJZCI6IjM2MjcwMDM2IiwiaWF0IjoxNjE1MjE4OTcwLCJvYWlkIjpudWxsLCJwbGF0Zm9ybSI6ImFuIn0.LpSrqr5NU0VuRQzR_IdjHTu-zK5Cmsp-kbqOasSpOYgi6_IRxZLUuKA1PRQ0nLImldWgdVnVIUu7PLaoc-gjTQ%26utype%3Dvip%26net%3D4%26net_env%3D4%26coreType%3D1%26rom%3D10%26skinId%3D999%26skinVersion%3D1.0%26skinVersionPrefix%3D1%26imagetype%3D1%26utdid%3DWUJsdXk1SWxaK3dEQUdNNDlTbDdZK3ZP%26umidtoken%3DAVhLYpFLOqwV8TV4EmGC9uj1ipqxE49%252F%26permissionType%3D3%26writer_switch%3D1%26serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.13804299'
// 用户记录url api/activity/xapi/gold/record
let userurl = 'https://ocean.shuqireader.com/api/activity/xapi/gold/record?userId=36270036&page=1&pageSize=10&sqSv=1.0&sign=eb88cc00d297227335084a98b46e85e3&key=sq_h5_gateway&_public=appfunction%253Dan_bmk%25252C1_clo%25252C1_smjs%25252C1%2526soft_id%253D1%2526ver%253D210308%2526subVer%253Dsqrelease%2526appVer%253D11.3.4.132%2526platform%253D2%2526placeid%253D1077%2526sqDevId%253DMTYxNTIxODc3NDE3ODA1Nw%2526oaid%253D%2526sdk%253D29%2526wh%253D1080x2208%2526msv%253D3%2526enc%253D853101615220834768%2526sn%253D1615218774178057%2526vc%253D1c19%2526mod%253DGLK-AL00%2526manufacturer%253DHUAWEI%2526brand%253DHUAWEI%2526net_type%253Dwifi%2526first_placeid%253Dsrc1077%2526aak%253Ddc92f5%2526user_id%253D36270036%2526session%253DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzNjI3MDAzNiIsInV0ZGlkIjoiWUJsdXk1SWxaK3dEQUdNNDlTbDdZK3ZPIiwiaW1laSI6IjE2MTUyMTg3NzQxNzgwNTciLCJzbiI6IjE2MTUyMTg3NzQxNzgwNTciLCJleHAiOjE2MTU3MzkxODEsInVzZXJJZCI6IjM2MjcwMDM2IiwiaWF0IjoxNjE1MjIwNzgxLCJvYWlkIjpudWxsLCJwbGF0Zm9ybSI6ImFuIn0.Z40l_8RrVXuXOZjV3ArcUXfkVPUHB2zZAySmjD_Q8dWmES5-bndLgDjPBS8l_hGmow7LqidbRQaYbfgW13SwUg%2526utype%253Dvip%2526net%253D4%2526net_env%253D4%2526coreType%253D1%2526rom%253D10%2526skinId%253D999%2526skinVersion%253D1.0%2526skinVersionPrefix%253D1%2526imagetype%253D1%2526utdid%253DWUJsdXk1SWxaK3dEQUdNNDlTbDdZK3ZP%2526umidtoken%253DAVhLYpFLOqwV8TV4EmGC9uj1ipqxE49%25252F%2526permissionType%253D3%2526writer_switch%253D1%2526fe-env%253Duae-prod%2526spm%253Da2oun.13804299'


//             书旗极速版 
//签到 api/activity/xapi/signin/v5/signInAction
let jssqxssigninhd={"Host":"ocean.shuqireader.com","content-length":"2120","accept":"application/json, text/plain, */*","user-agent":"Mozilla/5.0 (Linux; Android 10; GLK-AL00 Build/HUAWEIGLK-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/78.0.3904.108 Mobile Safari/537.36 AliApp(shuqi_lite_android/1.0.7.7) TTID/src60011 WindVane/8.5.0 Shuqi (HUAWEI-GLK-AL00__shuqi__1.0.7.7__60011) AliApp(SQREADER-LITE/1.0.7.7)","content-type":"application/x-www-form-urlencoded","origin":"https://render-web.shuqireader.com","x-requested-with":"com.shuqi.controller.lite","sec-fetch-site":"same-site","sec-fetch-mode":"cors","referer":"https://render-web.shuqireader.com/render/lite-welfare/page/golden_house/?appfunction=an_bmk,1_clo,1_smjs,1&soft_id=1&ver=210226&subVer=sqrelease&appVer=1.0.7.7&platform=115&placeid=60011&imei=1615265412381646&oaid=&sdk=29&wh=1080x2208&msv=3&enc=936551615265917991&sn=1615265412381646&vc=f2e0&mod=GLK-AL00&manufacturer=HUAWEI&brand=HUAWEI&net_type=wifi&first_placeid=src60011&aak=e0b3b4&user_id=36270036&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzNjI3MDAzNiIsInV0ZGlkIjoiZmFzdF9ZQmx1eTVJbFord0RBR000OVNsN1krdk8iLCJpbWVpIjoiZmFzdF8xNjE1MjY1NDEyMzgxNjQ2Iiwic24iOiJmYXN0XzE2MTUyNjU0MTIzODE2NDYiLCJleHAiOjE2MTU3ODQzMTgsInVzZXJJZCI6IjM2MjcwMDM2IiwiaWF0IjoxNjE1MjY1OTE4LCJvYWlkIjpudWxsLCJwbGF0Zm9ybSI6IjExNSJ9.udUCJQSvbI0UJyz25cZ27OjVKMD_y9VV1DKRa050TWta5t61HhLP96sw7l3thJkALpBEMigeI64P1jknqQu2sA&utype=vip&net=4&net_env=4&isp=46000&coreType=1&rom=10&skinId=999&skinVersion=1.0&skinVersionPrefix=1&imagetype=1&utdid=WUJsdXk1SWxaK3dEQUdNNDlTbDdZK3ZP&umidtoken=4wFL7ZRLOlUqKTV4Fccg8JfMUkCdVAJz&permissionType=3&writer_switch=1&appfunction=an_bmk,1_clo,1_smjs,1&soft_id=1&ver=210226&subVer=sqrelease&appVer=1.0.7.7&platform=115&placeid=60011&imei=1615265412381646&oaid=&sdk=29&wh=1080x2208&msv=3&enc=936551615265917989&sn=1615265412381646&vc=f2e0&mod=GLK-AL00&manufacturer=HUAWEI&brand=HUAWEI&net_type=wifi&first_placeid=src60011&aak=e0b3b4&user_id=36270036&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzNjI3MDAzNiIsInV0ZGlkIjoiZmFzdF9ZQmx1eTVJbFord0RBR000OVNsN1krdk8iLCJpbWVpIjoiZmFzdF8xNjE1MjY1NDEyMzgxNjQ2Iiwic24iOiJmYXN0XzE2MTUyNjU0MTIzODE2NDYiLCJleHAiOjE2MTU3ODQzMTgsInVzZXJJZCI6IjM2MjcwMDM2IiwiaWF0IjoxNjE1MjY1OTE4LCJvYWlkIjpudWxsLCJwbGF0Zm9ybSI6IjExNSJ9.udUCJQSvbI0UJyz25cZ27OjVKMD_y9VV1DKRa050TWta5t61HhLP96sw7l3thJkALpBEMigeI64P1jknqQu2sA&utype=vip&net=4&net_env=4&isp=46000&coreType=1&rom=10&skinId=999&skinVersion=1.0&skinVersionPrefix=1&imagetype=1&utdid=WUJsdXk1SWxaK3dEQUdNNDlTbDdZK3ZP&umidtoken=4wFL7ZRLOlUqKTV4Fccg8JfMUkCdVAJz&permissionType=3&writer_switch=1&from=ShuqiTab&serviceWorkerOn=1&spm=a2o558.page_personal&spm=a2o558.page_personal","accept-encoding":"gzip, deflate","accept-language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"}
let jssqxssigninbd='clientTimestamp=1615265939&position=601&userId=36270036&signInType=1&wua=8pv7_xDWuL7th%2B9qmwhJkO4gj%2FIxgg3mA2yioAfw2xlZqtwvC%2Fdyk%2BF7o4xt%2BJtWAIlZIJThqn6xq8D2xv%2FYBNjfxjjVq60tAXeuLHOdJVNmBrBZN5KpmaPkbrK3Uf8C5RebnNGDLNtTojRgMmfKInXz9R4%2FdMpSC4udSJi%2BT%2Bkch0UD1zvDG7TmXQ9%2BmNA64fwZKJw4Q3PBi4zRZ3Iu0naE7RkjU%2BVyDy2n%2Bnd2x3MZjAYEzVpJU3GEIINXkfhfJZgZFjEkCWTk3cqMNG7Xod6o3FJSN%2F68kKNA5TwfmxLVkgspFQCvkoGB2vcz2toIm4c3XkGGS3hBKrzSkHM99p%2BTOiWCajDJ2p380%2F5%2Bw6r5y8IURVr6b5MaiBaPOCgupglQbgV8nGNnISsEUS89KWYwFYQqHRivc%2B5cSTjAYi2bYMo957lVIqCyQtA9V3kp7WtmCjMRK1Pbj7c4dSc9ufZGOyswwpa2ZzFtCQyTTF5RldcOTr5GnAPLW%2Fmp1OEYdrTRe&ua=&miniWua=HHnB_putvBR7q9lTGzBQ6o0Ev6jtkpmq%2FJWd%2BOJbnMP8fwywILcxWDg2UdRWoQ87fV%2B1kxcOilpZnE4HxswFQ0%2F8UyrU%2B4XSHcjJo6xnxp9OVOq8fdgbbshjOSZNPGpkR60Dp&umidtoken=4wFL7ZRLOlUqKTV4Fccg8JfMUkCdVAJz&secureDeviceType=android&secureAppName=wenxue-activity-proxy&sign=40a7a609378f58a6319928c57ed57286&key=sq_h5_gateway&_public=appfunction%3Dan_bmk%252C1_clo%252C1_smjs%252C1%26soft_id%3D1%26ver%3D210226%26subVer%3Dsqrelease%26appVer%3D1.0.7.7%26platform%3D115%26placeid%3D60011%26imei%3D1615265412381646%26oaid%3D%26sdk%3D29%26wh%3D1080x2208%26msv%3D3%26enc%3D936551615265917991%26sn%3D1615265412381646%26vc%3Df2e0%26mod%3DGLK-AL00%26manufacturer%3DHUAWEI%26brand%3DHUAWEI%26net_type%3Dwifi%26first_placeid%3Dsrc60011%26aak%3De0b3b4%26user_id%3D36270036%26utype%3Dvip%26net%3D4%26net_env%3D4%26isp%3D46000%26coreType%3D1%26rom%3D10%26skinId%3D999%26skinVersion%3D1.0%26skinVersionPrefix%3D1%26imagetype%3D1%26utdid%3DWUJsdXk1SWxaK3dEQUdNNDlTbDdZK3ZP%26umidtoken%3D4wFL7ZRLOlUqKTV4Fccg8JfMUkCdVAJz%26permissionType%3D3%26writer_switch%3D1%26from%3DShuqiTab%26serviceWorkerOn%3D1%26spm%3Da2o558.page_personal%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzNjI3MDAzNiIsInV0ZGlkIjoiZmFzdF9ZQmx1eTVJbFord0RBR000OVNsN1krdk8iLCJpbWVpIjoiZmFzdF8xNjE1MjY1NDEyMzgxNjQ2Iiwic24iOiJmYXN0XzE2MTUyNjU0MTIzODE2NDYiLCJleHAiOjE2MTU3ODQzMTgsInVzZXJJZCI6IjM2MjcwMDM2IiwiaWF0IjoxNjE1MjY1OTE4LCJvYWlkIjpudWxsLCJwbGF0Zm9ybSI6IjExNSJ9.udUCJQSvbI0UJyz25cZ27OjVKMD_y9VV1DKRa050TWta5t61HhLP96sw7l3thJkALpBEMigeI64P1jknqQu2sA'
// 看书 api/activity/v1/activity/pendant/lottery
let jssqxsckhd={"Host":"ocean.shuqireader.com","content-type":"application/x-www-form-urlencoded","content-length":"1916","accept-encoding":"gzip","user-agent":"okhttp/3.7.0"}
let jssqxsckbd='userId=36270036&platform=115&actId=353&wua=8pv7_7jH9yZOMaFQOCDe0JZICEllx5f1FjPWHtw8BJIMO8p4x4fr9h7tb8SQ8AEbAZ03jFMwKcPWAFOua5hnVa0Sw0ms3RP90UNDY2kErtAiYEtjMA8pbcU8xzU2SHc2tkC%2BEwznT12qfPFwtN2p%2BTV4qxRMXRu37PsKKQlWjIC6h4AN8qSNRmpLa27RU9NXo%2FhzQL9Nj5U%2BOfDLO73J6cJVs0rFJIuref3ZJIm6m0SYptiW14a79Z457oysFdcGSTesEx8PZF7nKpv341RhoUVNeg38XjvsiYmQjK%2FYg9Y6JUJGF98xQCMiIr7TlwYneuehGRGnGPbIDvus1RMb1y1a5My3m4ztjs%2FO9KjR%2FXqgtB2%2FIczOxsMQuj5Hl69kT%2F95oyIYZD57LWKfDZgoJQhqnAf1fGaP8tSXal841BrX1hO4QWARE35jghSSHkZihWA%2FD3t1ARQgBR%2BsKx12a35%2FaTcrfbkgFc6PvaDS8M0cNjnw%3D&miniWua=HHnB_eQ%2FFZRlZss8t%2Bbj8oeEkMfHPhp8OcyAaY5AyL3VxakU53mip5LgSEFiLkjfWsa63u8I8%2BNWEgKIdGB%2FMVcIZr%2Bbq5Zo5HpdOQI8nL%2BLQYzNWHK8qT%2BL%2FFxgMgcMJqFvi&key=sq_app_ad&sign=4D47F81BD57A9C13394402B4BA5C4BA4&_public=soft_id%253D1%2526ver%253D210226%2526subVer%253Dsqrelease%2526appVer%253D1.0.7.7%2526platform%253D115%2526placeid%253D60011%2526imei%253D1615105328741575%2526oaid%253D6e85025e-f87c-46b3-adea-5cde20865bac%2526sdk%253D29%2526wh%253D1080x2208%2526msv%253D3%2526enc%253D112191615127521545%2526sn%253D1615105328741575%2526vc%253Dca3e%2526mod%253DGLK-AL00%2526manufacturer%253DHUAWEI%2526brand%253DHUAWEI%2526net_type%253Dwifi%2526first_placeid%253Dsrc60011%2526aak%253Dfaa7eb%2526user_id%253D36270036%2526session%253DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzNjI3MDAzNiIsInV0ZGlkIjoiZmFzdF9YU2lKNytuSncyMERBSnRUSUpqNzR4UUwiLCJpbWVpIjoiZmFzdF8xNjE1MTA1MzI4NzQxNTc1Iiwic24iOiJmYXN0XzE2MTUxMDUzMjg3NDE1NzUiLCJleHAiOjE2MTU2NDE0ODcsInVzZXJJZCI6IjM2MjcwMDM2IiwiaWF0IjoxNjE1MTIzMDg3LCJvYWlkIjoiZmFzdF82ZTg1MDI1ZS1mODdjLTQ2YjMtYWRlYS01Y2RlMjA4NjViYWMiLCJwbGF0Zm9ybSI6IjExNSJ9.GDp-ba9fDlTz_Bqyb9CIRNRyDoEkCncJOTnlUnaxDjdJj5SsHaBhHsnWjBbMs7cChMJYZwsKbuiH27RPSZlTzg%2526utype%253Dvip%2526net%253D4%2526net_env%253D4%2526isp%253D46000%2526utdid%253DWFNpSjcrbkp3MjBEQUp0VElKajc0eFFM%2526umidtoken%253DXMlLdKhLOnedhjV4C8q8Jpb6x80QOxSF%2526permissionType%253D3'
//视频  api/ad/v1/api/prize/lottery
let jsvediogoldprizehd={"Host":"ocean.shuqireader.com","content-type":"application/x-www-form-urlencoded","content-length":"1977","accept-encoding":"gzip","user-agent":"okhttp/3.7.0"}
let jsvediogoldprizebd='userId=36270036&resourceId=715&requestSrc=%E4%BB%BB%E5%8A%A1&deliveryId=907&wua=8pv7_qmpZ74n2ImSDRdH0gC6LqiC6Xlv9BqTiLyr4ngmJfEzTYdR3TyGdx5K5%2FsvRc9mbQRWjf3mv4fA%2FSQwrO24fL46E01vQQYKy9afdDrRuloeW7eiIQmV2WE84F0eKNJVolHSW5ND7sDiUTPBJ5fX9M5GgP41zwtI8msUFROGr1noFSYvPsjDWABljHIE8LH4Ec5VN9yfxF5FxQbt%2BdxaP6UX1C7%2BYGf32t9PJ8ctvFMUGiY91MNB5QyjeBRYessZsByEHe01DPbEVGYrNAOfJVSuI%2BEGkEoFj5OF8K%2FNrYx70jsBmS0RSpJdJBBpWOjFHj8P8mXdeJzZnLFyp9ClsFs8wKav%2F9256%2FLZHZXVQFUHtVgS6suj1kxv5Wm312dpD%2Bdniniod%2FXiZu7q43aE5jYc6kBUwEZXacVv%2FUHigLIKgKQOS9J3YDGDms6S9%2FJhtF96AU1fZ4JYkospuRCy%2Bgnnc7gwYJqKftIE5NbqhP6I%3D&miniWua=HHnB_QxpXagHIiqq7lTEsuIBP8pD6Jzd%2BGAU1BEMDPTVtgsRPhSabDMkQQhQioVxhnQ22GkoPOiPgqMz7VKNSz4GWIYdZ9rI1pRfKFSRbfTZf%2BIvin6IuBziUJPE4uss3SqoE&platform=115&timestamp=1615127192&key=sq_app_ad&sign=05503D0F60A7FB805F84F67D84000097&_public=soft_id%253D1%2526ver%253D210226%2526subVer%253Dsqrelease%2526appVer%253D1.0.7.7%2526platform%253D115%2526placeid%253D60011%2526imei%253D1615105328741575%2526oaid%253D6e85025e-f87c-46b3-adea-5cde20865bac%2526sdk%253D29%2526wh%253D1080x2208%2526msv%253D3%2526enc%253D400091615127192164%2526sn%253D1615105328741575%2526vc%253Dca3e%2526mod%253DGLK-AL00%2526manufacturer%253DHUAWEI%2526brand%253DHUAWEI%2526net_type%253Dwifi%2526first_placeid%253Dsrc60011%2526aak%253Dfaa7eb%2526user_id%253D36270036%2526session%253DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzNjI3MDAzNiIsInV0ZGlkIjoiZmFzdF9YU2lKNytuSncyMERBSnRUSUpqNzR4UUwiLCJpbWVpIjoiZmFzdF8xNjE1MTA1MzI4NzQxNTc1Iiwic24iOiJmYXN0XzE2MTUxMDUzMjg3NDE1NzUiLCJleHAiOjE2MTU2NDE0ODcsInVzZXJJZCI6IjM2MjcwMDM2IiwiaWF0IjoxNjE1MTIzMDg3LCJvYWlkIjoiZmFzdF82ZTg1MDI1ZS1mODdjLTQ2YjMtYWRlYS01Y2RlMjA4NjViYWMiLCJwbGF0Zm9ybSI6IjExNSJ9.GDp-ba9fDlTz_Bqyb9CIRNRyDoEkCncJOTnlUnaxDjdJj5SsHaBhHsnWjBbMs7cChMJYZwsKbuiH27RPSZlTzg%2526utype%253Dvip%2526net%253D4%2526net_env%253D4%2526isp%253D46000%2526utdid%253DWFNpSjcrbkp3MjBEQUp0VElKajc0eFFM%2526umidtoken%253DXMlLdKhLOnedhjV4C8q8Jpb6x80QOxSF%2526permissionType%253D3'
!(async () => {
    await all();
})()
    .catch((e) => {
        $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
        $.done();
    })


async function all() {
    //nodejs运行
    if ($.isNode()) {
        $.log(`\n============书旗小说=============`);
        ReadTimes = 0;
        vediogold = 0;
        drawgold = 0;
        //签到
        await sqxssignin()
        //看视频奖励抽奖次数
        await vediodrawprize(0);
        //看视频奖励金币
        await vediogoldprize(0);
        //阅读
        await readbook();
        $.log(`\n============书旗小说极速版=============`)
        await jsqxssignin()
        //极速看书
            await jsreadbook();
        //极速视频
             await jsvediogoldprize();
             $.log(`\n============书旗小说&极速版=============`)
        //收集阅读金币
        await receivecoin();
        //个人信息
        await userinfo();


    }
}
function sqxssignin() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/xapi/signin/v5/signInAction";

        const request = {
            url: url,
            headers: sqxssigninhd,
            body: sqxssigninbd
        };
        $.post(request, async (error, request, data) => {
            try {
                if (error) {
                    $.log("【书旗签到】失败");
                    await $.wait(1000);                    
                } else {
                    const result = JSON.parse(data)
                    //$.log(data);
                    if (result.status == 200) {
                         $.log("【书旗签到】成功，"+result.copyWriting);
                        await $.wait(1000);
                    }
                     else {                        
                            $.log("【书旗签到】失败," + result.message );
                            await $.wait(1000);              
                           //$.log(data);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        });
    });
}
function jsqxssignin() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/xapi/signin/v5/signInAction";

        const request = {
            url: url,
            headers: jssqxssigninhd,
            body: jssqxssigninbd
        };
        $.post(request, async (error, request, data) => {
            try {
                if (error) {
                    $.log("【书旗签到】失败");
                    await $.wait(1000);                    
                } else {
                    const result = JSON.parse(data)
                    //$.log(data);
                    if (result.status == 200) {
                         $.log("【书旗签到】成功，"+result.copyWriting);
                        await $.wait(1000);
                    }
                     else {                        
                            $.log("【书旗签到】失败," + result.message );
                            await $.wait(1000);              
                           //$.log(data);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        });
    });
}

function readbook() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/readpage/pendant/lottery";

        const request = {
            url: url,
            headers: sqxsckhd[0],
            body: sqxsckbd[0]
        };
        $.post(request, async (error, request, data) => {
            try {
                if (error) {
                    $.log("阅读请求失败,再次尝试阅读");
                    await $.wait(1000);
                    await readbook();
                } else {
                    const result = JSON.parse(data)
                    //$.log(data);
                    if (result.status == 200) {
                        ReadTimes++;
                        $.log("【阅读任务】第" + ReadTimes + "次阅读成功，获得3金币");
                        await $.wait(1000);
                        await readbook();
                    } else {

                        if (result.message != '领取达到每日上限，请明天再来') {
                            $.log("【阅读任务】阅读失败，" + result.message + ",再次尝试阅读");
                            await $.wait(1000);
                            await readbook();
                        } else
                            $.log("【阅读任务】阅读失败，" + result.message);

                        //$.log(data);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        });
    });
}

function receivecoin() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/prizecenter/xapi/prize/manual/receive";

        const request = {
            url: url,
            headers: receivecoinckhd,
            body: receivecoinckbd
        };
        $.post(request, async (error, request, data) => {
            try {
                if (error) {
                    $.log("收集阅读金币请求失败,再次尝试收集阅读金币");
                    await $.wait(1000);
                    await receivecoin();
                } else {
                    //$.log(data);
                    const result = JSON.parse(data);
                    if (result.status == 200) {

                        $.log("【收集金币】收集阅读金币成功");

                    } else {
                        $.log("【收集金币】收集阅读金币失败," + result.message);
                        //$.log(data);
                    }
                }

            } catch (e) {
                $.log(e)
            }
            resolve();
        });
    });
}

function vediogoldprize(j) {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery";
        const request = {
            url: url,
            headers: vediogoldprizehd,
            body: vediogoldprizebd
        };
        $.post(request, async (error, request, data) => {
            try {
                if (error) {
                    $.log("视频金币请求失败,再次尝试视频金币");
                    await $.wait(1000);
                    await vediogoldprize();
                } else {
                    const result = JSON.parse(data)
                    //$.log(data);
                    if (result.status == 200) {
                        j++;
                        $.log("【视频金币】观看第" + j + "个视频成功，获得250金币，等待30s观看下一个视频");
                        vediogold += 250;
                        await $.wait(30000);
                        await vediogoldprize(j);
                    } else {
                        if (result.message != '领取达到每日上限，请明天再来') {
                            $.log("【视频金币】观看失败，" + result.message + ",再次尝试视频金币");
                            await $.wait(30000);
                            await vediogoldprize(j);
                        } else
                            $.log("【视频金币】观看失败," + result.message);
                        //$.log(data);

                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        });
    });
}

function vediodrawprize(k) {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery";

        const request = {
            url: url,
            headers: vediodrawprizeckhd,
            body: vediodrawprizeckbd
        };
        $.post(request, async (error, request, data) => {
            try {
                if (error) {
                    $.log("视频抽奖请求失败,再次尝试视频抽奖");
                    await $.wait(1000);
                    await vediogoldprize();
                } else {
                    const result = JSON.parse(data)
                    //$.log(data);
                    if (result.status == 200) {
                        k++;
                        $.log("【视频抽奖】观看第" + k + "个视频成功，获得一次抽奖机会");
                        await $.wait(1000);
                        await draw(k);
                    } else {
                        if (result.message != '领取达到每日上限，请明天再来') {
                            $.log("【视频抽奖】观看失败，" + result.message + ",再次尝试视频抽奖");
                            await $.wait(1000);
                            await vediodrawprize(k);
                        } else
                            $.log("【视频抽奖】观看失败," + result.message);
                        //$.log(data);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        });
    });
}

function draw(k) {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/activity/v1/lottery/draw?asac=2A20C07RJ9F51AOEFSNHDR";

        const request = {
            url: url,
            headers: drawckhd,
            body: drawckbd
        };
        $.post(request, async (error, request, data) => {
            try {
                if (error) {
                    $.log("抽奖任务请求失败,再次尝试视频抽奖");
                    await $.wait(1000);
                    await draw();
                } else {
                    const result = JSON.parse(data)
                    //$.log(data);
                    if (result.status == 200) {
                        $.log("【抽奖任务】抽奖成功，获得" + result.data.prizeList[0].prizeName);
                        drawgold += parseInt(result.data.prizeList[0].prizeName);
                        await $.wait(1000);
                        await vediodrawprize(k);
                    } else {
                        $.log("【抽奖任务】抽奖失败," + result.message);
                        //$.log(data);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        });
    });
}

function userinfo() {
    return new Promise((resolve, reject) => {
        const request = {
            url: userurl,
            headers: {},
            body: ""
        };

        $.post(request, async (error, request, data) => {
            try {
                if (error) {
                    $.log("用户信息请求失败,再次尝试用户信息请求");
                    await $.wait(1000);
                    await userinfo();
                } else {
                    //$.log(data);
                    const result = JSON.parse(data);
                    if (result.status == 200) {
                        // $.log("【阅读任务】本次共获得" + ReadTimes * 3 + "金币");
                        // $.log("【视频任务】本次共获得" + vediogold + "金币");
                        // $.log("【抽奖任务】本次共获得" + drawgold + "金币");
                        $.log("【金币总数】" + result.data.gold);
                        $.log("【总计收益】" + result.data.income + "元");
                    } else {
                        $.log("【金币总数】数据异常," + result.message);
                        //$.log(data);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        });
    });
}
function jsreadbook() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/v1/activity/pendant/lottery";

        const request = {
            url: url,
            headers: jssqxsckhd,
            body: jssqxsckbd
        };
        $.post(request, async (error, request, data) => {
            try {
                if (error) {
                    $.log("极速阅读请求失败,再次尝试阅读");
                    await $.wait(1000);
                    await jsreadbook();
                } else {
                    const result = JSON.parse(data)
                    //$.log(data);
                    if (result.data.awardStatus == 1) {
                        ReadTimes++;
                        $.log("【极速阅读任务】第" + ReadTimes + "次阅读成功，获得3金币");
                        await $.wait(1000);
                        await jsreadbook();
                    } else {

                        if (result.data.awardStatus == null) {
                            $.log("【极速阅读任务】阅读失败，领取达到每日上限，请明天再来");
                            await $.wait(1000);
                            //await jsreadbook();
                        } else
                            $.log("【极速阅读任务】阅读失败，" + result.message);
                        //await jsreadbook();
                        //$.log(data);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        });
    });
}
function jsvediogoldprize() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery";
        const request = {
            url: url,
            headers: jsvediogoldprizehd,
            body: jsvediogoldprizebd
        };
        $.post(request, async (error, request, data) => {
            try {
                if (error) {
                    $.log("极速视频金币请求失败,再次尝试视频金币");
                    await $.wait(1000);
                    await jsvediogoldprize();
                } else {
                    const result = JSON.parse(data)
                    //$.log(data);
                    if (result.status == 200) {
                        $.log("【极速视频金币】观看视频成功,"+result.data.awardMessage+",等待30s观看下一个");
                        vediogold += 250;
                        await $.wait(30000);
                        await jsvediogoldprize();
                    } else {
                        if (result.message != '领取达到每日上限，请明天再来') {
                            $.log("【极速视频金币】观看失败，" + result.message + ",再次尝试视频金币");
                            await $.wait(30000);
                            await jsvediogoldprize();
                        } else
                            $.log("【极速视频金币】观看失败," + result.message);
                        //$.log(data);

                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        });
    });
}

function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            }
                : t;
            let s = this.get;
            return "POST" === e && (s = this.post),
                new Promise((e, i) => {
                    s.call(this, t, (t, s, r) => {
                        t ? i(t) : e(s)
                    })
                })
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t,
                this.http = new s(this),
                this.data = null,
                this.dataFile = "box.dat",
                this.logs = [],
                this.isMute = !1,
                this.isNeedRewrite = !1,
                this.logSeparator = "\n",
                this.startTime = (new Date).getTime(),
                Object.assign(this, e),
                this.log(`\n${this.name}\u811a\u672c,\u5f00\u59cb\u6267\u884c:`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i)
                try {
                    s = JSON.parse(this.getdata(t))
                } catch { }
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }
        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20,
                    r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"),
                    a = {
                        url: `http://${h}/v1/scripting/evaluate`,
                        body: {
                            script_text: t,
                            mock_type: "cron",
                            timeout: r
                        },
                        headers: {
                            "X-Key": o,
                            Accept: "*/*"
                        }
                    };
                this.post(a, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode())
                return {}; {
                this.fs = this.fs ? this.fs : require("fs"),
                    this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e);
                if (!s && !i)
                    return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"),
                    this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e),
                    r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r)
                    return s;
            return r
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
                    r = s ? this.getval(s) : "";
                if (r)
                    try {
                        const t = JSON.parse(r);
                        e = t ? this.lodash_get(t, i, "") : e
                    } catch (t) {
                        e = ""
                    }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
                    o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t),
                        s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t),
                        s = this.setval(JSON.stringify(o), i)
                }
            } else
                s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"),
                this.cktough = this.cktough ? this.cktough : require("tough-cookie"),
                this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar,
                t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => { })) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]),
                this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                    "X-Surge-Skip-Scripting": !1
                })), $httpClient.get(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                        e(t, s, i)
                })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                    hints: !1
                })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                    try {
                        if (t.headers["set-cookie"]) {
                            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                            this.ckjar.setCookieSync(s, null),
                                e.cookieJar = this.ckjar
                        }
                    } catch (t) {
                        this.logErr(t)
                    }
                }).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                }))
        }
        post(t, e = (() => { })) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon())
                this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                    "X-Surge-Skip-Scripting": !1
                })), $httpClient.post(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                        e(t, s, i)
                });
            else if (this.isQuanX())
                t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                    hints: !1
                })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.post(s, i).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "H+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let s in e)
                new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
            return t
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t)
                    return t;
                if ("string" == typeof t)
                    return this.isLoon() ? t : this.isQuanX() ? {
                        "open-url": t
                    }
                        : this.isSurge() ? {
                            url: t
                        }
                            : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                            s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                            s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
            h.push(e),
                s && h.push(s),
                i && h.push(i),
                console.log(h.join("\n")),
                this.logs = this.logs.concat(h)
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]),
                console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
                s = (e - this.startTime) / 1e3;
            this.log("", `${this.name}\u811a\u672c, \u6267\u884c\u7ed3\u675f! \u7528\u65f6${s}\u79d2`),
                this.log(),
                (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }
        (t, e)
}



