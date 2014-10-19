function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_51";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_51 = Ti.UI.createView({
        id: "widget_51"
    });
    $.__views.widget_51 && $.addTopLevelView($.__views.widget_51);
    $.__views.__alloyId11908 = Ti.UI.createView({
        id: "__alloyId11908"
    });
    $.__views.widget_51.add($.__views.__alloyId11908);
    $.__views.__alloyId11909 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11909"
    });
    $.__views.__alloyId11908.add($.__views.__alloyId11909);
    $.__views.__alloyId11910 = Ti.UI.createView({
        id: "__alloyId11910"
    });
    $.__views.__alloyId11910 && $.addTopLevelView($.__views.__alloyId11910);
    $.__views.__alloyId11911 = Ti.UI.createView({
        id: "__alloyId11911"
    });
    $.__views.__alloyId11910.add($.__views.__alloyId11911);
    $.__views.__alloyId11912 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11912"
    });
    $.__views.__alloyId11911.add($.__views.__alloyId11912);
    $.__views.__alloyId11913 = Ti.UI.createView({
        id: "__alloyId11913"
    });
    $.__views.__alloyId11913 && $.addTopLevelView($.__views.__alloyId11913);
    $.__views.__alloyId11914 = Ti.UI.createView({
        id: "__alloyId11914"
    });
    $.__views.__alloyId11913.add($.__views.__alloyId11914);
    $.__views.__alloyId11915 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11915"
    });
    $.__views.__alloyId11914.add($.__views.__alloyId11915);
    $.__views.__alloyId11916 = Ti.UI.createView({
        id: "__alloyId11916"
    });
    $.__views.__alloyId11916 && $.addTopLevelView($.__views.__alloyId11916);
    $.__views.__alloyId11917 = Ti.UI.createView({
        id: "__alloyId11917"
    });
    $.__views.__alloyId11916.add($.__views.__alloyId11917);
    $.__views.__alloyId11918 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11918"
    });
    $.__views.__alloyId11917.add($.__views.__alloyId11918);
    $.__views.__alloyId11919 = Ti.UI.createView({
        id: "__alloyId11919"
    });
    $.__views.__alloyId11919 && $.addTopLevelView($.__views.__alloyId11919);
    $.__views.__alloyId11920 = Ti.UI.createView({
        id: "__alloyId11920"
    });
    $.__views.__alloyId11919.add($.__views.__alloyId11920);
    $.__views.__alloyId11921 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11921"
    });
    $.__views.__alloyId11920.add($.__views.__alloyId11921);
    $.__views.__alloyId11922 = Ti.UI.createView({
        id: "__alloyId11922"
    });
    $.__views.__alloyId11922 && $.addTopLevelView($.__views.__alloyId11922);
    $.__views.__alloyId11923 = Ti.UI.createView({
        id: "__alloyId11923"
    });
    $.__views.__alloyId11922.add($.__views.__alloyId11923);
    $.__views.__alloyId11924 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11924"
    });
    $.__views.__alloyId11923.add($.__views.__alloyId11924);
    $.__views.__alloyId11925 = Ti.UI.createView({
        id: "__alloyId11925"
    });
    $.__views.__alloyId11925 && $.addTopLevelView($.__views.__alloyId11925);
    $.__views.__alloyId11926 = Ti.UI.createView({
        id: "__alloyId11926"
    });
    $.__views.__alloyId11925.add($.__views.__alloyId11926);
    $.__views.__alloyId11927 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11927"
    });
    $.__views.__alloyId11926.add($.__views.__alloyId11927);
    $.__views.__alloyId11928 = Ti.UI.createView({
        id: "__alloyId11928"
    });
    $.__views.__alloyId11928 && $.addTopLevelView($.__views.__alloyId11928);
    $.__views.__alloyId11929 = Ti.UI.createView({
        id: "__alloyId11929"
    });
    $.__views.__alloyId11928.add($.__views.__alloyId11929);
    $.__views.__alloyId11930 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11930"
    });
    $.__views.__alloyId11929.add($.__views.__alloyId11930);
    $.__views.__alloyId11931 = Ti.UI.createView({
        id: "__alloyId11931"
    });
    $.__views.__alloyId11931 && $.addTopLevelView($.__views.__alloyId11931);
    $.__views.__alloyId11932 = Ti.UI.createView({
        id: "__alloyId11932"
    });
    $.__views.__alloyId11931.add($.__views.__alloyId11932);
    $.__views.__alloyId11933 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11933"
    });
    $.__views.__alloyId11932.add($.__views.__alloyId11933);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;