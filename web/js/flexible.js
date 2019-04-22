(function(d, f) {
    var s = d.document;
    var c = s.documentElement;
    var m = s.querySelector('meta[name="viewport"]');
    var n = s.querySelector('meta[name="flexible"]');
    var a = 0;
    var r = 0;
    var b = 0;
    var l;
    var e = f.flexible || (f.flexible = {});
    if (n) {
        var j = n.getAttribute("content");
        if (j) {
            var q = j.match(/initial\-dpr=([\d\.]+)/);
            var h = j.match(/maximum\-dpr=([\d\.]+)/);
            if (q) {
                a = parseFloat(q[1]);
                r = parseFloat((1 / a).toFixed(2))
            }
            if (h) {
                a = parseFloat(h[1]);
                r = parseFloat((1 / a).toFixed(2))
            }
        }
    }
    //并
    /*
         var cvs = document.querySelector("#cvs");
        var cxt = cvs.getContext("2d");
        cxt.translate(450, 400);

        var data = [{
            val: 5,
            color: "green",
            text: "无非是丰"
        }, {
            val: 15,
            color: "orange",
            text: "和对方付"
        }, {
            val: 10,
            color: "#F00",
            text: "东方闪电"
        }, {
            val: 20,
            color: "#F0F",
            text: "凤飞飞的"
        }, {
            val: 30,
            color: "#0FF",
            text: "对对对"
        }];
        var sum = 0;
        var deg = Math.PI / 180;
        var start = 270;
        data.forEach((item, index) => {
            sum += item.val

        })

        function draw() {
            data.forEach((item, index) => {
                var scale = item.val / sum
                var angle = scale * 360;
                var end = start + angle;
                drawArc({
                    x: 0,
                    y: 0,
                    r: 200,
                    s: start * deg,
                    e: end * deg,
                    isFill: true,
                    color: item.color
                })
                var xDeg = start + (angle / 2)
                console.log((xDeg * deg) * 200)
                drawLine({
                    x1: Math.cos(xDeg * deg) * 200,
                    y1: Math.sin(xDeg * deg) * 200,
                    x2: Math.cos(xDeg * deg) * 260,
                    y2: Math.sin(xDeg * deg) * 260,
                    x3: Math.cos(xDeg * deg) * 260 > 0 ? Math.cos(xDeg * deg) * 260 + 100 : Math.cos(xDeg * deg) * 260 - 100,
                    y3: Math.sin(xDeg * deg) * 260,
                    color: item.color
                })
                drawTexe({
                    text: item.text,
                    color: item.color,
                    x: Math.cos(xDeg * deg) * 260 > 0 ? Math.cos(xDeg * deg) * 260 + 20 : Math.cos(xDeg * deg) * 260 - 20,
                    y: Math.sin(xDeg * deg) * 260 - 10,
                    baseline: 'bottom',
                })
                var jx = 20;
                drawRect({
                    x: -420,
                    y: -400 + 20 + 20 * index + jx * index,
                    width: 80,
                    height: 30,
                    color: item.color,
                })
                drawTexe({
                    text: item.text + ":" + Math.round(scale * 100) + "%",
                    x: -250,
                    y: -400 + 20 + 20 * index + jx * index,
                    color: item.color,
                    baseline: 'top',
                })
                start = end
            })
            cxt.beginPath();
            cxt.strokeStyle = "#999"
            cxt.arc(0, 0, 220, 0, 360);
            cxt.stroke();
        }
        draw()

        function drawArc(obj) {
            cxt.beginPath();
            cxt.moveTo(0, 0);
            cxt.arc(obj.x, obj.y, obj.r, obj.s, obj.e);
            if (obj.isFill) {
                cxt.fillStyle = obj.color;
                cxt.fill();
            } else {
                cxt.stroke();
            }

        }

        function drawLine(obj) {
            cxt.beginPath();
            cxt.strokeStyle = obj.color;
            cxt.moveTo(obj.x1, obj.y1);
            cxt.lineTo(obj.x2, obj.y2);
            cxt.lineTo(obj.x3, obj.y3);
            cxt.stroke();
        }

        function drawTexe(obj) {
            cxt.beginPath();
            fillStyle = obj.color;

            if (obj.baseline) {
                cxt.textBaseline = obj.baseline;
                cxt.font = "10px normal";
            } else {
                cxt.textBaseline = " bottom";
                cxt.font = "20px normal";
            }
            cxt.textAlign = obj.x > 0 ? "left" : "right";
            cxt.fillText(obj.text, obj.x, obj.y);

        }

        function drawRect(obj) {
            cxt.beginPath();
            cxt.fillStyle = obj.color;
            cxt.fillRect(obj.x, obj.y, obj.width, obj.height)
        }
    */
    if (!a && !r) {
        var p = d.navigator.appVersion.match(/android/gi);
        var o = d.navigator.appVersion.match(/iphone/gi);
        var k = d.devicePixelRatio;
        if (k >= 3 && (!a || a >= 3)) { a = 3 } else { if (k >= 2 && (!a || a >= 2)) { a = 2 } else { a = 1 } }
        r = 1 / a
    }
    c.setAttribute("data-dpr", a);
    m = s.createElement("meta");
    m.setAttribute("name", "viewport");
    m.setAttribute("content", "width=device-width, initial-scale=" + r + ", maximum-scale=" + r + ", minimum-scale=" + r + ", user-scalable=no");
    if (c.firstElementChild) { c.firstElementChild.appendChild(m) } else {
        var g = s.createElement("div");
        g.appendChild(m);
        s.write(g.innerHTML)
    }
    //柱
    /*
        var cvs = document.querySelector("#cvs");
        var w = document.documentElement.clientWidth;
        cvs.width = w;
        var data = {
            "部门A": [{
                color: "red",
                val: [11, 13, 15, 17, 19, 17, 24, 13]
            }],
            "部门b": [{
                    color: "green",
                    val: [5, 14, 9, 25, 18, 22, 26, 17]
                }]
                ///data["部门A"][0].val
        }
        var cxt = cvs.getContext("2d");
        var max = 30,
            kd = 5,
            xData = ['1', '2', '3', '4', '5', '6', '7', '8'],
            pl = 50,
            pr = 20,
            //整个图宽
            cvsW = cvs.width - pl - pr,
            //整个图高
            cvsH = cvs.height - pl - pr,
            //行
            rowNum = max / kd,
            //行高
            row = cvsH / rowNum,
            //列
            cellNum = xData.length,
            //列宽
            cell = cvsW / cellNum;
        cxt.translate(pl, cvs.height - pr);
        for (var i = 0; i <= rowNum; i++) {
            cxt.beginPath();
            cxt.moveTo(0, -i * row);
            cxt.lineTo(cvsW, -i * row);
            cxt.stroke();

            cxt.beginPath();
            cxt.moveTo(0, -i * row);
            cxt.lineTo(-10, -i * row);
            cxt.stroke();

            cxt.beginPath();
            cxt.textAlign = "center";
            cxt.textBaseline = 'middle';
            cxt.fillText(i * 5, -20, -i * row);
        }
        for (var i = 0; i <= cellNum; i++) {
            cxt.beginPath();
            cxt.moveTo(i * cell, 0);
            cxt.lineTo(i * cell, -cvsH);
            cxt.stroke()


            cxt.beginPath();
            cxt.textAlign = "center";
            if (i != cellNum) {
                cxt.fillText(xData[i] + '月', i * cell + cell / 2, 10);
            }
        }

        function potr() {
            for (var i = 0; i < data["部门A"][0].val.length; i++) {
                var step = cell / 100;
                cxt.lineWidth = 40 * step;
                cxt.strokeStyle = data["部门A"][0].color;
                var lr = 5 * step;
                var md = 10 * step;
                var x = i * cell + 25 * step;
                cxt.beginPath();
                cxt.moveTo(x, 0);
                cxt.lineTo(x, -data["部门A"][0].val[i] / max * cvsH);
                cxt.stroke();
            }
            for (var i = 0; i < data["部门b"][0].val.length; i++) {
                var step = cell / 100;
                cxt.lineWidth = 40 * step;
                cxt.strokeStyle = data["部门b"][0].color;
                var lr = 5 * step;
                var md = 10 * step;
                var x = i * cell + 75 * step;
                cxt.beginPath();
                cxt.moveTo(x, 0);
                cxt.lineTo(x, -data["部门b"][0].val[i] / max * cvsH);
                cxt.stroke();
            }
            console.log(data["部门b"][0].val)
        }
        potr()
    */
    function i() {
        var u = c.getBoundingClientRect().width;
        if (u / a > 540) { u = 540 * a }
        var w = u / 10;
        c.style.fontSize = w + "px";
        e.rem = d.rem = w;
        var v = parseFloat(c.style.fontSize),
            t = parseFloat(window.getComputedStyle(c).getPropertyValue("font-size"));
        console.log("flexible.refreshRem: fontSize && finalFontSize => ", v, t);
        if (v !== t) {
            c.style.fontSize = v * (v / t) + "px";
            console.log("flexible.refreshRem.fixed: fontSize  => ", c.style.fontSize)
        }
    }
    d.addEventListener("resize", function() {
        clearTimeout(l);
        l = setTimeout(i, 300)
    }, false);
    d.addEventListener("pageshow", function(t) {
        if (t.persisted) {
            clearTimeout(l);
            l = setTimeout(i, 300)
        }
    }, false);
    if (s.readyState === "complete") { s.body.style.fontSize = 12 * a + "px" } else { s.addEventListener("DOMContentLoaded", function(t) { s.body.style.fontSize = 12 * a + "px" }, false) }
    i();
    e.dpr = d.dpr = a;
    e.refreshRem = i;
    e.rem2px = function(u) { var t = parseFloat(u) * this.rem; if (typeof u === "string" && u.match(/rem$/)) { t += "px" } return t };
    e.px2rem = function(u) { var t = parseFloat(u) / this.rem; if (typeof u === "string" && u.match(/px$/)) { t += "rem" } return t }
})(window, window["lib"] || (window["lib"] = {}));
/*divs.forEach(item => {
            item.addEventListener("dragstart", function() {
                start = this
            })
            item.addEventListener("dragenter", function() {
                var div1 = document.createElement("div")
                div1.innerHTML = this.innerHTML;
                shou.insertBefore(div1, shou.lastChild)
                start = this;

            })
        })
        laji.addEventListener("drop", function() {
            start.remove()
        })
        document.addEventListener("dragover", function(e) {
            e.preventDefault()
        }) */