function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_787";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_787 = Ti.UI.createView({
        id: "widget_787"
    });
    $.__views.widget_787 && $.addTopLevelView($.__views.widget_787);
    $.__views.__alloyId19890 = Ti.UI.createView({
        id: "__alloyId19890"
    });
    $.__views.widget_787.add($.__views.__alloyId19890);
    $.__views.__alloyId19891 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19891"
    });
    $.__views.__alloyId19890.add($.__views.__alloyId19891);
    $.__views.__alloyId19892 = Ti.UI.createView({
        id: "__alloyId19892"
    });
    $.__views.__alloyId19892 && $.addTopLevelView($.__views.__alloyId19892);
    $.__views.__alloyId19893 = Ti.UI.createView({
        id: "__alloyId19893"
    });
    $.__views.__alloyId19892.add($.__views.__alloyId19893);
    $.__views.__alloyId19894 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19894"
    });
    $.__views.__alloyId19893.add($.__views.__alloyId19894);
    $.__views.__alloyId19895 = Ti.UI.createView({
        id: "__alloyId19895"
    });
    $.__views.__alloyId19895 && $.addTopLevelView($.__views.__alloyId19895);
    $.__views.__alloyId19896 = Ti.UI.createView({
        id: "__alloyId19896"
    });
    $.__views.__alloyId19895.add($.__views.__alloyId19896);
    $.__views.__alloyId19897 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19897"
    });
    $.__views.__alloyId19896.add($.__views.__alloyId19897);
    $.__views.__alloyId19898 = Ti.UI.createView({
        id: "__alloyId19898"
    });
    $.__views.__alloyId19898 && $.addTopLevelView($.__views.__alloyId19898);
    $.__views.__alloyId19899 = Ti.UI.createView({
        id: "__alloyId19899"
    });
    $.__views.__alloyId19898.add($.__views.__alloyId19899);
    $.__views.__alloyId19900 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19900"
    });
    $.__views.__alloyId19899.add($.__views.__alloyId19900);
    $.__views.__alloyId19901 = Ti.UI.createView({
        id: "__alloyId19901"
    });
    $.__views.__alloyId19901 && $.addTopLevelView($.__views.__alloyId19901);
    $.__views.__alloyId19902 = Ti.UI.createView({
        id: "__alloyId19902"
    });
    $.__views.__alloyId19901.add($.__views.__alloyId19902);
    $.__views.__alloyId19903 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19903"
    });
    $.__views.__alloyId19902.add($.__views.__alloyId19903);
    $.__views.__alloyId19904 = Ti.UI.createView({
        id: "__alloyId19904"
    });
    $.__views.__alloyId19904 && $.addTopLevelView($.__views.__alloyId19904);
    $.__views.__alloyId19905 = Ti.UI.createView({
        id: "__alloyId19905"
    });
    $.__views.__alloyId19904.add($.__views.__alloyId19905);
    $.__views.__alloyId19906 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19906"
    });
    $.__views.__alloyId19905.add($.__views.__alloyId19906);
    $.__views.__alloyId19907 = Ti.UI.createView({
        id: "__alloyId19907"
    });
    $.__views.__alloyId19907 && $.addTopLevelView($.__views.__alloyId19907);
    $.__views.__alloyId19908 = Ti.UI.createView({
        id: "__alloyId19908"
    });
    $.__views.__alloyId19907.add($.__views.__alloyId19908);
    $.__views.__alloyId19909 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19909"
    });
    $.__views.__alloyId19908.add($.__views.__alloyId19909);
    $.__views.__alloyId19910 = Ti.UI.createView({
        id: "__alloyId19910"
    });
    $.__views.__alloyId19910 && $.addTopLevelView($.__views.__alloyId19910);
    $.__views.__alloyId19911 = Ti.UI.createView({
        id: "__alloyId19911"
    });
    $.__views.__alloyId19910.add($.__views.__alloyId19911);
    $.__views.__alloyId19912 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19912"
    });
    $.__views.__alloyId19911.add($.__views.__alloyId19912);
    $.__views.__alloyId19913 = Ti.UI.createView({
        id: "__alloyId19913"
    });
    $.__views.__alloyId19913 && $.addTopLevelView($.__views.__alloyId19913);
    $.__views.__alloyId19914 = Ti.UI.createView({
        id: "__alloyId19914"
    });
    $.__views.__alloyId19913.add($.__views.__alloyId19914);
    $.__views.__alloyId19915 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19915"
    });
    $.__views.__alloyId19914.add($.__views.__alloyId19915);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;