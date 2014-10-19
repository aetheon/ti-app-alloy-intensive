function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_479";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_479 = Ti.UI.createView({
        id: "widget_479"
    });
    $.__views.widget_479 && $.addTopLevelView($.__views.widget_479);
    $.__views.__alloyId10998 = Ti.UI.createView({
        id: "__alloyId10998"
    });
    $.__views.widget_479.add($.__views.__alloyId10998);
    $.__views.__alloyId10999 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10999"
    });
    $.__views.__alloyId10998.add($.__views.__alloyId10999);
    $.__views.__alloyId11000 = Ti.UI.createView({
        id: "__alloyId11000"
    });
    $.__views.__alloyId11000 && $.addTopLevelView($.__views.__alloyId11000);
    $.__views.__alloyId11001 = Ti.UI.createView({
        id: "__alloyId11001"
    });
    $.__views.__alloyId11000.add($.__views.__alloyId11001);
    $.__views.__alloyId11002 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11002"
    });
    $.__views.__alloyId11001.add($.__views.__alloyId11002);
    $.__views.__alloyId11003 = Ti.UI.createView({
        id: "__alloyId11003"
    });
    $.__views.__alloyId11003 && $.addTopLevelView($.__views.__alloyId11003);
    $.__views.__alloyId11004 = Ti.UI.createView({
        id: "__alloyId11004"
    });
    $.__views.__alloyId11003.add($.__views.__alloyId11004);
    $.__views.__alloyId11005 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11005"
    });
    $.__views.__alloyId11004.add($.__views.__alloyId11005);
    $.__views.__alloyId11006 = Ti.UI.createView({
        id: "__alloyId11006"
    });
    $.__views.__alloyId11006 && $.addTopLevelView($.__views.__alloyId11006);
    $.__views.__alloyId11007 = Ti.UI.createView({
        id: "__alloyId11007"
    });
    $.__views.__alloyId11006.add($.__views.__alloyId11007);
    $.__views.__alloyId11008 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11008"
    });
    $.__views.__alloyId11007.add($.__views.__alloyId11008);
    $.__views.__alloyId11009 = Ti.UI.createView({
        id: "__alloyId11009"
    });
    $.__views.__alloyId11009 && $.addTopLevelView($.__views.__alloyId11009);
    $.__views.__alloyId11010 = Ti.UI.createView({
        id: "__alloyId11010"
    });
    $.__views.__alloyId11009.add($.__views.__alloyId11010);
    $.__views.__alloyId11011 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11011"
    });
    $.__views.__alloyId11010.add($.__views.__alloyId11011);
    $.__views.__alloyId11012 = Ti.UI.createView({
        id: "__alloyId11012"
    });
    $.__views.__alloyId11012 && $.addTopLevelView($.__views.__alloyId11012);
    $.__views.__alloyId11013 = Ti.UI.createView({
        id: "__alloyId11013"
    });
    $.__views.__alloyId11012.add($.__views.__alloyId11013);
    $.__views.__alloyId11014 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11014"
    });
    $.__views.__alloyId11013.add($.__views.__alloyId11014);
    $.__views.__alloyId11015 = Ti.UI.createView({
        id: "__alloyId11015"
    });
    $.__views.__alloyId11015 && $.addTopLevelView($.__views.__alloyId11015);
    $.__views.__alloyId11016 = Ti.UI.createView({
        id: "__alloyId11016"
    });
    $.__views.__alloyId11015.add($.__views.__alloyId11016);
    $.__views.__alloyId11017 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11017"
    });
    $.__views.__alloyId11016.add($.__views.__alloyId11017);
    $.__views.__alloyId11018 = Ti.UI.createView({
        id: "__alloyId11018"
    });
    $.__views.__alloyId11018 && $.addTopLevelView($.__views.__alloyId11018);
    $.__views.__alloyId11019 = Ti.UI.createView({
        id: "__alloyId11019"
    });
    $.__views.__alloyId11018.add($.__views.__alloyId11019);
    $.__views.__alloyId11020 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11020"
    });
    $.__views.__alloyId11019.add($.__views.__alloyId11020);
    $.__views.__alloyId11021 = Ti.UI.createView({
        id: "__alloyId11021"
    });
    $.__views.__alloyId11021 && $.addTopLevelView($.__views.__alloyId11021);
    $.__views.__alloyId11022 = Ti.UI.createView({
        id: "__alloyId11022"
    });
    $.__views.__alloyId11021.add($.__views.__alloyId11022);
    $.__views.__alloyId11023 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11023"
    });
    $.__views.__alloyId11022.add($.__views.__alloyId11023);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;