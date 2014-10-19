function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_59";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_59 = Ti.UI.createView({
        id: "widget_59"
    });
    $.__views.widget_59 && $.addTopLevelView($.__views.widget_59);
    $.__views.__alloyId14196 = Ti.UI.createView({
        id: "__alloyId14196"
    });
    $.__views.widget_59.add($.__views.__alloyId14196);
    $.__views.__alloyId14197 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14197"
    });
    $.__views.__alloyId14196.add($.__views.__alloyId14197);
    $.__views.__alloyId14198 = Ti.UI.createView({
        id: "__alloyId14198"
    });
    $.__views.__alloyId14198 && $.addTopLevelView($.__views.__alloyId14198);
    $.__views.__alloyId14199 = Ti.UI.createView({
        id: "__alloyId14199"
    });
    $.__views.__alloyId14198.add($.__views.__alloyId14199);
    $.__views.__alloyId14200 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14200"
    });
    $.__views.__alloyId14199.add($.__views.__alloyId14200);
    $.__views.__alloyId14201 = Ti.UI.createView({
        id: "__alloyId14201"
    });
    $.__views.__alloyId14201 && $.addTopLevelView($.__views.__alloyId14201);
    $.__views.__alloyId14202 = Ti.UI.createView({
        id: "__alloyId14202"
    });
    $.__views.__alloyId14201.add($.__views.__alloyId14202);
    $.__views.__alloyId14203 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14203"
    });
    $.__views.__alloyId14202.add($.__views.__alloyId14203);
    $.__views.__alloyId14204 = Ti.UI.createView({
        id: "__alloyId14204"
    });
    $.__views.__alloyId14204 && $.addTopLevelView($.__views.__alloyId14204);
    $.__views.__alloyId14205 = Ti.UI.createView({
        id: "__alloyId14205"
    });
    $.__views.__alloyId14204.add($.__views.__alloyId14205);
    $.__views.__alloyId14206 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14206"
    });
    $.__views.__alloyId14205.add($.__views.__alloyId14206);
    $.__views.__alloyId14207 = Ti.UI.createView({
        id: "__alloyId14207"
    });
    $.__views.__alloyId14207 && $.addTopLevelView($.__views.__alloyId14207);
    $.__views.__alloyId14208 = Ti.UI.createView({
        id: "__alloyId14208"
    });
    $.__views.__alloyId14207.add($.__views.__alloyId14208);
    $.__views.__alloyId14209 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14209"
    });
    $.__views.__alloyId14208.add($.__views.__alloyId14209);
    $.__views.__alloyId14210 = Ti.UI.createView({
        id: "__alloyId14210"
    });
    $.__views.__alloyId14210 && $.addTopLevelView($.__views.__alloyId14210);
    $.__views.__alloyId14211 = Ti.UI.createView({
        id: "__alloyId14211"
    });
    $.__views.__alloyId14210.add($.__views.__alloyId14211);
    $.__views.__alloyId14212 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14212"
    });
    $.__views.__alloyId14211.add($.__views.__alloyId14212);
    $.__views.__alloyId14213 = Ti.UI.createView({
        id: "__alloyId14213"
    });
    $.__views.__alloyId14213 && $.addTopLevelView($.__views.__alloyId14213);
    $.__views.__alloyId14214 = Ti.UI.createView({
        id: "__alloyId14214"
    });
    $.__views.__alloyId14213.add($.__views.__alloyId14214);
    $.__views.__alloyId14215 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14215"
    });
    $.__views.__alloyId14214.add($.__views.__alloyId14215);
    $.__views.__alloyId14216 = Ti.UI.createView({
        id: "__alloyId14216"
    });
    $.__views.__alloyId14216 && $.addTopLevelView($.__views.__alloyId14216);
    $.__views.__alloyId14217 = Ti.UI.createView({
        id: "__alloyId14217"
    });
    $.__views.__alloyId14216.add($.__views.__alloyId14217);
    $.__views.__alloyId14218 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14218"
    });
    $.__views.__alloyId14217.add($.__views.__alloyId14218);
    $.__views.__alloyId14219 = Ti.UI.createView({
        id: "__alloyId14219"
    });
    $.__views.__alloyId14219 && $.addTopLevelView($.__views.__alloyId14219);
    $.__views.__alloyId14220 = Ti.UI.createView({
        id: "__alloyId14220"
    });
    $.__views.__alloyId14219.add($.__views.__alloyId14220);
    $.__views.__alloyId14221 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14221"
    });
    $.__views.__alloyId14220.add($.__views.__alloyId14221);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;