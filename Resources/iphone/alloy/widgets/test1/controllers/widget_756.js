function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_756";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_756 = Ti.UI.createView({
        id: "widget_756"
    });
    $.__views.widget_756 && $.addTopLevelView($.__views.widget_756);
    $.__views.__alloyId19006 = Ti.UI.createView({
        id: "__alloyId19006"
    });
    $.__views.widget_756.add($.__views.__alloyId19006);
    $.__views.__alloyId19007 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19007"
    });
    $.__views.__alloyId19006.add($.__views.__alloyId19007);
    $.__views.__alloyId19008 = Ti.UI.createView({
        id: "__alloyId19008"
    });
    $.__views.__alloyId19008 && $.addTopLevelView($.__views.__alloyId19008);
    $.__views.__alloyId19009 = Ti.UI.createView({
        id: "__alloyId19009"
    });
    $.__views.__alloyId19008.add($.__views.__alloyId19009);
    $.__views.__alloyId19010 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19010"
    });
    $.__views.__alloyId19009.add($.__views.__alloyId19010);
    $.__views.__alloyId19011 = Ti.UI.createView({
        id: "__alloyId19011"
    });
    $.__views.__alloyId19011 && $.addTopLevelView($.__views.__alloyId19011);
    $.__views.__alloyId19012 = Ti.UI.createView({
        id: "__alloyId19012"
    });
    $.__views.__alloyId19011.add($.__views.__alloyId19012);
    $.__views.__alloyId19013 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19013"
    });
    $.__views.__alloyId19012.add($.__views.__alloyId19013);
    $.__views.__alloyId19014 = Ti.UI.createView({
        id: "__alloyId19014"
    });
    $.__views.__alloyId19014 && $.addTopLevelView($.__views.__alloyId19014);
    $.__views.__alloyId19015 = Ti.UI.createView({
        id: "__alloyId19015"
    });
    $.__views.__alloyId19014.add($.__views.__alloyId19015);
    $.__views.__alloyId19016 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19016"
    });
    $.__views.__alloyId19015.add($.__views.__alloyId19016);
    $.__views.__alloyId19017 = Ti.UI.createView({
        id: "__alloyId19017"
    });
    $.__views.__alloyId19017 && $.addTopLevelView($.__views.__alloyId19017);
    $.__views.__alloyId19018 = Ti.UI.createView({
        id: "__alloyId19018"
    });
    $.__views.__alloyId19017.add($.__views.__alloyId19018);
    $.__views.__alloyId19019 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19019"
    });
    $.__views.__alloyId19018.add($.__views.__alloyId19019);
    $.__views.__alloyId19020 = Ti.UI.createView({
        id: "__alloyId19020"
    });
    $.__views.__alloyId19020 && $.addTopLevelView($.__views.__alloyId19020);
    $.__views.__alloyId19021 = Ti.UI.createView({
        id: "__alloyId19021"
    });
    $.__views.__alloyId19020.add($.__views.__alloyId19021);
    $.__views.__alloyId19022 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19022"
    });
    $.__views.__alloyId19021.add($.__views.__alloyId19022);
    $.__views.__alloyId19023 = Ti.UI.createView({
        id: "__alloyId19023"
    });
    $.__views.__alloyId19023 && $.addTopLevelView($.__views.__alloyId19023);
    $.__views.__alloyId19024 = Ti.UI.createView({
        id: "__alloyId19024"
    });
    $.__views.__alloyId19023.add($.__views.__alloyId19024);
    $.__views.__alloyId19025 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19025"
    });
    $.__views.__alloyId19024.add($.__views.__alloyId19025);
    $.__views.__alloyId19026 = Ti.UI.createView({
        id: "__alloyId19026"
    });
    $.__views.__alloyId19026 && $.addTopLevelView($.__views.__alloyId19026);
    $.__views.__alloyId19027 = Ti.UI.createView({
        id: "__alloyId19027"
    });
    $.__views.__alloyId19026.add($.__views.__alloyId19027);
    $.__views.__alloyId19028 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19028"
    });
    $.__views.__alloyId19027.add($.__views.__alloyId19028);
    $.__views.__alloyId19029 = Ti.UI.createView({
        id: "__alloyId19029"
    });
    $.__views.__alloyId19029 && $.addTopLevelView($.__views.__alloyId19029);
    $.__views.__alloyId19030 = Ti.UI.createView({
        id: "__alloyId19030"
    });
    $.__views.__alloyId19029.add($.__views.__alloyId19030);
    $.__views.__alloyId19031 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19031"
    });
    $.__views.__alloyId19030.add($.__views.__alloyId19031);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;