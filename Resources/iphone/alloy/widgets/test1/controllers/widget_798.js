function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_798";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_798 = Ti.UI.createView({
        id: "widget_798"
    });
    $.__views.widget_798 && $.addTopLevelView($.__views.widget_798);
    $.__views.__alloyId20202 = Ti.UI.createView({
        id: "__alloyId20202"
    });
    $.__views.widget_798.add($.__views.__alloyId20202);
    $.__views.__alloyId20203 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20203"
    });
    $.__views.__alloyId20202.add($.__views.__alloyId20203);
    $.__views.__alloyId20204 = Ti.UI.createView({
        id: "__alloyId20204"
    });
    $.__views.__alloyId20204 && $.addTopLevelView($.__views.__alloyId20204);
    $.__views.__alloyId20205 = Ti.UI.createView({
        id: "__alloyId20205"
    });
    $.__views.__alloyId20204.add($.__views.__alloyId20205);
    $.__views.__alloyId20206 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20206"
    });
    $.__views.__alloyId20205.add($.__views.__alloyId20206);
    $.__views.__alloyId20207 = Ti.UI.createView({
        id: "__alloyId20207"
    });
    $.__views.__alloyId20207 && $.addTopLevelView($.__views.__alloyId20207);
    $.__views.__alloyId20208 = Ti.UI.createView({
        id: "__alloyId20208"
    });
    $.__views.__alloyId20207.add($.__views.__alloyId20208);
    $.__views.__alloyId20209 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20209"
    });
    $.__views.__alloyId20208.add($.__views.__alloyId20209);
    $.__views.__alloyId20210 = Ti.UI.createView({
        id: "__alloyId20210"
    });
    $.__views.__alloyId20210 && $.addTopLevelView($.__views.__alloyId20210);
    $.__views.__alloyId20211 = Ti.UI.createView({
        id: "__alloyId20211"
    });
    $.__views.__alloyId20210.add($.__views.__alloyId20211);
    $.__views.__alloyId20212 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20212"
    });
    $.__views.__alloyId20211.add($.__views.__alloyId20212);
    $.__views.__alloyId20213 = Ti.UI.createView({
        id: "__alloyId20213"
    });
    $.__views.__alloyId20213 && $.addTopLevelView($.__views.__alloyId20213);
    $.__views.__alloyId20214 = Ti.UI.createView({
        id: "__alloyId20214"
    });
    $.__views.__alloyId20213.add($.__views.__alloyId20214);
    $.__views.__alloyId20215 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20215"
    });
    $.__views.__alloyId20214.add($.__views.__alloyId20215);
    $.__views.__alloyId20216 = Ti.UI.createView({
        id: "__alloyId20216"
    });
    $.__views.__alloyId20216 && $.addTopLevelView($.__views.__alloyId20216);
    $.__views.__alloyId20217 = Ti.UI.createView({
        id: "__alloyId20217"
    });
    $.__views.__alloyId20216.add($.__views.__alloyId20217);
    $.__views.__alloyId20218 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20218"
    });
    $.__views.__alloyId20217.add($.__views.__alloyId20218);
    $.__views.__alloyId20219 = Ti.UI.createView({
        id: "__alloyId20219"
    });
    $.__views.__alloyId20219 && $.addTopLevelView($.__views.__alloyId20219);
    $.__views.__alloyId20220 = Ti.UI.createView({
        id: "__alloyId20220"
    });
    $.__views.__alloyId20219.add($.__views.__alloyId20220);
    $.__views.__alloyId20221 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20221"
    });
    $.__views.__alloyId20220.add($.__views.__alloyId20221);
    $.__views.__alloyId20222 = Ti.UI.createView({
        id: "__alloyId20222"
    });
    $.__views.__alloyId20222 && $.addTopLevelView($.__views.__alloyId20222);
    $.__views.__alloyId20223 = Ti.UI.createView({
        id: "__alloyId20223"
    });
    $.__views.__alloyId20222.add($.__views.__alloyId20223);
    $.__views.__alloyId20224 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20224"
    });
    $.__views.__alloyId20223.add($.__views.__alloyId20224);
    $.__views.__alloyId20225 = Ti.UI.createView({
        id: "__alloyId20225"
    });
    $.__views.__alloyId20225 && $.addTopLevelView($.__views.__alloyId20225);
    $.__views.__alloyId20226 = Ti.UI.createView({
        id: "__alloyId20226"
    });
    $.__views.__alloyId20225.add($.__views.__alloyId20226);
    $.__views.__alloyId20227 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20227"
    });
    $.__views.__alloyId20226.add($.__views.__alloyId20227);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;