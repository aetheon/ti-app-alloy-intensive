function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_831";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_831 = Ti.UI.createView({
        id: "widget_831"
    });
    $.__views.widget_831 && $.addTopLevelView($.__views.widget_831);
    $.__views.__alloyId21190 = Ti.UI.createView({
        id: "__alloyId21190"
    });
    $.__views.widget_831.add($.__views.__alloyId21190);
    $.__views.__alloyId21191 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21191"
    });
    $.__views.__alloyId21190.add($.__views.__alloyId21191);
    $.__views.__alloyId21192 = Ti.UI.createView({
        id: "__alloyId21192"
    });
    $.__views.__alloyId21192 && $.addTopLevelView($.__views.__alloyId21192);
    $.__views.__alloyId21193 = Ti.UI.createView({
        id: "__alloyId21193"
    });
    $.__views.__alloyId21192.add($.__views.__alloyId21193);
    $.__views.__alloyId21194 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21194"
    });
    $.__views.__alloyId21193.add($.__views.__alloyId21194);
    $.__views.__alloyId21195 = Ti.UI.createView({
        id: "__alloyId21195"
    });
    $.__views.__alloyId21195 && $.addTopLevelView($.__views.__alloyId21195);
    $.__views.__alloyId21196 = Ti.UI.createView({
        id: "__alloyId21196"
    });
    $.__views.__alloyId21195.add($.__views.__alloyId21196);
    $.__views.__alloyId21197 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21197"
    });
    $.__views.__alloyId21196.add($.__views.__alloyId21197);
    $.__views.__alloyId21198 = Ti.UI.createView({
        id: "__alloyId21198"
    });
    $.__views.__alloyId21198 && $.addTopLevelView($.__views.__alloyId21198);
    $.__views.__alloyId21199 = Ti.UI.createView({
        id: "__alloyId21199"
    });
    $.__views.__alloyId21198.add($.__views.__alloyId21199);
    $.__views.__alloyId21200 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21200"
    });
    $.__views.__alloyId21199.add($.__views.__alloyId21200);
    $.__views.__alloyId21201 = Ti.UI.createView({
        id: "__alloyId21201"
    });
    $.__views.__alloyId21201 && $.addTopLevelView($.__views.__alloyId21201);
    $.__views.__alloyId21202 = Ti.UI.createView({
        id: "__alloyId21202"
    });
    $.__views.__alloyId21201.add($.__views.__alloyId21202);
    $.__views.__alloyId21203 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21203"
    });
    $.__views.__alloyId21202.add($.__views.__alloyId21203);
    $.__views.__alloyId21204 = Ti.UI.createView({
        id: "__alloyId21204"
    });
    $.__views.__alloyId21204 && $.addTopLevelView($.__views.__alloyId21204);
    $.__views.__alloyId21205 = Ti.UI.createView({
        id: "__alloyId21205"
    });
    $.__views.__alloyId21204.add($.__views.__alloyId21205);
    $.__views.__alloyId21206 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21206"
    });
    $.__views.__alloyId21205.add($.__views.__alloyId21206);
    $.__views.__alloyId21207 = Ti.UI.createView({
        id: "__alloyId21207"
    });
    $.__views.__alloyId21207 && $.addTopLevelView($.__views.__alloyId21207);
    $.__views.__alloyId21208 = Ti.UI.createView({
        id: "__alloyId21208"
    });
    $.__views.__alloyId21207.add($.__views.__alloyId21208);
    $.__views.__alloyId21209 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21209"
    });
    $.__views.__alloyId21208.add($.__views.__alloyId21209);
    $.__views.__alloyId21210 = Ti.UI.createView({
        id: "__alloyId21210"
    });
    $.__views.__alloyId21210 && $.addTopLevelView($.__views.__alloyId21210);
    $.__views.__alloyId21211 = Ti.UI.createView({
        id: "__alloyId21211"
    });
    $.__views.__alloyId21210.add($.__views.__alloyId21211);
    $.__views.__alloyId21212 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21212"
    });
    $.__views.__alloyId21211.add($.__views.__alloyId21212);
    $.__views.__alloyId21213 = Ti.UI.createView({
        id: "__alloyId21213"
    });
    $.__views.__alloyId21213 && $.addTopLevelView($.__views.__alloyId21213);
    $.__views.__alloyId21214 = Ti.UI.createView({
        id: "__alloyId21214"
    });
    $.__views.__alloyId21213.add($.__views.__alloyId21214);
    $.__views.__alloyId21215 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21215"
    });
    $.__views.__alloyId21214.add($.__views.__alloyId21215);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;