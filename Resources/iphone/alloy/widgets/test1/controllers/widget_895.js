function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_895";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_895 = Ti.UI.createView({
        id: "widget_895"
    });
    $.__views.widget_895 && $.addTopLevelView($.__views.widget_895);
    $.__views.__alloyId23010 = Ti.UI.createView({
        id: "__alloyId23010"
    });
    $.__views.widget_895.add($.__views.__alloyId23010);
    $.__views.__alloyId23011 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23011"
    });
    $.__views.__alloyId23010.add($.__views.__alloyId23011);
    $.__views.__alloyId23012 = Ti.UI.createView({
        id: "__alloyId23012"
    });
    $.__views.__alloyId23012 && $.addTopLevelView($.__views.__alloyId23012);
    $.__views.__alloyId23013 = Ti.UI.createView({
        id: "__alloyId23013"
    });
    $.__views.__alloyId23012.add($.__views.__alloyId23013);
    $.__views.__alloyId23014 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23014"
    });
    $.__views.__alloyId23013.add($.__views.__alloyId23014);
    $.__views.__alloyId23015 = Ti.UI.createView({
        id: "__alloyId23015"
    });
    $.__views.__alloyId23015 && $.addTopLevelView($.__views.__alloyId23015);
    $.__views.__alloyId23016 = Ti.UI.createView({
        id: "__alloyId23016"
    });
    $.__views.__alloyId23015.add($.__views.__alloyId23016);
    $.__views.__alloyId23017 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23017"
    });
    $.__views.__alloyId23016.add($.__views.__alloyId23017);
    $.__views.__alloyId23018 = Ti.UI.createView({
        id: "__alloyId23018"
    });
    $.__views.__alloyId23018 && $.addTopLevelView($.__views.__alloyId23018);
    $.__views.__alloyId23019 = Ti.UI.createView({
        id: "__alloyId23019"
    });
    $.__views.__alloyId23018.add($.__views.__alloyId23019);
    $.__views.__alloyId23020 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23020"
    });
    $.__views.__alloyId23019.add($.__views.__alloyId23020);
    $.__views.__alloyId23021 = Ti.UI.createView({
        id: "__alloyId23021"
    });
    $.__views.__alloyId23021 && $.addTopLevelView($.__views.__alloyId23021);
    $.__views.__alloyId23022 = Ti.UI.createView({
        id: "__alloyId23022"
    });
    $.__views.__alloyId23021.add($.__views.__alloyId23022);
    $.__views.__alloyId23023 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23023"
    });
    $.__views.__alloyId23022.add($.__views.__alloyId23023);
    $.__views.__alloyId23024 = Ti.UI.createView({
        id: "__alloyId23024"
    });
    $.__views.__alloyId23024 && $.addTopLevelView($.__views.__alloyId23024);
    $.__views.__alloyId23025 = Ti.UI.createView({
        id: "__alloyId23025"
    });
    $.__views.__alloyId23024.add($.__views.__alloyId23025);
    $.__views.__alloyId23026 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23026"
    });
    $.__views.__alloyId23025.add($.__views.__alloyId23026);
    $.__views.__alloyId23027 = Ti.UI.createView({
        id: "__alloyId23027"
    });
    $.__views.__alloyId23027 && $.addTopLevelView($.__views.__alloyId23027);
    $.__views.__alloyId23028 = Ti.UI.createView({
        id: "__alloyId23028"
    });
    $.__views.__alloyId23027.add($.__views.__alloyId23028);
    $.__views.__alloyId23029 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23029"
    });
    $.__views.__alloyId23028.add($.__views.__alloyId23029);
    $.__views.__alloyId23030 = Ti.UI.createView({
        id: "__alloyId23030"
    });
    $.__views.__alloyId23030 && $.addTopLevelView($.__views.__alloyId23030);
    $.__views.__alloyId23031 = Ti.UI.createView({
        id: "__alloyId23031"
    });
    $.__views.__alloyId23030.add($.__views.__alloyId23031);
    $.__views.__alloyId23032 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23032"
    });
    $.__views.__alloyId23031.add($.__views.__alloyId23032);
    $.__views.__alloyId23033 = Ti.UI.createView({
        id: "__alloyId23033"
    });
    $.__views.__alloyId23033 && $.addTopLevelView($.__views.__alloyId23033);
    $.__views.__alloyId23034 = Ti.UI.createView({
        id: "__alloyId23034"
    });
    $.__views.__alloyId23033.add($.__views.__alloyId23034);
    $.__views.__alloyId23035 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23035"
    });
    $.__views.__alloyId23034.add($.__views.__alloyId23035);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;