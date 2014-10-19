function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_444";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_444 = Ti.UI.createView({
        id: "widget_444"
    });
    $.__views.widget_444 && $.addTopLevelView($.__views.widget_444);
    $.__views.__alloyId10010 = Ti.UI.createView({
        id: "__alloyId10010"
    });
    $.__views.widget_444.add($.__views.__alloyId10010);
    $.__views.__alloyId10011 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10011"
    });
    $.__views.__alloyId10010.add($.__views.__alloyId10011);
    $.__views.__alloyId10012 = Ti.UI.createView({
        id: "__alloyId10012"
    });
    $.__views.__alloyId10012 && $.addTopLevelView($.__views.__alloyId10012);
    $.__views.__alloyId10013 = Ti.UI.createView({
        id: "__alloyId10013"
    });
    $.__views.__alloyId10012.add($.__views.__alloyId10013);
    $.__views.__alloyId10014 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10014"
    });
    $.__views.__alloyId10013.add($.__views.__alloyId10014);
    $.__views.__alloyId10015 = Ti.UI.createView({
        id: "__alloyId10015"
    });
    $.__views.__alloyId10015 && $.addTopLevelView($.__views.__alloyId10015);
    $.__views.__alloyId10016 = Ti.UI.createView({
        id: "__alloyId10016"
    });
    $.__views.__alloyId10015.add($.__views.__alloyId10016);
    $.__views.__alloyId10017 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10017"
    });
    $.__views.__alloyId10016.add($.__views.__alloyId10017);
    $.__views.__alloyId10018 = Ti.UI.createView({
        id: "__alloyId10018"
    });
    $.__views.__alloyId10018 && $.addTopLevelView($.__views.__alloyId10018);
    $.__views.__alloyId10019 = Ti.UI.createView({
        id: "__alloyId10019"
    });
    $.__views.__alloyId10018.add($.__views.__alloyId10019);
    $.__views.__alloyId10020 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10020"
    });
    $.__views.__alloyId10019.add($.__views.__alloyId10020);
    $.__views.__alloyId10021 = Ti.UI.createView({
        id: "__alloyId10021"
    });
    $.__views.__alloyId10021 && $.addTopLevelView($.__views.__alloyId10021);
    $.__views.__alloyId10022 = Ti.UI.createView({
        id: "__alloyId10022"
    });
    $.__views.__alloyId10021.add($.__views.__alloyId10022);
    $.__views.__alloyId10023 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10023"
    });
    $.__views.__alloyId10022.add($.__views.__alloyId10023);
    $.__views.__alloyId10024 = Ti.UI.createView({
        id: "__alloyId10024"
    });
    $.__views.__alloyId10024 && $.addTopLevelView($.__views.__alloyId10024);
    $.__views.__alloyId10025 = Ti.UI.createView({
        id: "__alloyId10025"
    });
    $.__views.__alloyId10024.add($.__views.__alloyId10025);
    $.__views.__alloyId10026 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10026"
    });
    $.__views.__alloyId10025.add($.__views.__alloyId10026);
    $.__views.__alloyId10027 = Ti.UI.createView({
        id: "__alloyId10027"
    });
    $.__views.__alloyId10027 && $.addTopLevelView($.__views.__alloyId10027);
    $.__views.__alloyId10028 = Ti.UI.createView({
        id: "__alloyId10028"
    });
    $.__views.__alloyId10027.add($.__views.__alloyId10028);
    $.__views.__alloyId10029 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10029"
    });
    $.__views.__alloyId10028.add($.__views.__alloyId10029);
    $.__views.__alloyId10030 = Ti.UI.createView({
        id: "__alloyId10030"
    });
    $.__views.__alloyId10030 && $.addTopLevelView($.__views.__alloyId10030);
    $.__views.__alloyId10031 = Ti.UI.createView({
        id: "__alloyId10031"
    });
    $.__views.__alloyId10030.add($.__views.__alloyId10031);
    $.__views.__alloyId10032 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10032"
    });
    $.__views.__alloyId10031.add($.__views.__alloyId10032);
    $.__views.__alloyId10033 = Ti.UI.createView({
        id: "__alloyId10033"
    });
    $.__views.__alloyId10033 && $.addTopLevelView($.__views.__alloyId10033);
    $.__views.__alloyId10034 = Ti.UI.createView({
        id: "__alloyId10034"
    });
    $.__views.__alloyId10033.add($.__views.__alloyId10034);
    $.__views.__alloyId10035 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10035"
    });
    $.__views.__alloyId10034.add($.__views.__alloyId10035);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;