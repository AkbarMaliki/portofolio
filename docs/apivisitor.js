(function () {
    let apitoken = "borneojs";
    let auth = false; // pake auth atau tidak
    let scrambles = true; //  laravel wajib selalu true
    let backend = "php"; //php, firebase, laravel
    let table = "";
    let id = "";
    let errCount = 0;
    let url = true ? "https://upload.egov.balangankab.go.id" : `http://localhost:${backend!='laravel'?'/autos':'8000'}`;
    let urlBASE = url + "/apis_latest.php";
    let urlupload = url + '/upload1.php';
    let axios1 = document.createElement('script')
    let cryptojs1 = document.createElement('script')
    let chart1 = document.createElement('script')
    let chartvisitor = document.createElement('div')
    chartvisitor.setAttribute('id','chartvisitor')
    axios1.setAttribute(
        'src',
        'https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js'
    );
    cryptojs1.setAttribute(
        'src',
        'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js'
    );
    chart1.setAttribute(
        'src',
        'https://cdn.jsdelivr.net/npm/apexcharts'
    );
    document.body.appendChild(axios1)
    document.body.appendChild(cryptojs1)
    document.body.appendChild(chart1)
    document.body.appendChild(chartvisitor)
    let style1 = document.createElement('link')
    style1.setAttribute(
        'href',
        'https://akbarmaliki.github.io/portofolio/style.css'
    )

    style1.setAttribute(
        'rel',
        'stylesheet'
    )
    document.head.appendChild(style1)
    let style2 = document.createElement('link')
    style2.setAttribute(
        'href',
        'https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap'
    )
    style2.setAttribute(
        'rel',
        'stylesheet'
    )
    document.head.appendChild(style2)
    // !END WOW JS
    let visitor = {
        harian:0,
        bulanan:0,
        tahunan:0
    }
    setTimeout(() => {
        var sdb = new autophp();
        
        axios.get(url + '/auth/waktu/tanggal.php').then(res => {
            let today = res.data;
            let tgl = res.data;
            today = today + '/' + window.location.hostname;
            if (localStorage.getItem('apivisitor') == today) {
                sdb.collection("web_visitor_api").doc().select(`select * from web_visitor_api where hostname='${window.location.hostname}'`).then(res => {
                    if (res.length > 0) {
                        visitor.harian=res[0].harian
                        visitor.bulanan=res[0].bulanan
                        visitor.tahunan=res[0].tahunan
                        displayVisitor();
                        // PROSES
                    } else {
                        localStorage.removeItem('apivisitor');
                    }
                });
            } else {
                localStorage.setItem('apivisitor', today);
                let hari = tgl.split('0')[2];
                let bulan = tgl.split('0')[1];
                let tahun = tgl.split('-')[0];
                sdb.collection("web_visitor_api").doc().select(`select * from web_visitor_api where hostname='${window.location.hostname}'`).then(res => {
                    let data = {
                        hostname: window.location.hostname,
                        tanggal: tgl,
                        bulanan:1,
                        harian:1,
                        tahunan:1,
                    }
                    if (res.length > 0) {
                        data.id = res[0].id
                        if (res[0].tanggal.indexOf(bulan) != -1) {
                            data.bulanan = parseInt(res[0].bulanan) + 1;
                        } else {
                            data.bulanan = 1;
                        }
                        if (res[0].tanggal.indexOf(tahun) != -1) {
                            data.tahunan = parseInt(res[0].tahunan) + 1;
                        } else {
                            // data.tahunan=0;
                        }
                        if (res[0].tanggal.indexOf(hari) != -1) {
                            data.harian = parseInt(res[0].harian) + 1;
                        } else {
                            data.harian = 1;
                        }
                    } else {}
                  
                    sdb.collection('web_visitor_api').doc().set(data).then(res => {
                        visitor.harian=data.harian
                        visitor.bulanan=data.bulanan
                        visitor.tahunan=data.tahunan
                        displayVisitor();
                    })
                });
            }
        })
    }, 1000);
    function displayVisitor(){
        let apiVisitor = document.querySelector('#api-visitor');
        // let elementHtml = `
        //     <div class="row">
        //     <div class="col-12">
        //     <div class="shadow-lg rounded-lg row p-2">
        //         <div class="col-12 text-sm">Hari ini  &nbsp;&nbsp; : <span class="font-bold" style="font-weight:bold;">
        //         ${visitor.harian}
        //         </span></div>
        //         <div class="col-12 text-sm">Bulan ini &nbsp;: <span class="font-bold" style="font-weight:bold;">
        //         ${visitor.bulanan}
        //         </span></div>
        //         <div class="col-12 text-sm">Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;:<span class="font-bold" style="font-weight:bold;">
               
        //         ${visitor.tahunan}
        //         </span></div>
        // `;
        //     elementHtml = elementHtml + `
        //     </div>
        //     </div>
        //     </div>
        // `;
        // apiVisitor.innerHTML = elementHtml;
        var options = {
            series: [{
            name: 'Hari ini',
            data: [visitor.harian]
          }, {
            name: 'Bulan ini',
            data: [visitor.bulanan]
          }, {
            name: 'Tahun ini',
            data: [visitor.tahunan]
          }],
            chart: {
            type: 'bar',
            height: 200
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '55%',
              endingShape: 'rounded'
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
          },
          xaxis: {
            categories: ['Visitor'],
          },
          yaxis: {
            title: {
              text: 'Total kunjungan'
            }
          },
          fill: {
            opacity: 1
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return "Visitor " + val + ""
              }
            }
          }
          }
          var chart = new ApexCharts(document.querySelector("#api-visitor"), options);
          chart.render();

    }
    // =======================================================
    class autophp {
        collection(tables) {
            table = tables;
            return this;
        }
        doc(ids) {
            if (ids) {
                id = ids;
            }
            return this;
        }
        async set(vdata, auths) {
            let fd = new FormData();
            // vdata.scramble = scrambles
            let keys = Object.keys(vdata)
            keys.forEach(e => {
                if (typeof vdata[e] == 'string') {
                    vdata[e] = vdata[e].replace(/'/g, "\\'");
                    vdata[e] = vdata[e].replace(/"/g, `\"`);
                }
            })
            if (auths) {
                auth = auths
            }
            if (auth) {
                fd.append('header', localStorage.getItem('auth._token.local'))
                fd.append('key-h', localStorage.getItem('auth._token.local'));
            }
            // auth
            let setoken = await verifyEnc()
            fd.append("api-token", scramble(apitoken));
            fd.append('se-token', setoken);
            fd.append('5e19fb19a0aa66a0', scramble(auth.toString()))
            // table
            fd.append("t-bl", scramble(table));
            fd.append("backend", scramble(backend));
            if (scrambles) {
                fd.append('scramble', scrambles);
                fd.append("data", scramble(JSON.stringify(vdata)));
            } else {
                fd.append("data", JSON.stringify(vdata));
            }
            // type
            fd.append("key-z-token", scramble("set"));
            fd.append("key", getKey(vdata));

            function getKey(data) {
                return Object.keys(data);
            }
            return await axios.post(backend != 'laravel' ? urlBASE : url + '/api/set/data', fd).then(res => {
                return res.data;
            }).catch(err => {
                console.log('table not found')
                errCount++;
                if (errCount < 2) {
                    this.set(vdata)
                }
            })
        }
        async get(vdata, vdata2, auths) {
            let fd = new FormData();
            // vdata.scramble = scrambles
            // table
            fd.append("t-bl", scramble(table));
            fd.append("backend", scramble(backend));
            // auth
            let setoken = await verifyEnc()
            fd.append("api-token", scramble(apitoken));
            fd.append('se-token', setoken);

            if (auths) {
                auth = auths
            }
            if (auth) {
                fd.append('header', localStorage.getItem('auth._token.local'))
                fd.append('key-h', localStorage.getItem('auth._token.local'));
            }
            fd.append('5e19fb19a0aa66a0', scramble(auth.toString()))
            // select
            if (scrambles) {
                fd.append('scramble', scrambles);
                // SELECT
                fd.append("sd28(#092/sd", scramble(vdata));
                fd.append("23*(kdj", scramble(vdata2));
            } else {
                fd.append("sd28(#092/sd", vdata);
                fd.append("23*(kdj", vdata2);
            }
            if (id.length != "") {
                fd.append("id", `${id}`);
            }
            // type
            fd.append("key-z-token", scramble("get"));
            return await axios.post(backend != 'laravel' ? urlBASE : url + '/api/get/data', fd).then(res => {
                return res.data;
            }).catch(err => {
                console.log('table not found')
            })
        }
        async delete(auths, vdata) {
            let fd = new FormData();
            if (scrambles) {
                fd.append('scramble', scrambles);
            }
            if (auths) {
                auth = auths
            }
            if (auth) {
                fd.append('header', localStorage.getItem('auth._token.local'))
                fd.append('key-h', localStorage.getItem('auth._token.local'));
            }
            // table
            fd.append("t-bl", scramble(table));
            // auth
            let setoken = await verifyEnc()
            fd.append("api-token", scramble(apitoken));
            fd.append('se-token', setoken);
            fd.append('5e19fb19a0aa66a0', scramble(auth.toString()))
            fd.append("backend", scramble(backend));
            // auth
            fd.append("sd28(#092/sd", vdata);
            if (id.length != "") {
                fd.append("id", `${id}`);
            }
            // type
            fd.append("key-z-token", scramble("delete"));
            return await axios.post(backend != 'laravel' ? urlBASE : url + '/api/delete/data', fd).then(res => {
                return res.data;
            }).catch(err => {
                console.log('Data tidak ditemukan')
            })
        }
        async select(vdata, auths) {
            let fd = new FormData();
            let setoken = await verifyEnc()
            fd.append('se-token', setoken);
            if (auths) {
                auth = auths
            }
            if (auth) {
                fd.append('header', localStorage.getItem('auth._token.local'))
                fd.append('key-h', localStorage.getItem('auth._token.local'));
            }
            // table
            fd.append("t-bl", scramble(table));
            // auth
            fd.append("api-token", scramble(apitoken));
            fd.append('5e19fb19a0aa66a0', scramble(auth.toString()))
            fd.append("backend", scramble(backend));
            if (scrambles) {
                fd.append('scramble', scrambles);
                // SELECT
                fd.append("sd28(#092/sd", scramble(vdata));
            } else {
                fd.append("sd28(#092/sd", vdata);
            }
            if (id.length != "") {
                fd.append("id", `${id}`);
            }
            // type
            fd.append("key-z-token", scramble('select'));
            return await axios.post(backend != 'laravel' ? urlBASE : url + '/api/select/data', fd).then(res => {
                return res.data;
            }).catch(err => {
                console.log('table not found')
            })
        }
        async upload(file) {
            let that = this;
            let el = file; // berikan id pada input file
            try {
                let file = el.files[0];
                let fd = new FormData();
                let setoken = await verifyEnc()
                fd.append("api-token", scramble(apitoken));
                fd.append('se-token', setoken);
                fd.append("file", file);
                fd.append('data', `select * from tbuser`) //database setting di server
                fd.append('secret', `dsdxxoi4#$(*#sdsaaada@#`) //database setting di server
                if (auth) {
                    fd.append('header', localStorage.getItem('auth._token.local'))
                    fd.append('key-h', localStorage.getItem('auth._token.local'));
                }
                // return await axios.post(urlupload, fd).then(res => {
                return await axios.post(backend != 'laravel' ? urlupload : url + '/api/upload/data', fd).then(res => {
                    let urlnya = backend != 'laravel' ? url + res.data : url + '/storage/' + res.data
                    return urlnya
                })
            } catch (error) {
                console.log(error);
            }
        }
    }

    async function verifyEnc() {
        // authentication dengan encryption
        var CryptoJSAesJson = {
            stringify: function (cipherParams) {
                var j = {
                    ct: cipherParams.ciphertext.toString(CryptoJS.enc.Base64)
                };
                if (cipherParams.iv) j.iv = cipherParams.iv.toString();
                if (cipherParams.salt) j.s = cipherParams.salt.toString();
                return JSON.stringify(j);
            },
            parse: function (jsonStr) {
                var j = JSON.parse(jsonStr);
                var cipherParams = CryptoJS.lib.CipherParams.create({
                    ciphertext: CryptoJS.enc.Base64.parse(j.ct)
                });
                if (j.iv) cipherParams.iv = CryptoJS.enc.Hex.parse(j.iv)
                if (j.s) cipherParams.salt = CryptoJS.enc.Hex.parse(j.s)
                return cipherParams;
            }
        }
        // let sec = await axios.post(url+'/auth/108starsofdestiny.php',fd)

        let sec = await axios.post(backend != 'laravel' ? url + '/auth/108starsofdestiny.php' : url + '/api/get/jam')
        let fd = new FormData()
        var encrypted = CryptoJS.AES.encrypt(JSON.stringify(apitoken), sec.data.toString(), {
            format: CryptoJSAesJson
        }).toString();
        return encrypted
    }

    function scramble(teks) {
        let char = "";
        let hasil = "";
        for (var i = 0; i < teks.length; i++) {
            char = "";
            char = teks.charAt(i);
            if (char == "a") {
                char = char.replace("a", "x");
            } else if (char == "b") {
                char = char.replace("b", "v");
            } else if (char == "c") {
                char = char.replace("c", "u");
            } else if (char == "d") {
                char = char.replace("d", "w");
            } else if (char == "e") {
                char = char.replace("e", "y");
            } else if (char == "f") {
                char = char.replace("f", "z");
            } else if (char == "g") {
                char = char.replace("g", "t");
            } else if (char == "h") {
                char = char.replace("h", "s");
            } else if (char == "i") {
                char = char.replace("i", "r");
            } else if (char == "j") {
                char = char.replace("j", "q");
            } else if (char == "k") {
                char = char.replace("k", "p");
            } else if (char == "l") {
                char = char.replace("l", "o");
            } else if (char == "m") {
                char = char.replace("m", "n");
            } else if (char == "z") {
                char = char.replace("z", "f");
            } else if (char == "y") {
                char = char.replace("y", "e");
            } else if (char == "x") {
                char = char.replace("x", "a");
            } else if (char == "w") {
                char = char.replace("w", "d");
            } else if (char == "v") {
                char = char.replace("v", "b");
            } else if (char == "u") {
                char = char.replace("u", "c");
            } else if (char == "t") {
                char = char.replace("t", "g");
            } else if (char == "s") {
                char = char.replace("s", "h");
            } else if (char == "r") {
                char = char.replace("r", "i");
            } else if (char == "q") {
                char = char.replace("q", "j");
            } else if (char == "p") {
                char = char.replace("p", "k");
            } else if (char == "o") {
                char = char.replace("o", "l");
            } else if (char == "n") {
                char = char.replace("n", "m");
            } else if (char == "1") {
                char = char.replace("1", "0");
            } else if (char == "2") {
                char = char.replace("2", "8");
            } else if (char == "3") {
                char = char.replace("3", "9");
            } else if (char == "4") {
                char = char.replace("4", "7");
            } else if (char == "5") {
                char = char.replace("5", "6");
            } else if (char == "0") {
                char = char.replace("0", "1");
            } else if (char == "8") {
                char = char.replace("8", "2");
            } else if (char == "9") {
                char = char.replace("9", "3");
            } else if (char == "7") {
                char = char.replace("7", "4");
            } else if (char == "6") {
                char = char.replace("6", "5");
            } else if (char == " ") {
                char = char.replace(" ", "_");
            } else if (char == "_") {
                char = char.replace("_", " ");
            } else if (char == "*") {
                char = char.replace("*", "/");
            } else if (char == "/") {
                char = char.replace("/", "*");
            } else if (char == ",") {
                char = char.replace(",", "^");
            } else if (char == "^") {
                char = char.replace("^", ",");
            }
            hasil = hasil + char;
        }
        return hasil;
    }
    return {
        hello: 'world'
    }
})()