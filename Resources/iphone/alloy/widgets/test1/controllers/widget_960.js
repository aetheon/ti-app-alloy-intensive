function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_960";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_960 = Ti.UI.createView({
        id: "widget_960"
    });
    $.__views.widget_960 && $.addTopLevelView($.__views.widget_960);
    $.__views.__alloyId24908 = Ti.UI.createView({
        id: "__alloyId24908"
    });
    $.__views.widget_960.add($.__views.__alloyId24908);
    $.__views.__alloyId24909 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24909"
    });
    $.__views.__alloyId24908.add($.__views.__alloyId24909);
    $.__views.__alloyId24910 = Ti.UI.createView({
        id: "__alloyId24910"
    });
    $.__views.__alloyId24910 && $.addTopLevelView($.__views.__alloyId24910);
    $.__views.__alloyId24911 = Ti.UI.createView({
        id: "__alloyId24911"
    });
    $.__views.__alloyId24910.add($.__views.__alloyId24911);
    $.__views.__alloyId24912 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24912"
    });
    $.__views.__alloyId24911.add($.__views.__alloyId24912);
    $.__views.__alloyId24913 = Ti.UI.createView({
        id: "__alloyId24913"
    });
    $.__views.__alloyId24913 && $.addTopLevelView($.__views.__alloyId24913);
    $.__views.__alloyId24914 = Ti.UI.createView({
        id: "__alloyId24914"
    });
    $.__views.__alloyId24913.add($.__views.__alloyId24914);
    $.__views.__alloyId24915 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24915"
    });
    $.__views.__alloyId24914.add($.__views.__alloyId24915);
    $.__views.__alloyId24916 = Ti.UI.createView({
        id: "__alloyId24916"
    });
    $.__views.__alloyId24916 && $.addTopLevelView($.__views.__alloyId24916);
    $.__views.__alloyId24917 = Ti.UI.createView({
        id: "__alloyId24917"
    });
    $.__views.__alloyId24916.add($.__views.__alloyId24917);
    $.__views.__alloyId24918 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24918"
    });
    $.__views.__alloyId24917.add($.__views.__alloyId24918);
    $.__views.__alloyId24919 = Ti.UI.createView({
        id: "__alloyId24919"
    });
    $.__views.__alloyId24919 && $.addTopLevelView($.__views.__alloyId24919);
    $.__views.__alloyId24920 = Ti.UI.createView({
        id: "__alloyId24920"
    });
    $.__views.__alloyId24919.add($.__views.__alloyId24920);
    $.__views.__alloyId24921 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24921"
    });
    $.__views.__alloyId24920.add($.__views.__alloyId24921);
    $.__views.__alloyId24922 = Ti.UI.createView({
        id: "__alloyId24922"
    });
    $.__views.__alloyId24922 && $.addTopLevelView($.__views.__alloyId24922);
    $.__views.__alloyId24923 = Ti.UI.createView({
        id: "__alloyId24923"
    });
    $.__views.__alloyId24922.add($.__views.__alloyId24923);
    $.__views.__alloyId24924 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24924"
    });
    $.__views.__alloyId24923.add($.__views.__alloyId24924);
    $.__views.__alloyId24925 = Ti.UI.createView({
        id: "__alloyId24925"
    });
    $.__views.__alloyId24925 && $.addTopLevelView($.__views.__alloyId24925);
    $.__views.__alloyId24926 = Ti.UI.createView({
        id: "__alloyId24926"
    });
    $.__views.__alloyId24925.add($.__views.__alloyId24926);
    $.__views.__alloyId24927 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24927"
    });
    $.__views.__alloyId24926.add($.__views.__alloyId24927);
    $.__views.__alloyId24928 = Ti.UI.createView({
        id: "__alloyId24928"
    });
    $.__views.__alloyId24928 && $.addTopLevelView($.__views.__alloyId24928);
    $.__views.__alloyId24929 = Ti.UI.createView({
        id: "__alloyId24929"
    });
    $.__views.__alloyId24928.add($.__views.__alloyId24929);
    $.__views.__alloyId24930 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24930"
    });
    $.__views.__alloyId24929.add($.__views.__alloyId24930);
    $.__views.__alloyId24931 = Ti.UI.createView({
        id: "__alloyId24931"
    });
    $.__views.__alloyId24931 && $.addTopLevelView($.__views.__alloyId24931);
    $.__views.__alloyId24932 = Ti.UI.createView({
        id: "__alloyId24932"
    });
    $.__views.__alloyId24931.add($.__views.__alloyId24932);
    $.__views.__alloyId24933 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24933"
    });
    $.__views.__alloyId24932.add($.__views.__alloyId24933);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;