function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_445";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_445 = Ti.UI.createView({
        id: "widget_445"
    });
    $.__views.widget_445 && $.addTopLevelView($.__views.widget_445);
    $.__views.__alloyId10036 = Ti.UI.createView({
        id: "__alloyId10036"
    });
    $.__views.widget_445.add($.__views.__alloyId10036);
    $.__views.__alloyId10037 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10037"
    });
    $.__views.__alloyId10036.add($.__views.__alloyId10037);
    $.__views.__alloyId10038 = Ti.UI.createView({
        id: "__alloyId10038"
    });
    $.__views.__alloyId10038 && $.addTopLevelView($.__views.__alloyId10038);
    $.__views.__alloyId10039 = Ti.UI.createView({
        id: "__alloyId10039"
    });
    $.__views.__alloyId10038.add($.__views.__alloyId10039);
    $.__views.__alloyId10040 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10040"
    });
    $.__views.__alloyId10039.add($.__views.__alloyId10040);
    $.__views.__alloyId10041 = Ti.UI.createView({
        id: "__alloyId10041"
    });
    $.__views.__alloyId10041 && $.addTopLevelView($.__views.__alloyId10041);
    $.__views.__alloyId10042 = Ti.UI.createView({
        id: "__alloyId10042"
    });
    $.__views.__alloyId10041.add($.__views.__alloyId10042);
    $.__views.__alloyId10043 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10043"
    });
    $.__views.__alloyId10042.add($.__views.__alloyId10043);
    $.__views.__alloyId10044 = Ti.UI.createView({
        id: "__alloyId10044"
    });
    $.__views.__alloyId10044 && $.addTopLevelView($.__views.__alloyId10044);
    $.__views.__alloyId10045 = Ti.UI.createView({
        id: "__alloyId10045"
    });
    $.__views.__alloyId10044.add($.__views.__alloyId10045);
    $.__views.__alloyId10046 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10046"
    });
    $.__views.__alloyId10045.add($.__views.__alloyId10046);
    $.__views.__alloyId10047 = Ti.UI.createView({
        id: "__alloyId10047"
    });
    $.__views.__alloyId10047 && $.addTopLevelView($.__views.__alloyId10047);
    $.__views.__alloyId10048 = Ti.UI.createView({
        id: "__alloyId10048"
    });
    $.__views.__alloyId10047.add($.__views.__alloyId10048);
    $.__views.__alloyId10049 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10049"
    });
    $.__views.__alloyId10048.add($.__views.__alloyId10049);
    $.__views.__alloyId10050 = Ti.UI.createView({
        id: "__alloyId10050"
    });
    $.__views.__alloyId10050 && $.addTopLevelView($.__views.__alloyId10050);
    $.__views.__alloyId10051 = Ti.UI.createView({
        id: "__alloyId10051"
    });
    $.__views.__alloyId10050.add($.__views.__alloyId10051);
    $.__views.__alloyId10052 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10052"
    });
    $.__views.__alloyId10051.add($.__views.__alloyId10052);
    $.__views.__alloyId10053 = Ti.UI.createView({
        id: "__alloyId10053"
    });
    $.__views.__alloyId10053 && $.addTopLevelView($.__views.__alloyId10053);
    $.__views.__alloyId10054 = Ti.UI.createView({
        id: "__alloyId10054"
    });
    $.__views.__alloyId10053.add($.__views.__alloyId10054);
    $.__views.__alloyId10055 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10055"
    });
    $.__views.__alloyId10054.add($.__views.__alloyId10055);
    $.__views.__alloyId10056 = Ti.UI.createView({
        id: "__alloyId10056"
    });
    $.__views.__alloyId10056 && $.addTopLevelView($.__views.__alloyId10056);
    $.__views.__alloyId10057 = Ti.UI.createView({
        id: "__alloyId10057"
    });
    $.__views.__alloyId10056.add($.__views.__alloyId10057);
    $.__views.__alloyId10058 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10058"
    });
    $.__views.__alloyId10057.add($.__views.__alloyId10058);
    $.__views.__alloyId10059 = Ti.UI.createView({
        id: "__alloyId10059"
    });
    $.__views.__alloyId10059 && $.addTopLevelView($.__views.__alloyId10059);
    $.__views.__alloyId10060 = Ti.UI.createView({
        id: "__alloyId10060"
    });
    $.__views.__alloyId10059.add($.__views.__alloyId10060);
    $.__views.__alloyId10061 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10061"
    });
    $.__views.__alloyId10060.add($.__views.__alloyId10061);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;